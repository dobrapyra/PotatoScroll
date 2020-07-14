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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/js/index.js");


/* harmony default export */ __webpack_exports__["default"] = (_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PotatoScroll; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PotatoScroll = /*#__PURE__*/function () {
  _createClass(PotatoScroll, null, [{
    key: "create",
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
    key: "preinit",
    value: function preinit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var NOOP = function NOOP() {};

      var el = options.el,
          _options$maskEl = options.maskEl,
          maskEl = _options$maskEl === void 0 ? null : _options$maskEl,
          _options$scrollEl = options.scrollEl,
          scrollEl = _options$scrollEl === void 0 ? null : _options$scrollEl,
          _options$cssClass = options.cssClass,
          cssClass = _options$cssClass === void 0 ? 'potatoScroll' : _options$cssClass,
          _options$forceCustom = options.forceCustom,
          forceCustom = _options$forceCustom === void 0 ? false : _options$forceCustom,
          _options$forceSize = options.forceSize,
          forceSize = _options$forceSize === void 0 ? 20 : _options$forceSize,
          _options$withArrows = options.withArrows,
          withArrows = _options$withArrows === void 0 ? false : _options$withArrows,
          _options$arrowMove = options.arrowMove,
          arrowMove = _options$arrowMove === void 0 ? 40 : _options$arrowMove,
          _options$onNativeScro = options.onNativeScroll,
          onNativeScroll = _options$onNativeScro === void 0 ? NOOP : _options$onNativeScro,
          _options$onScroll = options.onScroll,
          onScroll = _options$onScroll === void 0 ? NOOP : _options$onScroll,
          _options$onTop = options.onTop,
          onTop = _options$onTop === void 0 ? NOOP : _options$onTop,
          _options$onBottom = options.onBottom,
          onBottom = _options$onBottom === void 0 ? NOOP : _options$onBottom,
          _options$onLeft = options.onLeft,
          onLeft = _options$onLeft === void 0 ? NOOP : _options$onLeft,
          _options$onRight = options.onRight,
          onRight = _options$onRight === void 0 ? NOOP : _options$onRight;
      if (!el) return false;
      this.rootEl = el;
      this.ownMaskEl = maskEl;
      this.ownScrollEl = scrollEl;
      this.cssClass = cssClass;
      this.forceCustom = forceCustom;
      this.forceSize = forceSize;
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
      this.ownTree = this.ownMaskEl !== null && this.ownScrollEl !== null;
      this.resetState();
      return true;
    }
  }, {
    key: "resetState",
    value: function resetState() {
      var forceCustom = this.forceCustom,
          forceSize = this.forceSize;
      this.wait = {
        scroll: false,
        resize: false
      };
      this.raf = {
        scroll: null,
        resize: null
      };
      this.progress = {
        v: null,
        h: null
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
        t: {
          el: null,
          disabled: false
        },
        b: {
          el: null,
          disabled: false
        },
        l: {
          el: null,
          disabled: false
        },
        r: {
          el: null,
          disabled: false
        }
      };
      this.isRTL = false;
    }
  }, {
    key: "bindThis",
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
    key: "initialize",
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
    key: "analyzeNative",
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
      if (hNativeSize > 0) bar.h.forceSize = 0; // detect RTL

      if (vNativeSize > 0) {
        var testContentEl = document.createElement('div');
        testScrollEl.appendChild(testContentEl);
        var testContentLeft = testContentEl.getBoundingClientRect().left;
        var testScrollLeft = testScrollEl.getBoundingClientRect().left;
        this.isRTL = vNativeSize > 0 && testContentLeft > testScrollLeft;
        testScrollEl.removeChild(testContentEl);
      }

      rootParent.removeChild(testScrollEl);
      this.isIE = /Trident\/.*rv:11|MSIE /.test(window.navigator.userAgent);
      this.isFF = /Firefox\//.test(window.navigator.userAgent);
      this.isIEandRTL = this.isIE && this.isRTL;
    }
  }, {
    key: "prepareDOM",
    value: function prepareDOM() {
      var rootEl = this.rootEl,
          cssClass = this.cssClass; // rootEl

      if (!this.ownTree) rootEl.classList.add(cssClass);
      var rootStyle = rootEl.style;
      rootStyle.overflow = 'visible';
      rootStyle.position = 'relative';
      rootStyle.display = 'flex'; // maskEl

      var maskEl = !this.ownTree ? document.createElement('div') : this.ownMaskEl;
      if (!this.ownTree) maskEl.classList.add("".concat(cssClass, "__mask"));
      var maskStyle = maskEl.style;
      maskStyle.flexGrow = 1;
      maskStyle.overflow = 'hidden';
      maskStyle.position = 'relative';
      maskStyle.display = 'flex';
      maskStyle.zIndex = '0'; // scrollEl

      var scrollEl = !this.ownTree ? document.createElement('div') : this.ownScrollEl;
      if (!this.ownTree) scrollEl.classList.add("".concat(cssClass, "__scroll"));
      var scrollStyle = scrollEl.style;
      scrollStyle.flexGrow = 1;
      scrollStyle.overflow = 'scroll';

      if (!this.ownTree) {
        while (rootEl.childNodes.length) {
          scrollEl.appendChild(rootEl.childNodes[0]);
        }

        maskEl.appendChild(scrollEl);
        rootEl.appendChild(maskEl);
      }

      this.maskEl = maskEl;
      this.scrollEl = scrollEl;
    }
  }, {
    key: "hideNativeBars",
    value: function hideNativeBars() {
      var scrollEl = this.scrollEl,
          bar = this.bar;

      if (this.forceCustom && (bar.v.nativeSize === 0 || bar.h.nativeSize === 0)) {
        var vForceSize = bar.v.forceSize;
        scrollEl.style.marginLeft = "".concat(-vForceSize, "px");
        scrollEl.style.paddingLeft = "".concat(vForceSize, "px");
        scrollEl.style.marginRight = "".concat(-vForceSize, "px");
        scrollEl.style.paddingRight = "".concat(vForceSize, "px");
        var hForceSize = bar.v.forceSize;
        scrollEl.style.marginBottom = "".concat(-hForceSize, "px");
        scrollEl.style.paddingBottom = "".concat(hForceSize, "px");
        return;
      }

      if (this.isRTL) {
        scrollEl.style.marginLeft = "".concat(-bar.h.nativeSize, "px");
      } else {
        scrollEl.style.marginRight = "".concat(-bar.h.nativeSize, "px");
      }

      scrollEl.style.marginBottom = "".concat(-bar.v.nativeSize, "px");
    }
  }, {
    key: "addCustomBars",
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
    key: "createTrackEl",
    value: function createTrackEl(axis) {
      var cssClass = this.cssClass,
          bar = this.bar;
      var trackEl = document.createElement('div');
      trackEl.classList.add("".concat(cssClass, "__track"));
      trackEl.classList.add("".concat(cssClass, "__track--").concat(axis));
      trackEl.style.position = 'absolute';
      trackEl.style.zIndex = '1';
      bar[axis].trackEl = trackEl;
      return trackEl;
    }
  }, {
    key: "createBarEl",
    value: function createBarEl(axis) {
      var cssClass = this.cssClass,
          bar = this.bar;
      var barEl = document.createElement('div');
      barEl.classList.add("".concat(cssClass, "__bar"));
      barEl.classList.add("".concat(cssClass, "__bar--").concat(axis));
      bar[axis].el = barEl;
      return barEl;
    }
  }, {
    key: "addCustomArrows",
    value: function addCustomArrows() {
      var bar = this.bar,
          rootEl = this.rootEl,
          cssClass = this.cssClass;
      rootEl.classList.add("".concat(cssClass, "--arrows"));
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
    key: "createArrowEl",
    value: function createArrowEl(direction) {
      var cssClass = this.cssClass,
          arrow = this.arrow;
      var arrowEl = document.createElement('div');
      arrowEl.classList.add("".concat(cssClass, "__arrow"));
      arrowEl.classList.add("".concat(cssClass, "__arrow--").concat(direction));
      arrowEl.style.position = 'absolute';
      arrowEl.style.zIndex = '1';
      arrow[direction].el = arrowEl;
      return arrowEl;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      if (this.scrollEl) this.scrollEl.addEventListener('scroll', this.onScrollThrottle);
      window.addEventListener('resize', this.onResizeThrottle);
      this.rootEl.addEventListener('PotatoScroll.nestedChange', this.onNestedChange);
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (this.scrollEl) this.scrollEl.removeEventListener('scroll', this.onScrollThrottle);
      window.removeEventListener('resize', this.onResizeThrottle);
      this.rootEl.removeEventListener('PotatoScroll.nestedChange', this.onNestedChange);
    }
  }, {
    key: "onScrollThrottle",
    value: function onScrollThrottle(event) {
      this.event.onNativeScroll(event, this.rootEl);
      if (this.wait.scroll) return;
      this.wait.scroll = true;
      this.raf.scroll = requestAnimationFrame(this.onScroll);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      this.setBarsPos();
      this.wait.scroll = false;
    }
  }, {
    key: "onResizeThrottle",
    value: function onResizeThrottle() {
      if (this.wait.resize) return;
      this.wait.resize = true;
      this.raf.resize = requestAnimationFrame(this.onResize);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.refresh();
      this.wait.resize = false;
    }
  }, {
    key: "onNestedChange",
    value: function onNestedChange() {
      this.refresh();
    }
  }, {
    key: "bindBarsEvents",
    value: function bindBarsEvents() {
      var bar = this.bar;
      if (bar.v.el) bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
      if (bar.h.el) bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
    }
  }, {
    key: "unbindBarsEvents",
    value: function unbindBarsEvents() {
      var bar = this.bar;
      if (bar.v.el) bar.v.el.removeEventListener('mousedown', this.onVBarMouseDown);
      if (bar.h.el) bar.h.el.removeEventListener('mousedown', this.onHBarMouseDown);
    }
  }, {
    key: "bindDocEvents",
    value: function bindDocEvents() {
      document.addEventListener('mousemove', this.onDocMouseMove);
      document.addEventListener('mouseup', this.onDocMouseUp);
      document.addEventListener('mouseleave', this.onDocMouseLeave);
    }
  }, {
    key: "unbindDocEvents",
    value: function unbindDocEvents() {
      document.removeEventListener('mousemove', this.onDocMouseMove);
      document.removeEventListener('mouseup', this.onDocMouseUp);
      document.removeEventListener('mouseleave', this.onDocMouseLeave);
    }
  }, {
    key: "onVBarMouseDown",
    value: function onVBarMouseDown(e) {
      e.preventDefault();
      this.activeBarObj = this.bar.v;
      this.moveBegin(e);
    }
  }, {
    key: "onHBarMouseDown",
    value: function onHBarMouseDown(e) {
      e.preventDefault();
      this.activeBarObj = this.bar.h;
      this.moveBegin(e);
    }
  }, {
    key: "onDocMouseMove",
    value: function onDocMouseMove(e) {
      this.moveUpdate(e);
    }
  }, {
    key: "onDocMouseUp",
    value: function onDocMouseUp(e) {
      this.moveEnd(e);
    }
  }, {
    key: "onDocMouseLeave",
    value: function onDocMouseLeave(e) {
      this.moveEnd(e);
    }
  }, {
    key: "getMoveValue",
    value: function getMoveValue(e, barObj) {
      if (barObj.axis === 'Y' || !this.isRTL) {
        return e[barObj.moveProp];
      }

      if (this.isIE) {
        return barObj.scrollRange - e[barObj.moveProp];
      }

      return e[barObj.moveProp];
    }
  }, {
    key: "moveBegin",
    value: function moveBegin(e) {
      var activeBarObj = this.activeBarObj,
          scrollEl = this.scrollEl;
      if (activeBarObj === null) return;
      scrollEl.style.userSelect = 'none';
      scrollEl.style.pointerEvents = 'none';
      this.bindDocEvents();
      activeBarObj.moveStart = this.getMoveValue(e, activeBarObj);
      activeBarObj.scrollBefore = scrollEl[activeBarObj.scrollProp];
    }
  }, {
    key: "moveUpdate",
    value: function moveUpdate(e) {
      var activeBarObj = this.activeBarObj;
      if (activeBarObj === null) return;
      activeBarObj.moveDiff = this.getMoveValue(e, activeBarObj) - activeBarObj.moveStart;
      this.barMoveToScroll(activeBarObj);
    }
  }, {
    key: "moveEnd",
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
    key: "bindArrowsEvents",
    value: function bindArrowsEvents() {
      var arrow = this.arrow;
      if (arrow.t.el) arrow.t.el.addEventListener('click', this.onTClick);
      if (arrow.b.el) arrow.b.el.addEventListener('click', this.onBClick);
      if (arrow.l.el) arrow.l.el.addEventListener('click', this.onLClick);
      if (arrow.r.el) arrow.r.el.addEventListener('click', this.onRClick);
    }
  }, {
    key: "unbindArrowsEvents",
    value: function unbindArrowsEvents() {
      var arrow = this.arrow;
      if (arrow.t.el) arrow.t.el.removeEventListener('click', this.onTClick);
      if (arrow.b.el) arrow.b.el.removeEventListener('click', this.onBClick);
      if (arrow.l.el) arrow.l.el.removeEventListener('click', this.onLClick);
      if (arrow.r.el) arrow.r.el.removeEventListener('click', this.onRClick);
    }
  }, {
    key: "onTClick",
    value: function onTClick() {
      this.smoothScrollTo('scrollTop', -this.arrowMove);
    }
  }, {
    key: "onBClick",
    value: function onBClick() {
      this.smoothScrollTo('scrollTop', this.arrowMove);
    }
  }, {
    key: "onLClick",
    value: function onLClick() {
      this.smoothScrollTo('scrollLeft', -this.arrowMove);
    }
  }, {
    key: "onRClick",
    value: function onRClick() {
      this.smoothScrollTo('scrollLeft', this.arrowMove);
    }
  }, {
    key: "smoothScrollTo",
    value: function smoothScrollTo(scrollDir, offset) {
      var scrollEl = this.scrollEl;
      scrollEl.style.scrollBehavior = 'smooth';
      scrollEl[scrollDir] += offset;
      scrollEl.style.scrollBehavior = '';
    }
  }, {
    key: "setBarsSize",
    value: function setBarsSize() {
      var bar = this.bar;
      this.setBarSize(bar.v);
      this.setBarSize(bar.h);
    }
  }, {
    key: "setBarSize",
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
        barObj.el.style[barObj.sizeProp] = "".concat(fract * trackSize, "px");
        barObj.moveRange = trackSize - barObj.el[barObj.measureProp];
      }
    }
  }, {
    key: "setBarsPos",
    value: function setBarsPos() {
      var bar = this.bar,
          event = this.event,
          rootEl = this.rootEl,
          arrow = this.arrow;
      var fract = {
        v: 0,
        h: 0
      };
      if (bar.v.el) fract.v = this.setBarPos(bar.v);
      if (bar.h.el) fract.h = this.setBarPos(bar.h);
      event.onScroll(fract, rootEl);
      this.axisEdges(fract, 'v', arrow.t, arrow.b);
      this.axisEdges(fract, 'h', arrow.l, arrow.r);
    }
  }, {
    key: "getScrollValue",
    value: function getScrollValue(barObj) {
      if (barObj.axis === 'Y' || !barObj.scrollRange || !this.isRTL) {
        return this.scrollEl[barObj.scrollProp];
      }

      if (this.isFF) {
        return this.scrollEl[barObj.scrollProp] + barObj.scrollRange;
      }

      if (this.isIE) {
        return barObj.scrollRange - this.scrollEl[barObj.scrollProp];
      }

      return this.scrollEl[barObj.scrollProp];
    }
  }, {
    key: "setBarPos",
    value: function setBarPos(barObj) {
      var scrollValue = this.getScrollValue(barObj);
      var fract = barObj.scrollRange ? scrollValue / barObj.scrollRange : 0;

      if (barObj.el) {
        var pos = fract * (barObj.trackSize * (1 - barObj.sizeFract));
        barObj.el.style.transform = "translate".concat(barObj.axis, "(").concat(pos, "px)");
      }

      return fract;
    }
  }, {
    key: "axisEdges",
    value: function axisEdges(fract, axis, arrowObj0, arrowObj1) {
      var progress = this.progress,
          event = this.event,
          rootEl = this.rootEl;

      if (fract[axis] !== progress[axis]) {
        progress[axis] = fract[axis];
        var isEdge0 = fract[axis] <= 0;
        if (isEdge0) event.onLeft(rootEl);
        if (arrowObj0.el) this.setArrowIf(arrowObj0, isEdge0);
        var isEdge1 = fract[axis] >= 1;
        if (isEdge1) event.onRight(rootEl);
        if (arrowObj1.el) this.setArrowIf(arrowObj1, isEdge1);
      }
    }
  }, {
    key: "setArrowIf",
    value: function setArrowIf(arrowObj, disabled) {
      var cssClass = this.cssClass;
      if (arrowObj.disabled === disabled) return;
      arrowObj.disabled = disabled;
      var disabledClass = "".concat(cssClass, "__arrow--disabled");

      if (disabled) {
        arrowObj.el.classList.add(disabledClass);
      } else {
        arrowObj.el.classList.remove(disabledClass);
      }
    }
  }, {
    key: "barMoveToScroll",
    value: function barMoveToScroll(activeBarObj) {
      this.scrollEl[activeBarObj.scrollProp] = activeBarObj.scrollBefore + activeBarObj.scrollRange * activeBarObj.moveDiff / activeBarObj.moveRange;
    }
  }, {
    key: "refreshParents",
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
    key: "refresh",
    value: function refresh() {
      this.setBarsSize();
      this.setBarsPos();
    }
    /**
      * Destroys the instance and restore original html
      */

  }, {
    key: "destroy",
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

      if (!this.ownTree) rootEl.classList.remove(cssClass);
      var rootStyle = rootEl.style;
      rootStyle.overflow = '';
      rootStyle.position = '';
      rootStyle.display = '';

      if (!this.ownTree) {
        if (scrollEl) {
          while (scrollEl.childNodes.length) {
            rootEl.appendChild(scrollEl.childNodes[0]);
          }

          if (maskEl) {
            maskEl.removeChild(scrollEl);
          }
        }

        if (maskEl) {
          rootEl.removeChild(maskEl);
        }
      }

      if (scrollEl) this.scrollEl = null;
      if (maskEl) this.maskEl = null;
      this.resetState();
      setTimeout(this.refreshParents);
    }
  }]);

  return PotatoScroll;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJpbnN0YW5jZU9wdGlvbiIsIk9iamVjdCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwibWFza0VsIiwic2Nyb2xsRWwiLCJjc3NDbGFzcyIsImZvcmNlQ3VzdG9tIiwiZm9yY2VTaXplIiwid2l0aEFycm93cyIsImFycm93TW92ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsIm93bk1hc2tFbCIsIm93blNjcm9sbEVsIiwiZXZlbnQiLCJvd25UcmVlIiwicmVzZXRTdGF0ZSIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiZGlzYWJsZWQiLCJiIiwibCIsInIiLCJpc1JUTCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDaGFuZ2UiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwib25UQ2xpY2siLCJvbkJDbGljayIsIm9uTENsaWNrIiwib25SQ2xpY2siLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJiaW5kQXJyb3dzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJyb290UGFyZW50IiwicGFyZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXN0U2Nyb2xsU3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0ZXN0Q29udGVudEVsIiwidGVzdENvbnRlbnRMZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGVzdFNjcm9sbExlZnQiLCJyZW1vdmVDaGlsZCIsImlzSUUiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNGRiIsImlzSUVhbmRSVEwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwibWFza1N0eWxlIiwiZmxleEdyb3ciLCJ6SW5kZXgiLCJzY3JvbGxTdHlsZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJ2Rm9yY2VTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJoRm9yY2VTaXplIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsInZUcmFja0VsIiwiY3JlYXRlVHJhY2tFbCIsInZCYXJFbCIsImNyZWF0ZUJhckVsIiwiaFRyYWNrRWwiLCJoQmFyRWwiLCJhZGRDdXN0b21BcnJvd3MiLCJiYXJFbCIsImFycm93VCIsImNyZWF0ZUFycm93RWwiLCJhcnJvd0IiLCJhcnJvd0wiLCJhcnJvd1IiLCJkaXJlY3Rpb24iLCJhcnJvd0VsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRCYXJzUG9zIiwiZSIsInByZXZlbnREZWZhdWx0IiwibW92ZUJlZ2luIiwibW92ZVVwZGF0ZSIsIm1vdmVFbmQiLCJiYXJPYmoiLCJzY3JvbGxSYW5nZSIsInVzZXJTZWxlY3QiLCJwb2ludGVyRXZlbnRzIiwiYmluZERvY0V2ZW50cyIsImdldE1vdmVWYWx1ZSIsImJhck1vdmVUb1Njcm9sbCIsInVuYmluZERvY0V2ZW50cyIsInNtb290aFNjcm9sbFRvIiwic2Nyb2xsRGlyIiwib2Zmc2V0Iiwic2Nyb2xsQmVoYXZpb3IiLCJzZXRCYXJTaXplIiwic2Nyb2xsU2l6ZSIsIm1hc2tTaXplIiwiZnJhY3QiLCJtb3ZlUmFuZ2UiLCJzZXRCYXJQb3MiLCJheGlzRWRnZXMiLCJzY3JvbGxWYWx1ZSIsImdldFNjcm9sbFZhbHVlIiwicG9zIiwidHJhbnNmb3JtIiwiYXJyb3dPYmowIiwiYXJyb3dPYmoxIiwiaXNFZGdlMCIsInNldEFycm93SWYiLCJpc0VkZ2UxIiwiYXJyb3dPYmoiLCJkaXNhYmxlZENsYXNzIiwicmVtb3ZlIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYnViYmxlcyIsInNldEJhcnNTaXplIiwidW5iaW5kQXJyb3dzRXZlbnRzIiwidW5iaW5kQmFyc0V2ZW50cyIsInVuYmluZEV2ZW50cyJd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QUNBNkIsZUFBUyxDQUFDMUIsUUFBVixHQUFxQixFQUFyQjtBQUNBMEIsZUFBUyxDQUFDQyxPQUFWLEdBQW9CLEVBQXBCOztBQUVBLFVBQUksQ0FBQyxLQUFLOUYsT0FBVixFQUFtQjtBQUNqQixZQUFJaEIsUUFBSixFQUFjO0FBQ1osaUJBQU9BLFFBQVEsQ0FBQ21ILFVBQVQsQ0FBb0JDLE1BQTNCLEVBQW1DO0FBQ2pDeEcsa0JBQU0sQ0FBQzRFLFdBQVAsQ0FBbUJ4RixRQUFRLENBQUNtSCxVQUFULENBQW9CLENBQXBCLENBQW5CO0FBQ0Q7O0FBRUQsY0FBSXBILE1BQUosRUFBWTtBQUNWQSxrQkFBTSxDQUFDb0csV0FBUCxDQUFtQm5HLFFBQW5CO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJRCxNQUFKLEVBQVk7QUFDVmEsZ0JBQU0sQ0FBQ3VGLFdBQVAsQ0FBbUJwRyxNQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUMsUUFBSixFQUFjLEtBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7QUFDZCxVQUFJRCxNQUFKLEVBQVksS0FBS0EsTUFBTCxHQUFjLElBQWQ7QUFFWixXQUFLa0IsVUFBTDtBQUVBd0QsZ0JBQVUsQ0FBQyxLQUFLbkIsY0FBTixDQUFWO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcnZCSCx1QyIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVpbGQuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9TY3JvbGwgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvdGF0b1Njcm9sbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGF0b1Njcm9sbCB7XG5cbiAgc3RhdGljIGNyZWF0ZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RvcixcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgIGVsID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VPcHRpb24gPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgICAgIGluc3RhbmNlT3B0aW9uLmVsID0gZWw7XG4gICAgICAgIHJldHVybiBuZXcgUG90YXRvU2Nyb2xsKGluc3RhbmNlT3B0aW9uKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghdGhpcy5wcmVpbml0KG9wdGlvbnMpKSByZXR1cm47XG5cbiAgICB0aGlzLmJpbmRUaGlzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBwcmVpbml0KG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IE5PT1AgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgbWFza0VsID0gbnVsbCxcbiAgICAgIHNjcm9sbEVsID0gbnVsbCxcbiAgICAgIGNzc0NsYXNzID0gJ3BvdGF0b1Njcm9sbCcsXG4gICAgICBmb3JjZUN1c3RvbSA9IGZhbHNlLFxuICAgICAgZm9yY2VTaXplID0gMjAsXG4gICAgICB3aXRoQXJyb3dzID0gZmFsc2UsXG4gICAgICBhcnJvd01vdmUgPSA0MCxcbiAgICAgIG9uTmF0aXZlU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uVG9wID0gTk9PUCxcbiAgICAgIG9uQm90dG9tID0gTk9PUCxcbiAgICAgIG9uTGVmdCA9IE5PT1AsXG4gICAgICBvblJpZ2h0ID0gTk9PUCxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsID0gZWw7XG4gICAgdGhpcy5vd25NYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5vd25TY3JvbGxFbCA9IHNjcm9sbEVsO1xuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcbiAgICB0aGlzLmZvcmNlQ3VzdG9tID0gZm9yY2VDdXN0b207XG4gICAgdGhpcy5mb3JjZVNpemUgPSBmb3JjZVNpemU7XG4gICAgdGhpcy53aXRoQXJyb3dzID0gd2l0aEFycm93cztcbiAgICB0aGlzLmFycm93TW92ZSA9IGFycm93TW92ZTtcblxuICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICBvbk5hdGl2ZVNjcm9sbCxcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgb25Ub3AsXG4gICAgICBvbkJvdHRvbSxcbiAgICAgIG9uTGVmdCxcbiAgICAgIG9uUmlnaHQsXG4gICAgfTtcblxuICAgIHRoaXMub3duVHJlZSA9ICh0aGlzLm93bk1hc2tFbCAhPT0gbnVsbCAmJiB0aGlzLm93blNjcm9sbEVsICE9PSBudWxsKTtcblxuICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXNldFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZm9yY2VDdXN0b20sIGZvcmNlU2l6ZSB9ID0gdGhpcztcblxuICAgIHRoaXMud2FpdCA9IHtcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXNpemU6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnJhZiA9IHtcbiAgICAgIHNjcm9sbDogbnVsbCxcbiAgICAgIHJlc2l6ZTogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IHtcbiAgICAgIHY6IG51bGwsXG4gICAgICBoOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLmJhciA9IHtcbiAgICAgIHY6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICB0cmFja0VsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgdHJhY2tTaXplOiAwLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFknLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsVG9wJyxcbiAgICAgICAgbGVuZ3RoUHJvcDogJ3Njcm9sbEhlaWdodCcsXG4gICAgICAgIG1lYXN1cmVQcm9wOiAnb2Zmc2V0SGVpZ2h0JyxcbiAgICAgICAgc2l6ZVByb3A6ICdoZWlnaHQnLFxuICAgICAgICBmb3JjZU11bHRpOiAxLFxuICAgICAgICBheGlzOiAnWScsXG4gICAgICB9LFxuICAgICAgaDoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIHRyYWNrRWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICB0cmFja1NpemU6IDAsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WCcsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxMZWZ0JyxcbiAgICAgICAgbGVuZ3RoUHJvcDogJ3Njcm9sbFdpZHRoJyxcbiAgICAgICAgbWVhc3VyZVByb3A6ICdvZmZzZXRXaWR0aCcsXG4gICAgICAgIHNpemVQcm9wOiAnd2lkdGgnLFxuICAgICAgICBmb3JjZU11bHRpOiAyLFxuICAgICAgICBheGlzOiAnWCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICB0aGlzLmFycm93ID0ge1xuICAgICAgdDoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGI6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBsOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcjoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5pc1JUTCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZFRoaXMoKSB7XG4gICAgdGhpcy5vblNjcm9sbFRocm90dGxlID0gdGhpcy5vblNjcm9sbFRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemVUaHJvdHRsZSA9IHRoaXMub25SZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uTmVzdGVkQ2hhbmdlID0gdGhpcy5vbk5lc3RlZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmcmVzaFBhcmVudHMgPSB0aGlzLnJlZnJlc2hQYXJlbnRzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRG9jTW91c2VNb3ZlID0gdGhpcy5vbkRvY01vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZVVwID0gdGhpcy5vbkRvY01vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VMZWF2ZSA9IHRoaXMub25Eb2NNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVkJhck1vdXNlRG93biA9IHRoaXMub25WQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhCYXJNb3VzZURvd24gPSB0aGlzLm9uSEJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblRDbGljayA9IHRoaXMub25UQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQkNsaWNrID0gdGhpcy5vbkJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25MQ2xpY2sgPSB0aGlzLm9uTENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJDbGljayA9IHRoaXMub25SQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplICYgcmVpbml0aWFsaXplIGluc3RhbmNlXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5hbmFseXplTmF0aXZlKCk7XG4gICAgdGhpcy5wcmVwYXJlRE9NKCk7XG4gICAgdGhpcy5oaWRlTmF0aXZlQmFycygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQmFycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHRoaXMuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLmJpbmRBcnJvd3NFdmVudHMoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5yZWZyZXNoUGFyZW50cyk7XG4gIH1cblxuICBhbmFseXplTmF0aXZlKCkge1xuICAgIGNvbnN0IHsgcm9vdEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCByb290UGFyZW50ID0gcm9vdEVsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXN0U2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXN0U2Nyb2xsU3R5bGUgPSB0ZXN0U2Nyb2xsRWwuc3R5bGU7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS50b3AgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5sZWZ0ID0gMDtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgIHJvb3RQYXJlbnQuYXBwZW5kQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIGNvbnN0IHZOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldFdpZHRoIC0gdGVzdFNjcm9sbEVsLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IGhOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldEhlaWdodCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG5cbiAgICBiYXIudi5uYXRpdmVTaXplID0gdk5hdGl2ZVNpemU7XG4gICAgYmFyLmgubmF0aXZlU2l6ZSA9IGhOYXRpdmVTaXplO1xuXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkgYmFyLnYuZm9yY2VTaXplID0gMDtcbiAgICBpZiAoaE5hdGl2ZVNpemUgPiAwKSBiYXIuaC5mb3JjZVNpemUgPSAwO1xuXG4gICAgLy8gZGV0ZWN0IFJUTFxuICAgIGlmICh2TmF0aXZlU2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IHRlc3RDb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlc3RTY3JvbGxFbC5hcHBlbmRDaGlsZCh0ZXN0Q29udGVudEVsKTtcblxuICAgICAgY29uc3QgdGVzdENvbnRlbnRMZWZ0ID0gdGVzdENvbnRlbnRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgY29uc3QgdGVzdFNjcm9sbExlZnQgPSB0ZXN0U2Nyb2xsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIHRoaXMuaXNSVEwgPSAodk5hdGl2ZVNpemUgPiAwKSAmJiAodGVzdENvbnRlbnRMZWZ0ID4gdGVzdFNjcm9sbExlZnQpO1xuXG4gICAgICB0ZXN0U2Nyb2xsRWwucmVtb3ZlQ2hpbGQodGVzdENvbnRlbnRFbCk7XG4gICAgfVxuXG4gICAgcm9vdFBhcmVudC5yZW1vdmVDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgdGhpcy5pc0lFID0gL1RyaWRlbnRcXC8uKnJ2OjExfE1TSUUgLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB0aGlzLmlzRkYgPSAvRmlyZWZveFxcLy8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICB0aGlzLmlzSUVhbmRSVEwgPSAodGhpcy5pc0lFICYmIHRoaXMuaXNSVEwpO1xuICB9XG5cbiAgcHJlcGFyZURPTSgpIHtcbiAgICBjb25zdCB7IHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICAvLyByb290RWxcbiAgICBpZiAoIXRoaXMub3duVHJlZSkgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIC8vIG1hc2tFbFxuICAgIGNvbnN0IG1hc2tFbCA9ICghdGhpcy5vd25UcmVlKSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDogdGhpcy5vd25NYXNrRWw7XG4gICAgaWYgKCF0aGlzLm93blRyZWUpIG1hc2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fbWFza2ApO1xuICAgIGNvbnN0IG1hc2tTdHlsZSA9IG1hc2tFbC5zdHlsZTtcbiAgICBtYXNrU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza1N0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSAoIXRoaXMub3duVHJlZSkgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA6IHRoaXMub3duU2Nyb2xsRWw7XG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHNjcm9sbEVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19zY3JvbGxgKTtcbiAgICBjb25zdCBzY3JvbGxTdHlsZSA9IHNjcm9sbEVsLnN0eWxlO1xuICAgIHNjcm9sbFN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBzY3JvbGxTdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHtcbiAgICAgIHdoaWxlIChyb290RWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgc2Nyb2xsRWwuYXBwZW5kQ2hpbGQocm9vdEVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBtYXNrRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwpO1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKG1hc2tFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsO1xuICB9XG5cbiAgaGlkZU5hdGl2ZUJhcnMoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VDdXN0b20gJiYgKGJhci52Lm5hdGl2ZVNpemUgPT09IDAgfHwgYmFyLmgubmF0aXZlU2l6ZSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IHZGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIGNvbnN0IGhGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstaEZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7aEZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgfVxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBiYXIsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmICghKFxuICAgICAgYmFyLnYubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgYmFyLmgubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgdGhpcy5mb3JjZUN1c3RvbVxuICAgICkpIHJldHVybjtcblxuICAgIGNvbnN0IHZUcmFja0VsID0gdGhpcy5jcmVhdGVUcmFja0VsKCd2Jyk7XG4gICAgY29uc3QgdkJhckVsID0gdGhpcy5jcmVhdGVCYXJFbCgndicpO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSB0aGlzLmNyZWF0ZVRyYWNrRWwoJ2gnKTtcbiAgICBjb25zdCBoQmFyRWwgPSB0aGlzLmNyZWF0ZUJhckVsKCdoJyk7XG5cbiAgICBpZiAodGhpcy53aXRoQXJyb3dzKSB0aGlzLmFkZEN1c3RvbUFycm93cygpO1xuXG4gICAgdlRyYWNrRWwuYXBwZW5kQ2hpbGQodkJhckVsKTtcbiAgICBoVHJhY2tFbC5hcHBlbmRDaGlsZChoQmFyRWwpO1xuXG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKHZUcmFja0VsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoaFRyYWNrRWwpO1xuICB9XG5cbiAgY3JlYXRlVHJhY2tFbChheGlzKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgdHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLSR7YXhpc31gKTtcbiAgICB0cmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0cmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXJbYXhpc10udHJhY2tFbCA9IHRyYWNrRWw7XG5cbiAgICByZXR1cm4gdHJhY2tFbDtcbiAgfVxuXG4gIGNyZWF0ZUJhckVsKGF4aXMpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBiYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS0ke2F4aXN9YCk7XG4gICAgYmFyW2F4aXNdLmVsID0gYmFyRWw7XG5cbiAgICByZXR1cm4gYmFyRWw7XG4gIH1cblxuICBhZGRDdXN0b21BcnJvd3MoKSB7XG4gICAgY29uc3QgeyBiYXIsIHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICByb290RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc30tLWFycm93c2ApO1xuXG4gICAgY29uc3QgYXJyb3dUID0gdGhpcy5jcmVhdGVBcnJvd0VsKCd0Jyk7XG4gICAgY29uc3QgYXJyb3dCID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdiJyk7XG4gICAgY29uc3QgYXJyb3dMID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdsJyk7XG4gICAgY29uc3QgYXJyb3dSID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdyJyk7XG5cbiAgICBiYXIudi50cmFja0VsLmFwcGVuZENoaWxkKGFycm93VCk7XG4gICAgYmFyLnYudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd0IpO1xuICAgIGJhci5oLnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dMKTtcbiAgICBiYXIuaC50cmFja0VsLmFwcGVuZENoaWxkKGFycm93Uik7XG4gIH1cblxuICBjcmVhdGVBcnJvd0VsKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGFycm93IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgYXJyb3dFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFycm93RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Fycm93YCk7XG4gICAgYXJyb3dFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYXJyb3ctLSR7ZGlyZWN0aW9ufWApO1xuICAgIGFycm93RWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGFycm93RWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGFycm93W2RpcmVjdGlvbl0uZWwgPSBhcnJvd0VsO1xuXG4gICAgcmV0dXJuIGFycm93RWw7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDaGFuZ2UnLCB0aGlzLm9uTmVzdGVkQ2hhbmdlKTtcbiAgfVxuXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywgdGhpcy5vbk5lc3RlZENoYW5nZSk7XG4gIH1cblxuICBvblNjcm9sbFRocm90dGxlKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudC5vbk5hdGl2ZVNjcm9sbChldmVudCwgdGhpcy5yb290RWwpO1xuXG4gICAgaWYgKHRoaXMud2FpdC5zY3JvbGwpIHJldHVybjtcbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmLnNjcm9sbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuXG4gICAgdGhpcy53YWl0LnNjcm9sbCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy53YWl0LnJlc2l6ZSkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5yZXNpemUgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYucmVzaXplID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLndhaXQucmVzaXplID0gZmFsc2U7XG4gIH1cblxuICBvbk5lc3RlZENoYW5nZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICB1bmJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICBiaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvblZCYXJNb3VzZURvd24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLnY7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uSEJhck1vdXNlRG93bihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW92ZVVwZGF0ZShlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VVcChlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBnZXRNb3ZlVmFsdWUoZSwgYmFyT2JqKSB7XG4gICAgaWYgKGJhck9iai5heGlzID09PSAnWScgfHwgIXRoaXMuaXNSVEwpIHtcbiAgICAgIHJldHVybiBlW2Jhck9iai5tb3ZlUHJvcF07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNJRSkge1xuICAgICAgcmV0dXJuIGJhck9iai5zY3JvbGxSYW5nZSAtIGVbYmFyT2JqLm1vdmVQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZVtiYXJPYmoubW92ZVByb3BdO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gdGhpcy5nZXRNb3ZlVmFsdWUoZSwgYWN0aXZlQmFyT2JqKTtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdO1xuICB9XG5cbiAgbW92ZVVwZGF0ZShlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmogfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gdGhpcy5nZXRNb3ZlVmFsdWUoZSwgYWN0aXZlQmFyT2JqKSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBudWxsO1xuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IDA7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgYmluZEFycm93c0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGFycm93IH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93LnQuZWwpIGFycm93LnQuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVENsaWNrKTtcbiAgICBpZiAoYXJyb3cuYi5lbCkgYXJyb3cuYi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CQ2xpY2spO1xuICAgIGlmIChhcnJvdy5sLmVsKSBhcnJvdy5sLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxDbGljayk7XG4gICAgaWYgKGFycm93LnIuZWwpIGFycm93LnIuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUkNsaWNrKTtcbiAgfVxuXG4gIHVuYmluZEFycm93c0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGFycm93IH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93LnQuZWwpIGFycm93LnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVENsaWNrKTtcbiAgICBpZiAoYXJyb3cuYi5lbCkgYXJyb3cuYi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CQ2xpY2spO1xuICAgIGlmIChhcnJvdy5sLmVsKSBhcnJvdy5sLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxDbGljayk7XG4gICAgaWYgKGFycm93LnIuZWwpIGFycm93LnIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUkNsaWNrKTtcbiAgfVxuXG4gIG9uVENsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbFRvcCcsIC10aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvbkJDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxUb3AnLCB0aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvbkxDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxMZWZ0JywgLXRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIG9uUkNsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbExlZnQnLCB0aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBzbW9vdGhTY3JvbGxUbyhzY3JvbGxEaXIsIG9mZnNldCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwgfSA9IHRoaXM7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdzbW9vdGgnO1xuICAgIHNjcm9sbEVsW3Njcm9sbERpcl0gKz0gb2Zmc2V0O1xuICAgIHNjcm9sbEVsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gIH1cblxuICBzZXRCYXJzU2l6ZSgpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcblxuICAgIHRoaXMuc2V0QmFyU2l6ZShiYXIudik7XG4gICAgdGhpcy5zZXRCYXJTaXplKGJhci5oKTtcbiAgfVxuXG4gIHNldEJhclNpemUoYmFyT2JqKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IHNjcm9sbEVsW2Jhck9iai5sZW5ndGhQcm9wXSAtIGJhck9iai5mb3JjZVNpemUgKiBiYXJPYmouZm9yY2VNdWx0aTtcbiAgICBjb25zdCBtYXNrU2l6ZSA9IG1hc2tFbFtiYXJPYmoubWVhc3VyZVByb3BdO1xuICAgIGJhck9iai5zY3JvbGxSYW5nZSA9IHNjcm9sbFNpemUgLSBtYXNrU2l6ZTtcblxuICAgIGlmIChiYXJPYmouZWwpIHtcbiAgICAgIGNvbnN0IGZyYWN0ID0gbWFza1NpemUgLyBzY3JvbGxTaXplO1xuICAgICAgY29uc3QgdHJhY2tTaXplID0gYmFyT2JqLnRyYWNrRWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICAgIGJhck9iai5zaXplRnJhY3QgPSBmcmFjdDtcbiAgICAgIGJhck9iai50cmFja1NpemUgPSB0cmFja1NpemU7XG4gICAgICBiYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKGJhck9iai5zaXplRnJhY3QgPT09IDEpID8gJ25vbmUnIDogJyc7XG4gICAgICBiYXJPYmouZWwuc3R5bGVbYmFyT2JqLnNpemVQcm9wXSA9IGAke2ZyYWN0ICogdHJhY2tTaXplfXB4YDtcbiAgICAgIGJhck9iai5tb3ZlUmFuZ2UgPSB0cmFja1NpemUgLSBiYXJPYmouZWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICB9XG4gIH1cblxuICBzZXRCYXJzUG9zKCkge1xuICAgIGNvbnN0IHsgYmFyLCBldmVudCwgcm9vdEVsLCBhcnJvdyB9ID0gdGhpcztcblxuICAgIGNvbnN0IGZyYWN0ID0ge1xuICAgICAgdjogMCxcbiAgICAgIGg6IDAsXG4gICAgfTtcblxuICAgIGlmIChiYXIudi5lbCkgZnJhY3QudiA9IHRoaXMuc2V0QmFyUG9zKGJhci52KTtcbiAgICBpZiAoYmFyLmguZWwpIGZyYWN0LmggPSB0aGlzLnNldEJhclBvcyhiYXIuaCk7XG5cbiAgICBldmVudC5vblNjcm9sbChmcmFjdCwgcm9vdEVsKTtcblxuICAgIHRoaXMuYXhpc0VkZ2VzKGZyYWN0LCAndicsIGFycm93LnQsIGFycm93LmIpO1xuICAgIHRoaXMuYXhpc0VkZ2VzKGZyYWN0LCAnaCcsIGFycm93LmwsIGFycm93LnIpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsVmFsdWUoYmFyT2JqKSB7XG4gICAgaWYgKGJhck9iai5heGlzID09PSAnWScgfHwgIWJhck9iai5zY3JvbGxSYW5nZSB8fCAhdGhpcy5pc1JUTCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsRWxbYmFyT2JqLnNjcm9sbFByb3BdO1xuICAgIH1cbiAgICAgIFxuICAgIGlmICh0aGlzLmlzRkYpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXSArIGJhck9iai5zY3JvbGxSYW5nZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0lFKSB7XG4gICAgICByZXR1cm4gYmFyT2JqLnNjcm9sbFJhbmdlIC0gdGhpcy5zY3JvbGxFbFtiYXJPYmouc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsRWxbYmFyT2JqLnNjcm9sbFByb3BdO1xuICB9XG5cbiAgc2V0QmFyUG9zKGJhck9iaikge1xuICAgIGxldCBzY3JvbGxWYWx1ZSA9IHRoaXMuZ2V0U2Nyb2xsVmFsdWUoYmFyT2JqKTtcblxuICAgIGNvbnN0IGZyYWN0ID0gYmFyT2JqLnNjcm9sbFJhbmdlID8gKFxuICAgICAgc2Nyb2xsVmFsdWUgLyBiYXJPYmouc2Nyb2xsUmFuZ2VcbiAgICApIDogMDtcblxuICAgIGlmIChiYXJPYmouZWwpIHtcbiAgICAgIGNvbnN0IHBvcyA9IGZyYWN0ICogKGJhck9iai50cmFja1NpemUgKiAoMSAtIGJhck9iai5zaXplRnJhY3QpKTtcbiAgICAgIGJhck9iai5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlJHtiYXJPYmouYXhpc30oJHtwb3N9cHgpYDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhY3Q7XG4gIH1cblxuICBheGlzRWRnZXMoZnJhY3QsIGF4aXMsIGFycm93T2JqMCwgYXJyb3dPYmoxKSB7XG4gICAgY29uc3QgeyBwcm9ncmVzcywgZXZlbnQsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmIChmcmFjdFtheGlzXSAhPT0gcHJvZ3Jlc3NbYXhpc10pIHtcbiAgICAgIHByb2dyZXNzW2F4aXNdID0gZnJhY3RbYXhpc107XG5cbiAgICAgIGNvbnN0IGlzRWRnZTAgPSBmcmFjdFtheGlzXSA8PSAwO1xuICAgICAgaWYgKGlzRWRnZTApIGV2ZW50Lm9uTGVmdChyb290RWwpO1xuICAgICAgaWYgKGFycm93T2JqMC5lbCkgdGhpcy5zZXRBcnJvd0lmKGFycm93T2JqMCwgaXNFZGdlMCk7XG5cbiAgICAgIGNvbnN0IGlzRWRnZTEgPSBmcmFjdFtheGlzXSA+PSAxO1xuICAgICAgaWYgKGlzRWRnZTEpIGV2ZW50Lm9uUmlnaHQocm9vdEVsKTtcbiAgICAgIGlmIChhcnJvd09iajEuZWwpIHRoaXMuc2V0QXJyb3dJZihhcnJvd09iajEsIGlzRWRnZTEpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFycm93SWYoYXJyb3dPYmosIGRpc2FibGVkKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvd09iai5kaXNhYmxlZCA9PT0gZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGFycm93T2JqLmRpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICBjb25zdCBkaXNhYmxlZENsYXNzID0gYCR7Y3NzQ2xhc3N9X19hcnJvdy0tZGlzYWJsZWRgO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgYXJyb3dPYmouZWwuY2xhc3NMaXN0LmFkZChkaXNhYmxlZENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyb3dPYmouZWwuY2xhc3NMaXN0LnJlbW92ZShkaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBiYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKSB7XG4gICAgdGhpcy5zY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF0gPSAoXG4gICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlICsgKFxuICAgICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsUmFuZ2UgKiBhY3RpdmVCYXJPYmoubW92ZURpZmYgLyBhY3RpdmVCYXJPYmoubW92ZVJhbmdlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hQYXJlbnRzKCkge1xuICAgIGlmICghd2luZG93LkN1c3RvbUV2ZW50KSByZXR1cm47XG4gICAgdGhpcy5yb290RWwucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnUG90YXRvU2Nyb2xsLm5lc3RlZENoYW5nZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBSZWNhbGN1bGF0ZXMgY29udGVudCBzaXplIGFuZCBzZXQgc2Nyb2xsYmFycyBzaXplXG4gICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldEJhcnNTaXplKCk7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG4gIH1cblxuICAvKipcbiAgICAqIERlc3Ryb3lzIHRoZSBpbnN0YW5jZSBhbmQgcmVzdG9yZSBvcmlnaW5hbCBodG1sXG4gICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwsIHJvb3RFbCwgYmFyLCBhcnJvdywgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnVuYmluZEFycm93c0V2ZW50cygpO1xuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIGlmIChiYXIudi50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLnYudHJhY2tFbCk7XG4gICAgICBiYXIudi5lbCA9IG51bGw7XG4gICAgICBiYXIudi50cmFja0VsID0gbnVsbDtcbiAgICAgIGFycm93LnQuZWwgPSBudWxsO1xuICAgICAgYXJyb3cuYi5lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChiYXIuaC50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLmgudHJhY2tFbCk7XG4gICAgICBiYXIuaC5lbCA9IG51bGw7XG4gICAgICBiYXIuaC50cmFja0VsID0gbnVsbDtcbiAgICAgIGFycm93LmwuZWwgPSBudWxsO1xuICAgICAgYXJyb3cuci5lbCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgIGlmICghdGhpcy5vd25UcmVlKSB7XG4gICAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgICAgd2hpbGUgKHNjcm9sbEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKHNjcm9sbEVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hc2tFbCkge1xuICAgICAgICAgIG1hc2tFbC5yZW1vdmVDaGlsZChzY3JvbGxFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hc2tFbCkge1xuICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQobWFza0VsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwgPSBudWxsO1xuICAgIGlmIChtYXNrRWwpIHRoaXMubWFza0VsID0gbnVsbDtcblxuICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==