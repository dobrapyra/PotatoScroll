export default class PotatoScroll {

  static create(options = {}) {
    const {
      selector,
    } = options;

    return Array.prototype.map.call(
      document.querySelectorAll(selector),
      el => {
        const instanceOption = Object(options);
        instanceOption.el = el;
        return new PotatoScroll(instanceOption);
      }
    );
  }

  constructor(options) {
    if (!this.preinit(options)) return;

    this.bindThis();
    this.initialize();
  }

  preinit(options = {}) {
    const NOOP = () => {};

    const {
      el,
      cssClass = 'potatoScroll',
      forceCustom = false,
      forceSize = 20,
      onNativeScroll = NOOP,
      onScroll = NOOP,
      onTop = NOOP,
      onBottom = NOOP,
      onLeft = NOOP,
      onRight = NOOP,
    } = options;

    if (!el) return false;

    this.rootEl = el;
    this.cssClass = cssClass;
    this.forceCustom = forceCustom;

    this.event = {
      onNativeScroll,
      onScroll,
      onTop,
      onBottom,
      onLeft,
      onRight,
    };

    this.progress = {
      v: 0,
      h: 0,
    };

    this.wait = {
      scroll: false,
      resize: false,
    };
    this.raf = {
      scroll: null,
      resize: null,
    };

    this.bar = {
      v: {
        forceSize: forceCustom ? forceSize : 0,
        nativeSize: 0,
        el: null,
        moveStart: null,
        moveDiff: 0,
        scrollBefore: null,
        size: 0,
        sizeFract: 1,
        trackSize: 0,
        moveProp: 'clientY',
        scrollProp: 'scrollTop',
        axis: 'Y',
      },
      h: {
        forceSize: forceCustom ? forceSize : 0,
        nativeSize: 0,
        el: null,
        moveStart: null,
        moveDiff: 0,
        scrollBefore: null,
        size: 0,
        sizeFract: 1,
        trackSize: 0,
        moveProp: 'clientX',
        scrollProp: 'scrollLeft',
        axis: 'X',
      },
    };

    this.activeBarObj = null;

    return true;
  }

  bindThis() {
    this.onScrollThrottle = this.onScrollThrottle.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.onResizeThrottle = this.onResizeThrottle.bind(this);
    this.onResize = this.onResize.bind(this);

    this.onNestedCreate = this.onNestedCreate.bind(this);
    this.refreshParents = this.refreshParents.bind(this);

    this.onDocMouseMove = this.onDocMouseMove.bind(this);
    this.onDocMouseUp = this.onDocMouseUp.bind(this);
    this.onDocMouseLeave = this.onDocMouseLeave.bind(this);

    this.onVBarMouseDown = this.onVBarMouseDown.bind(this);
    this.onHBarMouseDown = this.onHBarMouseDown.bind(this);
  }

  /**
   * Initialize & reinitialize instance
   */
  initialize() {
    this.destroy();

    this.analyzeNative();
    this.prepareDOM();
    this.hideNativeBars();
    this.addCustomBars();
    this.bindEvents();
    this.bindBarsEvents();
    this.refresh();

    setTimeout(this.refreshParents);
  }

  analyzeNative() {
    const { bar } = this;
    const body = document.documentElement;

    const testScrollEl = document.createElement('div');
    testScrollEl.style.overflow = 'scroll';
    testScrollEl.style.width = '100px';
    testScrollEl.style.height = '100px';
    testScrollEl.style.position = 'absolute';
    testScrollEl.style.top = 0;
    testScrollEl.style.left = 0;
    testScrollEl.style.visibility = 'hidden';

    const testContentEl = document.createElement('div');
    testScrollEl.appendChild(testContentEl);

    body.appendChild(testScrollEl);

    const vNativeSize = testScrollEl.offsetWidth - testScrollEl.scrollWidth;
    const hNativeSize = testScrollEl.offsetHeight - testScrollEl.scrollHeight;

    bar.v.nativeSize = vNativeSize;
    bar.h.nativeSize = hNativeSize;

    if (vNativeSize > 0) bar.v.forceSize = 0;
    if (hNativeSize > 0) bar.h.forceSize = 0;

    // detect position - RTL

    body.removeChild(testScrollEl);
  }

  prepareDOM() {
    const { rootEl, cssClass } = this;

    // rootEl
    rootEl.classList.add(cssClass);
    const rootStyle = rootEl.style;
    rootStyle.overflow = 'visible';
    rootStyle.position = 'relative';
    rootStyle.display = 'flex';

    // maskEl
    const maskEl = document.createElement('div');
    maskEl.classList.add(`${cssClass}__mask`);
    const maskStyle = maskEl.style;
    maskStyle.flexGrow = 1;
    maskStyle.overflow = 'hidden';
    maskStyle.position = 'relative';
    maskStyle.display = 'flex';
    maskStyle.zIndex = '0';

    // scrollEl
    const scrollEl = document.createElement('div');
    scrollEl.classList.add(`${cssClass}__scroll`);
    const scrollStyle = scrollEl.style;
    scrollStyle.flexGrow = 1;
    scrollStyle.overflow = 'scroll';

    while (rootEl.childNodes.length) {
      scrollEl.appendChild(rootEl.childNodes[0]);
    }

    maskEl.appendChild(scrollEl);
    rootEl.appendChild(maskEl);

    this.maskEl = maskEl;
    this.scrollEl = scrollEl;
  }

  hideNativeBars() {
    const { scrollEl, bar } = this;

    if (this.forceCustom && (bar.v.nativeSize === 0 || bar.h.nativeSize === 0)) {
      const vForceSize = bar.v.forceSize;
      scrollEl.style.marginLeft = `${-vForceSize}px`;
      scrollEl.style.paddingLeft = `${vForceSize}px`;
      scrollEl.style.marginRight = `${-vForceSize}px`;
      scrollEl.style.paddingRight = `${vForceSize}px`;

      const hForceSize = bar.v.forceSize;
      scrollEl.style.marginBottom = `${-hForceSize}px`;
      scrollEl.style.paddingBottom = `${hForceSize}px`;

      return;
    }

    scrollEl.style.marginRight = `${-bar.h.nativeSize}px`;
    scrollEl.style.marginBottom = `${-bar.v.nativeSize}px`;
  }

  addCustomBars() {
    const { cssClass, bar, rootEl } = this;

    if (!(
      bar.v.nativeSize !== 0 ||
      bar.h.nativeSize !== 0 ||
      this.forceCustom
    )) return;

    const vTrackEl = document.createElement('div');
    vTrackEl.classList.add(`${cssClass}__track`);
    vTrackEl.classList.add(`${cssClass}__track--v`);
    vTrackEl.style.position = 'absolute';
    vTrackEl.style.zIndex = '1';
    bar.v.trackEl = vTrackEl;

    const vBarEl = document.createElement('div');
    vBarEl.classList.add(`${cssClass}__bar`);
    vBarEl.classList.add(`${cssClass}__bar--v`);
    bar.v.el = vBarEl;

    const hTrackEl = document.createElement('div');
    hTrackEl.classList.add(`${cssClass}__track`);
    hTrackEl.classList.add(`${cssClass}__track--h`);
    hTrackEl.style.position = 'absolute';
    hTrackEl.style.zIndex = '1';
    bar.h.trackEl = hTrackEl;

    const hBarEl = document.createElement('div');
    hBarEl.classList.add(`${cssClass}__bar`);
    hBarEl.classList.add(`${cssClass}__bar--h`);
    bar.h.el = hBarEl;

    vTrackEl.appendChild(vBarEl);
    hTrackEl.appendChild(hBarEl);

    rootEl.appendChild(vTrackEl);
    rootEl.appendChild(hTrackEl);
  }

  bindEvents() {
    if (this.scrollEl) this.scrollEl.addEventListener('scroll', this.onScrollThrottle);

    window.addEventListener('resize', this.onResizeThrottle);

    this.rootEl.addEventListener('PotatoScroll.nestedCreate', this.onNestedCreate);
  }

  unbindEvents() {
    if (this.scrollEl) this.scrollEl.removeEventListener('scroll', this.onScrollThrottle);

    window.removeEventListener('resize', this.onResizeThrottle);

    this.rootEl.removeEventListener('PotatoScroll.nestedCreate', this.onNestedCreate);
  }

  onScrollThrottle(event) {
    this.event.onNativeScroll(event, this.rootEl);

    if (this.wait.scroll) return;
    this.wait.scroll = true;

    this.raf.scroll = requestAnimationFrame(this.onScroll);
  }

  onScroll() {
    this.setBarsPos();

    this.wait.scroll = false;
  }

  onResizeThrottle() {
    if (this.wait.resize) return;
    this.wait.resize = true;

    this.raf.resize = requestAnimationFrame(this.onResize);
  }

  onResize() {
    this.refresh();

    this.wait.resize = false;
  }

  onNestedCreate() {
    this.refresh();
  }

  bindBarsEvents() {
    const { bar } = this;

    if (bar.v.el) bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
    if (bar.h.el) bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
  }

  unbindBarsEvents() {
    const { bar } = this;

    if (bar.v.el) bar.v.el.removeEventListener('mousedown', this.onVBarMouseDown);
    if (bar.h.el) bar.h.el.removeEventListener('mousedown', this.onHBarMouseDown);
  }

  bindDocEvents() {
    document.addEventListener('mousemove', this.onDocMouseMove);
    document.addEventListener('mouseup', this.onDocMouseUp);
    document.addEventListener('mouseleave', this.onDocMouseLeave);
  }

  unbindDocEvents() {
    document.removeEventListener('mousemove', this.onDocMouseMove);
    document.removeEventListener('mouseup', this.onDocMouseUp);
    document.removeEventListener('mouseleave', this.onDocMouseLeave);
  }

  onVBarMouseDown(e) {
    this.activeBarObj = this.bar.v;

    this.moveBegin(e);
  }

  onHBarMouseDown(e) {
    this.activeBarObj = this.bar.h;

    this.moveBegin(e);
  }

  onDocMouseMove(e) {
    this.moveUpdate(e);
  }

  onDocMouseUp(e) {
    this.moveEnd(e);
  }

  onDocMouseLeave(e) {
    this.moveEnd(e);
  }

  moveBegin(e) {
    const { activeBarObj, scrollEl } = this;
    if (activeBarObj === null) return;

    scrollEl.style.userSelect = 'none';
    scrollEl.style.pointerEvents = 'none';

    this.bindDocEvents();

    activeBarObj.moveStart = e[activeBarObj.moveProp];
    activeBarObj.scrollBefore = scrollEl[activeBarObj.scrollProp];
  }

  moveUpdate(e) {
    const { activeBarObj } = this;
    if (activeBarObj === null) return;

    activeBarObj.moveDiff = e[activeBarObj.moveProp] - activeBarObj.moveStart;

    this.barMoveToScroll(activeBarObj);
  }

  moveEnd() {
    const { activeBarObj, scrollEl } = this;
    if (activeBarObj === null) return;

    this.unbindDocEvents();

    activeBarObj.moveStart = null;
    activeBarObj.moveDiff = 0;
    activeBarObj.scrollBefore = null;

    this.activeBarObj = null;

    scrollEl.style.userSelect = '';
    scrollEl.style.pointerEvents = '';
  }

  setBarsSize() {
    const { scrollEl, maskEl, bar } = this;

    const vBarObj = bar.v;
    const hBarObj = bar.h;

    const vScrollSize = scrollEl.scrollHeight - vBarObj.forceSize;
    const vTrackSize = maskEl.offsetHeight;
    const vFract = vTrackSize / vScrollSize;
    vBarObj.trackSize = vTrackSize;
    vBarObj.sizeFract = vFract;
    vBarObj.scrollRange = vScrollSize - vTrackSize;
    if (vBarObj.el) {
      vBarObj.trackEl.style.display = (vBarObj.sizeFract === 1) ? 'none' : '';
      vBarObj.el.style.height = `${vFract * vBarObj.trackEl.offsetHeight}px`;
      vBarObj.moveRange = vBarObj.trackEl.offsetHeight - vBarObj.el.offsetHeight;
    }

    const hScrollSize = scrollEl.scrollWidth - 2 * hBarObj.forceSize;
    const hTrackSize = maskEl.offsetWidth;
    const hFract = hTrackSize / hScrollSize;
    hBarObj.trackSize = hTrackSize;
    hBarObj.sizeFract = hFract;
    hBarObj.scrollRange = hScrollSize - hTrackSize;
    if (hBarObj.el) {
      hBarObj.trackEl.style.display = (hBarObj.sizeFract === 1) ? 'none' : '';
      hBarObj.el.style.width = `${hFract * hBarObj.trackEl.offsetWidth}px`;
      hBarObj.moveRange = hBarObj.trackEl.offsetWidth - hBarObj.el.offsetWidth;
    }
  }

  setBarsPos() {
    const { bar, progress, event, rootEl } = this;

    const fract = {
      v: 0,
      h: 0,
    };

    if (bar.v.el) fract.v = this.setBarPos(bar.v);
    if (bar.h.el) fract.h = this.setBarPos(bar.h);

    event.onScroll(fract, rootEl);

    if (fract.v !== progress.v) {
      if (fract.v <= 0) event.onTop(rootEl);
      if (fract.v >= 1) event.onBottom(rootEl);
      progress.v = fract.v;
    }

    if (fract.h !== progress.h) {
      if (fract.h <= 0) event.onLeft(rootEl);
      if (fract.h >= 1) event.onRight(rootEl);
      progress.h = fract.h;
    }
  }

  setBarPos(barObj) {
    const fract = barObj.scrollRange ? (
      this.scrollEl[barObj.scrollProp] / barObj.scrollRange
    ) : 0;
    const pos = fract * (barObj.trackSize * (1 - barObj.sizeFract));
    barObj.el.style.transform = `translate${barObj.axis}(${pos}px)`;

    return fract;
  }

  barMoveToScroll(activeBarObj) {
    this.scrollEl[activeBarObj.scrollProp] = (
      activeBarObj.scrollBefore + (
        activeBarObj.scrollRange * activeBarObj.moveDiff / activeBarObj.moveRange
      )
    );
  }

  refreshParents() {
    if (!window.CustomEvent) return;
    this.rootEl.parentElement.dispatchEvent(new CustomEvent('PotatoScroll.nestedCreate', {
      bubbles: true,
    }));
  }

  /**
    * Recalculates content size and set scrollbars size
    */
  refresh() {
    this.setBarsSize();
    this.setBarsPos();
  }

  /**
    * Destroys the instance and restore original html
    */
  destroy() {
    const { scrollEl, maskEl, rootEl, bar, cssClass } = this;

    this.unbindDocEvents();
    this.unbindBarsEvents();
    this.unbindEvents();

    if (bar.v.trackEl) {
      rootEl.removeChild(bar.v.trackEl);
      bar.v.el = null;
      bar.v.trackEl = null;
    }
    if (bar.h.trackEl) {
      rootEl.removeChild(bar.h.trackEl);
      bar.h.el = null;
      bar.h.trackEl = null;
    }

    rootEl.classList.remove(cssClass);
    const rootStyle = rootEl.style;
    rootStyle.overflow = '';
    rootStyle.position = '';
    rootStyle.display = '';

    if (scrollEl) {
      while (scrollEl.childNodes.length) {
        rootEl.appendChild(scrollEl.childNodes[0]);
      }

      if (maskEl) {
        maskEl.removeChild(scrollEl);
      }

      this.scrollEl = null;
    }

    if (maskEl) {
      rootEl.removeChild(maskEl);

      this.maskEl = null;
    }
  }
}
