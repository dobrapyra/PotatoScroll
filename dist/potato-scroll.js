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

  _createClass(PotatoScroll, [{
    key: 'setVars',
    value: function setVars() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var NOOP = function NOOP() {};

      var el = options.el,
          _options$cssClass = options.cssClass,
          cssClass = _options$cssClass === undefined ? 'potatoScroll' : _options$cssClass,
          _options$forceCustom = options.forceCustom,
          forceCustom = _options$forceCustom === undefined ? false : _options$forceCustom,
          _options$forceSize = options.forceSize,
          forceSize = _options$forceSize === undefined ? 20 : _options$forceSize,
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

      this.event = {
        onScroll: onScroll,
        onTop: onTop,
        onBottom: onBottom,
        onLeft: onLeft,
        onRight: onRight
      };

      this.progress = {
        v: 0,
        h: 0
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
          scrollProp: 'scrollTop'
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
          scrollProp: 'scrollLeft'
        }
      };

      this.activeBarObj = null;

      return true;
    }
  }, {
    key: 'analyzeNative',
    value: function analyzeNative() {
      var body = document.documentElement;

      var testScrollEl = document.createElement('div');
      testScrollEl.style.overflow = 'scroll';
      testScrollEl.style.width = '100px';
      testScrollEl.style.height = '100px';
      testScrollEl.style.position = 'absolute';
      testScrollEl.style.top = 0;
      testScrollEl.style.left = 0;
      testScrollEl.style.visibility = 'hidden';

      var testContentEl = document.createElement('div');
      testScrollEl.appendChild(testContentEl);

      body.appendChild(testScrollEl);

      var vNativeSize = testScrollEl.offsetWidth - testScrollEl.scrollWidth;
      var hNativeSize = testScrollEl.offsetHeight - testScrollEl.scrollHeight;

      this.bar.v.nativeSize = vNativeSize;
      this.bar.h.nativeSize = hNativeSize;

      if (vNativeSize > 0) this.bar.v.forceSize = 0;
      if (hNativeSize > 0) this.bar.h.forceSize = 0;

      // detect position - RTL

      body.removeChild(testScrollEl);
    }
  }, {
    key: 'prepareDOM',
    value: function prepareDOM() {
      var rootEl = this.rootEl,
          cssClass = this.cssClass;

      // rootEl

      rootEl.classList.add(cssClass);
      rootEl.style.overflow = 'visible';
      rootEl.style.position = 'relative';
      rootEl.style.display = 'flex';

      // maskEl
      var maskEl = document.createElement('div');
      maskEl.classList.add(cssClass + '__mask');
      maskEl.style.flexGrow = 1;
      maskEl.style.overflow = 'hidden';
      maskEl.style.position = 'relative';
      maskEl.style.display = 'flex';
      maskEl.style.zIndex = '0';

      // scrollEl
      var scrollEl = document.createElement('div');
      scrollEl.classList.add(cssClass + '__scroll');
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

      scrollEl.style.marginRight = -bar.h.nativeSize + 'px';
      scrollEl.style.marginBottom = -bar.v.nativeSize + 'px';
    }
  }, {
    key: 'addCustomBars',
    value: function addCustomBars() {
      var cssClass = this.cssClass,
          bar = this.bar,
          rootEl = this.rootEl;


      if (!(bar.v.nativeSize !== 0 || bar.h.nativeSize !== 0 || this.forceCustom)) return;

      var vTrackEl = document.createElement('div');
      vTrackEl.classList.add(cssClass + '__track');
      vTrackEl.classList.add(cssClass + '__track--v');
      vTrackEl.style.position = 'absolute';
      vTrackEl.style.zIndex = '1';
      bar.v.trackEl = vTrackEl;

      var vBarEl = document.createElement('div');
      vBarEl.classList.add(cssClass + '__bar');
      vBarEl.classList.add(cssClass + '__bar--v');
      bar.v.el = vBarEl;

      var hTrackEl = document.createElement('div');
      hTrackEl.classList.add(cssClass + '__track');
      hTrackEl.classList.add(cssClass + '__track--h');
      hTrackEl.style.position = 'absolute';
      hTrackEl.style.zIndex = '1';
      bar.h.trackEl = hTrackEl;

      var hBarEl = document.createElement('div');
      hBarEl.classList.add(cssClass + '__bar');
      hBarEl.classList.add(cssClass + '__bar--h');
      bar.h.el = hBarEl;

      vTrackEl.appendChild(vBarEl);
      hTrackEl.appendChild(hBarEl);

      rootEl.appendChild(vTrackEl);
      rootEl.appendChild(hTrackEl);
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      this.onScroll = this.onScroll.bind(this);
      this.onScrollThrottle = this.onScrollThrottle.bind(this);
      this.onResize = this.onResize.bind(this);
      this.onResizeThrottle = this.onResizeThrottle.bind(this);
      this.onNestedCreate = this.onNestedCreate.bind(this);

      this.scrollEl.addEventListener('scroll', this.onScrollThrottle);
      window.addEventListener('resize', this.onResizeThrottle);
      this.rootEl.addEventListener('PotatoScroll.nestedCreate', this.onNestedCreate);
    }
  }, {
    key: 'onScrollThrottle',
    value: function onScrollThrottle() {
      if (this.scrollWait) return;
      this.scrollWait = true;

      this.raf = requestAnimationFrame(this.onScroll);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      this.setBarsPos();

      this.scrollWait = false;
    }
  }, {
    key: 'onResizeThrottle',
    value: function onResizeThrottle() {
      if (this.resizeWait) return;
      this.resizeWait = true;

      this.raf = requestAnimationFrame(this.onResize);
    }
  }, {
    key: 'onResize',
    value: function onResize() {
      this.refresh();

      this.resizeWait = false;
    }
  }, {
    key: 'onNestedCreate',
    value: function onNestedCreate() {
      this.refresh();
    }
  }, {
    key: 'bindBarsEvents',
    value: function bindBarsEvents() {
      this.onDocMouseMove = this.onDocMouseMove.bind(this);
      this.onDocMouseUp = this.onDocMouseUp.bind(this);
      this.onDocMouseLeave = this.onDocMouseLeave.bind(this);

      this.onVBarMouseDown = this.onVBarMouseDown.bind(this);
      this.onHBarMouseDown = this.onHBarMouseDown.bind(this);

      if (this.bar.v.el) this.bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
      if (this.bar.h.el) this.bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
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
    key: 'setBarsSize',
    value: function setBarsSize() {
      var scrollEl = this.scrollEl,
          maskEl = this.maskEl,
          bar = this.bar;


      var vBarObj = bar.v;
      var hBarObj = bar.h;

      var vScrollSize = scrollEl.scrollHeight - vBarObj.forceSize;
      var vTrackSize = maskEl.offsetHeight;
      var vFract = vTrackSize / vScrollSize;
      vBarObj.trackSize = vTrackSize;
      vBarObj.sizeFract = vFract;
      vBarObj.scrollRange = vScrollSize - vTrackSize;
      if (vBarObj.el) {
        vBarObj.trackEl.style.display = vBarObj.sizeFract === 1 ? 'none' : '';
        vBarObj.el.style.height = vFract * vBarObj.trackEl.offsetHeight + 'px';
        vBarObj.moveRange = vBarObj.trackEl.offsetHeight - vBarObj.el.offsetHeight;
      }

      var hScrollSize = scrollEl.scrollWidth - 2 * hBarObj.forceSize;
      var hTrackSize = maskEl.offsetWidth;
      var hFract = hTrackSize / hScrollSize;
      hBarObj.trackSize = hTrackSize;
      hBarObj.sizeFract = hFract;
      hBarObj.scrollRange = hScrollSize - hTrackSize;
      if (hBarObj.el) {
        hBarObj.trackEl.style.display = hBarObj.sizeFract === 1 ? 'none' : '';
        hBarObj.el.style.width = hFract * hBarObj.trackEl.offsetWidth + 'px';
        hBarObj.moveRange = hBarObj.trackEl.offsetWidth - hBarObj.el.offsetWidth;
      }
    }
  }, {
    key: 'setBarsPos',
    value: function setBarsPos() {
      var scrollEl = this.scrollEl,
          bar = this.bar,
          progress = this.progress,
          event = this.event,
          rootEl = this.rootEl;


      var vBarObj = bar.v;
      var hBarObj = bar.h;

      var fract = {
        v: 0,
        h: 0
      };

      if (vBarObj.el) {
        fract.v = vBarObj.scrollRange ? scrollEl.scrollTop / vBarObj.scrollRange : 0;
        var vPos = fract.v * (vBarObj.trackSize * (1 - vBarObj.sizeFract));
        vBarObj.el.style.transform = 'translateY(' + vPos + 'px)';
      }

      if (hBarObj.el) {
        fract.h = hBarObj.scrollRange ? scrollEl.scrollLeft / hBarObj.scrollRange : 0;
        var hPos = fract.h * (hBarObj.trackSize * (1 - hBarObj.sizeFract));
        hBarObj.el.style.transform = 'translateX(' + hPos + 'px)';
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
  }, {
    key: 'barMoveToScroll',
    value: function barMoveToScroll(activeBarObj) {
      this.scrollEl[activeBarObj.scrollProp] = activeBarObj.scrollBefore + activeBarObj.scrollRange * activeBarObj.moveDiff / activeBarObj.moveRange;
    }
  }, {
    key: 'refreshParents',
    value: function refreshParents() {
      if (!window.CustomEvent) return;
      this.rootEl.parentElement.dispatchEvent(new CustomEvent('PotatoScroll.nestedCreate', {
        bubbles: true
      }));
    }

    /**
      * manualy refresh bars
      */

  }, {
    key: 'refresh',
    value: function refresh() {
      this.setBarsSize();
      this.setBarsPos();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInNldFZhcnMiLCJhbmFseXplTmF0aXZlIiwicHJlcGFyZURPTSIsImhpZGVOYXRpdmVCYXJzIiwiYWRkQ3VzdG9tQmFycyIsImJpbmRFdmVudHMiLCJiaW5kQmFyc0V2ZW50cyIsInJlZnJlc2giLCJzZXRUaW1lb3V0IiwicmVmcmVzaFBhcmVudHMiLCJiaW5kIiwiTk9PUCIsImNzc0NsYXNzIiwiZm9yY2VDdXN0b20iLCJmb3JjZVNpemUiLCJvblNjcm9sbCIsIm9uVG9wIiwib25Cb3R0b20iLCJvbkxlZnQiLCJvblJpZ2h0Iiwicm9vdEVsIiwiZXZlbnQiLCJwcm9ncmVzcyIsInYiLCJoIiwic2Nyb2xsV2FpdCIsInJlc2l6ZVdhaXQiLCJiYXIiLCJuYXRpdmVTaXplIiwibW92ZVN0YXJ0IiwibW92ZURpZmYiLCJzY3JvbGxCZWZvcmUiLCJzaXplIiwic2l6ZUZyYWN0IiwibW92ZVByb3AiLCJzY3JvbGxQcm9wIiwiYWN0aXZlQmFyT2JqIiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5IiwidGVzdENvbnRlbnRFbCIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImRpc3BsYXkiLCJtYXNrRWwiLCJmbGV4R3JvdyIsInpJbmRleCIsInNjcm9sbEVsIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInZGb3JjZVNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsImhGb3JjZVNpemUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidlRyYWNrRWwiLCJ0cmFja0VsIiwidkJhckVsIiwiaFRyYWNrRWwiLCJoQmFyRWwiLCJvblNjcm9sbFRocm90dGxlIiwib25SZXNpemUiLCJvblJlc2l6ZVRocm90dGxlIiwib25OZXN0ZWRDcmVhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0QmFyc1BvcyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJtb3ZlQmVnaW4iLCJtb3ZlVXBkYXRlIiwibW92ZUVuZCIsInVzZXJTZWxlY3QiLCJwb2ludGVyRXZlbnRzIiwiYmluZERvY0V2ZW50cyIsImJhck1vdmVUb1Njcm9sbCIsInVuYmluZERvY0V2ZW50cyIsInZCYXJPYmoiLCJoQmFyT2JqIiwidlNjcm9sbFNpemUiLCJ2VHJhY2tTaXplIiwidkZyYWN0IiwidHJhY2tTaXplIiwic2Nyb2xsUmFuZ2UiLCJtb3ZlUmFuZ2UiLCJoU2Nyb2xsU2l6ZSIsImhUcmFja1NpemUiLCJoRnJhY3QiLCJmcmFjdCIsInNjcm9sbFRvcCIsInZQb3MiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxMZWZ0IiwiaFBvcyIsIkN1c3RvbUV2ZW50IiwicGFyZW50RWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJidWJibGVzIiwic2V0QmFyc1NpemUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBOzs7Ozs7a0JBRWVBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTUEsWTs7OzZCQUVTO0FBQUEsVUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUEsVUFFeEJDLFFBRndCLEdBR3RCRCxPQUhzQixDQUV4QkMsUUFGd0I7OztBQUsxQixhQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQkMsSUFBcEIsQ0FDTEMsU0FBU0MsZ0JBQVQsQ0FBMEJOLFFBQTFCLENBREssRUFFTCxjQUFNO0FBQ0osWUFBTU8saUJBQWlCQyxPQUFPVCxPQUFQLENBQXZCO0FBQ0FRLHVCQUFlRSxFQUFmLEdBQW9C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ckIsdUMiLCJmaWxlIjoicG90YXRvLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1aWxkLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgUG90YXRvU2Nyb2xsIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBQb3RhdG9TY3JvbGw7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9TY3JvbGwge1xuXG4gIHN0YXRpYyBjcmVhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3IsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICBlbCA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlT3B0aW9uID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBpbnN0YW5jZU9wdGlvbi5lbCA9IGVsO1xuICAgICAgICByZXR1cm4gbmV3IFBvdGF0b1Njcm9sbChpbnN0YW5jZU9wdGlvbik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycyhvcHRpb25zKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hbmFseXplTmF0aXZlKCk7XG4gICAgdGhpcy5wcmVwYXJlRE9NKCk7XG4gICAgdGhpcy5oaWRlTmF0aXZlQmFycygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQmFycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHRoaXMuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5yZWZyZXNoUGFyZW50cy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNldFZhcnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgTk9PUCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBjc3NDbGFzcyA9ICdwb3RhdG9TY3JvbGwnLFxuICAgICAgZm9yY2VDdXN0b20gPSBmYWxzZSxcbiAgICAgIGZvcmNlU2l6ZSA9IDIwLFxuICAgICAgb25TY3JvbGwgPSBOT09QLFxuICAgICAgb25Ub3AgPSBOT09QLFxuICAgICAgb25Cb3R0b20gPSBOT09QLFxuICAgICAgb25MZWZ0ID0gTk9PUCxcbiAgICAgIG9uUmlnaHQgPSBOT09QLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5yb290RWwgPSBlbDtcbiAgICB0aGlzLmNzc0NsYXNzID0gY3NzQ2xhc3M7XG4gICAgdGhpcy5mb3JjZUN1c3RvbSA9IGZvcmNlQ3VzdG9tO1xuXG4gICAgdGhpcy5ldmVudCA9IHtcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgb25Ub3AsXG4gICAgICBvbkJvdHRvbSxcbiAgICAgIG9uTGVmdCxcbiAgICAgIG9uUmlnaHQsXG4gICAgfTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICB2OiAwLFxuICAgICAgaDogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5zY3JvbGxXYWl0ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNpemVXYWl0ID0gZmFsc2U7XG5cbiAgICB0aGlzLmJhciA9IHtcbiAgICAgIHY6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRZJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbFRvcCcsXG4gICAgICB9LFxuICAgICAgaDoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFgnLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsTGVmdCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGFuYWx5emVOYXRpdmUoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHRlc3RTY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLmhlaWdodCA9ICcxMDBweCc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUudG9wID0gMDtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUubGVmdCA9IDA7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgIGNvbnN0IHRlc3RDb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0U2Nyb2xsRWwuYXBwZW5kQ2hpbGQodGVzdENvbnRlbnRFbCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKHRlc3RTY3JvbGxFbCk7XG5cbiAgICBjb25zdCB2TmF0aXZlU2l6ZSA9IHRlc3RTY3JvbGxFbC5vZmZzZXRXaWR0aCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCBoTmF0aXZlU2l6ZSA9IHRlc3RTY3JvbGxFbC5vZmZzZXRIZWlnaHQgLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgdGhpcy5iYXIudi5uYXRpdmVTaXplID0gdk5hdGl2ZVNpemU7XG4gICAgdGhpcy5iYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSB0aGlzLmJhci52LmZvcmNlU2l6ZSA9IDA7XG4gICAgaWYgKGhOYXRpdmVTaXplID4gMCkgdGhpcy5iYXIuaC5mb3JjZVNpemUgPSAwO1xuXG4gICAgLy8gZGV0ZWN0IHBvc2l0aW9uIC0gUlRMXG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKHRlc3RTY3JvbGxFbCk7XG4gIH1cblxuICBwcmVwYXJlRE9NKCkge1xuICAgIGNvbnN0IHsgcm9vdEVsLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIC8vIHJvb3RFbFxuICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICByb290RWwuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgcm9vdEVsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICByb290RWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIC8vIG1hc2tFbFxuICAgIGNvbnN0IG1hc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hc2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fbWFza2ApO1xuICAgIG1hc2tFbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbWFza0VsLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgbWFza0VsLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICBtYXNrRWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYXNrRWwuc3R5bGUuekluZGV4ID0gJzAnO1xuXG4gICAgLy8gc2Nyb2xsRWxcbiAgICBjb25zdCBzY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbEVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19zY3JvbGxgKTtcbiAgICBzY3JvbGxFbC5zdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgc2Nyb2xsRWwuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIHdoaWxlIChyb290RWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHNjcm9sbEVsLmFwcGVuZENoaWxkKHJvb3RFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICBtYXNrRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtYXNrRWwpO1xuXG4gICAgdGhpcy5tYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsO1xuICB9XG5cbiAgaGlkZU5hdGl2ZUJhcnMoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VDdXN0b20gJiYgKGJhci52Lm5hdGl2ZVNpemUgPT09IDAgfHwgYmFyLmgubmF0aXZlU2l6ZSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IHZGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIGNvbnN0IGhGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstaEZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7aEZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstYmFyLnYubmF0aXZlU2l6ZX1weGA7XG4gIH1cblxuICBhZGRDdXN0b21CYXJzKCkge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGJhciwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKCEoXG4gICAgICBiYXIudi5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICBiYXIuaC5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICB0aGlzLmZvcmNlQ3VzdG9tXG4gICAgKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdlRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2VHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICB2VHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLXZgKTtcbiAgICB2VHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdlRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhci52LnRyYWNrRWwgPSB2VHJhY2tFbDtcblxuICAgIGNvbnN0IHZCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgdkJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLXZgKTtcbiAgICBiYXIudi5lbCA9IHZCYXJFbDtcblxuICAgIGNvbnN0IGhUcmFja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaFRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgaFRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrLS1oYCk7XG4gICAgaFRyYWNrRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGhUcmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXIuaC50cmFja0VsID0gaFRyYWNrRWw7XG5cbiAgICBjb25zdCBoQmFyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoQmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2JhcmApO1xuICAgIGhCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS1oYCk7XG4gICAgYmFyLmguZWwgPSBoQmFyRWw7XG5cbiAgICB2VHJhY2tFbC5hcHBlbmRDaGlsZCh2QmFyRWwpO1xuICAgIGhUcmFja0VsLmFwcGVuZENoaWxkKGhCYXJFbCk7XG5cbiAgICByb290RWwuYXBwZW5kQ2hpbGQodlRyYWNrRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChoVHJhY2tFbCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMub25TY3JvbGwgPSB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNjcm9sbFRocm90dGxlID0gdGhpcy5vblNjcm9sbFRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplVGhyb3R0bGUgPSB0aGlzLm9uUmVzaXplVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTmVzdGVkQ3JlYXRlID0gdGhpcy5vbk5lc3RlZENyZWF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuICAgIHRoaXMucm9vdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDcmVhdGUnLCB0aGlzLm9uTmVzdGVkQ3JlYXRlKTtcbiAgfVxuXG4gIG9uU2Nyb2xsVGhyb3R0bGUoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsV2FpdCkgcmV0dXJuO1xuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IHRydWU7XG5cbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuXG4gICAgdGhpcy5zY3JvbGxXYWl0ID0gZmFsc2U7XG4gIH1cblxuICBvblJlc2l6ZVRocm90dGxlKCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZVdhaXQpIHJldHVybjtcbiAgICB0aGlzLnJlc2l6ZVdhaXQgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHRoaXMucmVzaXplV2FpdCA9IGZhbHNlO1xuICB9XG5cbiAgb25OZXN0ZWRDcmVhdGUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBiaW5kQmFyc0V2ZW50cygpIHtcbiAgICB0aGlzLm9uRG9jTW91c2VNb3ZlID0gdGhpcy5vbkRvY01vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZVVwID0gdGhpcy5vbkRvY01vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VMZWF2ZSA9IHRoaXMub25Eb2NNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVkJhck1vdXNlRG93biA9IHRoaXMub25WQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhCYXJNb3VzZURvd24gPSB0aGlzLm9uSEJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuYmFyLnYuZWwpIHRoaXMuYmFyLnYuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZCYXJNb3VzZURvd24pO1xuICAgIGlmICh0aGlzLmJhci5oLmVsKSB0aGlzLmJhci5oLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIGJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgdW5iaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIG9uVkJhck1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci52O1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkhCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW92ZVVwZGF0ZShlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VVcChlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBtb3ZlQmVnaW4oZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF07XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IHNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXTtcbiAgfVxuXG4gIG1vdmVVcGRhdGUoZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBudWxsO1xuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IDA7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2QmFyT2JqID0gYmFyLnY7XG4gICAgY29uc3QgaEJhck9iaiA9IGJhci5oO1xuXG4gICAgY29uc3QgdlNjcm9sbFNpemUgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB2QmFyT2JqLmZvcmNlU2l6ZTtcbiAgICBjb25zdCB2VHJhY2tTaXplID0gbWFza0VsLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB2RnJhY3QgPSB2VHJhY2tTaXplIC8gdlNjcm9sbFNpemU7XG4gICAgdkJhck9iai50cmFja1NpemUgPSB2VHJhY2tTaXplO1xuICAgIHZCYXJPYmouc2l6ZUZyYWN0ID0gdkZyYWN0O1xuICAgIHZCYXJPYmouc2Nyb2xsUmFuZ2UgPSB2U2Nyb2xsU2l6ZSAtIHZUcmFja1NpemU7XG4gICAgaWYgKHZCYXJPYmouZWwpIHtcbiAgICAgIHZCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKHZCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgdkJhck9iai5lbC5zdHlsZS5oZWlnaHQgPSBgJHt2RnJhY3QgKiB2QmFyT2JqLnRyYWNrRWwub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgIHZCYXJPYmoubW92ZVJhbmdlID0gdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodCAtIHZCYXJPYmouZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IGhTY3JvbGxTaXplID0gc2Nyb2xsRWwuc2Nyb2xsV2lkdGggLSAyICogaEJhck9iai5mb3JjZVNpemU7XG4gICAgY29uc3QgaFRyYWNrU2l6ZSA9IG1hc2tFbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoRnJhY3QgPSBoVHJhY2tTaXplIC8gaFNjcm9sbFNpemU7XG4gICAgaEJhck9iai50cmFja1NpemUgPSBoVHJhY2tTaXplO1xuICAgIGhCYXJPYmouc2l6ZUZyYWN0ID0gaEZyYWN0O1xuICAgIGhCYXJPYmouc2Nyb2xsUmFuZ2UgPSBoU2Nyb2xsU2l6ZSAtIGhUcmFja1NpemU7XG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGhCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKGhCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgaEJhck9iai5lbC5zdHlsZS53aWR0aCA9IGAke2hGcmFjdCAqIGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aH1weGA7XG4gICAgICBoQmFyT2JqLm1vdmVSYW5nZSA9IGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aCAtIGhCYXJPYmouZWwub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIsIHByb2dyZXNzLCBldmVudCwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdkJhck9iaiA9IGJhci52O1xuICAgIGNvbnN0IGhCYXJPYmogPSBiYXIuaDtcblxuICAgIGNvbnN0IGZyYWN0ID0ge1xuICAgICAgdjogMCxcbiAgICAgIGg6IDAsXG4gICAgfTtcblxuICAgIGlmICh2QmFyT2JqLmVsKSB7XG4gICAgICBmcmFjdC52ID0gdkJhck9iai5zY3JvbGxSYW5nZSA/IChzY3JvbGxFbC5zY3JvbGxUb3AgLyB2QmFyT2JqLnNjcm9sbFJhbmdlKSA6IDA7XG4gICAgICBjb25zdCB2UG9zID0gZnJhY3QudiAqICh2QmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gdkJhck9iai5zaXplRnJhY3QpKTtcbiAgICAgIHZCYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt2UG9zfXB4KWA7XG4gICAgfVxuXG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGZyYWN0LmggPSBoQmFyT2JqLnNjcm9sbFJhbmdlID8gKHNjcm9sbEVsLnNjcm9sbExlZnQgLyBoQmFyT2JqLnNjcm9sbFJhbmdlKSA6IDA7XG4gICAgICBjb25zdCBoUG9zID0gZnJhY3QuaCAqIChoQmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gaEJhck9iai5zaXplRnJhY3QpKTtcbiAgICAgIGhCYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtoUG9zfXB4KWA7XG4gICAgfVxuXG4gICAgZXZlbnQub25TY3JvbGwoZnJhY3QsIHJvb3RFbCk7XG5cbiAgICBpZiAoZnJhY3QudiAhPT0gcHJvZ3Jlc3Mudikge1xuICAgICAgaWYgKGZyYWN0LnYgPD0gMCkgZXZlbnQub25Ub3Aocm9vdEVsKTtcbiAgICAgIGlmIChmcmFjdC52ID49IDEpIGV2ZW50Lm9uQm90dG9tKHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy52ID0gZnJhY3QudjtcbiAgICB9XG5cbiAgICBpZiAoZnJhY3QuaCAhPT0gcHJvZ3Jlc3MuaCkge1xuICAgICAgaWYgKGZyYWN0LmggPD0gMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoZnJhY3QuaCA+PSAxKSBldmVudC5vblJpZ2h0KHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy5oID0gZnJhY3QuaDtcbiAgICB9XG4gIH1cblxuICBiYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKSB7XG4gICAgdGhpcy5zY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF0gPSAoXG4gICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlICsgKFxuICAgICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsUmFuZ2UgKiBhY3RpdmVCYXJPYmoubW92ZURpZmYgLyBhY3RpdmVCYXJPYmoubW92ZVJhbmdlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hQYXJlbnRzKCkge1xuICAgIGlmICghd2luZG93LkN1c3RvbUV2ZW50KSByZXR1cm47XG4gICAgdGhpcy5yb290RWwucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnUG90YXRvU2Nyb2xsLm5lc3RlZENyZWF0ZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBtYW51YWx5IHJlZnJlc2ggYmFyc1xuICAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRCYXJzU2l6ZSgpO1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9