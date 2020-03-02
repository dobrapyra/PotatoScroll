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
      withArrows = false,
      arrowMove = 40,
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
    this.forceSize = forceSize;
    this.withArrows = withArrows;
    this.arrowMove = arrowMove;

    this.event = {
      onNativeScroll,
      onScroll,
      onTop,
      onBottom,
      onLeft,
      onRight,
    };

    this.resetState();

    return true;
  }

  resetState() {
    const { forceCustom, forceSize } = this;

    this.wait = {
      scroll: false,
      resize: false,
    };

    this.raf = {
      scroll: null,
      resize: null,
    };

    this.progress = {
      v: null,
      h: null,
    };

    this.bar = {
      v: {
        forceSize: forceCustom ? forceSize : 0,
        nativeSize: 0,
        el: null,
        trackEl: null,
        moveStart: null,
        moveDiff: 0,
        scrollBefore: null,
        size: 0,
        sizeFract: 1,
        trackSize: 0,
        moveProp: 'clientY',
        scrollProp: 'scrollTop',
        lengthProp: 'scrollHeight',
        measureProp: 'offsetHeight',
        sizeProp: 'height',
        forceMulti: 1,
        axis: 'Y',
      },
      h: {
        forceSize: forceCustom ? forceSize : 0,
        nativeSize: 0,
        el: null,
        trackEl: null,
        moveStart: null,
        moveDiff: 0,
        scrollBefore: null,
        size: 0,
        sizeFract: 1,
        trackSize: 0,
        moveProp: 'clientX',
        scrollProp: 'scrollLeft',
        lengthProp: 'scrollWidth',
        measureProp: 'offsetWidth',
        sizeProp: 'width',
        forceMulti: 2,
        axis: 'X',
      },
    };

    this.activeBarObj = null;

    this.arrow = {
      t: {
        el: null,
        disabled: false,
      },
      b: {
        el: null,
        disabled: false,
      },
      l: {
        el: null,
        disabled: false,
      },
      r: {
        el: null,
        disabled: false,
      },
    };

    this.isRTL = false;
  }

  bindThis() {
    this.onScrollThrottle = this.onScrollThrottle.bind(this);
    this.onScroll = this.onScroll.bind(this);

    this.onResizeThrottle = this.onResizeThrottle.bind(this);
    this.onResize = this.onResize.bind(this);

    this.onNestedChange = this.onNestedChange.bind(this);
    this.refreshParents = this.refreshParents.bind(this);

    this.onDocMouseMove = this.onDocMouseMove.bind(this);
    this.onDocMouseUp = this.onDocMouseUp.bind(this);
    this.onDocMouseLeave = this.onDocMouseLeave.bind(this);

    this.onVBarMouseDown = this.onVBarMouseDown.bind(this);
    this.onHBarMouseDown = this.onHBarMouseDown.bind(this);

    this.onTClick = this.onTClick.bind(this);
    this.onBClick = this.onBClick.bind(this);
    this.onLClick = this.onLClick.bind(this);
    this.onRClick = this.onRClick.bind(this);
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
    this.bindArrowsEvents();
    this.refresh();

    setTimeout(this.refreshParents);
  }

  analyzeNative() {
    const { rootEl, bar } = this;

    const rootParent = rootEl.parentElement;

    const testScrollEl = document.createElement('div');
    const testScrollStyle = testScrollEl.style;
    testScrollStyle.overflow = 'scroll';
    testScrollStyle.width = '100px';
    testScrollStyle.height = '100px';
    testScrollStyle.position = 'absolute';
    testScrollStyle.top = 0;
    testScrollStyle.left = 0;
    testScrollStyle.visibility = 'hidden';
    testScrollStyle.opacity = 0;

    rootParent.appendChild(testScrollEl);

    const vNativeSize = testScrollEl.offsetWidth - testScrollEl.scrollWidth;
    const hNativeSize = testScrollEl.offsetHeight - testScrollEl.scrollHeight;

    bar.v.nativeSize = vNativeSize;
    bar.h.nativeSize = hNativeSize;

    if (vNativeSize > 0) bar.v.forceSize = 0;
    if (hNativeSize > 0) bar.h.forceSize = 0;

    // detect RTL
    if (vNativeSize > 0) {
      const testContentEl = document.createElement('div');
      testScrollEl.appendChild(testContentEl);

      this.isRTL = (vNativeSize > 0) && (testContentEl.offsetLeft > testScrollEl.offsetLeft);

      testScrollEl.removeChild(testContentEl);
    }

    rootParent.removeChild(testScrollEl);
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

    if (this.isRTL) {
      scrollEl.style.marginLeft = `${-bar.h.nativeSize}px`;
    } else {
      scrollEl.style.marginRight = `${-bar.h.nativeSize}px`;
    }
    scrollEl.style.marginBottom = `${-bar.v.nativeSize}px`;
  }

  addCustomBars() {
    const { bar, rootEl } = this;

    if (!(
      bar.v.nativeSize !== 0 ||
      bar.h.nativeSize !== 0 ||
      this.forceCustom
    )) return;

    const vTrackEl = this.createTrackEl('v');
    const vBarEl = this.createBarEl('v');

    const hTrackEl = this.createTrackEl('h');
    const hBarEl = this.createBarEl('h');

    if (this.withArrows) this.addCustomArrows();

    vTrackEl.appendChild(vBarEl);
    hTrackEl.appendChild(hBarEl);

    rootEl.appendChild(vTrackEl);
    rootEl.appendChild(hTrackEl);
  }

  createTrackEl(axis) {
    const { cssClass, bar } = this;

    const trackEl = document.createElement('div');
    trackEl.classList.add(`${cssClass}__track`);
    trackEl.classList.add(`${cssClass}__track--${axis}`);
    trackEl.style.position = 'absolute';
    trackEl.style.zIndex = '1';
    bar[axis].trackEl = trackEl;

    return trackEl;
  }

  createBarEl(axis) {
    const { cssClass, bar } = this;

    const barEl = document.createElement('div');
    barEl.classList.add(`${cssClass}__bar`);
    barEl.classList.add(`${cssClass}__bar--${axis}`);
    bar[axis].el = barEl;

    return barEl;
  }

  addCustomArrows() {
    const { bar, rootEl, cssClass } = this;

    rootEl.classList.add(`${cssClass}--arrows`);

    const arrowT = this.createArrowEl('t');
    const arrowB = this.createArrowEl('b');
    const arrowL = this.createArrowEl('l');
    const arrowR = this.createArrowEl('r');

    bar.v.trackEl.appendChild(arrowT);
    bar.v.trackEl.appendChild(arrowB);
    bar.h.trackEl.appendChild(arrowL);
    bar.h.trackEl.appendChild(arrowR);
  }

  createArrowEl(direction) {
    const { cssClass, arrow } = this;

    const arrowEl = document.createElement('div');
    arrowEl.classList.add(`${cssClass}__arrow`);
    arrowEl.classList.add(`${cssClass}__arrow--${direction}`);
    arrowEl.style.position = 'absolute';
    arrowEl.style.zIndex = '1';
    arrow[direction].el = arrowEl;

    return arrowEl;
  }

  bindEvents() {
    if (this.scrollEl) this.scrollEl.addEventListener('scroll', this.onScrollThrottle);

    window.addEventListener('resize', this.onResizeThrottle);

    this.rootEl.addEventListener('PotatoScroll.nestedChange', this.onNestedChange);
  }

  unbindEvents() {
    if (this.scrollEl) this.scrollEl.removeEventListener('scroll', this.onScrollThrottle);

    window.removeEventListener('resize', this.onResizeThrottle);

    this.rootEl.removeEventListener('PotatoScroll.nestedChange', this.onNestedChange);
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

  onNestedChange() {
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

  bindArrowsEvents() {
    const { arrow } = this;

    if (arrow.t.el) arrow.t.el.addEventListener('click', this.onTClick);
    if (arrow.b.el) arrow.b.el.addEventListener('click', this.onBClick);
    if (arrow.l.el) arrow.l.el.addEventListener('click', this.onLClick);
    if (arrow.r.el) arrow.r.el.addEventListener('click', this.onRClick);
  }

  unbindArrowsEvents() {
    const { arrow } = this;

    if (arrow.t.el) arrow.t.el.removeEventListener('click', this.onTClick);
    if (arrow.b.el) arrow.b.el.removeEventListener('click', this.onBClick);
    if (arrow.l.el) arrow.l.el.removeEventListener('click', this.onLClick);
    if (arrow.r.el) arrow.r.el.removeEventListener('click', this.onRClick);
  }

  onTClick() {
    this.smoothScrollTo('scrollTop', -this.arrowMove);
  }

  onBClick() {
    this.smoothScrollTo('scrollTop', this.arrowMove);
  }

  onLClick() {
    this.smoothScrollTo('scrollLeft', -this.arrowMove);
  }

  onRClick() {
    this.smoothScrollTo('scrollLeft', this.arrowMove);
  }

  smoothScrollTo(scrollDir, offset) {
    const { scrollEl } = this;

    scrollEl.style.scrollBehavior = 'smooth';
    scrollEl[scrollDir] += offset;
    scrollEl.style.scrollBehavior = '';
  }

  setBarsSize() {
    const { bar } = this;

    this.setBarSize(bar.v);
    this.setBarSize(bar.h);
  }

  setBarSize(barObj) {
    const { scrollEl, maskEl } = this;

    const scrollSize = scrollEl[barObj.lengthProp] - barObj.forceSize * barObj.forceMulti;
    const maskSize = maskEl[barObj.measureProp];
    barObj.scrollRange = scrollSize - maskSize;

    if (barObj.el) {
      const fract = maskSize / scrollSize;
      const trackSize = barObj.trackEl[barObj.measureProp];
      barObj.sizeFract = fract;
      barObj.trackSize = trackSize;
      barObj.trackEl.style.display = (barObj.sizeFract === 1) ? 'none' : '';
      barObj.el.style[barObj.sizeProp] = `${fract * trackSize}px`;
      barObj.moveRange = trackSize - barObj.el[barObj.measureProp];
    }
  }

  setBarsPos() {
    const { bar, event, rootEl, arrow } = this;

    const fract = {
      v: 0,
      h: 0,
    };

    if (bar.v.el) fract.v = this.setBarPos(bar.v);
    if (bar.h.el) fract.h = this.setBarPos(bar.h);

    event.onScroll(fract, rootEl);

    this.axisEdges(fract, 'v', arrow.t, arrow.b);
    this.axisEdges(fract, 'h', arrow.l, arrow.r);
  }

  setBarPos(barObj) {
    const fract = barObj.scrollRange ? (
      this.scrollEl[barObj.scrollProp] / barObj.scrollRange
    ) : 0;

    if (barObj.el) {
      const pos = fract * (barObj.trackSize * (1 - barObj.sizeFract));
      barObj.el.style.transform = `translate${barObj.axis}(${pos}px)`;
    }

    return fract;
  }

  axisEdges(fract, axis, arrowObj0, arrowObj1) {
    const { progress, event, rootEl } = this;

    if (fract[axis] !== progress[axis]) {
      progress[axis] = fract[axis];

      const isEdge0 = fract[axis] <= 0;
      if (isEdge0) event.onLeft(rootEl);
      if (arrowObj0.el) this.setArrowIf(arrowObj0, isEdge0);

      const isEdge1 = fract[axis] >= 1;
      if (isEdge1) event.onRight(rootEl);
      if (arrowObj1.el) this.setArrowIf(arrowObj1, isEdge1);
    }
  }

  setArrowIf(arrowObj, disabled) {
    const { cssClass } = this;

    if (arrowObj.disabled === disabled) return;

    arrowObj.disabled = disabled;

    const disabledClass = `${cssClass}__arrow--disabled`;
    if (disabled) {
      arrowObj.el.classList.add(disabledClass);
    } else {
      arrowObj.el.classList.remove(disabledClass);
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
    this.rootEl.parentElement.dispatchEvent(new CustomEvent('PotatoScroll.nestedChange', {
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
    const { scrollEl, maskEl, rootEl, bar, arrow, cssClass } = this;

    this.unbindArrowsEvents();
    this.unbindDocEvents();
    this.unbindBarsEvents();
    this.unbindEvents();

    if (bar.v.trackEl) {
      rootEl.removeChild(bar.v.trackEl);
      bar.v.el = null;
      bar.v.trackEl = null;
      arrow.t.el = null;
      arrow.b.el = null;
    }
    if (bar.h.trackEl) {
      rootEl.removeChild(bar.h.trackEl);
      bar.h.el = null;
      bar.h.trackEl = null;
      arrow.l.el = null;
      arrow.r.el = null;
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

    this.resetState();

    setTimeout(this.refreshParents);
  }
}
