window["PotatoScroll"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/build.js":
/*!*************************!*\
  !*** ./src/js/build.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");

var _index = __webpack_require__(/*! ./index.js */ "./src/js/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _index2.default;

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PotatoScroll = function () {
  _createClass(PotatoScroll, null, [{
    key: 'create',
    value: function create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var selector = options.selector;


      return Array.prototype.map.call(document.querySelectorAll(selector), function (el) {
        var instanceOption = Object(options);
        instanceOption.el = el;
        return new PotatoScroll(instanceOption);
      });
    }
  }]);

  function PotatoScroll(options) {
    _classCallCheck(this, PotatoScroll);

    if (!this.preinit(options)) return;

    this.bindThis();
    this.initialize();
  }

  _createClass(PotatoScroll, [{
    key: 'preinit',
    value: function preinit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var NOOP = function NOOP() {};

      var el = options.el,
          _options$cssClass = options.cssClass,
          cssClass = _options$cssClass === undefined ? 'potatoScroll' : _options$cssClass,
          _options$forceCustom = options.forceCustom,
          forceCustom = _options$forceCustom === undefined ? false : _options$forceCustom,
          _options$forceSize = options.forceSize,
          forceSize = _options$forceSize === undefined ? 20 : _options$forceSize,
          _options$withArrows = options.withArrows,
          withArrows = _options$withArrows === undefined ? false : _options$withArrows,
          _options$arrowMove = options.arrowMove,
          arrowMove = _options$arrowMove === undefined ? 40 : _options$arrowMove,
          _options$onNativeScro = options.onNativeScroll,
          onNativeScroll = _options$onNativeScro === undefined ? NOOP : _options$onNativeScro,
          _options$onScroll = options.onScroll,
          onScroll = _options$onScroll === undefined ? NOOP : _options$onScroll,
          _options$onTop = options.onTop,
          onTop = _options$onTop === undefined ? NOOP : _options$onTop,
          _options$onBottom = options.onBottom,
          onBottom = _options$onBottom === undefined ? NOOP : _options$onBottom,
          _options$onLeft = options.onLeft,
          onLeft = _options$onLeft === undefined ? NOOP : _options$onLeft,
          _options$onRight = options.onRight,
          onRight = _options$onRight === undefined ? NOOP : _options$onRight;


      if (!el) return false;

      this.rootEl = el;
      this.cssClass = cssClass;
      this.forceCustom = forceCustom;
      this.withArrows = withArrows;
      this.arrowMove = arrowMove;

      this.event = {
        onNativeScroll: onNativeScroll,
        onScroll: onScroll,
        onTop: onTop,
        onBottom: onBottom,
        onLeft: onLeft,
        onRight: onRight
      };

      this.wait = {
        scroll: false,
        resize: false
      };

      this.raf = {
        scroll: null,
        resize: null
      };

      this.progress = {
        v: 0,
        h: 0
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
          axis: 'Y'
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
          axis: 'X'
        }
      };

      this.activeBarObj = null;

      this.arrow = {
        t: null,
        b: null,
        l: null,
        r: null
      };

      this.isRTL = false;

      this.rootEl.potatoscroll = this;

      return true;
    }
  }, {
    key: 'bindThis',
    value: function bindThis() {
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

  }, {
    key: 'initialize',
    value: function initialize() {
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
  }, {
    key: 'analyzeNative',
    value: function analyzeNative() {
      var rootEl = this.rootEl,
          bar = this.bar;


      var rootParent = rootEl.parentElement;

      var testScrollEl = document.createElement('div');
      var testScrollStyle = testScrollEl.style;
      testScrollStyle.overflow = 'scroll';
      testScrollStyle.width = '100px';
      testScrollStyle.height = '100px';
      testScrollStyle.position = 'absolute';
      testScrollStyle.top = 0;
      testScrollStyle.left = 0;
      testScrollStyle.visibility = 'hidden';
      testScrollStyle.opacity = 0;

      rootParent.appendChild(testScrollEl);

      var vNativeSize = testScrollEl.offsetWidth - testScrollEl.scrollWidth;
      var hNativeSize = testScrollEl.offsetHeight - testScrollEl.scrollHeight;

      bar.v.nativeSize = vNativeSize;
      bar.h.nativeSize = hNativeSize;

      if (vNativeSize > 0) bar.v.forceSize = 0;
      if (hNativeSize > 0) bar.h.forceSize = 0;

      // detect RTL
      if (vNativeSize > 0) {
        var testContentEl = document.createElement('div');
        testScrollEl.appendChild(testContentEl);

        this.isRTL = vNativeSize > 0 && testContentEl.offsetLeft > testScrollEl.offsetLeft;

        testScrollEl.removeChild(testContentEl);
      }

      rootParent.removeChild(testScrollEl);
    }
  }, {
    key: 'prepareDOM',
    value: function prepareDOM() {
      var rootEl = this.rootEl,
          cssClass = this.cssClass;

      // rootEl

      rootEl.classList.add(cssClass);
      var rootStyle = rootEl.style;
      rootStyle.overflow = 'visible';
      rootStyle.position = 'relative';
      rootStyle.display = 'flex';

      // maskEl
      var maskEl = document.createElement('div');
      maskEl.classList.add(cssClass + '__mask');
      var maskStyle = maskEl.style;
      maskStyle.flexGrow = 1;
      maskStyle.overflow = 'hidden';
      maskStyle.position = 'relative';
      maskStyle.display = 'flex';
      maskStyle.zIndex = '0';

      // scrollEl
      var scrollEl = document.createElement('div');
      scrollEl.classList.add(cssClass + '__scroll');
      var scrollStyle = scrollEl.style;
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
  }, {
    key: 'hideNativeBars',
    value: function hideNativeBars() {
      var scrollEl = this.scrollEl,
          bar = this.bar;


      if (this.forceCustom && (bar.v.nativeSize === 0 || bar.h.nativeSize === 0)) {
        var vForceSize = bar.v.forceSize;
        scrollEl.style.marginLeft = -vForceSize + 'px';
        scrollEl.style.paddingLeft = vForceSize + 'px';
        scrollEl.style.marginRight = -vForceSize + 'px';
        scrollEl.style.paddingRight = vForceSize + 'px';

        var hForceSize = bar.v.forceSize;
        scrollEl.style.marginBottom = -hForceSize + 'px';
        scrollEl.style.paddingBottom = hForceSize + 'px';

        return;
      }

      if (this.isRTL) {
        scrollEl.style.marginLeft = -bar.h.nativeSize + 'px';
      } else {
        scrollEl.style.marginRight = -bar.h.nativeSize + 'px';
      }
      scrollEl.style.marginBottom = -bar.v.nativeSize + 'px';
    }
  }, {
    key: 'addCustomBars',
    value: function addCustomBars() {
      var bar = this.bar,
          rootEl = this.rootEl;


      if (!(bar.v.nativeSize !== 0 || bar.h.nativeSize !== 0 || this.forceCustom)) return;

      var vTrackEl = this.createTrackEl('v');
      var vBarEl = this.createBarEl('v');

      var hTrackEl = this.createTrackEl('h');
      var hBarEl = this.createBarEl('h');

      if (this.withArrows) this.addCustomArrows();

      vTrackEl.appendChild(vBarEl);
      hTrackEl.appendChild(hBarEl);

      rootEl.appendChild(vTrackEl);
      rootEl.appendChild(hTrackEl);
    }
  }, {
    key: 'createTrackEl',
    value: function createTrackEl(axis) {
      var cssClass = this.cssClass,
          bar = this.bar;


      var trackEl = document.createElement('div');
      trackEl.classList.add(cssClass + '__track');
      trackEl.classList.add(cssClass + '__track--' + axis);
      trackEl.style.position = 'absolute';
      trackEl.style.zIndex = '1';
      bar[axis].trackEl = trackEl;

      return trackEl;
    }
  }, {
    key: 'createBarEl',
    value: function createBarEl(axis) {
      var cssClass = this.cssClass,
          bar = this.bar;


      var barEl = document.createElement('div');
      barEl.classList.add(cssClass + '__bar');
      barEl.classList.add(cssClass + '__bar--' + axis);
      bar[axis].el = barEl;

      return barEl;
    }
  }, {
    key: 'addCustomArrows',
    value: function addCustomArrows() {
      var bar = this.bar,
          rootEl = this.rootEl,
          cssClass = this.cssClass;


      rootEl.classList.add(cssClass + '--arrows');

      var arrowT = this.createArrowEl('t');
      var arrowB = this.createArrowEl('b');
      var arrowL = this.createArrowEl('l');
      var arrowR = this.createArrowEl('r');

      bar.v.trackEl.appendChild(arrowT);
      bar.v.trackEl.appendChild(arrowB);
      bar.h.trackEl.appendChild(arrowL);
      bar.h.trackEl.appendChild(arrowR);
    }
  }, {
    key: 'createArrowEl',
    value: function createArrowEl(direction) {
      var cssClass = this.cssClass,
          arrow = this.arrow;


      var arrowEl = document.createElement('div');
      arrowEl.classList.add(cssClass + '__arrow');
      arrowEl.classList.add(cssClass + '__arrow--' + direction);
      arrowEl.style.position = 'absolute';
      arrowEl.style.zIndex = '1';
      arrow[direction] = arrowEl;

      return arrowEl;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      if (this.scrollEl) this.scrollEl.addEventListener('scroll', this.onScrollThrottle);

      window.addEventListener('resize', this.onResizeThrottle);

      this.rootEl.addEventListener('PotatoScroll.nestedChange', this.onNestedChange);
    }
  }, {
    key: 'unbindEvents',
    value: function unbindEvents() {
      if (this.scrollEl) this.scrollEl.removeEventListener('scroll', this.onScrollThrottle);

      window.removeEventListener('resize', this.onResizeThrottle);

      this.rootEl.removeEventListener('PotatoScroll.nestedChange', this.onNestedChange);
    }
  }, {
    key: 'onScrollThrottle',
    value: function onScrollThrottle(event) {
      this.event.onNativeScroll(event, this.rootEl);

      if (this.wait.scroll) return;
      this.wait.scroll = true;

      this.raf.scroll = requestAnimationFrame(this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      this.setBarsPos();

      this.wait.scroll = false;
    }
  }, {
    key: 'onResizeThrottle',
    value: function onResizeThrottle() {
      if (this.wait.resize) return;
      this.wait.resize = true;

      this.raf.resize = requestAnimationFrame(this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.refresh();

      this.wait.resize = false;
    }
  }, {
    key: 'onNestedChange',
    value: function onNestedChange() {
      this.refresh();
    }
  }, {
    key: 'bindBarsEvents',
    value: function bindBarsEvents() {
      var bar = this.bar;


      if (bar.v.el) bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
      if (bar.h.el) bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
    }
  }, {
    key: 'unbindBarsEvents',
    value: function unbindBarsEvents() {
      var bar = this.bar;


      if (bar.v.el) bar.v.el.removeEventListener('mousedown', this.onVBarMouseDown);
      if (bar.h.el) bar.h.el.removeEventListener('mousedown', this.onHBarMouseDown);
    }
  }, {
    key: 'bindDocEvents',
    value: function bindDocEvents() {
      document.addEventListener('mousemove', this.onDocMouseMove);
      document.addEventListener('mouseup', this.onDocMouseUp);
      document.addEventListener('mouseleave', this.onDocMouseLeave);
    }
  }, {
    key: 'unbindDocEvents',
    value: function unbindDocEvents() {
      document.removeEventListener('mousemove', this.onDocMouseMove);
      document.removeEventListener('mouseup', this.onDocMouseUp);
      document.removeEventListener('mouseleave', this.onDocMouseLeave);
    }
  }, {
    key: 'onVBarMouseDown',
    value: function onVBarMouseDown(e) {
      this.activeBarObj = this.bar.v;

      this.moveBegin(e);
    }
  }, {
    key: 'onHBarMouseDown',
    value: function onHBarMouseDown(e) {
      this.activeBarObj = this.bar.h;

      this.moveBegin(e);
    }
  }, {
    key: 'onDocMouseMove',
    value: function onDocMouseMove(e) {
      this.moveUpdate(e);
    }
  }, {
    key: 'onDocMouseUp',
    value: function onDocMouseUp(e) {
      this.moveEnd(e);
    }
  }, {
    key: 'onDocMouseLeave',
    value: function onDocMouseLeave(e) {
      this.moveEnd(e);
    }
  }, {
    key: 'moveBegin',
    value: function moveBegin(e) {
      var activeBarObj = this.activeBarObj,
          scrollEl = this.scrollEl;

      if (activeBarObj === null) return;

      scrollEl.style.userSelect = 'none';
      scrollEl.style.pointerEvents = 'none';

      this.bindDocEvents();

      activeBarObj.moveStart = e[activeBarObj.moveProp];
      activeBarObj.scrollBefore = scrollEl[activeBarObj.scrollProp];
    }
  }, {
    key: 'moveUpdate',
    value: function moveUpdate(e) {
      var activeBarObj = this.activeBarObj;

      if (activeBarObj === null) return;

      activeBarObj.moveDiff = e[activeBarObj.moveProp] - activeBarObj.moveStart;

      this.barMoveToScroll(activeBarObj);
    }
  }, {
    key: 'moveEnd',
    value: function moveEnd() {
      var activeBarObj = this.activeBarObj,
          scrollEl = this.scrollEl;

      if (activeBarObj === null) return;

      this.unbindDocEvents();

      activeBarObj.moveStart = null;
      activeBarObj.moveDiff = 0;
      activeBarObj.scrollBefore = null;

      this.activeBarObj = null;

      scrollEl.style.userSelect = '';
      scrollEl.style.pointerEvents = '';
    }
  }, {
    key: 'bindArrowsEvents',
    value: function bindArrowsEvents() {
      var arrow = this.arrow;


      if (arrow.t) arrow.t.addEventListener('click', this.onTClick);
      if (arrow.b) arrow.b.addEventListener('click', this.onBClick);
      if (arrow.l) arrow.l.addEventListener('click', this.onLClick);
      if (arrow.r) arrow.r.addEventListener('click', this.onRClick);
    }
  }, {
    key: 'unbindArrowsEvents',
    value: function unbindArrowsEvents() {
      var arrow = this.arrow;


      if (arrow.t) arrow.t.removeEventListener('click', this.onTClick);
      if (arrow.b) arrow.b.removeEventListener('click', this.onBClick);
      if (arrow.l) arrow.l.removeEventListener('click', this.onLClick);
      if (arrow.r) arrow.r.removeEventListener('click', this.onRClick);
    }
  }, {
    key: 'onTClick',
    value: function onTClick() {
      this.smoothScrollTo('scrollTop', -this.arrowMove);
    }
  }, {
    key: 'onBClick',
    value: function onBClick() {
      this.smoothScrollTo('scrollTop', this.arrowMove);
    }
  }, {
    key: 'onLClick',
    value: function onLClick() {
      this.smoothScrollTo('scrollLeft', -this.arrowMove);
    }
  }, {
    key: 'onRClick',
    value: function onRClick() {
      this.smoothScrollTo('scrollLeft', this.arrowMove);
    }
  }, {
    key: 'smoothScrollTo',
    value: function smoothScrollTo(scrollDir, offset) {
      var scrollEl = this.scrollEl;


      scrollEl.style.scrollBehavior = 'smooth';
      scrollEl[scrollDir] += offset;
      scrollEl.style.scrollBehavior = '';
    }
  }, {
    key: 'setBarsSize',
    value: function setBarsSize() {
      var bar = this.bar;


      this.setBarSize(bar.v);
      this.setBarSize(bar.h);
    }
  }, {
    key: 'setBarSize',
    value: function setBarSize(barObj) {
      var scrollEl = this.scrollEl,
          maskEl = this.maskEl;


      var scrollSize = scrollEl[barObj.lengthProp] - barObj.forceSize * barObj.forceMulti;
      var maskSize = maskEl[barObj.measureProp];
      barObj.scrollRange = scrollSize - maskSize;

      if (barObj.el) {
        var fract = maskSize / scrollSize;
        var trackSize = barObj.trackEl[barObj.measureProp];
        barObj.sizeFract = fract;
        barObj.trackSize = trackSize;
        barObj.trackEl.style.display = barObj.sizeFract === 1 ? 'none' : '';
        barObj.el.style[barObj.sizeProp] = fract * trackSize + 'px';
        barObj.moveRange = trackSize - barObj.el[barObj.measureProp];
      }
    }
  }, {
    key: 'setBarsPos',
    value: function setBarsPos() {
      var bar = this.bar,
          progress = this.progress,
          event = this.event,
          rootEl = this.rootEl;


      var fract = {
        v: 0,
        h: 0
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
  }, {
    key: 'setBarPos',
    value: function setBarPos(barObj) {
      var fract = barObj.scrollRange ? this.scrollEl[barObj.scrollProp] / barObj.scrollRange : 0;

      if (barObj.el) {
        var pos = fract * (barObj.trackSize * (1 - barObj.sizeFract));
        barObj.el.style.transform = 'translate' + barObj.axis + '(' + pos + 'px)';
      }

      return fract;
    }
  }, {
    key: 'barMoveToScroll',
    value: function barMoveToScroll(activeBarObj) {
      this.scrollEl[activeBarObj.scrollProp] = activeBarObj.scrollBefore + activeBarObj.scrollRange * activeBarObj.moveDiff / activeBarObj.moveRange;
    }
  }, {
    key: 'refreshParents',
    value: function refreshParents() {
      if (!window.CustomEvent) return;
      this.rootEl.parentElement.dispatchEvent(new CustomEvent('PotatoScroll.nestedChange', {
        bubbles: true
      }));
    }

    /**
      * Recalculates content size and set scrollbars size
      */

  }, {
    key: 'refresh',
    value: function refresh() {
      this.setBarsSize();
      this.setBarsPos();
    }

    /**
      * Destroys the instance and restore original html
      */

  }, {
    key: 'destroy',
    value: function destroy() {
      var scrollEl = this.scrollEl,
          maskEl = this.maskEl,
          rootEl = this.rootEl,
          bar = this.bar,
          arrow = this.arrow,
          cssClass = this.cssClass;


      this.unbindArrowsEvents();
      this.unbindDocEvents();
      this.unbindBarsEvents();
      this.unbindEvents();

      if (bar.v.trackEl) {
        rootEl.removeChild(bar.v.trackEl);
        bar.v.el = null;
        bar.v.trackEl = null;
        arrow.t = null;
        arrow.b = null;
      }
      if (bar.h.trackEl) {
        rootEl.removeChild(bar.h.trackEl);
        bar.h.el = null;
        bar.h.trackEl = null;
        arrow.l = null;
        arrow.r = null;
      }

      rootEl.classList.remove(cssClass);
      var rootStyle = rootEl.style;
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

      setTimeout(this.refreshParents);
    }
  }]);

  return PotatoScroll;
}();

exports.default = PotatoScroll;

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwiY3NzQ2xhc3MiLCJmb3JjZUN1c3RvbSIsImZvcmNlU2l6ZSIsIndpdGhBcnJvd3MiLCJhcnJvd01vdmUiLCJvbk5hdGl2ZVNjcm9sbCIsIm9uU2Nyb2xsIiwib25Ub3AiLCJvbkJvdHRvbSIsIm9uTGVmdCIsIm9uUmlnaHQiLCJyb290RWwiLCJldmVudCIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiYiIsImwiLCJyIiwiaXNSVEwiLCJwb3RhdG9zY3JvbGwiLCJvblNjcm9sbFRocm90dGxlIiwiYmluZCIsIm9uUmVzaXplVGhyb3R0bGUiLCJvblJlc2l6ZSIsIm9uTmVzdGVkQ2hhbmdlIiwicmVmcmVzaFBhcmVudHMiLCJvbkRvY01vdXNlTW92ZSIsIm9uRG9jTW91c2VVcCIsIm9uRG9jTW91c2VMZWF2ZSIsIm9uVkJhck1vdXNlRG93biIsIm9uSEJhck1vdXNlRG93biIsIm9uVENsaWNrIiwib25CQ2xpY2siLCJvbkxDbGljayIsIm9uUkNsaWNrIiwiZGVzdHJveSIsImFuYWx5emVOYXRpdmUiLCJwcmVwYXJlRE9NIiwiaGlkZU5hdGl2ZUJhcnMiLCJhZGRDdXN0b21CYXJzIiwiYmluZEV2ZW50cyIsImJpbmRCYXJzRXZlbnRzIiwiYmluZEFycm93c0V2ZW50cyIsInJlZnJlc2giLCJzZXRUaW1lb3V0Iiwicm9vdFBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJ0ZXN0U2Nyb2xsRWwiLCJjcmVhdGVFbGVtZW50IiwidGVzdFNjcm9sbFN0eWxlIiwic3R5bGUiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidmlzaWJpbGl0eSIsIm9wYWNpdHkiLCJhcHBlbmRDaGlsZCIsInZOYXRpdmVTaXplIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsImhOYXRpdmVTaXplIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidGVzdENvbnRlbnRFbCIsIm9mZnNldExlZnQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJtYXNrRWwiLCJtYXNrU3R5bGUiLCJmbGV4R3JvdyIsInpJbmRleCIsInNjcm9sbEVsIiwic2Nyb2xsU3R5bGUiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwidkZvcmNlU2l6ZSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiaEZvcmNlU2l6ZSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJ2VHJhY2tFbCIsImNyZWF0ZVRyYWNrRWwiLCJ2QmFyRWwiLCJjcmVhdGVCYXJFbCIsImhUcmFja0VsIiwiaEJhckVsIiwiYWRkQ3VzdG9tQXJyb3dzIiwiYmFyRWwiLCJhcnJvd1QiLCJjcmVhdGVBcnJvd0VsIiwiYXJyb3dCIiwiYXJyb3dMIiwiYXJyb3dSIiwiZGlyZWN0aW9uIiwiYXJyb3dFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0QmFyc1BvcyIsImUiLCJtb3ZlQmVnaW4iLCJtb3ZlVXBkYXRlIiwibW92ZUVuZCIsInVzZXJTZWxlY3QiLCJwb2ludGVyRXZlbnRzIiwiYmluZERvY0V2ZW50cyIsImJhck1vdmVUb1Njcm9sbCIsInVuYmluZERvY0V2ZW50cyIsInNtb290aFNjcm9sbFRvIiwic2Nyb2xsRGlyIiwib2Zmc2V0Iiwic2Nyb2xsQmVoYXZpb3IiLCJzZXRCYXJTaXplIiwiYmFyT2JqIiwic2Nyb2xsU2l6ZSIsIm1hc2tTaXplIiwic2Nyb2xsUmFuZ2UiLCJmcmFjdCIsIm1vdmVSYW5nZSIsInNldEJhclBvcyIsInBvcyIsInRyYW5zZm9ybSIsIkN1c3RvbUV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImJ1YmJsZXMiLCJzZXRCYXJzU2l6ZSIsInVuYmluZEFycm93c0V2ZW50cyIsInVuYmluZEJhcnNFdmVudHMiLCJ1bmJpbmRFdmVudHMiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUNWdEYsZUFBT2lGLFdBQVAsQ0FBbUJLLE1BQW5COztBQUVBLGFBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7O0FBRUQ3QixpQkFBVyxLQUFLbkIsY0FBaEI7QUFDRDs7Ozs7O2tCQTVwQmtCakUsWTs7Ozs7Ozs7Ozs7QUNBckIsdUMiLCJmaWxlIjoicG90YXRvLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1aWxkLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgUG90YXRvU2Nyb2xsIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBQb3RhdG9TY3JvbGw7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9TY3JvbGwge1xuXG4gIHN0YXRpYyBjcmVhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3IsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICBlbCA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlT3B0aW9uID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBpbnN0YW5jZU9wdGlvbi5lbCA9IGVsO1xuICAgICAgICByZXR1cm4gbmV3IFBvdGF0b1Njcm9sbChpbnN0YW5jZU9wdGlvbik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMucHJlaW5pdChvcHRpb25zKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5iaW5kVGhpcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgcHJlaW5pdChvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBOT09QID0gKCkgPT4ge307XG5cbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGNzc0NsYXNzID0gJ3BvdGF0b1Njcm9sbCcsXG4gICAgICBmb3JjZUN1c3RvbSA9IGZhbHNlLFxuICAgICAgZm9yY2VTaXplID0gMjAsXG4gICAgICB3aXRoQXJyb3dzID0gZmFsc2UsXG4gICAgICBhcnJvd01vdmUgPSA0MCxcbiAgICAgIG9uTmF0aXZlU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uVG9wID0gTk9PUCxcbiAgICAgIG9uQm90dG9tID0gTk9PUCxcbiAgICAgIG9uTGVmdCA9IE5PT1AsXG4gICAgICBvblJpZ2h0ID0gTk9PUCxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsID0gZWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcbiAgICB0aGlzLndpdGhBcnJvd3MgPSB3aXRoQXJyb3dzO1xuICAgIHRoaXMuYXJyb3dNb3ZlID0gYXJyb3dNb3ZlO1xuXG4gICAgdGhpcy5ldmVudCA9IHtcbiAgICAgIG9uTmF0aXZlU2Nyb2xsLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBvblRvcCxcbiAgICAgIG9uQm90dG9tLFxuICAgICAgb25MZWZ0LFxuICAgICAgb25SaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy53YWl0ID0ge1xuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHJlc2l6ZTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMucmFmID0ge1xuICAgICAgc2Nyb2xsOiBudWxsLFxuICAgICAgcmVzaXplOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgdjogMCxcbiAgICAgIGg6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuYmFyID0ge1xuICAgICAgdjoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIHRyYWNrRWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICB0cmFja1NpemU6IDAsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WScsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxUb3AnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsSGVpZ2h0JyxcbiAgICAgICAgbWVhc3VyZVByb3A6ICdvZmZzZXRIZWlnaHQnLFxuICAgICAgICBzaXplUHJvcDogJ2hlaWdodCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDEsXG4gICAgICAgIGF4aXM6ICdZJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgdHJhY2tFbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsV2lkdGgnLFxuICAgICAgICBtZWFzdXJlUHJvcDogJ29mZnNldFdpZHRoJyxcbiAgICAgICAgc2l6ZVByb3A6ICd3aWR0aCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDIsXG4gICAgICAgIGF4aXM6ICdYJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHRoaXMuYXJyb3cgPSB7XG4gICAgICB0OiBudWxsLFxuICAgICAgYjogbnVsbCxcbiAgICAgIGw6IG51bGwsXG4gICAgICByOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLmlzUlRMID0gZmFsc2U7XG5cbiAgICB0aGlzLnJvb3RFbC5wb3RhdG9zY3JvbGwgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBiaW5kVGhpcygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZVRocm90dGxlID0gdGhpcy5vblJlc2l6ZVRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25OZXN0ZWRDaGFuZ2UgPSB0aGlzLm9uTmVzdGVkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoUGFyZW50cyA9IHRoaXMucmVmcmVzaFBhcmVudHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25Eb2NNb3VzZU1vdmUgPSB0aGlzLm9uRG9jTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlVXAgPSB0aGlzLm9uRG9jTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZUxlYXZlID0gdGhpcy5vbkRvY01vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25WQmFyTW91c2VEb3duID0gdGhpcy5vblZCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSEJhck1vdXNlRG93biA9IHRoaXMub25IQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVENsaWNrID0gdGhpcy5vblRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CQ2xpY2sgPSB0aGlzLm9uQkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxDbGljayA9IHRoaXMub25MQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUkNsaWNrID0gdGhpcy5vblJDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgJiByZWluaXRpYWxpemUgaW5zdGFuY2VcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFuYWx5emVOYXRpdmUoKTtcbiAgICB0aGlzLnByZXBhcmVET00oKTtcbiAgICB0aGlzLmhpZGVOYXRpdmVCYXJzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21CYXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMuYmluZEFycm93c0V2ZW50cygpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxuXG4gIGFuYWx5emVOYXRpdmUoKSB7XG4gICAgY29uc3QgeyByb290RWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHJvb3RQYXJlbnQgPSByb290RWwucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHRlc3RTY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlc3RTY3JvbGxTdHlsZSA9IHRlc3RTY3JvbGxFbC5zdHlsZTtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbFN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgcm9vdFBhcmVudC5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIGJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICBiYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSBiYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIGJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgUlRMXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkge1xuICAgICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgICB0aGlzLmlzUlRMID0gKHZOYXRpdmVTaXplID4gMCkgJiYgKHRlc3RDb250ZW50RWwub2Zmc2V0TGVmdCA+IHRlc3RTY3JvbGxFbC5vZmZzZXRMZWZ0KTtcblxuICAgICAgdGVzdFNjcm9sbEVsLnJlbW92ZUNoaWxkKHRlc3RDb250ZW50RWwpO1xuICAgIH1cblxuICAgIHJvb3RQYXJlbnQucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIC8vIG1hc2tFbFxuICAgIGNvbnN0IG1hc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hc2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fbWFza2ApO1xuICAgIGNvbnN0IG1hc2tTdHlsZSA9IG1hc2tFbC5zdHlsZTtcbiAgICBtYXNrU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza1N0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgY29uc3Qgc2Nyb2xsU3R5bGUgPSBzY3JvbGxFbC5zdHlsZTtcbiAgICBzY3JvbGxTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgc2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIHdoaWxlIChyb290RWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHNjcm9sbEVsLmFwcGVuZENoaWxkKHJvb3RFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICBtYXNrRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtYXNrRWwpO1xuXG4gICAgdGhpcy5tYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsO1xuICB9XG5cbiAgaGlkZU5hdGl2ZUJhcnMoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VDdXN0b20gJiYgKGJhci52Lm5hdGl2ZVNpemUgPT09IDAgfHwgYmFyLmgubmF0aXZlU2l6ZSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IHZGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIGNvbnN0IGhGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstaEZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7aEZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgfVxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBiYXIsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmICghKFxuICAgICAgYmFyLnYubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgYmFyLmgubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgdGhpcy5mb3JjZUN1c3RvbVxuICAgICkpIHJldHVybjtcblxuICAgIGNvbnN0IHZUcmFja0VsID0gdGhpcy5jcmVhdGVUcmFja0VsKCd2Jyk7XG4gICAgY29uc3QgdkJhckVsID0gdGhpcy5jcmVhdGVCYXJFbCgndicpO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSB0aGlzLmNyZWF0ZVRyYWNrRWwoJ2gnKTtcbiAgICBjb25zdCBoQmFyRWwgPSB0aGlzLmNyZWF0ZUJhckVsKCdoJyk7XG5cbiAgICBpZiAodGhpcy53aXRoQXJyb3dzKSB0aGlzLmFkZEN1c3RvbUFycm93cygpO1xuXG4gICAgdlRyYWNrRWwuYXBwZW5kQ2hpbGQodkJhckVsKTtcbiAgICBoVHJhY2tFbC5hcHBlbmRDaGlsZChoQmFyRWwpO1xuXG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKHZUcmFja0VsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoaFRyYWNrRWwpO1xuICB9XG5cbiAgY3JlYXRlVHJhY2tFbChheGlzKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgdHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLSR7YXhpc31gKTtcbiAgICB0cmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0cmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXJbYXhpc10udHJhY2tFbCA9IHRyYWNrRWw7XG5cbiAgICByZXR1cm4gdHJhY2tFbDtcbiAgfVxuXG4gIGNyZWF0ZUJhckVsKGF4aXMpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBiYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS0ke2F4aXN9YCk7XG4gICAgYmFyW2F4aXNdLmVsID0gYmFyRWw7XG5cbiAgICByZXR1cm4gYmFyRWw7XG4gIH1cblxuICBhZGRDdXN0b21BcnJvd3MoKSB7XG4gICAgY29uc3QgeyBiYXIsIHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICByb290RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc30tLWFycm93c2ApO1xuXG4gICAgY29uc3QgYXJyb3dUID0gdGhpcy5jcmVhdGVBcnJvd0VsKCd0Jyk7XG4gICAgY29uc3QgYXJyb3dCID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdiJyk7XG4gICAgY29uc3QgYXJyb3dMID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdsJyk7XG4gICAgY29uc3QgYXJyb3dSID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdyJyk7XG5cbiAgICBiYXIudi50cmFja0VsLmFwcGVuZENoaWxkKGFycm93VCk7XG4gICAgYmFyLnYudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd0IpO1xuICAgIGJhci5oLnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dMKTtcbiAgICBiYXIuaC50cmFja0VsLmFwcGVuZENoaWxkKGFycm93Uik7XG4gIH1cblxuICBjcmVhdGVBcnJvd0VsKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGFycm93IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgYXJyb3dFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFycm93RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Fycm93YCk7XG4gICAgYXJyb3dFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYXJyb3ctLSR7ZGlyZWN0aW9ufWApO1xuICAgIGFycm93RWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGFycm93RWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGFycm93W2RpcmVjdGlvbl0gPSBhcnJvd0VsO1xuXG4gICAgcmV0dXJuIGFycm93RWw7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDaGFuZ2UnLCB0aGlzLm9uTmVzdGVkQ2hhbmdlKTtcbiAgfVxuXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywgdGhpcy5vbk5lc3RlZENoYW5nZSk7XG4gIH1cblxuICBvblNjcm9sbFRocm90dGxlKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudC5vbk5hdGl2ZVNjcm9sbChldmVudCwgdGhpcy5yb290RWwpO1xuXG4gICAgaWYgKHRoaXMud2FpdC5zY3JvbGwpIHJldHVybjtcbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmLnNjcm9sbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuXG4gICAgdGhpcy53YWl0LnNjcm9sbCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy53YWl0LnJlc2l6ZSkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5yZXNpemUgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYucmVzaXplID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLndhaXQucmVzaXplID0gZmFsc2U7XG4gIH1cblxuICBvbk5lc3RlZENoYW5nZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICB1bmJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICBiaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvblZCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIudjtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25IQmFyTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLmg7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdmVVcGRhdGUoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlVXAoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBzY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF07XG4gIH1cblxuICBtb3ZlVXBkYXRlKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF0gLSBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0O1xuXG4gICAgdGhpcy5iYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKTtcbiAgfVxuXG4gIG1vdmVFbmQoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gbnVsbDtcbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSAwO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBudWxsO1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgfVxuXG4gIGJpbmRBcnJvd3NFdmVudHMoKSB7XG4gICAgY29uc3QgeyBhcnJvdyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvdy50KSBhcnJvdy50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRDbGljayk7XG4gICAgaWYgKGFycm93LmIpIGFycm93LmIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQkNsaWNrKTtcbiAgICBpZiAoYXJyb3cubCkgYXJyb3cubC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MQ2xpY2spO1xuICAgIGlmIChhcnJvdy5yKSBhcnJvdy5yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJDbGljayk7XG4gIH1cblxuICB1bmJpbmRBcnJvd3NFdmVudHMoKSB7XG4gICAgY29uc3QgeyBhcnJvdyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvdy50KSBhcnJvdy50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRDbGljayk7XG4gICAgaWYgKGFycm93LmIpIGFycm93LmIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQkNsaWNrKTtcbiAgICBpZiAoYXJyb3cubCkgYXJyb3cubC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MQ2xpY2spO1xuICAgIGlmIChhcnJvdy5yKSBhcnJvdy5yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJDbGljayk7XG4gIH1cblxuICBvblRDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxUb3AnLCAtdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25CQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsVG9wJywgdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25MQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsTGVmdCcsIC10aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvblJDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxMZWZ0JywgdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgc21vb3RoU2Nyb2xsVG8oc2Nyb2xsRGlyLCBvZmZzZXQpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsIH0gPSB0aGlzO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnc21vb3RoJztcbiAgICBzY3JvbGxFbFtzY3JvbGxEaXJdICs9IG9mZnNldDtcbiAgICBzY3JvbGxFbC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnNldEJhclNpemUoYmFyLnYpO1xuICAgIHRoaXMuc2V0QmFyU2l6ZShiYXIuaCk7XG4gIH1cblxuICBzZXRCYXJTaXplKGJhck9iaikge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCB9ID0gdGhpcztcblxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBzY3JvbGxFbFtiYXJPYmoubGVuZ3RoUHJvcF0gLSBiYXJPYmouZm9yY2VTaXplICogYmFyT2JqLmZvcmNlTXVsdGk7XG4gICAgY29uc3QgbWFza1NpemUgPSBtYXNrRWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICBiYXJPYmouc2Nyb2xsUmFuZ2UgPSBzY3JvbGxTaXplIC0gbWFza1NpemU7XG5cbiAgICBpZiAoYmFyT2JqLmVsKSB7XG4gICAgICBjb25zdCBmcmFjdCA9IG1hc2tTaXplIC8gc2Nyb2xsU2l6ZTtcbiAgICAgIGNvbnN0IHRyYWNrU2l6ZSA9IGJhck9iai50cmFja0VsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgICBiYXJPYmouc2l6ZUZyYWN0ID0gZnJhY3Q7XG4gICAgICBiYXJPYmoudHJhY2tTaXplID0gdHJhY2tTaXplO1xuICAgICAgYmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9IChiYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlW2Jhck9iai5zaXplUHJvcF0gPSBgJHtmcmFjdCAqIHRyYWNrU2l6ZX1weGA7XG4gICAgICBiYXJPYmoubW92ZVJhbmdlID0gdHJhY2tTaXplIC0gYmFyT2JqLmVsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IGJhciwgcHJvZ3Jlc3MsIGV2ZW50LCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBmcmFjdCA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICBpZiAoYmFyLnYuZWwpIGZyYWN0LnYgPSB0aGlzLnNldEJhclBvcyhiYXIudik7XG4gICAgaWYgKGJhci5oLmVsKSBmcmFjdC5oID0gdGhpcy5zZXRCYXJQb3MoYmFyLmgpO1xuXG4gICAgZXZlbnQub25TY3JvbGwoZnJhY3QsIHJvb3RFbCk7XG5cbiAgICBpZiAoZnJhY3QudiAhPT0gcHJvZ3Jlc3Mudikge1xuICAgICAgaWYgKGZyYWN0LnYgPD0gMCkgZXZlbnQub25Ub3Aocm9vdEVsKTtcbiAgICAgIGlmIChmcmFjdC52ID49IDEpIGV2ZW50Lm9uQm90dG9tKHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy52ID0gZnJhY3QudjtcbiAgICB9XG5cbiAgICBpZiAoZnJhY3QuaCAhPT0gcHJvZ3Jlc3MuaCkge1xuICAgICAgaWYgKGZyYWN0LmggPD0gMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoZnJhY3QuaCA+PSAxKSBldmVudC5vblJpZ2h0KHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy5oID0gZnJhY3QuaDtcbiAgICB9XG4gIH1cblxuICBzZXRCYXJQb3MoYmFyT2JqKSB7XG4gICAgY29uc3QgZnJhY3QgPSBiYXJPYmouc2Nyb2xsUmFuZ2UgPyAoXG4gICAgICB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXSAvIGJhck9iai5zY3JvbGxSYW5nZVxuICAgICkgOiAwO1xuXG4gICAgaWYgKGJhck9iai5lbCkge1xuICAgICAgY29uc3QgcG9zID0gZnJhY3QgKiAoYmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gYmFyT2JqLnNpemVGcmFjdCkpO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUke2Jhck9iai5heGlzfSgke3Bvc31weClgO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFjdDtcbiAgfVxuXG4gIGJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopIHtcbiAgICB0aGlzLnNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXSA9IChcbiAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgKyAoXG4gICAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxSYW5nZSAqIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiAvIGFjdGl2ZUJhck9iai5tb3ZlUmFuZ2VcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFBhcmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cuQ3VzdG9tRXZlbnQpIHJldHVybjtcbiAgICB0aGlzLnJvb3RFbC5wYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICAqIFJlY2FsY3VsYXRlcyBjb250ZW50IHNpemUgYW5kIHNldCBzY3JvbGxiYXJzIHNpemVcbiAgICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0QmFyc1NpemUoKTtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgICogRGVzdHJveXMgdGhlIGluc3RhbmNlIGFuZCByZXN0b3JlIG9yaWdpbmFsIGh0bWxcbiAgICAqL1xuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCwgcm9vdEVsLCBiYXIsIGFycm93LCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHRoaXMudW5iaW5kQXJyb3dzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgaWYgKGJhci52LnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIudi50cmFja0VsKTtcbiAgICAgIGJhci52LmVsID0gbnVsbDtcbiAgICAgIGJhci52LnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cudCA9IG51bGw7XG4gICAgICBhcnJvdy5iID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGJhci5oLnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIuaC50cmFja0VsKTtcbiAgICAgIGJhci5oLmVsID0gbnVsbDtcbiAgICAgIGJhci5oLnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cubCA9IG51bGw7XG4gICAgICBhcnJvdy5yID0gbnVsbDtcbiAgICB9XG5cbiAgICByb290RWwuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgY29uc3Qgcm9vdFN0eWxlID0gcm9vdEVsLnN0eWxlO1xuICAgIHJvb3RTdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIHJvb3RTdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHJvb3RTdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgIHdoaWxlIChzY3JvbGxFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXNrRWwpIHtcbiAgICAgICAgbWFza0VsLnJlbW92ZUNoaWxkKHNjcm9sbEVsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxFbCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1hc2tFbCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKG1hc2tFbCk7XG5cbiAgICAgIHRoaXMubWFza0VsID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVmcmVzaFBhcmVudHMpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9