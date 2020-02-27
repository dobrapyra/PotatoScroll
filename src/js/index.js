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
    if (!this.setVars(options)) return;

    this.analyzeNative();
    this.prepareDOM();
    this.hideNativeBars();
    this.addCustomBars();
    this.bindEvents();
    this.bindBarsEvents();
    this.refresh();

    setTimeout(this.refreshParents.bind(this));
  }

  setVars(options = {}) {
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

    this.scrollWait = false;
    this.resizeWait = false;

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
        moveProp: 'clientY',
        scrollProp: 'scrollTop',
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
        moveProp: 'clientX',
        scrollProp: 'scrollLeft',
      },
    };

    this.activeBarObj = null;

    return true;
  }

  analyzeNative() {
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

    this.bar.v.nativeSize = vNativeSize;
    this.bar.h.nativeSize = hNativeSize;

    if (vNativeSize > 0) this.bar.v.forceSize = 0;
    if (hNativeSize > 0) this.bar.h.forceSize = 0;

    // detect position - RTL

    body.removeChild(testScrollEl);
  }

  prepareDOM() {
    const { rootEl, cssClass } = this;

    // rootEl
    rootEl.classList.add(cssClass);
    rootEl.style.overflow = 'visible';
    rootEl.style.position = 'relative';
    rootEl.style.display = 'flex';

    // maskEl
    const maskEl = document.createElement('div');
    maskEl.classList.add(`${cssClass}__mask`);
    maskEl.style.flexGrow = 1;
    maskEl.style.overflow = 'hidden';
    maskEl.style.position = 'relative';
    maskEl.style.display = 'flex';
    maskEl.style.zIndex = '0';

    // scrollEl
    const scrollEl = document.createElement('div');
    scrollEl.classList.add(`${cssClass}__scroll`);
    scrollEl.style.flexGrow = 1;
    scrollEl.style.overflow = 'scroll';

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
    this.onScroll = this.onScroll.bind(this);
    this.onScrollThrottle = this.onScrollThrottle.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onResizeThrottle = this.onResizeThrottle.bind(this);
    this.onNestedCreate = this.onNestedCreate.bind(this);

    this.scrollEl.addEventListener('scroll', this.onScrollThrottle);
    window.addEventListener('resize', this.onResizeThrottle);
    this.rootEl.addEventListener('PotatoScroll.nestedCreate', this.onNestedCreate);
  }

  onScrollThrottle(event) {
    this.event.onNativeScroll(event, this.rootEl);

    if (this.scrollWait) return;
    this.scrollWait = true;

    this.raf = requestAnimationFrame(this.onScroll);
  }

  onScroll() {
    this.setBarsPos();

    this.scrollWait = false;
  }

  onResizeThrottle() {
    if (this.resizeWait) return;
    this.resizeWait = true;

    this.raf = requestAnimationFrame(this.onResize);
  }

  onResize() {
    this.refresh();

    this.resizeWait = false;
  }

  onNestedCreate() {
    this.refresh();
  }

  bindBarsEvents() {
    this.onDocMouseMove = this.onDocMouseMove.bind(this);
    this.onDocMouseUp = this.onDocMouseUp.bind(this);
    this.onDocMouseLeave = this.onDocMouseLeave.bind(this);

    this.onVBarMouseDown = this.onVBarMouseDown.bind(this);
    this.onHBarMouseDown = this.onHBarMouseDown.bind(this);

    if (this.bar.v.el) this.bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
    if (this.bar.h.el) this.bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
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
    const { scrollEl, bar, progress, event, rootEl } = this;

    const vBarObj = bar.v;
    const hBarObj = bar.h;

    const fract = {
      v: 0,
      h: 0,
    };

    if (vBarObj.el) {
      fract.v = vBarObj.scrollRange ? (scrollEl.scrollTop / vBarObj.scrollRange) : 0;
      const vPos = fract.v * (vBarObj.trackSize * (1 - vBarObj.sizeFract));
      vBarObj.el.style.transform = `translateY(${vPos}px)`;
    }

    if (hBarObj.el) {
      fract.h = hBarObj.scrollRange ? (scrollEl.scrollLeft / hBarObj.scrollRange) : 0;
      const hPos = fract.h * (hBarObj.trackSize * (1 - hBarObj.sizeFract));
      hBarObj.el.style.transform = `translateX(${hPos}px)`;
    }

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
    * manualy refresh bars
    */
  refresh() {
    this.setBarsSize();
    this.setBarsPos();
  }
}
