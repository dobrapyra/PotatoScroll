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
        this.isRTL = vNativeSize > 0 && testContentEl.offsetLeft > testScrollEl.offsetLeft;
        testScrollEl.removeChild(testContentEl);
      }

      rootParent.removeChild(testScrollEl);
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
    key: "moveBegin",
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
    key: "moveUpdate",
    value: function moveUpdate(e) {
      var activeBarObj = this.activeBarObj;
      if (activeBarObj === null) return;
      activeBarObj.moveDiff = e[activeBarObj.moveProp] - activeBarObj.moveStart;
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
    key: "setBarPos",
    value: function setBarPos(barObj) {
      var fract = barObj.scrollRange ? this.scrollEl[barObj.scrollProp] / barObj.scrollRange : 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWwiLCJpbnN0YW5jZU9wdGlvbiIsIk9iamVjdCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwibWFza0VsIiwic2Nyb2xsRWwiLCJjc3NDbGFzcyIsImZvcmNlQ3VzdG9tIiwiZm9yY2VTaXplIiwid2l0aEFycm93cyIsImFycm93TW92ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsIm93bk1hc2tFbCIsIm93blNjcm9sbEVsIiwiZXZlbnQiLCJvd25UcmVlIiwicmVzZXRTdGF0ZSIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiZGlzYWJsZWQiLCJiIiwibCIsInIiLCJpc1JUTCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDaGFuZ2UiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwib25UQ2xpY2siLCJvbkJDbGljayIsIm9uTENsaWNrIiwib25SQ2xpY2siLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJiaW5kQXJyb3dzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJyb290UGFyZW50IiwicGFyZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXN0U2Nyb2xsU3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0ZXN0Q29udGVudEVsIiwib2Zmc2V0TGVmdCIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsIm1hc2tTdHlsZSIsImZsZXhHcm93IiwiekluZGV4Iiwic2Nyb2xsU3R5bGUiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwidkZvcmNlU2l6ZSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiaEZvcmNlU2l6ZSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJ2VHJhY2tFbCIsImNyZWF0ZVRyYWNrRWwiLCJ2QmFyRWwiLCJjcmVhdGVCYXJFbCIsImhUcmFja0VsIiwiaEJhckVsIiwiYWRkQ3VzdG9tQXJyb3dzIiwiYmFyRWwiLCJhcnJvd1QiLCJjcmVhdGVBcnJvd0VsIiwiYXJyb3dCIiwiYXJyb3dMIiwiYXJyb3dSIiwiZGlyZWN0aW9uIiwiYXJyb3dFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0QmFyc1BvcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdmVCZWdpbiIsIm1vdmVVcGRhdGUiLCJtb3ZlRW5kIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwic21vb3RoU2Nyb2xsVG8iLCJzY3JvbGxEaXIiLCJvZmZzZXQiLCJzY3JvbGxCZWhhdmlvciIsInNldEJhclNpemUiLCJiYXJPYmoiLCJzY3JvbGxTaXplIiwibWFza1NpemUiLCJzY3JvbGxSYW5nZSIsImZyYWN0IiwibW92ZVJhbmdlIiwic2V0QmFyUG9zIiwiYXhpc0VkZ2VzIiwicG9zIiwidHJhbnNmb3JtIiwiYXJyb3dPYmowIiwiYXJyb3dPYmoxIiwiaXNFZGdlMCIsInNldEFycm93SWYiLCJpc0VkZ2UxIiwiYXJyb3dPYmoiLCJkaXNhYmxlZENsYXNzIiwicmVtb3ZlIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYnViYmxlcyIsInNldEJhcnNTaXplIiwidW5iaW5kQXJyb3dzRXZlbnRzIiwidW5iaW5kQmFyc0V2ZW50cyIsInVuYmluZEV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7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QkFBTSxDQUFDcUYsV0FBUCxDQUFtQmxHLE1BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxRQUFKLEVBQWMsS0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNkLFVBQUlELE1BQUosRUFBWSxLQUFLQSxNQUFMLEdBQWMsSUFBZDtBQUVaLFdBQUtrQixVQUFMO0FBRUF3RCxnQkFBVSxDQUFDLEtBQUtuQixjQUFOLENBQVY7QUFDRCIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiUG90YXRvU2Nyb2xsXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlBvdGF0b1Njcm9sbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJQb3RhdG9TY3JvbGxcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG90YXRvU2Nyb2xsIHtcblxuICBzdGF0aWMgY3JlYXRlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdG9yLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgZWwgPT4ge1xuICAgICAgICBjb25zdCBpbnN0YW5jZU9wdGlvbiA9IE9iamVjdChvcHRpb25zKTtcbiAgICAgICAgaW5zdGFuY2VPcHRpb24uZWwgPSBlbDtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3RhdG9TY3JvbGwoaW5zdGFuY2VPcHRpb24pO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLnByZWluaXQob3B0aW9ucykpIHJldHVybjtcblxuICAgIHRoaXMuYmluZFRoaXMoKTtcbiAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgfVxuXG4gIHByZWluaXQob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgTk9PUCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBtYXNrRWwgPSBudWxsLFxuICAgICAgc2Nyb2xsRWwgPSBudWxsLFxuICAgICAgY3NzQ2xhc3MgPSAncG90YXRvU2Nyb2xsJyxcbiAgICAgIGZvcmNlQ3VzdG9tID0gZmFsc2UsXG4gICAgICBmb3JjZVNpemUgPSAyMCxcbiAgICAgIHdpdGhBcnJvd3MgPSBmYWxzZSxcbiAgICAgIGFycm93TW92ZSA9IDQwLFxuICAgICAgb25OYXRpdmVTY3JvbGwgPSBOT09QLFxuICAgICAgb25TY3JvbGwgPSBOT09QLFxuICAgICAgb25Ub3AgPSBOT09QLFxuICAgICAgb25Cb3R0b20gPSBOT09QLFxuICAgICAgb25MZWZ0ID0gTk9PUCxcbiAgICAgIG9uUmlnaHQgPSBOT09QLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5yb290RWwgPSBlbDtcbiAgICB0aGlzLm93bk1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLm93blNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcbiAgICB0aGlzLmZvcmNlU2l6ZSA9IGZvcmNlU2l6ZTtcbiAgICB0aGlzLndpdGhBcnJvd3MgPSB3aXRoQXJyb3dzO1xuICAgIHRoaXMuYXJyb3dNb3ZlID0gYXJyb3dNb3ZlO1xuXG4gICAgdGhpcy5ldmVudCA9IHtcbiAgICAgIG9uTmF0aXZlU2Nyb2xsLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBvblRvcCxcbiAgICAgIG9uQm90dG9tLFxuICAgICAgb25MZWZ0LFxuICAgICAgb25SaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy5vd25UcmVlID0gKHRoaXMub3duTWFza0VsICE9PSBudWxsICYmIHRoaXMub3duU2Nyb2xsRWwgIT09IG51bGwpO1xuXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgY29uc3QgeyBmb3JjZUN1c3RvbSwgZm9yY2VTaXplIH0gPSB0aGlzO1xuXG4gICAgdGhpcy53YWl0ID0ge1xuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHJlc2l6ZTogZmFsc2UsXG4gICAgfTtcblxuICAgIHRoaXMucmFmID0ge1xuICAgICAgc2Nyb2xsOiBudWxsLFxuICAgICAgcmVzaXplOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgdjogbnVsbCxcbiAgICAgIGg6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMuYmFyID0ge1xuICAgICAgdjoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIHRyYWNrRWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICB0cmFja1NpemU6IDAsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WScsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxUb3AnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsSGVpZ2h0JyxcbiAgICAgICAgbWVhc3VyZVByb3A6ICdvZmZzZXRIZWlnaHQnLFxuICAgICAgICBzaXplUHJvcDogJ2hlaWdodCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDEsXG4gICAgICAgIGF4aXM6ICdZJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgdHJhY2tFbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgICBsZW5ndGhQcm9wOiAnc2Nyb2xsV2lkdGgnLFxuICAgICAgICBtZWFzdXJlUHJvcDogJ29mZnNldFdpZHRoJyxcbiAgICAgICAgc2l6ZVByb3A6ICd3aWR0aCcsXG4gICAgICAgIGZvcmNlTXVsdGk6IDIsXG4gICAgICAgIGF4aXM6ICdYJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHRoaXMuYXJyb3cgPSB7XG4gICAgICB0OiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgYjoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGw6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICByOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmlzUlRMID0gZmFsc2U7XG4gIH1cblxuICBiaW5kVGhpcygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZVRocm90dGxlID0gdGhpcy5vblJlc2l6ZVRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25OZXN0ZWRDaGFuZ2UgPSB0aGlzLm9uTmVzdGVkQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoUGFyZW50cyA9IHRoaXMucmVmcmVzaFBhcmVudHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25Eb2NNb3VzZU1vdmUgPSB0aGlzLm9uRG9jTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlVXAgPSB0aGlzLm9uRG9jTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZUxlYXZlID0gdGhpcy5vbkRvY01vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25WQmFyTW91c2VEb3duID0gdGhpcy5vblZCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSEJhck1vdXNlRG93biA9IHRoaXMub25IQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVENsaWNrID0gdGhpcy5vblRDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CQ2xpY2sgPSB0aGlzLm9uQkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkxDbGljayA9IHRoaXMub25MQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUkNsaWNrID0gdGhpcy5vblJDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgJiByZWluaXRpYWxpemUgaW5zdGFuY2VcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFuYWx5emVOYXRpdmUoKTtcbiAgICB0aGlzLnByZXBhcmVET00oKTtcbiAgICB0aGlzLmhpZGVOYXRpdmVCYXJzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21CYXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMuYmluZEFycm93c0V2ZW50cygpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxuXG4gIGFuYWx5emVOYXRpdmUoKSB7XG4gICAgY29uc3QgeyByb290RWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHJvb3RQYXJlbnQgPSByb290RWwucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHRlc3RTY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlc3RTY3JvbGxTdHlsZSA9IHRlc3RTY3JvbGxFbC5zdHlsZTtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbFN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgcm9vdFBhcmVudC5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIGJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICBiYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSBiYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIGJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgUlRMXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkge1xuICAgICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgICB0aGlzLmlzUlRMID0gKHZOYXRpdmVTaXplID4gMCkgJiYgKHRlc3RDb250ZW50RWwub2Zmc2V0TGVmdCA+IHRlc3RTY3JvbGxFbC5vZmZzZXRMZWZ0KTtcblxuICAgICAgdGVzdFNjcm9sbEVsLnJlbW92ZUNoaWxkKHRlc3RDb250ZW50RWwpO1xuICAgIH1cblxuICAgIHJvb3RQYXJlbnQucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHJvb3RFbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIHJvb3RTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvLyBtYXNrRWxcbiAgICBjb25zdCBtYXNrRWwgPSAoIXRoaXMub3duVHJlZSkgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSA6IHRoaXMub3duTWFza0VsO1xuICAgIGlmICghdGhpcy5vd25UcmVlKSBtYXNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX21hc2tgKTtcbiAgICBjb25zdCBtYXNrU3R5bGUgPSBtYXNrRWwuc3R5bGU7XG4gICAgbWFza1N0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBtYXNrU3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBtYXNrU3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIG1hc2tTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1hc2tTdHlsZS56SW5kZXggPSAnMCc7XG5cbiAgICAvLyBzY3JvbGxFbFxuICAgIGNvbnN0IHNjcm9sbEVsID0gKCF0aGlzLm93blRyZWUpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiB0aGlzLm93blNjcm9sbEVsO1xuICAgIGlmICghdGhpcy5vd25UcmVlKSBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgY29uc3Qgc2Nyb2xsU3R5bGUgPSBzY3JvbGxFbC5zdHlsZTtcbiAgICBzY3JvbGxTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgc2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIGlmICghdGhpcy5vd25UcmVlKSB7XG4gICAgICB3aGlsZSAocm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHNjcm9sbEVsLmFwcGVuZENoaWxkKHJvb3RFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cblxuICAgICAgbWFza0VsLmFwcGVuZENoaWxkKHNjcm9sbEVsKTtcbiAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtYXNrRWwpO1xuICAgIH1cblxuICAgIHRoaXMubWFza0VsID0gbWFza0VsO1xuICAgIHRoaXMuc2Nyb2xsRWwgPSBzY3JvbGxFbDtcbiAgfVxuXG4gIGhpZGVOYXRpdmVCYXJzKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIGJhciB9ID0gdGhpcztcblxuICAgIGlmICh0aGlzLmZvcmNlQ3VzdG9tICYmIChiYXIudi5uYXRpdmVTaXplID09PSAwIHx8IGJhci5oLm5hdGl2ZVNpemUgPT09IDApKSB7XG4gICAgICBjb25zdCB2Rm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuXG4gICAgICBjb25zdCBoRm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWhGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke2hGb3JjZVNpemV9cHhgO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSVEwpIHtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIH1cbiAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstYmFyLnYubmF0aXZlU2l6ZX1weGA7XG4gIH1cblxuICBhZGRDdXN0b21CYXJzKCkge1xuICAgIGNvbnN0IHsgYmFyLCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBpZiAoIShcbiAgICAgIGJhci52Lm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIGJhci5oLm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIHRoaXMuZm9yY2VDdXN0b21cbiAgICApKSByZXR1cm47XG5cbiAgICBjb25zdCB2VHJhY2tFbCA9IHRoaXMuY3JlYXRlVHJhY2tFbCgndicpO1xuICAgIGNvbnN0IHZCYXJFbCA9IHRoaXMuY3JlYXRlQmFyRWwoJ3YnKTtcblxuICAgIGNvbnN0IGhUcmFja0VsID0gdGhpcy5jcmVhdGVUcmFja0VsKCdoJyk7XG4gICAgY29uc3QgaEJhckVsID0gdGhpcy5jcmVhdGVCYXJFbCgnaCcpO1xuXG4gICAgaWYgKHRoaXMud2l0aEFycm93cykgdGhpcy5hZGRDdXN0b21BcnJvd3MoKTtcblxuICAgIHZUcmFja0VsLmFwcGVuZENoaWxkKHZCYXJFbCk7XG4gICAgaFRyYWNrRWwuYXBwZW5kQ2hpbGQoaEJhckVsKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZCh2VHJhY2tFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGhUcmFja0VsKTtcbiAgfVxuXG4gIGNyZWF0ZVRyYWNrRWwoYXhpcykge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIHRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrLS0ke2F4aXN9YCk7XG4gICAgdHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyW2F4aXNdLnRyYWNrRWwgPSB0cmFja0VsO1xuXG4gICAgcmV0dXJuIHRyYWNrRWw7XG4gIH1cblxuICBjcmVhdGVCYXJFbChheGlzKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgYmFyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgYmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0tJHtheGlzfWApO1xuICAgIGJhcltheGlzXS5lbCA9IGJhckVsO1xuXG4gICAgcmV0dXJuIGJhckVsO1xuICB9XG5cbiAgYWRkQ3VzdG9tQXJyb3dzKCkge1xuICAgIGNvbnN0IHsgYmFyLCByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9LS1hcnJvd3NgKTtcblxuICAgIGNvbnN0IGFycm93VCA9IHRoaXMuY3JlYXRlQXJyb3dFbCgndCcpO1xuICAgIGNvbnN0IGFycm93QiA9IHRoaXMuY3JlYXRlQXJyb3dFbCgnYicpO1xuICAgIGNvbnN0IGFycm93TCA9IHRoaXMuY3JlYXRlQXJyb3dFbCgnbCcpO1xuICAgIGNvbnN0IGFycm93UiA9IHRoaXMuY3JlYXRlQXJyb3dFbCgncicpO1xuXG4gICAgYmFyLnYudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd1QpO1xuICAgIGJhci52LnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dCKTtcbiAgICBiYXIuaC50cmFja0VsLmFwcGVuZENoaWxkKGFycm93TCk7XG4gICAgYmFyLmgudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd1IpO1xuICB9XG5cbiAgY3JlYXRlQXJyb3dFbChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBhcnJvdyB9ID0gdGhpcztcblxuICAgIGNvbnN0IGFycm93RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcnJvd0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19hcnJvd2ApO1xuICAgIGFycm93RWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Fycm93LS0ke2RpcmVjdGlvbn1gKTtcbiAgICBhcnJvd0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBhcnJvd0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBhcnJvd1tkaXJlY3Rpb25dLmVsID0gYXJyb3dFbDtcblxuICAgIHJldHVybiBhcnJvd0VsO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5hZGRFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywgdGhpcy5vbk5lc3RlZENoYW5nZSk7XG4gIH1cblxuICB1bmJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuXG4gICAgdGhpcy5yb290RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENoYW5nZScsIHRoaXMub25OZXN0ZWRDaGFuZ2UpO1xuICB9XG5cbiAgb25TY3JvbGxUaHJvdHRsZShldmVudCkge1xuICAgIHRoaXMuZXZlbnQub25OYXRpdmVTY3JvbGwoZXZlbnQsIHRoaXMucm9vdEVsKTtcblxuICAgIGlmICh0aGlzLndhaXQuc2Nyb2xsKSByZXR1cm47XG4gICAgdGhpcy53YWl0LnNjcm9sbCA9IHRydWU7XG5cbiAgICB0aGlzLnJhZi5zY3JvbGwgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbCk7XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcblxuICAgIHRoaXMud2FpdC5zY3JvbGwgPSBmYWxzZTtcbiAgfVxuXG4gIG9uUmVzaXplVGhyb3R0bGUoKSB7XG4gICAgaWYgKHRoaXMud2FpdC5yZXNpemUpIHJldHVybjtcbiAgICB0aGlzLndhaXQucmVzaXplID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmLnJlc2l6ZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgdGhpcy53YWl0LnJlc2l6ZSA9IGZhbHNlO1xuICB9XG5cbiAgb25OZXN0ZWRDaGFuZ2UoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBiaW5kQmFyc0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcblxuICAgIGlmIChiYXIudi5lbCkgYmFyLnYuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZCYXJNb3VzZURvd24pO1xuICAgIGlmIChiYXIuaC5lbCkgYmFyLmguZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkhCYXJNb3VzZURvd24pO1xuICB9XG5cbiAgdW5iaW5kQmFyc0V2ZW50cygpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcblxuICAgIGlmIChiYXIudi5lbCkgYmFyLnYuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZCYXJNb3VzZURvd24pO1xuICAgIGlmIChiYXIuaC5lbCkgYmFyLmguZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkhCYXJNb3VzZURvd24pO1xuICB9XG5cbiAgYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICB1bmJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgb25WQmFyTW91c2VEb3duKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci52O1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkhCYXJNb3VzZURvd24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLmg7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdmVVcGRhdGUoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlVXAoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBzY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF07XG4gIH1cblxuICBtb3ZlVXBkYXRlKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF0gLSBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0O1xuXG4gICAgdGhpcy5iYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKTtcbiAgfVxuXG4gIG1vdmVFbmQoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gbnVsbDtcbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSAwO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBudWxsO1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgfVxuXG4gIGJpbmRBcnJvd3NFdmVudHMoKSB7XG4gICAgY29uc3QgeyBhcnJvdyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvdy50LmVsKSBhcnJvdy50LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRDbGljayk7XG4gICAgaWYgKGFycm93LmIuZWwpIGFycm93LmIuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQkNsaWNrKTtcbiAgICBpZiAoYXJyb3cubC5lbCkgYXJyb3cubC5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MQ2xpY2spO1xuICAgIGlmIChhcnJvdy5yLmVsKSBhcnJvdy5yLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJDbGljayk7XG4gIH1cblxuICB1bmJpbmRBcnJvd3NFdmVudHMoKSB7XG4gICAgY29uc3QgeyBhcnJvdyB9ID0gdGhpcztcblxuICAgIGlmIChhcnJvdy50LmVsKSBhcnJvdy50LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblRDbGljayk7XG4gICAgaWYgKGFycm93LmIuZWwpIGFycm93LmIuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQkNsaWNrKTtcbiAgICBpZiAoYXJyb3cubC5lbCkgYXJyb3cubC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25MQ2xpY2spO1xuICAgIGlmIChhcnJvdy5yLmVsKSBhcnJvdy5yLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vblJDbGljayk7XG4gIH1cblxuICBvblRDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxUb3AnLCAtdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25CQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsVG9wJywgdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25MQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsTGVmdCcsIC10aGlzLmFycm93TW92ZSk7XG4gIH1cblxuICBvblJDbGljaygpIHtcbiAgICB0aGlzLnNtb290aFNjcm9sbFRvKCdzY3JvbGxMZWZ0JywgdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgc21vb3RoU2Nyb2xsVG8oc2Nyb2xsRGlyLCBvZmZzZXQpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsIH0gPSB0aGlzO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnc21vb3RoJztcbiAgICBzY3JvbGxFbFtzY3JvbGxEaXJdICs9IG9mZnNldDtcbiAgICBzY3JvbGxFbC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnNldEJhclNpemUoYmFyLnYpO1xuICAgIHRoaXMuc2V0QmFyU2l6ZShiYXIuaCk7XG4gIH1cblxuICBzZXRCYXJTaXplKGJhck9iaikge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCB9ID0gdGhpcztcblxuICAgIGNvbnN0IHNjcm9sbFNpemUgPSBzY3JvbGxFbFtiYXJPYmoubGVuZ3RoUHJvcF0gLSBiYXJPYmouZm9yY2VTaXplICogYmFyT2JqLmZvcmNlTXVsdGk7XG4gICAgY29uc3QgbWFza1NpemUgPSBtYXNrRWxbYmFyT2JqLm1lYXN1cmVQcm9wXTtcbiAgICBiYXJPYmouc2Nyb2xsUmFuZ2UgPSBzY3JvbGxTaXplIC0gbWFza1NpemU7XG5cbiAgICBpZiAoYmFyT2JqLmVsKSB7XG4gICAgICBjb25zdCBmcmFjdCA9IG1hc2tTaXplIC8gc2Nyb2xsU2l6ZTtcbiAgICAgIGNvbnN0IHRyYWNrU2l6ZSA9IGJhck9iai50cmFja0VsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgICBiYXJPYmouc2l6ZUZyYWN0ID0gZnJhY3Q7XG4gICAgICBiYXJPYmoudHJhY2tTaXplID0gdHJhY2tTaXplO1xuICAgICAgYmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9IChiYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlW2Jhck9iai5zaXplUHJvcF0gPSBgJHtmcmFjdCAqIHRyYWNrU2l6ZX1weGA7XG4gICAgICBiYXJPYmoubW92ZVJhbmdlID0gdHJhY2tTaXplIC0gYmFyT2JqLmVsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IGJhciwgZXZlbnQsIHJvb3RFbCwgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBmcmFjdCA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICBpZiAoYmFyLnYuZWwpIGZyYWN0LnYgPSB0aGlzLnNldEJhclBvcyhiYXIudik7XG4gICAgaWYgKGJhci5oLmVsKSBmcmFjdC5oID0gdGhpcy5zZXRCYXJQb3MoYmFyLmgpO1xuXG4gICAgZXZlbnQub25TY3JvbGwoZnJhY3QsIHJvb3RFbCk7XG5cbiAgICB0aGlzLmF4aXNFZGdlcyhmcmFjdCwgJ3YnLCBhcnJvdy50LCBhcnJvdy5iKTtcbiAgICB0aGlzLmF4aXNFZGdlcyhmcmFjdCwgJ2gnLCBhcnJvdy5sLCBhcnJvdy5yKTtcbiAgfVxuXG4gIHNldEJhclBvcyhiYXJPYmopIHtcbiAgICBjb25zdCBmcmFjdCA9IGJhck9iai5zY3JvbGxSYW5nZSA/IChcbiAgICAgIHRoaXMuc2Nyb2xsRWxbYmFyT2JqLnNjcm9sbFByb3BdIC8gYmFyT2JqLnNjcm9sbFJhbmdlXG4gICAgKSA6IDA7XG5cbiAgICBpZiAoYmFyT2JqLmVsKSB7XG4gICAgICBjb25zdCBwb3MgPSBmcmFjdCAqIChiYXJPYmoudHJhY2tTaXplICogKDEgLSBiYXJPYmouc2l6ZUZyYWN0KSk7XG4gICAgICBiYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7YmFyT2JqLmF4aXN9KCR7cG9zfXB4KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWN0O1xuICB9XG5cbiAgYXhpc0VkZ2VzKGZyYWN0LCBheGlzLCBhcnJvd09iajAsIGFycm93T2JqMSkge1xuICAgIGNvbnN0IHsgcHJvZ3Jlc3MsIGV2ZW50LCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBpZiAoZnJhY3RbYXhpc10gIT09IHByb2dyZXNzW2F4aXNdKSB7XG4gICAgICBwcm9ncmVzc1theGlzXSA9IGZyYWN0W2F4aXNdO1xuXG4gICAgICBjb25zdCBpc0VkZ2UwID0gZnJhY3RbYXhpc10gPD0gMDtcbiAgICAgIGlmIChpc0VkZ2UwKSBldmVudC5vbkxlZnQocm9vdEVsKTtcbiAgICAgIGlmIChhcnJvd09iajAuZWwpIHRoaXMuc2V0QXJyb3dJZihhcnJvd09iajAsIGlzRWRnZTApO1xuXG4gICAgICBjb25zdCBpc0VkZ2UxID0gZnJhY3RbYXhpc10gPj0gMTtcbiAgICAgIGlmIChpc0VkZ2UxKSBldmVudC5vblJpZ2h0KHJvb3RFbCk7XG4gICAgICBpZiAoYXJyb3dPYmoxLmVsKSB0aGlzLnNldEFycm93SWYoYXJyb3dPYmoxLCBpc0VkZ2UxKTtcbiAgICB9XG4gIH1cblxuICBzZXRBcnJvd0lmKGFycm93T2JqLCBkaXNhYmxlZCkge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICBpZiAoYXJyb3dPYmouZGlzYWJsZWQgPT09IGRpc2FibGVkKSByZXR1cm47XG5cbiAgICBhcnJvd09iai5kaXNhYmxlZCA9IGRpc2FibGVkO1xuXG4gICAgY29uc3QgZGlzYWJsZWRDbGFzcyA9IGAke2Nzc0NsYXNzfV9fYXJyb3ctLWRpc2FibGVkYDtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIGFycm93T2JqLmVsLmNsYXNzTGlzdC5hZGQoZGlzYWJsZWRDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFycm93T2JqLmVsLmNsYXNzTGlzdC5yZW1vdmUoZGlzYWJsZWRDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaikge1xuICAgIHRoaXMuc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdID0gKFxuICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSArIChcbiAgICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbFJhbmdlICogYWN0aXZlQmFyT2JqLm1vdmVEaWZmIC8gYWN0aXZlQmFyT2JqLm1vdmVSYW5nZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoUGFyZW50cygpIHtcbiAgICBpZiAoIXdpbmRvdy5DdXN0b21FdmVudCkgcmV0dXJuO1xuICAgIHRoaXMucm9vdEVsLnBhcmVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDaGFuZ2UnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgICogUmVjYWxjdWxhdGVzIGNvbnRlbnQgc2l6ZSBhbmQgc2V0IHNjcm9sbGJhcnMgc2l6ZVxuICAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRCYXJzU2l6ZSgpO1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBEZXN0cm95cyB0aGUgaW5zdGFuY2UgYW5kIHJlc3RvcmUgb3JpZ2luYWwgaHRtbFxuICAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsLCByb290RWwsIGJhciwgYXJyb3csIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgdGhpcy51bmJpbmRBcnJvd3NFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZERvY0V2ZW50cygpO1xuICAgIHRoaXMudW5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICBpZiAoYmFyLnYudHJhY2tFbCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGJhci52LnRyYWNrRWwpO1xuICAgICAgYmFyLnYuZWwgPSBudWxsO1xuICAgICAgYmFyLnYudHJhY2tFbCA9IG51bGw7XG4gICAgICBhcnJvdy50LmVsID0gbnVsbDtcbiAgICAgIGFycm93LmIuZWwgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoYmFyLmgudHJhY2tFbCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGJhci5oLnRyYWNrRWwpO1xuICAgICAgYmFyLmguZWwgPSBudWxsO1xuICAgICAgYmFyLmgudHJhY2tFbCA9IG51bGw7XG4gICAgICBhcnJvdy5sLmVsID0gbnVsbDtcbiAgICAgIGFycm93LnIuZWwgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vd25UcmVlKSByb290RWwuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgY29uc3Qgcm9vdFN0eWxlID0gcm9vdEVsLnN0eWxlO1xuICAgIHJvb3RTdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIHJvb3RTdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHJvb3RTdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICBpZiAoIXRoaXMub3duVHJlZSkge1xuICAgICAgaWYgKHNjcm9sbEVsKSB7XG4gICAgICAgIHdoaWxlIChzY3JvbGxFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChzY3JvbGxFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtYXNrRWwpIHtcbiAgICAgICAgICBtYXNrRWwucmVtb3ZlQ2hpbGQoc2Nyb2xsRWwpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXNrRWwpIHtcbiAgICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKG1hc2tFbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsID0gbnVsbDtcbiAgICBpZiAobWFza0VsKSB0aGlzLm1hc2tFbCA9IG51bGw7XG5cbiAgICB0aGlzLnJlc2V0U3RhdGUoKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5yZWZyZXNoUGFyZW50cyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=