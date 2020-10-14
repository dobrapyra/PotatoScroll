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

      if (this.isIE) {
        return barObj.scrollRange - this.scrollEl[barObj.scrollProp];
      }

      return this.scrollEl[barObj.scrollProp] + barObj.scrollRange;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJpbnN0YW5jZU9wdGlvbiIsIk9iamVjdCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwibWFza0VsIiwic2Nyb2xsRWwiLCJjc3NDbGFzcyIsImZvcmNlQ3VzdG9tIiwiZm9yY2VTaXplIiwid2l0aEFycm93cyIsImFycm93TW92ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsIm93bk1hc2tFbCIsIm93blNjcm9sbEVsIiwiZXZlbnQiLCJvd25UcmVlIiwicmVzZXRTdGF0ZSIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiZGlzYWJsZWQiLCJiIiwibCIsInIiLCJpc1JUTCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDaGFuZ2UiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwib25UQ2xpY2siLCJvbkJDbGljayIsIm9uTENsaWNrIiwib25SQ2xpY2siLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJiaW5kQXJyb3dzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJyb290UGFyZW50IiwicGFyZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXN0U2Nyb2xsU3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0ZXN0Q29udGVudEVsIiwidGVzdENvbnRlbnRMZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGVzdFNjcm9sbExlZnQiLCJyZW1vdmVDaGlsZCIsImlzSUUiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNJRWFuZFJUTCIsImNsYXNzTGlzdCIsImFkZCIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJtYXNrU3R5bGUiLCJmbGV4R3JvdyIsInpJbmRleCIsInNjcm9sbFN0eWxlIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInZGb3JjZVNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsImhGb3JjZVNpemUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidlRyYWNrRWwiLCJjcmVhdGVUcmFja0VsIiwidkJhckVsIiwiY3JlYXRlQmFyRWwiLCJoVHJhY2tFbCIsImhCYXJFbCIsImFkZEN1c3RvbUFycm93cyIsImJhckVsIiwiYXJyb3dUIiwiY3JlYXRlQXJyb3dFbCIsImFycm93QiIsImFycm93TCIsImFycm93UiIsImRpcmVjdGlvbiIsImFycm93RWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldEJhcnNQb3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJtb3ZlQmVnaW4iLCJtb3ZlVXBkYXRlIiwibW92ZUVuZCIsImJhck9iaiIsInNjcm9sbFJhbmdlIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiZ2V0TW92ZVZhbHVlIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwic21vb3RoU2Nyb2xsVG8iLCJzY3JvbGxEaXIiLCJvZmZzZXQiLCJzY3JvbGxCZWhhdmlvciIsInNldEJhclNpemUiLCJzY3JvbGxTaXplIiwibWFza1NpemUiLCJmcmFjdCIsIm1vdmVSYW5nZSIsInNldEJhclBvcyIsImF4aXNFZGdlcyIsInNjcm9sbFZhbHVlIiwiZ2V0U2Nyb2xsVmFsdWUiLCJwb3MiLCJ0cmFuc2Zvcm0iLCJhcnJvd09iajAiLCJhcnJvd09iajEiLCJpc0VkZ2UwIiwic2V0QXJyb3dJZiIsImlzRWRnZTEiLCJhcnJvd09iaiIsImRpc2FibGVkQ2xhc3MiLCJyZW1vdmUiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJidWJibGVzIiwic2V0QmFyc1NpemUiLCJ1bmJpbmRBcnJvd3NFdmVudHMiLCJ1bmJpbmRCYXJzRXZlbnRzIiwidW5iaW5kRXZlbnRzIl0sIm1hcHBp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M0IsRUFBbUM7QUFDakN2RyxrQkFBTSxDQUFDNEUsV0FBUCxDQUFtQnhGLFFBQVEsQ0FBQ2tILFVBQVQsQ0FBb0IsQ0FBcEIsQ0FBbkI7QUFDRDs7QUFFRCxjQUFJbkgsTUFBSixFQUFZO0FBQ1ZBLGtCQUFNLENBQUNvRyxXQUFQLENBQW1CbkcsUUFBbkI7QUFDRDtBQUNGOztBQUVELFlBQUlELE1BQUosRUFBWTtBQUNWYSxnQkFBTSxDQUFDdUYsV0FBUCxDQUFtQnBHLE1BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxRQUFKLEVBQWMsS0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNkLFVBQUlELE1BQUosRUFBWSxLQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUVaLFdBQUtrQixVQUFMO0FBRUF3RCxnQkFBVSxDQUFDLEtBQUtuQixjQUFOLENBQVY7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNodkJILHVDIiwiZmlsZSI6InBvdGF0by1zY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idWlsZC5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IFBvdGF0b1Njcm9sbCBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgUG90YXRvU2Nyb2xsO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG90YXRvU2Nyb2xsIHtcblxuICBzdGF0aWMgY3JlYXRlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdG9yLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgZWwgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZU9wdGlvbiA9IE9iamVjdChvcHRpb25zKTtcbiAgICAgICAgaW5zdGFuY2VPcHRpb24uZWwgPSBlbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3RhdG9TY3JvbGwoaW5zdGFuY2VPcHRpb24pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLnByZWluaXQob3B0aW9ucykpIHJldHVybjtcblxuICAgIHRoaXMuYmluZFRoaXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHByZWluaXQob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgTk9PUCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBtYXNrRWwgPSBudWxsLFxuICAgICAgc2Nyb2xsRWwgPSBudWxsLFxuICAgICAgY3NzQ2xhc3MgPSAncG90YXRvU2Nyb2xsJyxcbiAgICAgIGZvcmNlQ3VzdG9tID0gZmFsc2UsXG4gICAgICBmb3JjZVNpemUgPSAyMCxcbiAgICAgIHdpdGhBcnJvd3MgPSBmYWxzZSxcbiAgICAgIGFycm93TW92ZSA9IDQwLFxuICAgICAgb25OYXRpdmVTY3JvbGwgPSBOT09QLFxuICAgICAgb25TY3JvbGwgPSBOT09QLFxuICAgICAgb25Ub3AgPSBOT09QLFxuICAgICAgb25Cb3R0b20gPSBOT09QLFxuICAgICAgb25MZWZ0ID0gTk9PUCxcbiAgICAgIG9uUmlnaHQgPSBOT09QLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5yb290RWwgPSBlbDtcbiAgICB0aGlzLm93bk1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLm93blNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcbiAgICB0aGlzLmZvcmNlU2l6ZSA9IGZvcmNlU2l6ZTtcbiAgICB0aGlzLndpdGhBcnJvd3MgPSB3aXRoQXJyb3dzO1xuICAgIHRoaXMuYXJyb3dNb3ZlID0gYXJyb3dNb3ZlO1xuXG4gICAgdGhpcy5ldmVudCA9IHtcbiAgICAgIG9uTmF0aXZlU2Nyb2xsLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBvblRvcCxcbiAgICAgIG9uQm90dG9tLFxuICAgICAgb25MZWZ0LFxuICAgICAgb25SaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy5vd25UcmVlID0gKHRoaXMub3duTWFza0VsICE9PSBudWxsICYmIHRoaXMub3duU2Nyb2xsRWwgIT09IG51bGwpO1xuXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmb3JjZUN1c3RvbSwgZm9yY2VTaXplIH0gPSB0aGlzO1xuXG4gICAgdGhpcy53YWl0ID0ge1xuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHJlc2l6ZTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMucmFmID0ge1xuICAgICAgc2Nyb2xsOiBudWxsLFxuICAgICAgcmVzaXplOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgdjogbnVsbCxcbiAgICAgIGg6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuYmFyID0ge1xuICAgICAgdjoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIHRyYWNrRWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICB0cmFja1NpemU6IDAsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WScsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxUb3AnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsSGVpZ2h0JyxcbiAgICAgICAgbWVhc3VyZVByb3A6ICdvZmZzZXRIZWlnaHQnLFxuICAgICAgICBzaXplUHJvcDogJ2hlaWdodCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDEsXG4gICAgICAgIGF4aXM6ICdZJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgdHJhY2tFbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsV2lkdGgnLFxuICAgICAgICBtZWFzdXJlUHJvcDogJ29mZnNldFdpZHRoJyxcbiAgICAgICAgc2l6ZVByb3A6ICd3aWR0aCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDIsXG4gICAgICAgIGF4aXM6ICdYJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHRoaXMuYXJyb3cgPSB7XG4gICAgICB0OiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGw6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmlzUlRMID0gZmFsc2U7XG4gIH1cblxuICBiaW5kVGhpcygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZVRocm90dGxlID0gdGhpcy5vblJlc2l6ZVRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25OZXN0ZWRDaGFuZ2UgPSB0aGlzLm9uTmVzdGVkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoUGFyZW50cyA9IHRoaXMucmVmcmVzaFBhcmVudHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25Eb2NNb3VzZU1vdmUgPSB0aGlzLm9uRG9jTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlVXAgPSB0aGlzLm9uRG9jTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZUxlYXZlID0gdGhpcy5vbkRvY01vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25WQmFyTW91c2VEb3duID0gdGhpcy5vblZCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSEJhck1vdXNlRG93biA9IHRoaXMub25IQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVENsaWNrID0gdGhpcy5vblRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CQ2xpY2sgPSB0aGlzLm9uQkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxDbGljayA9IHRoaXMub25MQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUkNsaWNrID0gdGhpcy5vblJDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgJiByZWluaXRpYWxpemUgaW5zdGFuY2VcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFuYWx5emVOYXRpdmUoKTtcbiAgICB0aGlzLnByZXBhcmVET00oKTtcbiAgICB0aGlzLmhpZGVOYXRpdmVCYXJzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21CYXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMuYmluZEFycm93c0V2ZW50cygpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxuXG4gIGFuYWx5emVOYXRpdmUoKSB7XG4gICAgY29uc3QgeyByb290RWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHJvb3RQYXJlbnQgPSByb290RWwucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHRlc3RTY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlc3RTY3JvbGxTdHlsZSA9IHRlc3RTY3JvbGxFbC5zdHlsZTtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbFN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgcm9vdFBhcmVudC5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIGJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICBiYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSBiYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIGJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgUlRMXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkge1xuICAgICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgICBjb25zdCB0ZXN0Q29udGVudExlZnQgPSB0ZXN0Q29udGVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBjb25zdCB0ZXN0U2Nyb2xsTGVmdCA9IHRlc3RTY3JvbGxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgdGhpcy5pc1JUTCA9ICh2TmF0aXZlU2l6ZSA+IDApICYmICh0ZXN0Q29udGVudExlZnQgPiB0ZXN0U2Nyb2xsTGVmdCk7XG5cbiAgICAgIHRlc3RTY3JvbGxFbC5yZW1vdmVDaGlsZCh0ZXN0Q29udGVudEVsKTtcbiAgICB9XG5cbiAgICByb290UGFyZW50LnJlbW92ZUNoaWxkKHRlc3RTY3JvbGxFbCk7XG5cbiAgICB0aGlzLmlzSUUgPSAvVHJpZGVudFxcLy4qcnY6MTF8TVNJRSAvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgdGhpcy5pc0lFYW5kUlRMID0gKHRoaXMuaXNJRSAmJiB0aGlzLmlzUlRMKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHJvb3RFbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIHJvb3RTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvLyBtYXNrRWxcbiAgICBjb25zdCBtYXNrRWwgPSAoIXRoaXMub3duVHJlZSkgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA6IHRoaXMub3duTWFza0VsO1xuICAgIGlmICghdGhpcy5vd25UcmVlKSBtYXNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX21hc2tgKTtcbiAgICBjb25zdCBtYXNrU3R5bGUgPSBtYXNrRWwuc3R5bGU7XG4gICAgbWFza1N0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBtYXNrU3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBtYXNrU3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIG1hc2tTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1hc2tTdHlsZS56SW5kZXggPSAnMCc7XG5cbiAgICAvLyBzY3JvbGxFbFxuICAgIGNvbnN0IHNjcm9sbEVsID0gKCF0aGlzLm93blRyZWUpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiB0aGlzLm93blNjcm9sbEVsO1xuICAgIGlmICghdGhpcy5vd25UcmVlKSBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgY29uc3Qgc2Nyb2xsU3R5bGUgPSBzY3JvbGxFbC5zdHlsZTtcbiAgICBzY3JvbGxTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgc2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIGlmICghdGhpcy5vd25UcmVlKSB7XG4gICAgICB3aGlsZSAocm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHNjcm9sbEVsLmFwcGVuZENoaWxkKHJvb3RFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cblxuICAgICAgbWFza0VsLmFwcGVuZENoaWxkKHNjcm9sbEVsKTtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtYXNrRWwpO1xuICAgIH1cblxuICAgIHRoaXMubWFza0VsID0gbWFza0VsO1xuICAgIHRoaXMuc2Nyb2xsRWwgPSBzY3JvbGxFbDtcbiAgfVxuXG4gIGhpZGVOYXRpdmVCYXJzKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIGJhciB9ID0gdGhpcztcblxuICAgIGlmICh0aGlzLmZvcmNlQ3VzdG9tICYmIChiYXIudi5uYXRpdmVTaXplID09PSAwIHx8IGJhci5oLm5hdGl2ZVNpemUgPT09IDApKSB7XG4gICAgICBjb25zdCB2Rm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuXG4gICAgICBjb25zdCBoRm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWhGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke2hGb3JjZVNpemV9cHhgO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSVEwpIHtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIH1cbiAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstYmFyLnYubmF0aXZlU2l6ZX1weGA7XG4gIH1cblxuICBhZGRDdXN0b21CYXJzKCkge1xuICAgIGNvbnN0IHsgYmFyLCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBpZiAoIShcbiAgICAgIGJhci52Lm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIGJhci5oLm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIHRoaXMuZm9yY2VDdXN0b21cbiAgICApKSByZXR1cm47XG5cbiAgICBjb25zdCB2VHJhY2tFbCA9IHRoaXMuY3JlYXRlVHJhY2tFbCgndicpO1xuICAgIGNvbnN0IHZCYXJFbCA9IHRoaXMuY3JlYXRlQmFyRWwoJ3YnKTtcblxuICAgIGNvbnN0IGhUcmFja0VsID0gdGhpcy5jcmVhdGVUcmFja0VsKCdoJyk7XG4gICAgY29uc3QgaEJhckVsID0gdGhpcy5jcmVhdGVCYXJFbCgnaCcpO1xuXG4gICAgaWYgKHRoaXMud2l0aEFycm93cykgdGhpcy5hZGRDdXN0b21BcnJvd3MoKTtcblxuICAgIHZUcmFja0VsLmFwcGVuZENoaWxkKHZCYXJFbCk7XG4gICAgaFRyYWNrRWwuYXBwZW5kQ2hpbGQoaEJhckVsKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZCh2VHJhY2tFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGhUcmFja0VsKTtcbiAgfVxuXG4gIGNyZWF0ZVRyYWNrRWwoYXhpcykge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIHRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrLS0ke2F4aXN9YCk7XG4gICAgdHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyW2F4aXNdLnRyYWNrRWwgPSB0cmFja0VsO1xuXG4gICAgcmV0dXJuIHRyYWNrRWw7XG4gIH1cblxuICBjcmVhdGVCYXJFbChheGlzKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgYmFyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgYmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0tJHtheGlzfWApO1xuICAgIGJhcltheGlzXS5lbCA9IGJhckVsO1xuXG4gICAgcmV0dXJuIGJhckVsO1xuICB9XG5cbiAgYWRkQ3VzdG9tQXJyb3dzKCkge1xuICAgIGNvbnN0IHsgYmFyLCByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9LS1hcnJvd3NgKTtcblxuICAgIGNvbnN0IGFycm93VCA9IHRoaXMuY3JlYXRlQXJyb3dFbCgndCcpO1xuICAgIGNvbnN0IGFycm93QiA9IHRoaXMuY3JlYXRlQXJyb3dFbCgnYicpO1xuICAgIGNvbnN0IGFycm93TCA9IHRoaXMuY3JlYXRlQXJyb3dFbCgnbCcpO1xuICAgIGNvbnN0IGFycm93UiA9IHRoaXMuY3JlYXRlQXJyb3dFbCgncicpO1xuXG4gICAgYmFyLnYudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd1QpO1xuICAgIGJhci52LnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dCKTtcbiAgICBiYXIuaC50cmFja0VsLmFwcGVuZENoaWxkKGFycm93TCk7XG4gICAgYmFyLmgudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd1IpO1xuICB9XG5cbiAgY3JlYXRlQXJyb3dFbChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBhcnJvdyB9ID0gdGhpcztcblxuICAgIGNvbnN0IGFycm93RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnJvd0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19hcnJvd2ApO1xuICAgIGFycm93RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Fycm93LS0ke2RpcmVjdGlvbn1gKTtcbiAgICBhcnJvd0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBhcnJvd0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBhcnJvd1tkaXJlY3Rpb25dLmVsID0gYXJyb3dFbDtcblxuICAgIHJldHVybiBhcnJvd0VsO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5hZGRFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywgdGhpcy5vbk5lc3RlZENoYW5nZSk7XG4gIH1cblxuICB1bmJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuXG4gICAgdGhpcy5yb290RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENoYW5nZScsIHRoaXMub25OZXN0ZWRDaGFuZ2UpO1xuICB9XG5cbiAgb25TY3JvbGxUaHJvdHRsZShldmVudCkge1xuICAgIHRoaXMuZXZlbnQub25OYXRpdmVTY3JvbGwoZXZlbnQsIHRoaXMucm9vdEVsKTtcblxuICAgIGlmICh0aGlzLndhaXQuc2Nyb2xsKSByZXR1cm47XG4gICAgdGhpcy53YWl0LnNjcm9sbCA9IHRydWU7XG5cbiAgICB0aGlzLnJhZi5zY3JvbGwgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbCk7XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcblxuICAgIHRoaXMud2FpdC5zY3JvbGwgPSBmYWxzZTtcbiAgfVxuXG4gIG9uUmVzaXplVGhyb3R0bGUoKSB7XG4gICAgaWYgKHRoaXMud2FpdC5yZXNpemUpIHJldHVybjtcbiAgICB0aGlzLndhaXQucmVzaXplID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmLnJlc2l6ZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgdGhpcy53YWl0LnJlc2l6ZSA9IGZhbHNlO1xuICB9XG5cbiAgb25OZXN0ZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBiaW5kQmFyc0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcblxuICAgIGlmIChiYXIudi5lbCkgYmFyLnYuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZCYXJNb3VzZURvd24pO1xuICAgIGlmIChiYXIuaC5lbCkgYmFyLmguZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkhCYXJNb3VzZURvd24pO1xuICB9XG5cbiAgdW5iaW5kQmFyc0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcblxuICAgIGlmIChiYXIudi5lbCkgYmFyLnYuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZCYXJNb3VzZURvd24pO1xuICAgIGlmIChiYXIuaC5lbCkgYmFyLmguZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkhCYXJNb3VzZURvd24pO1xuICB9XG5cbiAgYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICB1bmJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgb25WQmFyTW91c2VEb3duKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci52O1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkhCYXJNb3VzZURvd24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLmg7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdmVVcGRhdGUoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlVXAoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgZ2V0TW92ZVZhbHVlKGUsIGJhck9iaikge1xuICAgIGlmIChiYXJPYmouYXhpcyA9PT0gJ1knIHx8ICF0aGlzLmlzUlRMKSB7XG4gICAgICByZXR1cm4gZVtiYXJPYmoubW92ZVByb3BdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzSUUpIHtcbiAgICAgIHJldHVybiBiYXJPYmouc2Nyb2xsUmFuZ2UgLSBlW2Jhck9iai5tb3ZlUHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIGVbYmFyT2JqLm1vdmVQcm9wXTtcbiAgfVxuXG4gIG1vdmVCZWdpbihlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIHRoaXMuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IHRoaXMuZ2V0TW92ZVZhbHVlKGUsIGFjdGl2ZUJhck9iaik7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IHNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXTtcbiAgfVxuXG4gIG1vdmVVcGRhdGUoZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IHRoaXMuZ2V0TW92ZVZhbHVlKGUsIGFjdGl2ZUJhck9iaikgLSBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0O1xuXG4gICAgdGhpcy5iYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKTtcbiAgfVxuXG4gIG1vdmVFbmQoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gbnVsbDtcbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSAwO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBudWxsO1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgfVxuXG4gIGJpbmRBcnJvd3NFdmVudHMoKSB7XG4gICAgY29uc3QgeyBhcnJvdyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvdy50LmVsKSBhcnJvdy50LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRDbGljayk7XG4gICAgaWYgKGFycm93LmIuZWwpIGFycm93LmIuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQkNsaWNrKTtcbiAgICBpZiAoYXJyb3cubC5lbCkgYXJyb3cubC5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MQ2xpY2spO1xuICAgIGlmIChhcnJvdy5yLmVsKSBhcnJvdy5yLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJDbGljayk7XG4gIH1cblxuICB1bmJpbmRBcnJvd3NFdmVudHMoKSB7XG4gICAgY29uc3QgeyBhcnJvdyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvdy50LmVsKSBhcnJvdy50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRDbGljayk7XG4gICAgaWYgKGFycm93LmIuZWwpIGFycm93LmIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQkNsaWNrKTtcbiAgICBpZiAoYXJyb3cubC5lbCkgYXJyb3cubC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MQ2xpY2spO1xuICAgIGlmIChhcnJvdy5yLmVsKSBhcnJvdy5yLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJDbGljayk7XG4gIH1cblxuICBvblRDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxUb3AnLCAtdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25CQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsVG9wJywgdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25MQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsTGVmdCcsIC10aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvblJDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxMZWZ0JywgdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgc21vb3RoU2Nyb2xsVG8oc2Nyb2xsRGlyLCBvZmZzZXQpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsIH0gPSB0aGlzO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnc21vb3RoJztcbiAgICBzY3JvbGxFbFtzY3JvbGxEaXJdICs9IG9mZnNldDtcbiAgICBzY3JvbGxFbC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnNldEJhclNpemUoYmFyLnYpO1xuICAgIHRoaXMuc2V0QmFyU2l6ZShiYXIuaCk7XG4gIH1cblxuICBzZXRCYXJTaXplKGJhck9iaikge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCB9ID0gdGhpcztcblxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBzY3JvbGxFbFtiYXJPYmoubGVuZ3RoUHJvcF0gLSBiYXJPYmouZm9yY2VTaXplICogYmFyT2JqLmZvcmNlTXVsdGk7XG4gICAgY29uc3QgbWFza1NpemUgPSBtYXNrRWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICBiYXJPYmouc2Nyb2xsUmFuZ2UgPSBzY3JvbGxTaXplIC0gbWFza1NpemU7XG5cbiAgICBpZiAoYmFyT2JqLmVsKSB7XG4gICAgICBjb25zdCBmcmFjdCA9IG1hc2tTaXplIC8gc2Nyb2xsU2l6ZTtcbiAgICAgIGNvbnN0IHRyYWNrU2l6ZSA9IGJhck9iai50cmFja0VsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgICBiYXJPYmouc2l6ZUZyYWN0ID0gZnJhY3Q7XG4gICAgICBiYXJPYmoudHJhY2tTaXplID0gdHJhY2tTaXplO1xuICAgICAgYmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9IChiYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlW2Jhck9iai5zaXplUHJvcF0gPSBgJHtmcmFjdCAqIHRyYWNrU2l6ZX1weGA7XG4gICAgICBiYXJPYmoubW92ZVJhbmdlID0gdHJhY2tTaXplIC0gYmFyT2JqLmVsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IGJhciwgZXZlbnQsIHJvb3RFbCwgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBmcmFjdCA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICBpZiAoYmFyLnYuZWwpIGZyYWN0LnYgPSB0aGlzLnNldEJhclBvcyhiYXIudik7XG4gICAgaWYgKGJhci5oLmVsKSBmcmFjdC5oID0gdGhpcy5zZXRCYXJQb3MoYmFyLmgpO1xuXG4gICAgZXZlbnQub25TY3JvbGwoZnJhY3QsIHJvb3RFbCk7XG5cbiAgICB0aGlzLmF4aXNFZGdlcyhmcmFjdCwgJ3YnLCBhcnJvdy50LCBhcnJvdy5iKTtcbiAgICB0aGlzLmF4aXNFZGdlcyhmcmFjdCwgJ2gnLCBhcnJvdy5sLCBhcnJvdy5yKTtcbiAgfVxuXG4gIGdldFNjcm9sbFZhbHVlKGJhck9iaikge1xuICAgIGlmIChiYXJPYmouYXhpcyA9PT0gJ1knIHx8ICFiYXJPYmouc2Nyb2xsUmFuZ2UgfHwgIXRoaXMuaXNSVEwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0lFKSB7XG4gICAgICByZXR1cm4gYmFyT2JqLnNjcm9sbFJhbmdlIC0gdGhpcy5zY3JvbGxFbFtiYXJPYmouc2Nyb2xsUHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2Nyb2xsRWxbYmFyT2JqLnNjcm9sbFByb3BdICsgYmFyT2JqLnNjcm9sbFJhbmdlO1xuICB9XG5cbiAgc2V0QmFyUG9zKGJhck9iaikge1xuICAgIGxldCBzY3JvbGxWYWx1ZSA9IHRoaXMuZ2V0U2Nyb2xsVmFsdWUoYmFyT2JqKTtcblxuICAgIGNvbnN0IGZyYWN0ID0gYmFyT2JqLnNjcm9sbFJhbmdlID8gKFxuICAgICAgc2Nyb2xsVmFsdWUgLyBiYXJPYmouc2Nyb2xsUmFuZ2VcbiAgICApIDogMDtcblxuICAgIGlmIChiYXJPYmouZWwpIHtcbiAgICAgIGNvbnN0IHBvcyA9IGZyYWN0ICogKGJhck9iai50cmFja1NpemUgKiAoMSAtIGJhck9iai5zaXplRnJhY3QpKTtcbiAgICAgIGJhck9iai5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlJHtiYXJPYmouYXhpc30oJHtwb3N9cHgpYDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnJhY3Q7XG4gIH1cblxuICBheGlzRWRnZXMoZnJhY3QsIGF4aXMsIGFycm93T2JqMCwgYXJyb3dPYmoxKSB7XG4gICAgY29uc3QgeyBwcm9ncmVzcywgZXZlbnQsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmIChmcmFjdFtheGlzXSAhPT0gcHJvZ3Jlc3NbYXhpc10pIHtcbiAgICAgIHByb2dyZXNzW2F4aXNdID0gZnJhY3RbYXhpc107XG5cbiAgICAgIGNvbnN0IGlzRWRnZTAgPSBmcmFjdFtheGlzXSA8PSAwO1xuICAgICAgaWYgKGlzRWRnZTApIGV2ZW50Lm9uTGVmdChyb290RWwpO1xuICAgICAgaWYgKGFycm93T2JqMC5lbCkgdGhpcy5zZXRBcnJvd0lmKGFycm93T2JqMCwgaXNFZGdlMCk7XG5cbiAgICAgIGNvbnN0IGlzRWRnZTEgPSBmcmFjdFtheGlzXSA+PSAxO1xuICAgICAgaWYgKGlzRWRnZTEpIGV2ZW50Lm9uUmlnaHQocm9vdEVsKTtcbiAgICAgIGlmIChhcnJvd09iajEuZWwpIHRoaXMuc2V0QXJyb3dJZihhcnJvd09iajEsIGlzRWRnZTEpO1xuICAgIH1cbiAgfVxuXG4gIHNldEFycm93SWYoYXJyb3dPYmosIGRpc2FibGVkKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvd09iai5kaXNhYmxlZCA9PT0gZGlzYWJsZWQpIHJldHVybjtcblxuICAgIGFycm93T2JqLmRpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICBjb25zdCBkaXNhYmxlZENsYXNzID0gYCR7Y3NzQ2xhc3N9X19hcnJvdy0tZGlzYWJsZWRgO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgYXJyb3dPYmouZWwuY2xhc3NMaXN0LmFkZChkaXNhYmxlZENsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJyb3dPYmouZWwuY2xhc3NMaXN0LnJlbW92ZShkaXNhYmxlZENsYXNzKTtcbiAgICB9XG4gIH1cblxuICBiYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKSB7XG4gICAgdGhpcy5zY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF0gPSAoXG4gICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlICsgKFxuICAgICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsUmFuZ2UgKiBhY3RpdmVCYXJPYmoubW92ZURpZmYgLyBhY3RpdmVCYXJPYmoubW92ZVJhbmdlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hQYXJlbnRzKCkge1xuICAgIGlmICghd2luZG93LkN1c3RvbUV2ZW50KSByZXR1cm47XG4gICAgdGhpcy5yb290RWwucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnUG90YXRvU2Nyb2xsLm5lc3RlZENoYW5nZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBSZWNhbGN1bGF0ZXMgY29udGVudCBzaXplIGFuZCBzZXQgc2Nyb2xsYmFycyBzaXplXG4gICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldEJhcnNTaXplKCk7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG4gIH1cblxuICAvKipcbiAgICAqIERlc3Ryb3lzIHRoZSBpbnN0YW5jZSBhbmQgcmVzdG9yZSBvcmlnaW5hbCBodG1sXG4gICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwsIHJvb3RFbCwgYmFyLCBhcnJvdywgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnVuYmluZEFycm93c0V2ZW50cygpO1xuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIGlmIChiYXIudi50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLnYudHJhY2tFbCk7XG4gICAgICBiYXIudi5lbCA9IG51bGw7XG4gICAgICBiYXIudi50cmFja0VsID0gbnVsbDtcbiAgICAgIGFycm93LnQuZWwgPSBudWxsO1xuICAgICAgYXJyb3cuYi5lbCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChiYXIuaC50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLmgudHJhY2tFbCk7XG4gICAgICBiYXIuaC5lbCA9IG51bGw7XG4gICAgICBiYXIuaC50cmFja0VsID0gbnVsbDtcbiAgICAgIGFycm93LmwuZWwgPSBudWxsO1xuICAgICAgYXJyb3cuci5lbCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgIGlmICghdGhpcy5vd25UcmVlKSB7XG4gICAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgICAgd2hpbGUgKHNjcm9sbEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKHNjcm9sbEVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hc2tFbCkge1xuICAgICAgICAgIG1hc2tFbC5yZW1vdmVDaGlsZChzY3JvbGxFbCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1hc2tFbCkge1xuICAgICAgICByb290RWwucmVtb3ZlQ2hpbGQobWFza0VsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwgPSBudWxsO1xuICAgIGlmIChtYXNrRWwpIHRoaXMubWFza0VsID0gbnVsbDtcblxuICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==