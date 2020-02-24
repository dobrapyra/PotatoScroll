export default class PotatoScroll {

  static create(options = {}) {
    const {
      selector,
    } = options;

    return Array.prototype.map.call(
      document.querySelectorAll(selector),
      el => {
        return new PotatoScroll(Object.assign(options, {
          el,
        }));
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
  }

  setVars(options = {}) {
    const {
      el,
      cssClass = 'potatoScroll',
    } = options;

    if (!el) return false;

    this.rootEl = el;

    this.cssClass = cssClass;

    this.scrollWait = false;
    this.resizeWait = false;

    this.bar = {
      v: {
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

    this.bar.v.nativeSize = testScrollEl.offsetWidth - testScrollEl.scrollWidth;
    this.bar.h.nativeSize = testScrollEl.offsetHeight - testScrollEl.scrollHeight;

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

    scrollEl.style.marginRight = `${-bar.h.nativeSize}px`;
    scrollEl.style.marginBottom = `${-bar.v.nativeSize}px`;
  }

  addCustomBars() {
    const { cssClass, bar, rootEl } = this;

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

    this.scrollEl.addEventListener('scroll', this.onScrollThrottle);
    window.addEventListener('resize', this.onResizeThrottle);
  }

  onScrollThrottle() {
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

  bindBarsEvents() {
    this.onDocMouseMove = this.onDocMouseMove.bind(this);
    this.onDocMouseUp = this.onDocMouseUp.bind(this);
    this.onDocMouseLeave = this.onDocMouseLeave.bind(this);

    this.onVBarMouseDown = this.onVBarMouseDown.bind(this);
    this.onHBarMouseDown = this.onHBarMouseDown.bind(this);

    this.bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
    this.bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
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
    const { activeBarObj } = this;
    if (activeBarObj === null) return;

    this.scrollEl.style.userSelect = 'none';
    this.scrollEl.style.pointerEvents = 'none';

    this.bindDocEvents();

    activeBarObj.moveStart = e[activeBarObj.moveProp];
    activeBarObj.scrollBefore = this.scrollEl[activeBarObj.scrollProp];
  }

  moveUpdate(e) {
    const { activeBarObj } = this;
    if (activeBarObj === null) return;

    activeBarObj.moveDiff = e[activeBarObj.moveProp] - activeBarObj.moveStart;

    this.barMoveToScroll(activeBarObj);
  }

  moveEnd() {
    const { activeBarObj } = this;
    if (activeBarObj === null) return;

    this.unbindDocEvents();

    activeBarObj.moveStart = null;
    activeBarObj.moveDiff = 0;
    activeBarObj.scrollBefore = null;

    this.activeBarObj = null;

    this.scrollEl.style.userSelect = '';
    this.scrollEl.style.pointerEvents = '';
  }

  setBarsSize() {
    const { scrollEl } = this;

    const vBarObj = this.bar.v;
    const hBarObj = this.bar.h;

    const vTrackSize = scrollEl.offsetHeight - vBarObj.nativeSize;
    const vFract = vTrackSize / scrollEl.scrollHeight;
    vBarObj.trackSize = vTrackSize;
    vBarObj.sizeFract = vFract;
    vBarObj.el.style.height = `${vFract * vBarObj.trackEl.offsetHeight}px`;
    vBarObj.scrollRange = scrollEl.scrollHeight - vTrackSize;
    vBarObj.moveRange = vBarObj.trackEl.offsetHeight - vBarObj.el.offsetHeight;
    vBarObj.trackEl.style.display = (vBarObj.sizeFract === 1) ? 'none' : '';

    const hTrackSize = scrollEl.offsetWidth - vBarObj.nativeSize;
    const hFract = hTrackSize / scrollEl.scrollWidth;
    hBarObj.trackSize = hTrackSize;
    hBarObj.sizeFract = hFract;
    hBarObj.el.style.width = `${hFract * hBarObj.trackEl.offsetWidth}px`;
    hBarObj.scrollRange = scrollEl.scrollWidth - hTrackSize;
    hBarObj.moveRange = hBarObj.trackEl.offsetWidth - hBarObj.el.offsetWidth;
    hBarObj.trackEl.style.display = (hBarObj.sizeFract === 1) ? 'none' : '';
  }

  setBarsPos() {
    const { scrollEl } = this;

    const vBarObj = this.bar.v;
    const hBarObj = this.bar.h;

    const vPos = (scrollEl.scrollTop / vBarObj.scrollRange) * (
      vBarObj.trackSize * (1 - vBarObj.sizeFract)
    );
    vBarObj.el.style.transform = `translateY(${vPos}px)`;

    const hPos = (scrollEl.scrollLeft / hBarObj.scrollRange) * (
      hBarObj.trackSize * (1 - hBarObj.sizeFract)
    );
    hBarObj.el.style.transform = `translateX(${hPos}px)`;
  }

  barMoveToScroll(activeBarObj) {
    this.scrollEl[activeBarObj.scrollProp] = (
      activeBarObj.scrollBefore + (
        activeBarObj.scrollRange * activeBarObj.moveDiff / activeBarObj.moveRange
      )
    );
  }

  /**
    * manualy refresh bars
    */
  refresh() {
    this.setBarsSize();
    this.setBarsPos();
  }
}
