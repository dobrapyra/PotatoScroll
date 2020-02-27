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

      this.event = {
        onNativeScroll: onNativeScroll,
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
    value: function onScrollThrottle(event) {
      this.event.onNativeScroll(event, this.rootEl);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInNldFZhcnMiLCJhbmFseXplTmF0aXZlIiwicHJlcGFyZURPTSIsImhpZGVOYXRpdmVCYXJzIiwiYWRkQ3VzdG9tQmFycyIsImJpbmRFdmVudHMiLCJiaW5kQmFyc0V2ZW50cyIsInJlZnJlc2giLCJzZXRUaW1lb3V0IiwicmVmcmVzaFBhcmVudHMiLCJiaW5kIiwiTk9PUCIsImNzc0NsYXNzIiwiZm9yY2VDdXN0b20iLCJmb3JjZVNpemUiLCJvbk5hdGl2ZVNjcm9sbCIsIm9uU2Nyb2xsIiwib25Ub3AiLCJvbkJvdHRvbSIsIm9uTGVmdCIsIm9uUmlnaHQiLCJyb290RWwiLCJldmVudCIsInByb2dyZXNzIiwidiIsImgiLCJzY3JvbGxXYWl0IiwicmVzaXplV2FpdCIsImJhciIsIm5hdGl2ZVNpemUiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJhY3RpdmVCYXJPYmoiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwidGVzdFNjcm9sbEVsIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInZpc2liaWxpdHkiLCJ0ZXN0Q29udGVudEVsIiwiYXBwZW5kQ2hpbGQiLCJ2TmF0aXZlU2l6ZSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJoTmF0aXZlU2l6ZSIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGxheSIsIm1hc2tFbCIsImZsZXhHcm93IiwiekluZGV4Iiwic2Nyb2xsRWwiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwidkZvcmNlU2l6ZSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiaEZvcmNlU2l6ZSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJ2VHJhY2tFbCIsInRyYWNrRWwiLCJ2QmFyRWwiLCJoVHJhY2tFbCIsImhCYXJFbCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJvblJlc2l6ZSIsIm9uUmVzaXplVGhyb3R0bGUiLCJvbk5lc3RlZENyZWF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRCYXJzUG9zIiwib25Eb2NNb3VzZU1vdmUiLCJvbkRvY01vdXNlVXAiLCJvbkRvY01vdXNlTGVhdmUiLCJvblZCYXJNb3VzZURvd24iLCJvbkhCYXJNb3VzZURvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsIm1vdmVCZWdpbiIsIm1vdmVVcGRhdGUiLCJtb3ZlRW5kIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwidkJhck9iaiIsImhCYXJPYmoiLCJ2U2Nyb2xsU2l6ZSIsInZUcmFja1NpemUiLCJ2RnJhY3QiLCJ0cmFja1NpemUiLCJzY3JvbGxSYW5nZSIsIm1vdmVSYW5nZSIsImhTY3JvbGxTaXplIiwiaFRyYWNrU2l6ZSIsImhGcmFjdCIsImZyYWN0Iiwic2Nyb2xsVG9wIiwidlBvcyIsInRyYW5zZm9ybSIsInNjcm9sbExlZnQiLCJoUG9zIiwiQ3VzdG9tRXZlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGlzcGF0Y2hFdmVudCIsImJ1YmJsZXMiLCJzZXRCYXJzU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7O0FBRUE7Ozs7OztrQkFFZUEsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0pNQSxZOzs7NkJBRVM7QUFBQSxVQUFkQyxPQUFjLHVFQUFKLEVBQUk7QUFBQSxVQUV4QkMsUUFGd0IsR0FHdEJELE9BSHNCLENBRXhCQyxRQUZ3Qjs7O0FBSzFCLGFBQU9DLE1BQU1DLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CQyxJQUFwQixDQUNMQyxTQUFTQyxnQkFBVCxDQUEwQk4sUUFBMUIsQ0FESyxFQUVMLGNBQU07QUFDSixZQUFNTyxpQkFBaUJDLE9BQU9ULE9BQVAsQ0FBdkI7QUFDQVEs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QyxhQUExQixDQUF3QyxJQUFJRixXQUFKLENBQWdCLDJCQUFoQixFQUE2QztBQUNuRkcsaUJBQVM7QUFEMEUsT0FBN0MsQ0FBeEM7QUFHRDs7QUFFRDs7Ozs7OzhCQUdVO0FBQ1IsV0FBS0MsV0FBTDtBQUNBLFdBQUtyQyxVQUFMO0FBQ0Q7Ozs7OztrQkFqY2tCckcsWTs7Ozs7Ozs7Ozs7QUNBckIsdUMiLCJmaWxlIjoicG90YXRvLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1aWxkLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgUG90YXRvU2Nyb2xsIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBQb3RhdG9TY3JvbGw7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9TY3JvbGwge1xuXG4gIHN0YXRpYyBjcmVhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3IsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICBlbCA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlT3B0aW9uID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBpbnN0YW5jZU9wdGlvbi5lbCA9IGVsO1xuICAgICAgICByZXR1cm4gbmV3IFBvdGF0b1Njcm9sbChpbnN0YW5jZU9wdGlvbik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycyhvcHRpb25zKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hbmFseXplTmF0aXZlKCk7XG4gICAgdGhpcy5wcmVwYXJlRE9NKCk7XG4gICAgdGhpcy5oaWRlTmF0aXZlQmFycygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQmFycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHRoaXMuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5yZWZyZXNoUGFyZW50cy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHNldFZhcnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgTk9PUCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBjc3NDbGFzcyA9ICdwb3RhdG9TY3JvbGwnLFxuICAgICAgZm9yY2VDdXN0b20gPSBmYWxzZSxcbiAgICAgIGZvcmNlU2l6ZSA9IDIwLFxuICAgICAgb25OYXRpdmVTY3JvbGwgPSBOT09QLFxuICAgICAgb25TY3JvbGwgPSBOT09QLFxuICAgICAgb25Ub3AgPSBOT09QLFxuICAgICAgb25Cb3R0b20gPSBOT09QLFxuICAgICAgb25MZWZ0ID0gTk9PUCxcbiAgICAgIG9uUmlnaHQgPSBOT09QLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5yb290RWwgPSBlbDtcbiAgICB0aGlzLmNzc0NsYXNzID0gY3NzQ2xhc3M7XG4gICAgdGhpcy5mb3JjZUN1c3RvbSA9IGZvcmNlQ3VzdG9tO1xuXG4gICAgdGhpcy5ldmVudCA9IHtcbiAgICAgIG9uTmF0aXZlU2Nyb2xsLFxuICAgICAgb25TY3JvbGwsXG4gICAgICBvblRvcCxcbiAgICAgIG9uQm90dG9tLFxuICAgICAgb25MZWZ0LFxuICAgICAgb25SaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLnNjcm9sbFdhaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2l6ZVdhaXQgPSBmYWxzZTtcblxuICAgIHRoaXMuYmFyID0ge1xuICAgICAgdjoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFknLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsVG9wJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WCcsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxMZWZ0JyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYW5hbHl6ZU5hdGl2ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgY29uc3QgdGVzdFNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS50b3AgPSAwO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5sZWZ0ID0gMDtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RTY3JvbGxFbC5hcHBlbmRDaGlsZCh0ZXN0Q29udGVudEVsKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIGNvbnN0IHZOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldFdpZHRoIC0gdGVzdFNjcm9sbEVsLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IGhOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldEhlaWdodCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG5cbiAgICB0aGlzLmJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICB0aGlzLmJhci5oLm5hdGl2ZVNpemUgPSBoTmF0aXZlU2l6ZTtcblxuICAgIGlmICh2TmF0aXZlU2l6ZSA+IDApIHRoaXMuYmFyLnYuZm9yY2VTaXplID0gMDtcbiAgICBpZiAoaE5hdGl2ZVNpemUgPiAwKSB0aGlzLmJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgcG9zaXRpb24gLSBSVExcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIHJvb3RFbC5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICByb290RWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHJvb3RFbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgLy8gbWFza0VsXG4gICAgY29uc3QgbWFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFza0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19tYXNrYCk7XG4gICAgbWFza0VsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBtYXNrRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBtYXNrRWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIG1hc2tFbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1hc2tFbC5zdHlsZS56SW5kZXggPSAnMCc7XG5cbiAgICAvLyBzY3JvbGxFbFxuICAgIGNvbnN0IHNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3Njcm9sbGApO1xuICAgIHNjcm9sbEVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBzY3JvbGxFbC5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuXG4gICAgd2hpbGUgKHJvb3RFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc2Nyb2xsRWwuYXBwZW5kQ2hpbGQocm9vdEVsLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cblxuICAgIG1hc2tFbC5hcHBlbmRDaGlsZChzY3JvbGxFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKG1hc2tFbCk7XG5cbiAgICB0aGlzLm1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLnNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gIH1cblxuICBoaWRlTmF0aXZlQmFycygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5mb3JjZUN1c3RvbSAmJiAoYmFyLnYubmF0aXZlU2l6ZSA9PT0gMCB8fCBiYXIuaC5uYXRpdmVTaXplID09PSAwKSkge1xuICAgICAgY29uc3QgdkZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcblxuICAgICAgY29uc3QgaEZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1oRm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBgJHtoRm9yY2VTaXplfXB4YDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyLCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBpZiAoIShcbiAgICAgIGJhci52Lm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIGJhci5oLm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIHRoaXMuZm9yY2VDdXN0b21cbiAgICApKSByZXR1cm47XG5cbiAgICBjb25zdCB2VHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0tdmApO1xuICAgIHZUcmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB2VHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyLnYudHJhY2tFbCA9IHZUcmFja0VsO1xuXG4gICAgY29uc3QgdkJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdkJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICB2QmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0tdmApO1xuICAgIGJhci52LmVsID0gdkJhckVsO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLWhgKTtcbiAgICBoVHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaFRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhci5oLnRyYWNrRWwgPSBoVHJhY2tFbDtcblxuICAgIGNvbnN0IGhCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgaEJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLWhgKTtcbiAgICBiYXIuaC5lbCA9IGhCYXJFbDtcblxuICAgIHZUcmFja0VsLmFwcGVuZENoaWxkKHZCYXJFbCk7XG4gICAgaFRyYWNrRWwuYXBwZW5kQ2hpbGQoaEJhckVsKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZCh2VHJhY2tFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGhUcmFja0VsKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemVUaHJvdHRsZSA9IHRoaXMub25SZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25OZXN0ZWRDcmVhdGUgPSB0aGlzLm9uTmVzdGVkQ3JlYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG4gICAgdGhpcy5yb290RWwuYWRkRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENyZWF0ZScsIHRoaXMub25OZXN0ZWRDcmVhdGUpO1xuICB9XG5cbiAgb25TY3JvbGxUaHJvdHRsZShldmVudCkge1xuICAgIHRoaXMuZXZlbnQub25OYXRpdmVTY3JvbGwoZXZlbnQsIHRoaXMucm9vdEVsKTtcblxuICAgIGlmICh0aGlzLnNjcm9sbFdhaXQpIHJldHVybjtcbiAgICB0aGlzLnNjcm9sbFdhaXQgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbCk7XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcblxuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVXYWl0KSByZXR1cm47XG4gICAgdGhpcy5yZXNpemVXYWl0ID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLnJlc2l6ZVdhaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTmVzdGVkQ3JlYXRlKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYmluZEJhcnNFdmVudHMoKSB7XG4gICAgdGhpcy5vbkRvY01vdXNlTW92ZSA9IHRoaXMub25Eb2NNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VVcCA9IHRoaXMub25Eb2NNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlTGVhdmUgPSB0aGlzLm9uRG9jTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblZCYXJNb3VzZURvd24gPSB0aGlzLm9uVkJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25IQmFyTW91c2VEb3duID0gdGhpcy5vbkhCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcblxuICAgIGlmICh0aGlzLmJhci52LmVsKSB0aGlzLmJhci52LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAodGhpcy5iYXIuaC5lbCkgdGhpcy5iYXIuaC5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICBiaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvblZCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIudjtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25IQmFyTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLmg7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdmVVcGRhdGUoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlVXAoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBzY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF07XG4gIH1cblxuICBtb3ZlVXBkYXRlKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF0gLSBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0O1xuXG4gICAgdGhpcy5iYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKTtcbiAgfVxuXG4gIG1vdmVFbmQoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gbnVsbDtcbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSAwO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBudWxsO1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgfVxuXG4gIHNldEJhcnNTaXplKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdkJhck9iaiA9IGJhci52O1xuICAgIGNvbnN0IGhCYXJPYmogPSBiYXIuaDtcblxuICAgIGNvbnN0IHZTY3JvbGxTaXplID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gdkJhck9iai5mb3JjZVNpemU7XG4gICAgY29uc3QgdlRyYWNrU2l6ZSA9IG1hc2tFbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdkZyYWN0ID0gdlRyYWNrU2l6ZSAvIHZTY3JvbGxTaXplO1xuICAgIHZCYXJPYmoudHJhY2tTaXplID0gdlRyYWNrU2l6ZTtcbiAgICB2QmFyT2JqLnNpemVGcmFjdCA9IHZGcmFjdDtcbiAgICB2QmFyT2JqLnNjcm9sbFJhbmdlID0gdlNjcm9sbFNpemUgLSB2VHJhY2tTaXplO1xuICAgIGlmICh2QmFyT2JqLmVsKSB7XG4gICAgICB2QmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9ICh2QmFyT2JqLnNpemVGcmFjdCA9PT0gMSkgPyAnbm9uZScgOiAnJztcbiAgICAgIHZCYXJPYmouZWwuc3R5bGUuaGVpZ2h0ID0gYCR7dkZyYWN0ICogdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodH1weGA7XG4gICAgICB2QmFyT2JqLm1vdmVSYW5nZSA9IHZCYXJPYmoudHJhY2tFbC5vZmZzZXRIZWlnaHQgLSB2QmFyT2JqLmVsLm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBoU2Nyb2xsU2l6ZSA9IHNjcm9sbEVsLnNjcm9sbFdpZHRoIC0gMiAqIGhCYXJPYmouZm9yY2VTaXplO1xuICAgIGNvbnN0IGhUcmFja1NpemUgPSBtYXNrRWwub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaEZyYWN0ID0gaFRyYWNrU2l6ZSAvIGhTY3JvbGxTaXplO1xuICAgIGhCYXJPYmoudHJhY2tTaXplID0gaFRyYWNrU2l6ZTtcbiAgICBoQmFyT2JqLnNpemVGcmFjdCA9IGhGcmFjdDtcbiAgICBoQmFyT2JqLnNjcm9sbFJhbmdlID0gaFNjcm9sbFNpemUgLSBoVHJhY2tTaXplO1xuICAgIGlmIChoQmFyT2JqLmVsKSB7XG4gICAgICBoQmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9IChoQmFyT2JqLnNpemVGcmFjdCA9PT0gMSkgPyAnbm9uZScgOiAnJztcbiAgICAgIGhCYXJPYmouZWwuc3R5bGUud2lkdGggPSBgJHtoRnJhY3QgKiBoQmFyT2JqLnRyYWNrRWwub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgaEJhck9iai5tb3ZlUmFuZ2UgPSBoQmFyT2JqLnRyYWNrRWwub2Zmc2V0V2lkdGggLSBoQmFyT2JqLmVsLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHNldEJhcnNQb3MoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyLCBwcm9ncmVzcywgZXZlbnQsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGNvbnN0IHZCYXJPYmogPSBiYXIudjtcbiAgICBjb25zdCBoQmFyT2JqID0gYmFyLmg7XG5cbiAgICBjb25zdCBmcmFjdCA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICBpZiAodkJhck9iai5lbCkge1xuICAgICAgZnJhY3QudiA9IHZCYXJPYmouc2Nyb2xsUmFuZ2UgPyAoc2Nyb2xsRWwuc2Nyb2xsVG9wIC8gdkJhck9iai5zY3JvbGxSYW5nZSkgOiAwO1xuICAgICAgY29uc3QgdlBvcyA9IGZyYWN0LnYgKiAodkJhck9iai50cmFja1NpemUgKiAoMSAtIHZCYXJPYmouc2l6ZUZyYWN0KSk7XG4gICAgICB2QmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dlBvc31weClgO1xuICAgIH1cblxuICAgIGlmIChoQmFyT2JqLmVsKSB7XG4gICAgICBmcmFjdC5oID0gaEJhck9iai5zY3JvbGxSYW5nZSA/IChzY3JvbGxFbC5zY3JvbGxMZWZ0IC8gaEJhck9iai5zY3JvbGxSYW5nZSkgOiAwO1xuICAgICAgY29uc3QgaFBvcyA9IGZyYWN0LmggKiAoaEJhck9iai50cmFja1NpemUgKiAoMSAtIGhCYXJPYmouc2l6ZUZyYWN0KSk7XG4gICAgICBoQmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aFBvc31weClgO1xuICAgIH1cblxuICAgIGV2ZW50Lm9uU2Nyb2xsKGZyYWN0LCByb290RWwpO1xuXG4gICAgaWYgKGZyYWN0LnYgIT09IHByb2dyZXNzLnYpIHtcbiAgICAgIGlmIChmcmFjdC52IDw9IDApIGV2ZW50Lm9uVG9wKHJvb3RFbCk7XG4gICAgICBpZiAoZnJhY3QudiA+PSAxKSBldmVudC5vbkJvdHRvbShyb290RWwpO1xuICAgICAgcHJvZ3Jlc3MudiA9IGZyYWN0LnY7XG4gICAgfVxuXG4gICAgaWYgKGZyYWN0LmggIT09IHByb2dyZXNzLmgpIHtcbiAgICAgIGlmIChmcmFjdC5oIDw9IDApIGV2ZW50Lm9uTGVmdChyb290RWwpO1xuICAgICAgaWYgKGZyYWN0LmggPj0gMSkgZXZlbnQub25SaWdodChyb290RWwpO1xuICAgICAgcHJvZ3Jlc3MuaCA9IGZyYWN0Lmg7XG4gICAgfVxuICB9XG5cbiAgYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaikge1xuICAgIHRoaXMuc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdID0gKFxuICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSArIChcbiAgICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbFJhbmdlICogYWN0aXZlQmFyT2JqLm1vdmVEaWZmIC8gYWN0aXZlQmFyT2JqLm1vdmVSYW5nZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoUGFyZW50cygpIHtcbiAgICBpZiAoIXdpbmRvdy5DdXN0b21FdmVudCkgcmV0dXJuO1xuICAgIHRoaXMucm9vdEVsLnBhcmVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDcmVhdGUnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgICogbWFudWFseSByZWZyZXNoIGJhcnNcbiAgICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0QmFyc1NpemUoKTtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==