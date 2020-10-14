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



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJpbnN0YW5jZU9wdGlvbiIsIk9iamVjdCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwibWFza0VsIiwic2Nyb2xsRWwiLCJjc3NDbGFzcyIsImZvcmNlQ3VzdG9tIiwiZm9yY2VTaXplIiwid2l0aEFycm93cyIsImFycm93TW92ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsIm93bk1hc2tFbCIsIm93blNjcm9sbEVsIiwiZXZlbnQiLCJvd25UcmVlIiwicmVzZXRTdGF0ZSIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiZGlzYWJsZWQiLCJiIiwibCIsInIiLCJpc1JUTCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDaGFuZ2UiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwib25UQ2xpY2siLCJvbkJDbGljayIsIm9uTENsaWNrIiwib25SQ2xpY2siLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJiaW5kQXJyb3dzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJyb290UGFyZW50IiwicGFyZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXN0U2Nyb2xsU3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0ZXN0Q29udGVudEVsIiwidGVzdENvbnRlbnRMZWZ0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidGVzdFNjcm9sbExlZnQiLCJyZW1vdmVDaGlsZCIsImlzSUUiLCJ0ZXN0Iiwid2luZG93IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaXNJRWFuZFJUTCIsImNsYXNzTGlzdCIsImFkZCIsInJvb3RTdHlsZSIsImRpc3BsYXkiLCJtYXNrU3R5bGUiLCJmbGV4R3JvdyIsInpJbmRleCIsInNjcm9sbFN0eWxlIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInZGb3JjZVNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsImhGb3JjZVNpemUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidlRyYWNrRWwiLCJjcmVhdGVUcmFja0VsIiwidkJhckVsIiwiY3JlYXRlQmFyRWwiLCJoVHJhY2tFbCIsImhCYXJFbCIsImFkZEN1c3RvbUFycm93cyIsImJhckVsIiwiYXJyb3dUIiwiY3JlYXRlQXJyb3dFbCIsImFycm93QiIsImFycm93TCIsImFycm93UiIsImRpcmVjdGlvbiIsImFycm93RWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldEJhcnNQb3MiLCJlIiwicHJldmVudERlZmF1bHQiLCJtb3ZlQmVnaW4iLCJtb3ZlVXBkYXRlIiwibW92ZUVuZCIsImJhck9iaiIsInNjcm9sbFJhbmdlIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiZ2V0TW92ZVZhbHVlIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwic21vb3RoU2Nyb2xsVG8iLCJzY3JvbGxEaXIiLCJvZmZzZXQiLCJzY3JvbGxCZWhhdmlvciIsInNldEJhclNpemUiLCJzY3JvbGxTaXplIiwibWFza1NpemUiLCJmcmFjdCIsIm1vdmVSYW5nZSIsInNldEJhclBvcyIsImF4aXNFZGdlcyIsInNjcm9sbFZhbHVlIiwiZ2V0U2Nyb2xsVmFsdWUiLCJwb3MiLCJ0cmFuc2Zvcm0iLCJhcnJvd09iajAiLCJhcnJvd09iajEiLCJpc0VkZ2UwIiwic2V0QXJyb3dJZiIsImlzRWRnZTEiLCJhcnJvd09iaiIsImRpc2FibGVkQ2xhc3MiLCJyZW1vdmUiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJidWJibGVzIiwic2V0QmFyc1NpemUiLCJ1bmJpbmRBcnJvd3NFdmVudHMiLCJ1bmJpbmRCYXJzRXZlbnRzIiwidW5iaW5kRXZlbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFQLENBQW1CeEYsUUFBUSxDQUFDa0gsVUFBVCxDQUFvQixDQUFwQixDQUFuQjtBQUNEOztBQUVELGNBQUluSCxNQUFKLEVBQVk7QUFDVkEsa0JBQU0sQ0FBQ29HLFdBQVAsQ0FBbUJuRyxRQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsWUFBSUQsTUFBSixFQUFZO0FBQ1ZhLGdCQUFNLENBQUN1RixXQUFQLENBQW1CcEcsTUFBbkI7QUFDRDtBQUNGOztBQUVELFVBQUlDLFFBQUosRUFBYyxLQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ2QsVUFBSUQsTUFBSixFQUFZLEtBQUtBLE1BQUwsR0FBYyxJQUFkO0FBRVosV0FBS2tCLFVBQUw7QUFFQXdELGdCQUFVLENBQUMsS0FBS25CLGNBQU4sQ0FBVjtBQUNEIiwiZmlsZSI6InBvdGF0by1zY3JvbGwudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJQb3RhdG9TY3JvbGxcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUG90YXRvU2Nyb2xsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlBvdGF0b1Njcm9sbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9TY3JvbGwge1xuXG4gIHN0YXRpYyBjcmVhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3IsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICBlbCA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlT3B0aW9uID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBpbnN0YW5jZU9wdGlvbi5lbCA9IGVsO1xuICAgICAgICByZXR1cm4gbmV3IFBvdGF0b1Njcm9sbChpbnN0YW5jZU9wdGlvbik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMucHJlaW5pdChvcHRpb25zKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5iaW5kVGhpcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgcHJlaW5pdChvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBOT09QID0gKCkgPT4ge307XG5cbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIG1hc2tFbCA9IG51bGwsXG4gICAgICBzY3JvbGxFbCA9IG51bGwsXG4gICAgICBjc3NDbGFzcyA9ICdwb3RhdG9TY3JvbGwnLFxuICAgICAgZm9yY2VDdXN0b20gPSBmYWxzZSxcbiAgICAgIGZvcmNlU2l6ZSA9IDIwLFxuICAgICAgd2l0aEFycm93cyA9IGZhbHNlLFxuICAgICAgYXJyb3dNb3ZlID0gNDAsXG4gICAgICBvbk5hdGl2ZVNjcm9sbCA9IE5PT1AsXG4gICAgICBvblNjcm9sbCA9IE5PT1AsXG4gICAgICBvblRvcCA9IE5PT1AsXG4gICAgICBvbkJvdHRvbSA9IE5PT1AsXG4gICAgICBvbkxlZnQgPSBOT09QLFxuICAgICAgb25SaWdodCA9IE5PT1AsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnJvb3RFbCA9IGVsO1xuICAgIHRoaXMub3duTWFza0VsID0gbWFza0VsO1xuICAgIHRoaXMub3duU2Nyb2xsRWwgPSBzY3JvbGxFbDtcbiAgICB0aGlzLmNzc0NsYXNzID0gY3NzQ2xhc3M7XG4gICAgdGhpcy5mb3JjZUN1c3RvbSA9IGZvcmNlQ3VzdG9tO1xuICAgIHRoaXMuZm9yY2VTaXplID0gZm9yY2VTaXplO1xuICAgIHRoaXMud2l0aEFycm93cyA9IHdpdGhBcnJvd3M7XG4gICAgdGhpcy5hcnJvd01vdmUgPSBhcnJvd01vdmU7XG5cbiAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgb25OYXRpdmVTY3JvbGwsXG4gICAgICBvblNjcm9sbCxcbiAgICAgIG9uVG9wLFxuICAgICAgb25Cb3R0b20sXG4gICAgICBvbkxlZnQsXG4gICAgICBvblJpZ2h0LFxuICAgIH07XG5cbiAgICB0aGlzLm93blRyZWUgPSAodGhpcy5vd25NYXNrRWwgIT09IG51bGwgJiYgdGhpcy5vd25TY3JvbGxFbCAhPT0gbnVsbCk7XG5cbiAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVzZXRTdGF0ZSgpIHtcbiAgICBjb25zdCB7IGZvcmNlQ3VzdG9tLCBmb3JjZVNpemUgfSA9IHRoaXM7XG5cbiAgICB0aGlzLndhaXQgPSB7XG4gICAgICBzY3JvbGw6IGZhbHNlLFxuICAgICAgcmVzaXplOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5yYWYgPSB7XG4gICAgICBzY3JvbGw6IG51bGwsXG4gICAgICByZXNpemU6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICB2OiBudWxsLFxuICAgICAgaDogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5iYXIgPSB7XG4gICAgICB2OiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgdHJhY2tFbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRZJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbFRvcCcsXG4gICAgICAgIGxlbmd0aFByb3A6ICdzY3JvbGxIZWlnaHQnLFxuICAgICAgICBtZWFzdXJlUHJvcDogJ29mZnNldEhlaWdodCcsXG4gICAgICAgIHNpemVQcm9wOiAnaGVpZ2h0JyxcbiAgICAgICAgZm9yY2VNdWx0aTogMSxcbiAgICAgICAgYXhpczogJ1knLFxuICAgICAgfSxcbiAgICAgIGg6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICB0cmFja0VsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgdHJhY2tTaXplOiAwLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFgnLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsTGVmdCcsXG4gICAgICAgIGxlbmd0aFByb3A6ICdzY3JvbGxXaWR0aCcsXG4gICAgICAgIG1lYXN1cmVQcm9wOiAnb2Zmc2V0V2lkdGgnLFxuICAgICAgICBzaXplUHJvcDogJ3dpZHRoJyxcbiAgICAgICAgZm9yY2VNdWx0aTogMixcbiAgICAgICAgYXhpczogJ1gnLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgdGhpcy5hcnJvdyA9IHtcbiAgICAgIHQ6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBiOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgbDoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHI6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaXNSVEwgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRUaGlzKCkge1xuICAgIHRoaXMub25TY3JvbGxUaHJvdHRsZSA9IHRoaXMub25TY3JvbGxUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TY3JvbGwgPSB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplVGhyb3R0bGUgPSB0aGlzLm9uUmVzaXplVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbk5lc3RlZENoYW5nZSA9IHRoaXMub25OZXN0ZWRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hQYXJlbnRzID0gdGhpcy5yZWZyZXNoUGFyZW50cy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbkRvY01vdXNlTW92ZSA9IHRoaXMub25Eb2NNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VVcCA9IHRoaXMub25Eb2NNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlTGVhdmUgPSB0aGlzLm9uRG9jTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblZCYXJNb3VzZURvd24gPSB0aGlzLm9uVkJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25IQmFyTW91c2VEb3duID0gdGhpcy5vbkhCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25UQ2xpY2sgPSB0aGlzLm9uVENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkJDbGljayA9IHRoaXMub25CQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTENsaWNrID0gdGhpcy5vbkxDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SQ2xpY2sgPSB0aGlzLm9uUkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSAmIHJlaW5pdGlhbGl6ZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuYW5hbHl6ZU5hdGl2ZSgpO1xuICAgIHRoaXMucHJlcGFyZURPTSgpO1xuICAgIHRoaXMuaGlkZU5hdGl2ZUJhcnMoKTtcbiAgICB0aGlzLmFkZEN1c3RvbUJhcnMoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB0aGlzLmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQXJyb3dzRXZlbnRzKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVmcmVzaFBhcmVudHMpO1xuICB9XG5cbiAgYW5hbHl6ZU5hdGl2ZSgpIHtcbiAgICBjb25zdCB7IHJvb3RFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qgcm9vdFBhcmVudCA9IHJvb3RFbC5wYXJlbnRFbGVtZW50O1xuXG4gICAgY29uc3QgdGVzdFNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGVzdFNjcm9sbFN0eWxlID0gdGVzdFNjcm9sbEVsLnN0eWxlO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUudG9wID0gMDtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUubGVmdCA9IDA7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUub3BhY2l0eSA9IDA7XG5cbiAgICByb290UGFyZW50LmFwcGVuZENoaWxkKHRlc3RTY3JvbGxFbCk7XG5cbiAgICBjb25zdCB2TmF0aXZlU2l6ZSA9IHRlc3RTY3JvbGxFbC5vZmZzZXRXaWR0aCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCBoTmF0aXZlU2l6ZSA9IHRlc3RTY3JvbGxFbC5vZmZzZXRIZWlnaHQgLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgYmFyLnYubmF0aXZlU2l6ZSA9IHZOYXRpdmVTaXplO1xuICAgIGJhci5oLm5hdGl2ZVNpemUgPSBoTmF0aXZlU2l6ZTtcblxuICAgIGlmICh2TmF0aXZlU2l6ZSA+IDApIGJhci52LmZvcmNlU2l6ZSA9IDA7XG4gICAgaWYgKGhOYXRpdmVTaXplID4gMCkgYmFyLmguZm9yY2VTaXplID0gMDtcblxuICAgIC8vIGRldGVjdCBSVExcbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSB7XG4gICAgICBjb25zdCB0ZXN0Q29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0ZXN0U2Nyb2xsRWwuYXBwZW5kQ2hpbGQodGVzdENvbnRlbnRFbCk7XG5cbiAgICAgIGNvbnN0IHRlc3RDb250ZW50TGVmdCA9IHRlc3RDb250ZW50RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGNvbnN0IHRlc3RTY3JvbGxMZWZ0ID0gdGVzdFNjcm9sbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICB0aGlzLmlzUlRMID0gKHZOYXRpdmVTaXplID4gMCkgJiYgKHRlc3RDb250ZW50TGVmdCA+IHRlc3RTY3JvbGxMZWZ0KTtcblxuICAgICAgdGVzdFNjcm9sbEVsLnJlbW92ZUNoaWxkKHRlc3RDb250ZW50RWwpO1xuICAgIH1cblxuICAgIHJvb3RQYXJlbnQucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIHRoaXMuaXNJRSA9IC9UcmlkZW50XFwvLipydjoxMXxNU0lFIC8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgICB0aGlzLmlzSUVhbmRSVEwgPSAodGhpcy5pc0lFICYmIHRoaXMuaXNSVEwpO1xuICB9XG5cbiAgcHJlcGFyZURPTSgpIHtcbiAgICBjb25zdCB7IHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICAvLyByb290RWxcbiAgICBpZiAoIXRoaXMub3duVHJlZSkgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIC8vIG1hc2tFbFxuICAgIGNvbnN0IG1hc2tFbCA9ICghdGhpcy5vd25UcmVlKSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDogdGhpcy5vd25NYXNrRWw7XG4gICAgaWYgKCF0aGlzLm93blRyZWUpIG1hc2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fbWFza2ApO1xuICAgIGNvbnN0IG1hc2tTdHlsZSA9IG1hc2tFbC5zdHlsZTtcbiAgICBtYXNrU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza1N0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSAoIXRoaXMub3duVHJlZSkgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA6IHRoaXMub3duU2Nyb2xsRWw7XG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHNjcm9sbEVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19zY3JvbGxgKTtcbiAgICBjb25zdCBzY3JvbGxTdHlsZSA9IHNjcm9sbEVsLnN0eWxlO1xuICAgIHNjcm9sbFN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBzY3JvbGxTdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHtcbiAgICAgIHdoaWxlIChyb290RWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgc2Nyb2xsRWwuYXBwZW5kQ2hpbGQocm9vdEVsLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBtYXNrRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwpO1xuICAgICAgcm9vdEVsLmFwcGVuZENoaWxkKG1hc2tFbCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsO1xuICB9XG5cbiAgaGlkZU5hdGl2ZUJhcnMoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VDdXN0b20gJiYgKGJhci52Lm5hdGl2ZVNpemUgPT09IDAgfHwgYmFyLmgubmF0aXZlU2l6ZSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IHZGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIGNvbnN0IGhGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstaEZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7aEZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgfVxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBiYXIsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmICghKFxuICAgICAgYmFyLnYubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgYmFyLmgubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgdGhpcy5mb3JjZUN1c3RvbVxuICAgICkpIHJldHVybjtcblxuICAgIGNvbnN0IHZUcmFja0VsID0gdGhpcy5jcmVhdGVUcmFja0VsKCd2Jyk7XG4gICAgY29uc3QgdkJhckVsID0gdGhpcy5jcmVhdGVCYXJFbCgndicpO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSB0aGlzLmNyZWF0ZVRyYWNrRWwoJ2gnKTtcbiAgICBjb25zdCBoQmFyRWwgPSB0aGlzLmNyZWF0ZUJhckVsKCdoJyk7XG5cbiAgICBpZiAodGhpcy53aXRoQXJyb3dzKSB0aGlzLmFkZEN1c3RvbUFycm93cygpO1xuXG4gICAgdlRyYWNrRWwuYXBwZW5kQ2hpbGQodkJhckVsKTtcbiAgICBoVHJhY2tFbC5hcHBlbmRDaGlsZChoQmFyRWwpO1xuXG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKHZUcmFja0VsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoaFRyYWNrRWwpO1xuICB9XG5cbiAgY3JlYXRlVHJhY2tFbChheGlzKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgdHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLSR7YXhpc31gKTtcbiAgICB0cmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0cmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXJbYXhpc10udHJhY2tFbCA9IHRyYWNrRWw7XG5cbiAgICByZXR1cm4gdHJhY2tFbDtcbiAgfVxuXG4gIGNyZWF0ZUJhckVsKGF4aXMpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBiYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS0ke2F4aXN9YCk7XG4gICAgYmFyW2F4aXNdLmVsID0gYmFyRWw7XG5cbiAgICByZXR1cm4gYmFyRWw7XG4gIH1cblxuICBhZGRDdXN0b21BcnJvd3MoKSB7XG4gICAgY29uc3QgeyBiYXIsIHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICByb290RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc30tLWFycm93c2ApO1xuXG4gICAgY29uc3QgYXJyb3dUID0gdGhpcy5jcmVhdGVBcnJvd0VsKCd0Jyk7XG4gICAgY29uc3QgYXJyb3dCID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdiJyk7XG4gICAgY29uc3QgYXJyb3dMID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdsJyk7XG4gICAgY29uc3QgYXJyb3dSID0gdGhpcy5jcmVhdGVBcnJvd0VsKCdyJyk7XG5cbiAgICBiYXIudi50cmFja0VsLmFwcGVuZENoaWxkKGFycm93VCk7XG4gICAgYmFyLnYudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd0IpO1xuICAgIGJhci5oLnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dMKTtcbiAgICBiYXIuaC50cmFja0VsLmFwcGVuZENoaWxkKGFycm93Uik7XG4gIH1cblxuICBjcmVhdGVBcnJvd0VsKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGFycm93IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgYXJyb3dFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFycm93RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Fycm93YCk7XG4gICAgYXJyb3dFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYXJyb3ctLSR7ZGlyZWN0aW9ufWApO1xuICAgIGFycm93RWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGFycm93RWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGFycm93W2RpcmVjdGlvbl0uZWwgPSBhcnJvd0VsO1xuXG4gICAgcmV0dXJuIGFycm93RWw7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDaGFuZ2UnLCB0aGlzLm9uTmVzdGVkQ2hhbmdlKTtcbiAgfVxuXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywgdGhpcy5vbk5lc3RlZENoYW5nZSk7XG4gIH1cblxuICBvblNjcm9sbFRocm90dGxlKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudC5vbk5hdGl2ZVNjcm9sbChldmVudCwgdGhpcy5yb290RWwpO1xuXG4gICAgaWYgKHRoaXMud2FpdC5zY3JvbGwpIHJldHVybjtcbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmLnNjcm9sbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuXG4gICAgdGhpcy53YWl0LnNjcm9sbCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy53YWl0LnJlc2l6ZSkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5yZXNpemUgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYucmVzaXplID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLndhaXQucmVzaXplID0gZmFsc2U7XG4gIH1cblxuICBvbk5lc3RlZENoYW5nZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICB1bmJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICBiaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvblZCYXJNb3VzZURvd24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLnY7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uSEJhck1vdXNlRG93bihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW92ZVVwZGF0ZShlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VVcChlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBnZXRNb3ZlVmFsdWUoZSwgYmFyT2JqKSB7XG4gICAgaWYgKGJhck9iai5heGlzID09PSAnWScgfHwgIXRoaXMuaXNSVEwpIHtcbiAgICAgIHJldHVybiBlW2Jhck9iai5tb3ZlUHJvcF07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNJRSkge1xuICAgICAgcmV0dXJuIGJhck9iai5zY3JvbGxSYW5nZSAtIGVbYmFyT2JqLm1vdmVQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZVtiYXJPYmoubW92ZVByb3BdO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gdGhpcy5nZXRNb3ZlVmFsdWUoZSwgYWN0aXZlQmFyT2JqKTtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdO1xuICB9XG5cbiAgbW92ZVVwZGF0ZShlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmogfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gdGhpcy5nZXRNb3ZlVmFsdWUoZSwgYWN0aXZlQmFyT2JqKSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBudWxsO1xuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IDA7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgYmluZEFycm93c0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGFycm93IH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93LnQuZWwpIGFycm93LnQuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVENsaWNrKTtcbiAgICBpZiAoYXJyb3cuYi5lbCkgYXJyb3cuYi5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CQ2xpY2spO1xuICAgIGlmIChhcnJvdy5sLmVsKSBhcnJvdy5sLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxDbGljayk7XG4gICAgaWYgKGFycm93LnIuZWwpIGFycm93LnIuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUkNsaWNrKTtcbiAgfVxuXG4gIHVuYmluZEFycm93c0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGFycm93IH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93LnQuZWwpIGFycm93LnQuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uVENsaWNrKTtcbiAgICBpZiAoYXJyb3cuYi5lbCkgYXJyb3cuYi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25CQ2xpY2spO1xuICAgIGlmIChhcnJvdy5sLmVsKSBhcnJvdy5sLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkxDbGljayk7XG4gICAgaWYgKGFycm93LnIuZWwpIGFycm93LnIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uUkNsaWNrKTtcbiAgfVxuXG4gIG9uVENsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbFRvcCcsIC10aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvbkJDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxUb3AnLCB0aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvbkxDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxMZWZ0JywgLXRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIG9uUkNsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbExlZnQnLCB0aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBzbW9vdGhTY3JvbGxUbyhzY3JvbGxEaXIsIG9mZnNldCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwgfSA9IHRoaXM7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdzbW9vdGgnO1xuICAgIHNjcm9sbEVsW3Njcm9sbERpcl0gKz0gb2Zmc2V0O1xuICAgIHNjcm9sbEVsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJyc7XG4gIH1cblxuICBzZXRCYXJzU2l6ZSgpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcblxuICAgIHRoaXMuc2V0QmFyU2l6ZShiYXIudik7XG4gICAgdGhpcy5zZXRCYXJTaXplKGJhci5oKTtcbiAgfVxuXG4gIHNldEJhclNpemUoYmFyT2JqKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsIH0gPSB0aGlzO1xuXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IHNjcm9sbEVsW2Jhck9iai5sZW5ndGhQcm9wXSAtIGJhck9iai5mb3JjZVNpemUgKiBiYXJPYmouZm9yY2VNdWx0aTtcbiAgICBjb25zdCBtYXNrU2l6ZSA9IG1hc2tFbFtiYXJPYmoubWVhc3VyZVByb3BdO1xuICAgIGJhck9iai5zY3JvbGxSYW5nZSA9IHNjcm9sbFNpemUgLSBtYXNrU2l6ZTtcblxuICAgIGlmIChiYXJPYmouZWwpIHtcbiAgICAgIGNvbnN0IGZyYWN0ID0gbWFza1NpemUgLyBzY3JvbGxTaXplO1xuICAgICAgY29uc3QgdHJhY2tTaXplID0gYmFyT2JqLnRyYWNrRWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICAgIGJhck9iai5zaXplRnJhY3QgPSBmcmFjdDtcbiAgICAgIGJhck9iai50cmFja1NpemUgPSB0cmFja1NpemU7XG4gICAgICBiYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKGJhck9iai5zaXplRnJhY3QgPT09IDEpID8gJ25vbmUnIDogJyc7XG4gICAgICBiYXJPYmouZWwuc3R5bGVbYmFyT2JqLnNpemVQcm9wXSA9IGAke2ZyYWN0ICogdHJhY2tTaXplfXB4YDtcbiAgICAgIGJhck9iai5tb3ZlUmFuZ2UgPSB0cmFja1NpemUgLSBiYXJPYmouZWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICB9XG4gIH1cblxuICBzZXRCYXJzUG9zKCkge1xuICAgIGNvbnN0IHsgYmFyLCBldmVudCwgcm9vdEVsLCBhcnJvdyB9ID0gdGhpcztcblxuICAgIGNvbnN0IGZyYWN0ID0ge1xuICAgICAgdjogMCxcbiAgICAgIGg6IDAsXG4gICAgfTtcblxuICAgIGlmIChiYXIudi5lbCkgZnJhY3QudiA9IHRoaXMuc2V0QmFyUG9zKGJhci52KTtcbiAgICBpZiAoYmFyLmguZWwpIGZyYWN0LmggPSB0aGlzLnNldEJhclBvcyhiYXIuaCk7XG5cbiAgICBldmVudC5vblNjcm9sbChmcmFjdCwgcm9vdEVsKTtcblxuICAgIHRoaXMuYXhpc0VkZ2VzKGZyYWN0LCAndicsIGFycm93LnQsIGFycm93LmIpO1xuICAgIHRoaXMuYXhpc0VkZ2VzKGZyYWN0LCAnaCcsIGFycm93LmwsIGFycm93LnIpO1xuICB9XG5cbiAgZ2V0U2Nyb2xsVmFsdWUoYmFyT2JqKSB7XG4gICAgaWYgKGJhck9iai5heGlzID09PSAnWScgfHwgIWJhck9iai5zY3JvbGxSYW5nZSB8fCAhdGhpcy5pc1JUTCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsRWxbYmFyT2JqLnNjcm9sbFByb3BdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzSUUpIHtcbiAgICAgIHJldHVybiBiYXJPYmouc2Nyb2xsUmFuZ2UgLSB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zY3JvbGxFbFtiYXJPYmouc2Nyb2xsUHJvcF0gKyBiYXJPYmouc2Nyb2xsUmFuZ2U7XG4gIH1cblxuICBzZXRCYXJQb3MoYmFyT2JqKSB7XG4gICAgbGV0IHNjcm9sbFZhbHVlID0gdGhpcy5nZXRTY3JvbGxWYWx1ZShiYXJPYmopO1xuXG4gICAgY29uc3QgZnJhY3QgPSBiYXJPYmouc2Nyb2xsUmFuZ2UgPyAoXG4gICAgICBzY3JvbGxWYWx1ZSAvIGJhck9iai5zY3JvbGxSYW5nZVxuICAgICkgOiAwO1xuXG4gICAgaWYgKGJhck9iai5lbCkge1xuICAgICAgY29uc3QgcG9zID0gZnJhY3QgKiAoYmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gYmFyT2JqLnNpemVGcmFjdCkpO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUke2Jhck9iai5heGlzfSgke3Bvc31weClgO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFjdDtcbiAgfVxuXG4gIGF4aXNFZGdlcyhmcmFjdCwgYXhpcywgYXJyb3dPYmowLCBhcnJvd09iajEpIHtcbiAgICBjb25zdCB7IHByb2dyZXNzLCBldmVudCwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKGZyYWN0W2F4aXNdICE9PSBwcm9ncmVzc1theGlzXSkge1xuICAgICAgcHJvZ3Jlc3NbYXhpc10gPSBmcmFjdFtheGlzXTtcblxuICAgICAgY29uc3QgaXNFZGdlMCA9IGZyYWN0W2F4aXNdIDw9IDA7XG4gICAgICBpZiAoaXNFZGdlMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoYXJyb3dPYmowLmVsKSB0aGlzLnNldEFycm93SWYoYXJyb3dPYmowLCBpc0VkZ2UwKTtcblxuICAgICAgY29uc3QgaXNFZGdlMSA9IGZyYWN0W2F4aXNdID49IDE7XG4gICAgICBpZiAoaXNFZGdlMSkgZXZlbnQub25SaWdodChyb290RWwpO1xuICAgICAgaWYgKGFycm93T2JqMS5lbCkgdGhpcy5zZXRBcnJvd0lmKGFycm93T2JqMSwgaXNFZGdlMSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJyb3dJZihhcnJvd09iaiwgZGlzYWJsZWQpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93T2JqLmRpc2FibGVkID09PSBkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgYXJyb3dPYmouZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgIGNvbnN0IGRpc2FibGVkQ2xhc3MgPSBgJHtjc3NDbGFzc31fX2Fycm93LS1kaXNhYmxlZGA7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBhcnJvd09iai5lbC5jbGFzc0xpc3QuYWRkKGRpc2FibGVkQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJvd09iai5lbC5jbGFzc0xpc3QucmVtb3ZlKGRpc2FibGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopIHtcbiAgICB0aGlzLnNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXSA9IChcbiAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgKyAoXG4gICAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxSYW5nZSAqIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiAvIGFjdGl2ZUJhck9iai5tb3ZlUmFuZ2VcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFBhcmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cuQ3VzdG9tRXZlbnQpIHJldHVybjtcbiAgICB0aGlzLnJvb3RFbC5wYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICAqIFJlY2FsY3VsYXRlcyBjb250ZW50IHNpemUgYW5kIHNldCBzY3JvbGxiYXJzIHNpemVcbiAgICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0QmFyc1NpemUoKTtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgICogRGVzdHJveXMgdGhlIGluc3RhbmNlIGFuZCByZXN0b3JlIG9yaWdpbmFsIGh0bWxcbiAgICAqL1xuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCwgcm9vdEVsLCBiYXIsIGFycm93LCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHRoaXMudW5iaW5kQXJyb3dzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgaWYgKGJhci52LnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIudi50cmFja0VsKTtcbiAgICAgIGJhci52LmVsID0gbnVsbDtcbiAgICAgIGJhci52LnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cudC5lbCA9IG51bGw7XG4gICAgICBhcnJvdy5iLmVsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGJhci5oLnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIuaC50cmFja0VsKTtcbiAgICAgIGJhci5oLmVsID0gbnVsbDtcbiAgICAgIGJhci5oLnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cubC5lbCA9IG51bGw7XG4gICAgICBhcnJvdy5yLmVsID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3duVHJlZSkgcm9vdEVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICByb290U3R5bGUucG9zaXRpb24gPSAnJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHtcbiAgICAgIGlmIChzY3JvbGxFbCkge1xuICAgICAgICB3aGlsZSAoc2Nyb2xsRWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWFza0VsKSB7XG4gICAgICAgICAgbWFza0VsLnJlbW92ZUNoaWxkKHNjcm9sbEVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWFza0VsKSB7XG4gICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChtYXNrRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxFbCkgdGhpcy5zY3JvbGxFbCA9IG51bGw7XG4gICAgaWYgKG1hc2tFbCkgdGhpcy5tYXNrRWwgPSBudWxsO1xuXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVmcmVzaFBhcmVudHMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9