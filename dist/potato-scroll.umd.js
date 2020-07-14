(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PotatoScroll", [], factory);
	else if(typeof exports === 'object')
		exports["PotatoScroll"] = factory();
	else
		root["PotatoScroll"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

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



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJpbnN0YW5jZU9wdGlvbiIsIk9iamVjdCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwibWFza0VsIiwic2Nyb2xsRWwiLCJjc3NDbGFzcyIsImZvcmNlQ3VzdG9tIiwiZm9yY2VTaXplIiwid2l0aEFycm93cyIsImFycm93TW92ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsIm93bk1hc2tFbCIsIm93blNjcm9sbEVsIiwiZXZlbnQiLCJvd25UcmVlIiwicmVzZXRTdGF0ZSIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiZGlzYWJsZWQiLCJiIiwibCIsInIiLCJpc1JUTCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDaGFuZ2UiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwib25UQ2xpY2siLCJvbkJDbGljayIsIm9uTENsaWNrIiwib25SQ2xpY2siLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJiaW5kQXJyb3dzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJyb290UGFyZW50IiwicGFyZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXN0U2Nyb2xsU3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0ZXN0Q29udGVudEVsIiwidGVzdENvbnRlbnRMZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGVzdFNjcm9sbExlZnQiLCJyZW1vdmVDaGlsZCIsImlzSUUiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNGRiIsImlzSUVhbmRSVEwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwibWFza1N0eWxlIiwiZmxleEdyb3ciLCJ6SW5kZXgiLCJzY3JvbGxTdHlsZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJ2Rm9yY2VTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJoRm9yY2VTaXplIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsInZUcmFja0VsIiwiY3JlYXRlVHJhY2tFbCIsInZCYXJFbCIsImNyZWF0ZUJhckVsIiwiaFRyYWNrRWwiLCJoQmFyRWwiLCJhZGRDdXN0b21BcnJvd3MiLCJiYXJFbCIsImFycm93VCIsImNyZWF0ZUFycm93RWwiLCJhcnJvd0IiLCJhcnJvd0wiLCJhcnJvd1IiLCJkaXJlY3Rpb24iLCJhcnJvd0VsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRCYXJzUG9zIiwiZSIsInByZXZlbnREZWZhdWx0IiwibW92ZUJlZ2luIiwibW92ZVVwZGF0ZSIsIm1vdmVFbmQiLCJiYXJPYmoiLCJzY3JvbGxSYW5nZSIsInVzZXJTZWxlY3QiLCJwb2ludGVyRXZlbnRzIiwiYmluZERvY0V2ZW50cyIsImdldE1vdmVWYWx1ZSIsImJhck1vdmVUb1Njcm9sbCIsInVuYmluZERvY0V2ZW50cyIsInNtb290aFNjcm9sbFRvIiwic2Nyb2xsRGlyIiwib2Zmc2V0Iiwic2Nyb2xsQmVoYXZpb3IiLCJzZXRCYXJTaXplIiwic2Nyb2xsU2l6ZSIsIm1hc2tTaXplIiwiZnJhY3QiLCJtb3ZlUmFuZ2UiLCJzZXRCYXJQb3MiLCJheGlzRWRnZXMiLCJzY3JvbGxWYWx1ZSIsImdldFNjcm9sbFZhbHVlIiwicG9zIiwidHJhbnNmb3JtIiwiYXJyb3dPYmowIiwiYXJyb3dPYmoxIiwiaXNFZGdlMCIsInNldEFycm93SWYiLCJpc0VkZ2UxIiwiYXJyb3dPYmoiLCJkaXNhYmxlZENsYXNzIiwicmVtb3ZlIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYnViYmxlcyIsInNldEJhcnNTaXplIiwidW5iaW5kQXJyb3dzRXZlbnRzIiwidW5iaW5kQmFyc0V2ZW50cyIsInVuYmluZEV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFD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QXJCO0FBQ0EwQixlQUFTLENBQUNDLE9BQVYsR0FBb0IsRUFBcEI7O0FBRUEsVUFBSSxDQUFDLEtBQUs5RixPQUFWLEVBQW1CO0FBQ2pCLFlBQUloQixRQUFKLEVBQWM7QUFDWixpQkFBT0EsUUFBUSxDQUFDbUgsVUFBVCxDQUFvQkMsTUFBM0IsRUFBbUM7QUFDakN4RyxrQkFBTSxDQUFDNEUsV0FBUCxDQUFtQnhGLFFBQVEsQ0FBQ21ILFVBQVQsQ0FBb0IsQ0FBcEIsQ0FBbkI7QUFDRDs7QUFFRCxjQUFJcEgsTUFBSixFQUFZO0FBQ1ZBLGtCQUFNLENBQUNvRyxXQUFQLENBQW1CbkcsUUFBbkI7QUFDRDtBQUNGOztBQUVELFlBQUlELE1BQUosRUFBWTtBQUNWYSxnQkFBTSxDQUFDdUYsV0FBUCxDQUFtQnBHLE1BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxRQUFKLEVBQWMsS0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNkLFVBQUlELE1BQUosRUFBWSxLQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUVaLFdBQUtrQixVQUFMO0FBRUF3RCxnQkFBVSxDQUFDLEtBQUtuQixjQUFOLENBQVY7QUFDRCIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUG90YXRvU2Nyb2xsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBvdGF0b1Njcm9sbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQb3RhdG9TY3JvbGxcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG90YXRvU2Nyb2xsIHtcblxuICBzdGF0aWMgY3JlYXRlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdG9yLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgZWwgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZU9wdGlvbiA9IE9iamVjdChvcHRpb25zKTtcbiAgICAgICAgaW5zdGFuY2VPcHRpb24uZWwgPSBlbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3RhdG9TY3JvbGwoaW5zdGFuY2VPcHRpb24pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLnByZWluaXQob3B0aW9ucykpIHJldHVybjtcblxuICAgIHRoaXMuYmluZFRoaXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHByZWluaXQob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgTk9PUCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBtYXNrRWwgPSBudWxsLFxuICAgICAgc2Nyb2xsRWwgPSBudWxsLFxuICAgICAgY3NzQ2xhc3MgPSAncG90YXRvU2Nyb2xsJyxcbiAgICAgIGZvcmNlQ3VzdG9tID0gZmFsc2UsXG4gICAgICBmb3JjZVNpemUgPSAyMCxcbiAgICAgIHdpdGhBcnJvd3MgPSBmYWxzZSxcbiAgICAgIGFycm93TW92ZSA9IDQwLFxuICAgICAgb25OYXRpdmVTY3JvbGwgPSBOT09QLFxuICAgICAgb25TY3JvbGwgPSBOT09QLFxuICAgICAgb25Ub3AgPSBOT09QLFxuICAgICAgb25Cb3R0b20gPSBOT09QLFxuICAgICAgb25MZWZ0ID0gTk9PUCxcbiAgICAgIG9uUmlnaHQgPSBOT09QLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5yb290RWwgPSBlbDtcbiAgICB0aGlzLm93bk1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLm93blNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcbiAgICB0aGlzLmZvcmNlU2l6ZSA9IGZvcmNlU2l6ZTtcbiAgICB0aGlzLndpdGhBcnJvd3MgPSB3aXRoQXJyb3dzO1xuICAgIHRoaXMuYXJyb3dNb3ZlID0gYXJyb3dNb3ZlO1xuXG4gICAgdGhpcy5ldmVudCA9IHtcbiAgICAgIG9uTmF0aXZlU2Nyb2xsLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBvblRvcCxcbiAgICAgIG9uQm90dG9tLFxuICAgICAgb25MZWZ0LFxuICAgICAgb25SaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy5vd25UcmVlID0gKHRoaXMub3duTWFza0VsICE9PSBudWxsICYmIHRoaXMub3duU2Nyb2xsRWwgIT09IG51bGwpO1xuXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmb3JjZUN1c3RvbSwgZm9yY2VTaXplIH0gPSB0aGlzO1xuXG4gICAgdGhpcy53YWl0ID0ge1xuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHJlc2l6ZTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMucmFmID0ge1xuICAgICAgc2Nyb2xsOiBudWxsLFxuICAgICAgcmVzaXplOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgdjogbnVsbCxcbiAgICAgIGg6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuYmFyID0ge1xuICAgICAgdjoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIHRyYWNrRWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICB0cmFja1NpemU6IDAsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WScsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxUb3AnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsSGVpZ2h0JyxcbiAgICAgICAgbWVhc3VyZVByb3A6ICdvZmZzZXRIZWlnaHQnLFxuICAgICAgICBzaXplUHJvcDogJ2hlaWdodCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDEsXG4gICAgICAgIGF4aXM6ICdZJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgdHJhY2tFbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsV2lkdGgnLFxuICAgICAgICBtZWFzdXJlUHJvcDogJ29mZnNldFdpZHRoJyxcbiAgICAgICAgc2l6ZVByb3A6ICd3aWR0aCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDIsXG4gICAgICAgIGF4aXM6ICdYJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHRoaXMuYXJyb3cgPSB7XG4gICAgICB0OiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGw6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmlzUlRMID0gZmFsc2U7XG4gIH1cblxuICBiaW5kVGhpcygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZVRocm90dGxlID0gdGhpcy5vblJlc2l6ZVRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25OZXN0ZWRDaGFuZ2UgPSB0aGlzLm9uTmVzdGVkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoUGFyZW50cyA9IHRoaXMucmVmcmVzaFBhcmVudHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25Eb2NNb3VzZU1vdmUgPSB0aGlzLm9uRG9jTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlVXAgPSB0aGlzLm9uRG9jTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZUxlYXZlID0gdGhpcy5vbkRvY01vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25WQmFyTW91c2VEb3duID0gdGhpcy5vblZCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSEJhck1vdXNlRG93biA9IHRoaXMub25IQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVENsaWNrID0gdGhpcy5vblRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CQ2xpY2sgPSB0aGlzLm9uQkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxDbGljayA9IHRoaXMub25MQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUkNsaWNrID0gdGhpcy5vblJDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgJiByZWluaXRpYWxpemUgaW5zdGFuY2VcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFuYWx5emVOYXRpdmUoKTtcbiAgICB0aGlzLnByZXBhcmVET00oKTtcbiAgICB0aGlzLmhpZGVOYXRpdmVCYXJzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21CYXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMuYmluZEFycm93c0V2ZW50cygpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxuXG4gIGFuYWx5emVOYXRpdmUoKSB7XG4gICAgY29uc3QgeyByb290RWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHJvb3RQYXJlbnQgPSByb290RWwucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHRlc3RTY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlc3RTY3JvbGxTdHlsZSA9IHRlc3RTY3JvbGxFbC5zdHlsZTtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbFN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgcm9vdFBhcmVudC5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIGJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICBiYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSBiYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIGJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgUlRMXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkge1xuICAgICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgICBjb25zdCB0ZXN0Q29udGVudExlZnQgPSB0ZXN0Q29udGVudEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICBjb25zdCB0ZXN0U2Nyb2xsTGVmdCA9IHRlc3RTY3JvbGxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgdGhpcy5pc1JUTCA9ICh2TmF0aXZlU2l6ZSA+IDApICYmICh0ZXN0Q29udGVudExlZnQgPiB0ZXN0U2Nyb2xsTGVmdCk7XG5cbiAgICAgIHRlc3RTY3JvbGxFbC5yZW1vdmVDaGlsZCh0ZXN0Q29udGVudEVsKTtcbiAgICB9XG5cbiAgICByb290UGFyZW50LnJlbW92ZUNoaWxkKHRlc3RTY3JvbGxFbCk7XG5cbiAgICB0aGlzLmlzSUUgPSAvVHJpZGVudFxcLy4qcnY6MTF8TVNJRSAvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHRoaXMuaXNGRiA9IC9GaXJlZm94XFwvLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgIHRoaXMuaXNJRWFuZFJUTCA9ICh0aGlzLmlzSUUgJiYgdGhpcy5pc1JUTCk7XG4gIH1cblxuICBwcmVwYXJlRE9NKCkge1xuICAgIGNvbnN0IHsgcm9vdEVsLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIC8vIHJvb3RFbFxuICAgIGlmICghdGhpcy5vd25UcmVlKSByb290RWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgY29uc3Qgcm9vdFN0eWxlID0gcm9vdEVsLnN0eWxlO1xuICAgIHJvb3RTdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICByb290U3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHJvb3RTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgLy8gbWFza0VsXG4gICAgY29uc3QgbWFza0VsID0gKCF0aGlzLm93blRyZWUpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiB0aGlzLm93bk1hc2tFbDtcbiAgICBpZiAoIXRoaXMub3duVHJlZSkgbWFza0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19tYXNrYCk7XG4gICAgY29uc3QgbWFza1N0eWxlID0gbWFza0VsLnN0eWxlO1xuICAgIG1hc2tTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbWFza1N0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgbWFza1N0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICBtYXNrU3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYXNrU3R5bGUuekluZGV4ID0gJzAnO1xuXG4gICAgLy8gc2Nyb2xsRWxcbiAgICBjb25zdCBzY3JvbGxFbCA9ICghdGhpcy5vd25UcmVlKSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDogdGhpcy5vd25TY3JvbGxFbDtcbiAgICBpZiAoIXRoaXMub3duVHJlZSkgc2Nyb2xsRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3Njcm9sbGApO1xuICAgIGNvbnN0IHNjcm9sbFN0eWxlID0gc2Nyb2xsRWwuc3R5bGU7XG4gICAgc2Nyb2xsU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIHNjcm9sbFN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICBpZiAoIXRoaXMub3duVHJlZSkge1xuICAgICAgd2hpbGUgKHJvb3RFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBzY3JvbGxFbC5hcHBlbmRDaGlsZChyb290RWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIG1hc2tFbC5hcHBlbmRDaGlsZChzY3JvbGxFbCk7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobWFza0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLnNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gIH1cblxuICBoaWRlTmF0aXZlQmFycygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5mb3JjZUN1c3RvbSAmJiAoYmFyLnYubmF0aXZlU2l6ZSA9PT0gMCB8fCBiYXIuaC5uYXRpdmVTaXplID09PSAwKSkge1xuICAgICAgY29uc3QgdkZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcblxuICAgICAgY29uc3QgaEZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1oRm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBgJHtoRm9yY2VTaXplfXB4YDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMKSB7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICB9XG4gICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWJhci52Lm5hdGl2ZVNpemV9cHhgO1xuICB9XG5cbiAgYWRkQ3VzdG9tQmFycygpIHtcbiAgICBjb25zdCB7IGJhciwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKCEoXG4gICAgICBiYXIudi5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICBiYXIuaC5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICB0aGlzLmZvcmNlQ3VzdG9tXG4gICAgKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdlRyYWNrRWwgPSB0aGlzLmNyZWF0ZVRyYWNrRWwoJ3YnKTtcbiAgICBjb25zdCB2QmFyRWwgPSB0aGlzLmNyZWF0ZUJhckVsKCd2Jyk7XG5cbiAgICBjb25zdCBoVHJhY2tFbCA9IHRoaXMuY3JlYXRlVHJhY2tFbCgnaCcpO1xuICAgIGNvbnN0IGhCYXJFbCA9IHRoaXMuY3JlYXRlQmFyRWwoJ2gnKTtcblxuICAgIGlmICh0aGlzLndpdGhBcnJvd3MpIHRoaXMuYWRkQ3VzdG9tQXJyb3dzKCk7XG5cbiAgICB2VHJhY2tFbC5hcHBlbmRDaGlsZCh2QmFyRWwpO1xuICAgIGhUcmFja0VsLmFwcGVuZENoaWxkKGhCYXJFbCk7XG5cbiAgICByb290RWwuYXBwZW5kQ2hpbGQodlRyYWNrRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChoVHJhY2tFbCk7XG4gIH1cblxuICBjcmVhdGVUcmFja0VsKGF4aXMpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB0cmFja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICB0cmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0tJHtheGlzfWApO1xuICAgIHRyYWNrRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhcltheGlzXS50cmFja0VsID0gdHJhY2tFbDtcblxuICAgIHJldHVybiB0cmFja0VsO1xuICB9XG5cbiAgY3JlYXRlQmFyRWwoYXhpcykge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IGJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2JhcmApO1xuICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLSR7YXhpc31gKTtcbiAgICBiYXJbYXhpc10uZWwgPSBiYXJFbDtcblxuICAgIHJldHVybiBiYXJFbDtcbiAgfVxuXG4gIGFkZEN1c3RvbUFycm93cygpIHtcbiAgICBjb25zdCB7IGJhciwgcm9vdEVsLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfS0tYXJyb3dzYCk7XG5cbiAgICBjb25zdCBhcnJvd1QgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ3QnKTtcbiAgICBjb25zdCBhcnJvd0IgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ2InKTtcbiAgICBjb25zdCBhcnJvd0wgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ2wnKTtcbiAgICBjb25zdCBhcnJvd1IgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ3InKTtcblxuICAgIGJhci52LnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dUKTtcbiAgICBiYXIudi50cmFja0VsLmFwcGVuZENoaWxkKGFycm93Qik7XG4gICAgYmFyLmgudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd0wpO1xuICAgIGJhci5oLnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dSKTtcbiAgfVxuXG4gIGNyZWF0ZUFycm93RWwoZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBhcnJvd0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJyb3dFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYXJyb3dgKTtcbiAgICBhcnJvd0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19hcnJvdy0tJHtkaXJlY3Rpb259YCk7XG4gICAgYXJyb3dFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgYXJyb3dFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYXJyb3dbZGlyZWN0aW9uXS5lbCA9IGFycm93RWw7XG5cbiAgICByZXR1cm4gYXJyb3dFbDtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuXG4gICAgdGhpcy5yb290RWwuYWRkRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENoYW5nZScsIHRoaXMub25OZXN0ZWRDaGFuZ2UpO1xuICB9XG5cbiAgdW5iaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDaGFuZ2UnLCB0aGlzLm9uTmVzdGVkQ2hhbmdlKTtcbiAgfVxuXG4gIG9uU2Nyb2xsVGhyb3R0bGUoZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50Lm9uTmF0aXZlU2Nyb2xsKGV2ZW50LCB0aGlzLnJvb3RFbCk7XG5cbiAgICBpZiAodGhpcy53YWl0LnNjcm9sbCkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5zY3JvbGwgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYuc2Nyb2xsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG5cbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gZmFsc2U7XG4gIH1cblxuICBvblJlc2l6ZVRocm90dGxlKCkge1xuICAgIGlmICh0aGlzLndhaXQucmVzaXplKSByZXR1cm47XG4gICAgdGhpcy53YWl0LnJlc2l6ZSA9IHRydWU7XG5cbiAgICB0aGlzLnJhZi5yZXNpemUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHRoaXMud2FpdC5yZXNpemUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTmVzdGVkQ2hhbmdlKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIHVuYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIGJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgdW5iaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIG9uVkJhck1vdXNlRG93bihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIudjtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25IQmFyTW91c2VEb3duKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci5oO1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkRvY01vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3ZlVXBkYXRlKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZVVwKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlTGVhdmUoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIGdldE1vdmVWYWx1ZShlLCBiYXJPYmopIHtcbiAgICBpZiAoYmFyT2JqLmF4aXMgPT09ICdZJyB8fCAhdGhpcy5pc1JUTCkge1xuICAgICAgcmV0dXJuIGVbYmFyT2JqLm1vdmVQcm9wXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0lFKSB7XG4gICAgICByZXR1cm4gYmFyT2JqLnNjcm9sbFJhbmdlIC0gZVtiYXJPYmoubW92ZVByb3BdO1xuICAgIH1cblxuICAgIHJldHVybiBlW2Jhck9iai5tb3ZlUHJvcF07XG4gIH1cblxuICBtb3ZlQmVnaW4oZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSB0aGlzLmdldE1vdmVWYWx1ZShlLCBhY3RpdmVCYXJPYmopO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBzY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF07XG4gIH1cblxuICBtb3ZlVXBkYXRlKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSB0aGlzLmdldE1vdmVWYWx1ZShlLCBhY3RpdmVCYXJPYmopIC0gYWN0aXZlQmFyT2JqLm1vdmVTdGFydDtcblxuICAgIHRoaXMuYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaik7XG4gIH1cblxuICBtb3ZlRW5kKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLnVuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IG51bGw7XG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gMDtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gbnVsbDtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gIH1cblxuICBiaW5kQXJyb3dzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBpZiAoYXJyb3cudC5lbCkgYXJyb3cudC5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UQ2xpY2spO1xuICAgIGlmIChhcnJvdy5iLmVsKSBhcnJvdy5iLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJDbGljayk7XG4gICAgaWYgKGFycm93LmwuZWwpIGFycm93LmwuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTENsaWNrKTtcbiAgICBpZiAoYXJyb3cuci5lbCkgYXJyb3cuci5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25SQ2xpY2spO1xuICB9XG5cbiAgdW5iaW5kQXJyb3dzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBpZiAoYXJyb3cudC5lbCkgYXJyb3cudC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UQ2xpY2spO1xuICAgIGlmIChhcnJvdy5iLmVsKSBhcnJvdy5iLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJDbGljayk7XG4gICAgaWYgKGFycm93LmwuZWwpIGFycm93LmwuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTENsaWNrKTtcbiAgICBpZiAoYXJyb3cuci5lbCkgYXJyb3cuci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25SQ2xpY2spO1xuICB9XG5cbiAgb25UQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsVG9wJywgLXRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIG9uQkNsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbFRvcCcsIHRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIG9uTENsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbExlZnQnLCAtdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25SQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsTGVmdCcsIHRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIHNtb290aFNjcm9sbFRvKHNjcm9sbERpciwgb2Zmc2V0KSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCB9ID0gdGhpcztcblxuICAgIHNjcm9sbEVsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ3Ntb290aCc7XG4gICAgc2Nyb2xsRWxbc2Nyb2xsRGlyXSArPSBvZmZzZXQ7XG4gICAgc2Nyb2xsRWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgfVxuXG4gIHNldEJhcnNTaXplKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRCYXJTaXplKGJhci52KTtcbiAgICB0aGlzLnNldEJhclNpemUoYmFyLmgpO1xuICB9XG5cbiAgc2V0QmFyU2l6ZShiYXJPYmopIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBzY3JvbGxTaXplID0gc2Nyb2xsRWxbYmFyT2JqLmxlbmd0aFByb3BdIC0gYmFyT2JqLmZvcmNlU2l6ZSAqIGJhck9iai5mb3JjZU11bHRpO1xuICAgIGNvbnN0IG1hc2tTaXplID0gbWFza0VsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgYmFyT2JqLnNjcm9sbFJhbmdlID0gc2Nyb2xsU2l6ZSAtIG1hc2tTaXplO1xuXG4gICAgaWYgKGJhck9iai5lbCkge1xuICAgICAgY29uc3QgZnJhY3QgPSBtYXNrU2l6ZSAvIHNjcm9sbFNpemU7XG4gICAgICBjb25zdCB0cmFja1NpemUgPSBiYXJPYmoudHJhY2tFbFtiYXJPYmoubWVhc3VyZVByb3BdO1xuICAgICAgYmFyT2JqLnNpemVGcmFjdCA9IGZyYWN0O1xuICAgICAgYmFyT2JqLnRyYWNrU2l6ZSA9IHRyYWNrU2l6ZTtcbiAgICAgIGJhck9iai50cmFja0VsLnN0eWxlLmRpc3BsYXkgPSAoYmFyT2JqLnNpemVGcmFjdCA9PT0gMSkgPyAnbm9uZScgOiAnJztcbiAgICAgIGJhck9iai5lbC5zdHlsZVtiYXJPYmouc2l6ZVByb3BdID0gYCR7ZnJhY3QgKiB0cmFja1NpemV9cHhgO1xuICAgICAgYmFyT2JqLm1vdmVSYW5nZSA9IHRyYWNrU2l6ZSAtIGJhck9iai5lbFtiYXJPYmoubWVhc3VyZVByb3BdO1xuICAgIH1cbiAgfVxuXG4gIHNldEJhcnNQb3MoKSB7XG4gICAgY29uc3QgeyBiYXIsIGV2ZW50LCByb290RWwsIGFycm93IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgZnJhY3QgPSB7XG4gICAgICB2OiAwLFxuICAgICAgaDogMCxcbiAgICB9O1xuXG4gICAgaWYgKGJhci52LmVsKSBmcmFjdC52ID0gdGhpcy5zZXRCYXJQb3MoYmFyLnYpO1xuICAgIGlmIChiYXIuaC5lbCkgZnJhY3QuaCA9IHRoaXMuc2V0QmFyUG9zKGJhci5oKTtcblxuICAgIGV2ZW50Lm9uU2Nyb2xsKGZyYWN0LCByb290RWwpO1xuXG4gICAgdGhpcy5heGlzRWRnZXMoZnJhY3QsICd2JywgYXJyb3cudCwgYXJyb3cuYik7XG4gICAgdGhpcy5heGlzRWRnZXMoZnJhY3QsICdoJywgYXJyb3cubCwgYXJyb3cucik7XG4gIH1cblxuICBnZXRTY3JvbGxWYWx1ZShiYXJPYmopIHtcbiAgICBpZiAoYmFyT2JqLmF4aXMgPT09ICdZJyB8fCAhYmFyT2JqLnNjcm9sbFJhbmdlIHx8ICF0aGlzLmlzUlRMKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY3JvbGxFbFtiYXJPYmouc2Nyb2xsUHJvcF07XG4gICAgfVxuICAgICAgXG4gICAgaWYgKHRoaXMuaXNGRikge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsRWxbYmFyT2JqLnNjcm9sbFByb3BdICsgYmFyT2JqLnNjcm9sbFJhbmdlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzSUUpIHtcbiAgICAgIHJldHVybiBiYXJPYmouc2Nyb2xsUmFuZ2UgLSB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zY3JvbGxFbFtiYXJPYmouc2Nyb2xsUHJvcF07XG4gIH1cblxuICBzZXRCYXJQb3MoYmFyT2JqKSB7XG4gICAgbGV0IHNjcm9sbFZhbHVlID0gdGhpcy5nZXRTY3JvbGxWYWx1ZShiYXJPYmopO1xuXG4gICAgY29uc3QgZnJhY3QgPSBiYXJPYmouc2Nyb2xsUmFuZ2UgPyAoXG4gICAgICBzY3JvbGxWYWx1ZSAvIGJhck9iai5zY3JvbGxSYW5nZVxuICAgICkgOiAwO1xuXG4gICAgaWYgKGJhck9iai5lbCkge1xuICAgICAgY29uc3QgcG9zID0gZnJhY3QgKiAoYmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gYmFyT2JqLnNpemVGcmFjdCkpO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUke2Jhck9iai5heGlzfSgke3Bvc31weClgO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFjdDtcbiAgfVxuXG4gIGF4aXNFZGdlcyhmcmFjdCwgYXhpcywgYXJyb3dPYmowLCBhcnJvd09iajEpIHtcbiAgICBjb25zdCB7IHByb2dyZXNzLCBldmVudCwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKGZyYWN0W2F4aXNdICE9PSBwcm9ncmVzc1theGlzXSkge1xuICAgICAgcHJvZ3Jlc3NbYXhpc10gPSBmcmFjdFtheGlzXTtcblxuICAgICAgY29uc3QgaXNFZGdlMCA9IGZyYWN0W2F4aXNdIDw9IDA7XG4gICAgICBpZiAoaXNFZGdlMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoYXJyb3dPYmowLmVsKSB0aGlzLnNldEFycm93SWYoYXJyb3dPYmowLCBpc0VkZ2UwKTtcblxuICAgICAgY29uc3QgaXNFZGdlMSA9IGZyYWN0W2F4aXNdID49IDE7XG4gICAgICBpZiAoaXNFZGdlMSkgZXZlbnQub25SaWdodChyb290RWwpO1xuICAgICAgaWYgKGFycm93T2JqMS5lbCkgdGhpcy5zZXRBcnJvd0lmKGFycm93T2JqMSwgaXNFZGdlMSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJyb3dJZihhcnJvd09iaiwgZGlzYWJsZWQpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93T2JqLmRpc2FibGVkID09PSBkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgYXJyb3dPYmouZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgIGNvbnN0IGRpc2FibGVkQ2xhc3MgPSBgJHtjc3NDbGFzc31fX2Fycm93LS1kaXNhYmxlZGA7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBhcnJvd09iai5lbC5jbGFzc0xpc3QuYWRkKGRpc2FibGVkQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJvd09iai5lbC5jbGFzc0xpc3QucmVtb3ZlKGRpc2FibGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopIHtcbiAgICB0aGlzLnNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXSA9IChcbiAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgKyAoXG4gICAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxSYW5nZSAqIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiAvIGFjdGl2ZUJhck9iai5tb3ZlUmFuZ2VcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFBhcmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cuQ3VzdG9tRXZlbnQpIHJldHVybjtcbiAgICB0aGlzLnJvb3RFbC5wYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICAqIFJlY2FsY3VsYXRlcyBjb250ZW50IHNpemUgYW5kIHNldCBzY3JvbGxiYXJzIHNpemVcbiAgICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0QmFyc1NpemUoKTtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgICogRGVzdHJveXMgdGhlIGluc3RhbmNlIGFuZCByZXN0b3JlIG9yaWdpbmFsIGh0bWxcbiAgICAqL1xuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCwgcm9vdEVsLCBiYXIsIGFycm93LCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHRoaXMudW5iaW5kQXJyb3dzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgaWYgKGJhci52LnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIudi50cmFja0VsKTtcbiAgICAgIGJhci52LmVsID0gbnVsbDtcbiAgICAgIGJhci52LnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cudC5lbCA9IG51bGw7XG4gICAgICBhcnJvdy5iLmVsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGJhci5oLnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIuaC50cmFja0VsKTtcbiAgICAgIGJhci5oLmVsID0gbnVsbDtcbiAgICAgIGJhci5oLnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cubC5lbCA9IG51bGw7XG4gICAgICBhcnJvdy5yLmVsID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3duVHJlZSkgcm9vdEVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICByb290U3R5bGUucG9zaXRpb24gPSAnJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHtcbiAgICAgIGlmIChzY3JvbGxFbCkge1xuICAgICAgICB3aGlsZSAoc2Nyb2xsRWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWFza0VsKSB7XG4gICAgICAgICAgbWFza0VsLnJlbW92ZUNoaWxkKHNjcm9sbEVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWFza0VsKSB7XG4gICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChtYXNrRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxFbCkgdGhpcy5zY3JvbGxFbCA9IG51bGw7XG4gICAgaWYgKG1hc2tFbCkgdGhpcy5tYXNrRWwgPSBudWxsO1xuXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVmcmVzaFBhcmVudHMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9