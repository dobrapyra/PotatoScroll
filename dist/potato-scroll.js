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

      this.wait = {
        scroll: false,
        resize: false
      };
      this.raf = {
        scroll: null,
        resize: null
      };

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
          trackSize: 0,
          moveProp: 'clientY',
          scrollProp: 'scrollTop',
          axis: 'Y'
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
          trackSize: 0,
          moveProp: 'clientX',
          scrollProp: 'scrollLeft',
          axis: 'X'
        }
      };

      this.activeBarObj = null;

      return true;
    }
  }, {
    key: 'bindThis',
    value: function bindThis() {
      this.onScrollThrottle = this.onScrollThrottle.bind(this);
      this.onScroll = this.onScroll.bind(this);

      this.onResizeThrottle = this.onResizeThrottle.bind(this);
      this.onResize = this.onResize.bind(this);

      this.onNestedCreate = this.onNestedCreate.bind(this);
      this.refreshParents = this.refreshParents.bind(this);

      this.onDocMouseMove = this.onDocMouseMove.bind(this);
      this.onDocMouseUp = this.onDocMouseUp.bind(this);
      this.onDocMouseLeave = this.onDocMouseLeave.bind(this);

      this.onVBarMouseDown = this.onVBarMouseDown.bind(this);
      this.onHBarMouseDown = this.onHBarMouseDown.bind(this);
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
      this.refresh();

      setTimeout(this.refreshParents);
    }
  }, {
    key: 'analyzeNative',
    value: function analyzeNative() {
      var bar = this.bar;

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

      bar.v.nativeSize = vNativeSize;
      bar.h.nativeSize = hNativeSize;

      if (vNativeSize > 0) bar.v.forceSize = 0;
      if (hNativeSize > 0) bar.h.forceSize = 0;

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
      if (this.scrollEl) this.scrollEl.addEventListener('scroll', this.onScrollThrottle);

      window.addEventListener('resize', this.onResizeThrottle);

      this.rootEl.addEventListener('PotatoScroll.nestedCreate', this.onNestedCreate);
    }
  }, {
    key: 'unbindEvents',
    value: function unbindEvents() {
      if (this.scrollEl) this.scrollEl.removeEventListener('scroll', this.onScrollThrottle);

      window.removeEventListener('resize', this.onResizeThrottle);

      this.rootEl.removeEventListener('PotatoScroll.nestedCreate', this.onNestedCreate);
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
    key: 'onNestedCreate',
    value: function onNestedCreate() {
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
      var pos = fract * (barObj.trackSize * (1 - barObj.sizeFract));
      barObj.el.style.transform = 'translate' + barObj.axis + '(' + pos + 'px)';

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
      this.rootEl.parentElement.dispatchEvent(new CustomEvent('PotatoScroll.nestedCreate', {
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
          cssClass = this.cssClass;


      this.unbindDocEvents();
      this.unbindBarsEvents();
      this.unbindEvents();

      if (bar.v.trackEl) {
        rootEl.removeChild(bar.v.trackEl);
        bar.v.el = null;
        bar.v.trackEl = null;
      }
      if (bar.h.trackEl) {
        rootEl.removeChild(bar.h.trackEl);
        bar.h.el = null;
        bar.h.trackEl = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwiY3NzQ2xhc3MiLCJmb3JjZUN1c3RvbSIsImZvcmNlU2l6ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsImV2ZW50IiwicHJvZ3Jlc3MiLCJ2IiwiaCIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJiYXIiLCJuYXRpdmVTaXplIiwibW92ZVN0YXJ0IiwibW92ZURpZmYiLCJzY3JvbGxCZWZvcmUiLCJzaXplIiwic2l6ZUZyYWN0IiwidHJhY2tTaXplIiwibW92ZVByb3AiLCJzY3JvbGxQcm9wIiwiYXhpcyIsImFjdGl2ZUJhck9iaiIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDcmVhdGUiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwiZGVzdHJveSIsImFuYWx5emVOYXRpdmUiLCJwcmVwYXJlRE9NIiwiaGlkZU5hdGl2ZUJhcnMiLCJhZGRDdXN0b21CYXJzIiwiYmluZEV2ZW50cyIsImJpbmRCYXJzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwidGVzdFNjcm9sbEVsIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInZpc2liaWxpdHkiLCJ0ZXN0Q29udGVudEVsIiwiYXBwZW5kQ2hpbGQiLCJ2TmF0aXZlU2l6ZSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJoTmF0aXZlU2l6ZSIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsIm1hc2tFbCIsIm1hc2tTdHlsZSIsImZsZXhHcm93IiwiekluZGV4Iiwic2Nyb2xsRWwiLCJzY3JvbGxTdHlsZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJ2Rm9yY2VTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJoRm9yY2VTaXplIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsInZUcmFja0VsIiwidHJhY2tFbCIsInZCYXJFbCIsImhUcmFja0VsIiwiaEJhckVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRCYXJzUG9zIiwiZSIsIm1vdmVCZWdpbiIsIm1vdmVVcGRhdGUiLCJtb3ZlRW5kIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwidkJhck9iaiIsImhCYXJPYmoiLCJ2U2Nyb2xsU2l6ZSIsInZUcmFja1NpemUiLCJ2RnJhY3QiLCJzY3JvbGxSYW5nZSIsIm1vdmVSYW5nZSIsImhTY3JvbGxTaXplIiwiaFRyYWNrU2l6ZSIsImhGcmFjdCIsImZyYWN0Iiwic2V0QmFyUG9zIiwiYmFyT2JqIiwicG9zIiwidHJhbnNmb3JtIiwiQ3VzdG9tRXZlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGlzcGF0Y2hFdmVudCIsImJ1YmJsZXMiLCJzZXRCYXJzU2l6ZSIsInVuYmluZEJhcnNFdmVudHMiLCJ1bmJpbmRFdmVudHMiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBOzs7Ozs7a0JBRWVBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTUEsWTs7OzZCQUVTO0FBQUEsVUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUEsVUFFeEJDLFFBRndCLEdBR3RCRCxPQUhzQixDQUV4QkMsUUFGd0I7OztBQUsxQixhQUFPQyxNQUFNQyxTQUFOLENBQWdC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RCxXQUFQLENBQW1CZ0IsU0FBU0UsVUFBVCxDQUFvQixDQUFwQixDQUFuQjtBQUNEOztBQUVELFlBQUlOLE1BQUosRUFBWTtBQUNWQSxpQkFBT0wsV0FBUCxDQUFtQlMsUUFBbkI7QUFDRDs7QUFFRCxhQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7O0FBRUQsVUFBSUosTUFBSixFQUFZO0FBQ1ZsRSxlQUFPNkQsV0FBUCxDQUFtQkssTUFBbkI7O0FBRUEsYUFBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUNGOzs7Ozs7a0JBN2hCa0IzRixZOzs7Ozs7Ozs7OztBQ0FyQix1QyIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVpbGQuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9TY3JvbGwgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvdGF0b1Njcm9sbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGF0b1Njcm9sbCB7XG5cbiAgc3RhdGljIGNyZWF0ZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RvcixcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgIGVsID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VPcHRpb24gPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgICAgIGluc3RhbmNlT3B0aW9uLmVsID0gZWw7XG4gICAgICAgIHJldHVybiBuZXcgUG90YXRvU2Nyb2xsKGluc3RhbmNlT3B0aW9uKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghdGhpcy5wcmVpbml0KG9wdGlvbnMpKSByZXR1cm47XG5cbiAgICB0aGlzLmJpbmRUaGlzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBwcmVpbml0KG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IE5PT1AgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgY3NzQ2xhc3MgPSAncG90YXRvU2Nyb2xsJyxcbiAgICAgIGZvcmNlQ3VzdG9tID0gZmFsc2UsXG4gICAgICBmb3JjZVNpemUgPSAyMCxcbiAgICAgIG9uTmF0aXZlU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uVG9wID0gTk9PUCxcbiAgICAgIG9uQm90dG9tID0gTk9PUCxcbiAgICAgIG9uTGVmdCA9IE5PT1AsXG4gICAgICBvblJpZ2h0ID0gTk9PUCxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsID0gZWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcblxuICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICBvbk5hdGl2ZVNjcm9sbCxcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgb25Ub3AsXG4gICAgICBvbkJvdHRvbSxcbiAgICAgIG9uTGVmdCxcbiAgICAgIG9uUmlnaHQsXG4gICAgfTtcblxuICAgIHRoaXMucHJvZ3Jlc3MgPSB7XG4gICAgICB2OiAwLFxuICAgICAgaDogMCxcbiAgICB9O1xuXG4gICAgdGhpcy53YWl0ID0ge1xuICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIHJlc2l6ZTogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnJhZiA9IHtcbiAgICAgIHNjcm9sbDogbnVsbCxcbiAgICAgIHJlc2l6ZTogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5iYXIgPSB7XG4gICAgICB2OiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRZJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbFRvcCcsXG4gICAgICAgIGF4aXM6ICdZJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIHRyYWNrU2l6ZTogMCxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgICBheGlzOiAnWCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGJpbmRUaGlzKCkge1xuICAgIHRoaXMub25TY3JvbGxUaHJvdHRsZSA9IHRoaXMub25TY3JvbGxUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TY3JvbGwgPSB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplVGhyb3R0bGUgPSB0aGlzLm9uUmVzaXplVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbk5lc3RlZENyZWF0ZSA9IHRoaXMub25OZXN0ZWRDcmVhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hQYXJlbnRzID0gdGhpcy5yZWZyZXNoUGFyZW50cy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbkRvY01vdXNlTW92ZSA9IHRoaXMub25Eb2NNb3VzZU1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VVcCA9IHRoaXMub25Eb2NNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlTGVhdmUgPSB0aGlzLm9uRG9jTW91c2VMZWF2ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblZCYXJNb3VzZURvd24gPSB0aGlzLm9uVkJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25IQmFyTW91c2VEb3duID0gdGhpcy5vbkhCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplICYgcmVpbml0aWFsaXplIGluc3RhbmNlXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5hbmFseXplTmF0aXZlKCk7XG4gICAgdGhpcy5wcmVwYXJlRE9NKCk7XG4gICAgdGhpcy5oaWRlTmF0aXZlQmFycygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQmFycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHRoaXMuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5yZWZyZXNoUGFyZW50cyk7XG4gIH1cblxuICBhbmFseXplTmF0aXZlKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXN0U2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICBjb25zdCB0ZXN0Q29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIGJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICBiYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSBiYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIGJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgcG9zaXRpb24gLSBSVExcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIC8vIG1hc2tFbFxuICAgIGNvbnN0IG1hc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hc2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fbWFza2ApO1xuICAgIGNvbnN0IG1hc2tTdHlsZSA9IG1hc2tFbC5zdHlsZTtcbiAgICBtYXNrU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza1N0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgY29uc3Qgc2Nyb2xsU3R5bGUgPSBzY3JvbGxFbC5zdHlsZTtcbiAgICBzY3JvbGxTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgc2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIHdoaWxlIChyb290RWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHNjcm9sbEVsLmFwcGVuZENoaWxkKHJvb3RFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICBtYXNrRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtYXNrRWwpO1xuXG4gICAgdGhpcy5tYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsO1xuICB9XG5cbiAgaGlkZU5hdGl2ZUJhcnMoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VDdXN0b20gJiYgKGJhci52Lm5hdGl2ZVNpemUgPT09IDAgfHwgYmFyLmgubmF0aXZlU2l6ZSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IHZGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIGNvbnN0IGhGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstaEZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7aEZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstYmFyLnYubmF0aXZlU2l6ZX1weGA7XG4gIH1cblxuICBhZGRDdXN0b21CYXJzKCkge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGJhciwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKCEoXG4gICAgICBiYXIudi5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICBiYXIuaC5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICB0aGlzLmZvcmNlQ3VzdG9tXG4gICAgKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdlRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2VHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICB2VHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLXZgKTtcbiAgICB2VHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdlRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhci52LnRyYWNrRWwgPSB2VHJhY2tFbDtcblxuICAgIGNvbnN0IHZCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgdkJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLXZgKTtcbiAgICBiYXIudi5lbCA9IHZCYXJFbDtcblxuICAgIGNvbnN0IGhUcmFja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaFRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgaFRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrLS1oYCk7XG4gICAgaFRyYWNrRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGhUcmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXIuaC50cmFja0VsID0gaFRyYWNrRWw7XG5cbiAgICBjb25zdCBoQmFyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoQmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2JhcmApO1xuICAgIGhCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS1oYCk7XG4gICAgYmFyLmguZWwgPSBoQmFyRWw7XG5cbiAgICB2VHJhY2tFbC5hcHBlbmRDaGlsZCh2QmFyRWwpO1xuICAgIGhUcmFja0VsLmFwcGVuZENoaWxkKGhCYXJFbCk7XG5cbiAgICByb290RWwuYXBwZW5kQ2hpbGQodlRyYWNrRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChoVHJhY2tFbCk7XG4gIH1cblxuICBiaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDcmVhdGUnLCB0aGlzLm9uTmVzdGVkQ3JlYXRlKTtcbiAgfVxuXG4gIHVuYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ3JlYXRlJywgdGhpcy5vbk5lc3RlZENyZWF0ZSk7XG4gIH1cblxuICBvblNjcm9sbFRocm90dGxlKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudC5vbk5hdGl2ZVNjcm9sbChldmVudCwgdGhpcy5yb290RWwpO1xuXG4gICAgaWYgKHRoaXMud2FpdC5zY3JvbGwpIHJldHVybjtcbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmLnNjcm9sbCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uU2Nyb2xsKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuXG4gICAgdGhpcy53YWl0LnNjcm9sbCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy53YWl0LnJlc2l6ZSkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5yZXNpemUgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYucmVzaXplID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLndhaXQucmVzaXplID0gZmFsc2U7XG4gIH1cblxuICBvbk5lc3RlZENyZWF0ZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIGJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICB1bmJpbmRCYXJzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKGJhci52LmVsKSBiYXIudi5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKGJhci5oLmVsKSBiYXIuaC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICBiaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvblZCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIudjtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25IQmFyTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLmg7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdmVVcGRhdGUoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlVXAoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICdub25lJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBzY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF07XG4gIH1cblxuICBtb3ZlVXBkYXRlKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF0gLSBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0O1xuXG4gICAgdGhpcy5iYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKTtcbiAgfVxuXG4gIG1vdmVFbmQoKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gbnVsbDtcbiAgICBhY3RpdmVCYXJPYmoubW92ZURpZmYgPSAwO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSBudWxsO1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnJztcbiAgfVxuXG4gIHNldEJhcnNTaXplKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdkJhck9iaiA9IGJhci52O1xuICAgIGNvbnN0IGhCYXJPYmogPSBiYXIuaDtcblxuICAgIGNvbnN0IHZTY3JvbGxTaXplID0gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0IC0gdkJhck9iai5mb3JjZVNpemU7XG4gICAgY29uc3QgdlRyYWNrU2l6ZSA9IG1hc2tFbC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgdkZyYWN0ID0gdlRyYWNrU2l6ZSAvIHZTY3JvbGxTaXplO1xuICAgIHZCYXJPYmoudHJhY2tTaXplID0gdlRyYWNrU2l6ZTtcbiAgICB2QmFyT2JqLnNpemVGcmFjdCA9IHZGcmFjdDtcbiAgICB2QmFyT2JqLnNjcm9sbFJhbmdlID0gdlNjcm9sbFNpemUgLSB2VHJhY2tTaXplO1xuICAgIGlmICh2QmFyT2JqLmVsKSB7XG4gICAgICB2QmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9ICh2QmFyT2JqLnNpemVGcmFjdCA9PT0gMSkgPyAnbm9uZScgOiAnJztcbiAgICAgIHZCYXJPYmouZWwuc3R5bGUuaGVpZ2h0ID0gYCR7dkZyYWN0ICogdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodH1weGA7XG4gICAgICB2QmFyT2JqLm1vdmVSYW5nZSA9IHZCYXJPYmoudHJhY2tFbC5vZmZzZXRIZWlnaHQgLSB2QmFyT2JqLmVsLm9mZnNldEhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCBoU2Nyb2xsU2l6ZSA9IHNjcm9sbEVsLnNjcm9sbFdpZHRoIC0gMiAqIGhCYXJPYmouZm9yY2VTaXplO1xuICAgIGNvbnN0IGhUcmFja1NpemUgPSBtYXNrRWwub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgaEZyYWN0ID0gaFRyYWNrU2l6ZSAvIGhTY3JvbGxTaXplO1xuICAgIGhCYXJPYmoudHJhY2tTaXplID0gaFRyYWNrU2l6ZTtcbiAgICBoQmFyT2JqLnNpemVGcmFjdCA9IGhGcmFjdDtcbiAgICBoQmFyT2JqLnNjcm9sbFJhbmdlID0gaFNjcm9sbFNpemUgLSBoVHJhY2tTaXplO1xuICAgIGlmIChoQmFyT2JqLmVsKSB7XG4gICAgICBoQmFyT2JqLnRyYWNrRWwuc3R5bGUuZGlzcGxheSA9IChoQmFyT2JqLnNpemVGcmFjdCA9PT0gMSkgPyAnbm9uZScgOiAnJztcbiAgICAgIGhCYXJPYmouZWwuc3R5bGUud2lkdGggPSBgJHtoRnJhY3QgKiBoQmFyT2JqLnRyYWNrRWwub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgaEJhck9iai5tb3ZlUmFuZ2UgPSBoQmFyT2JqLnRyYWNrRWwub2Zmc2V0V2lkdGggLSBoQmFyT2JqLmVsLm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHNldEJhcnNQb3MoKSB7XG4gICAgY29uc3QgeyBiYXIsIHByb2dyZXNzLCBldmVudCwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgZnJhY3QgPSB7XG4gICAgICB2OiAwLFxuICAgICAgaDogMCxcbiAgICB9O1xuXG4gICAgaWYgKGJhci52LmVsKSBmcmFjdC52ID0gdGhpcy5zZXRCYXJQb3MoYmFyLnYpO1xuICAgIGlmIChiYXIuaC5lbCkgZnJhY3QuaCA9IHRoaXMuc2V0QmFyUG9zKGJhci5oKTtcblxuICAgIGV2ZW50Lm9uU2Nyb2xsKGZyYWN0LCByb290RWwpO1xuXG4gICAgaWYgKGZyYWN0LnYgIT09IHByb2dyZXNzLnYpIHtcbiAgICAgIGlmIChmcmFjdC52IDw9IDApIGV2ZW50Lm9uVG9wKHJvb3RFbCk7XG4gICAgICBpZiAoZnJhY3QudiA+PSAxKSBldmVudC5vbkJvdHRvbShyb290RWwpO1xuICAgICAgcHJvZ3Jlc3MudiA9IGZyYWN0LnY7XG4gICAgfVxuXG4gICAgaWYgKGZyYWN0LmggIT09IHByb2dyZXNzLmgpIHtcbiAgICAgIGlmIChmcmFjdC5oIDw9IDApIGV2ZW50Lm9uTGVmdChyb290RWwpO1xuICAgICAgaWYgKGZyYWN0LmggPj0gMSkgZXZlbnQub25SaWdodChyb290RWwpO1xuICAgICAgcHJvZ3Jlc3MuaCA9IGZyYWN0Lmg7XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyUG9zKGJhck9iaikge1xuICAgIGNvbnN0IGZyYWN0ID0gYmFyT2JqLnNjcm9sbFJhbmdlID8gKFxuICAgICAgdGhpcy5zY3JvbGxFbFtiYXJPYmouc2Nyb2xsUHJvcF0gLyBiYXJPYmouc2Nyb2xsUmFuZ2VcbiAgICApIDogMDtcbiAgICBjb25zdCBwb3MgPSBmcmFjdCAqIChiYXJPYmoudHJhY2tTaXplICogKDEgLSBiYXJPYmouc2l6ZUZyYWN0KSk7XG4gICAgYmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUke2Jhck9iai5heGlzfSgke3Bvc31weClgO1xuXG4gICAgcmV0dXJuIGZyYWN0O1xuICB9XG5cbiAgYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaikge1xuICAgIHRoaXMuc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdID0gKFxuICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSArIChcbiAgICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbFJhbmdlICogYWN0aXZlQmFyT2JqLm1vdmVEaWZmIC8gYWN0aXZlQmFyT2JqLm1vdmVSYW5nZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoUGFyZW50cygpIHtcbiAgICBpZiAoIXdpbmRvdy5DdXN0b21FdmVudCkgcmV0dXJuO1xuICAgIHRoaXMucm9vdEVsLnBhcmVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDcmVhdGUnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgICogUmVjYWxjdWxhdGVzIGNvbnRlbnQgc2l6ZSBhbmQgc2V0IHNjcm9sbGJhcnMgc2l6ZVxuICAgICovXG4gIHJlZnJlc2goKSB7XG4gICAgdGhpcy5zZXRCYXJzU2l6ZSgpO1xuICAgIHRoaXMuc2V0QmFyc1BvcygpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBEZXN0cm95cyB0aGUgaW5zdGFuY2UgYW5kIHJlc3RvcmUgb3JpZ2luYWwgaHRtbFxuICAgICovXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsLCByb290RWwsIGJhciwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnVuYmluZERvY0V2ZW50cygpO1xuICAgIHRoaXMudW5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICBpZiAoYmFyLnYudHJhY2tFbCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKGJhci52LnRyYWNrRWwpO1xuICAgICAgYmFyLnYuZWwgPSBudWxsO1xuICAgICAgYmFyLnYudHJhY2tFbCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChiYXIuaC50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLmgudHJhY2tFbCk7XG4gICAgICBiYXIuaC5lbCA9IG51bGw7XG4gICAgICBiYXIuaC50cmFja0VsID0gbnVsbDtcbiAgICB9XG5cbiAgICByb290RWwuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgY29uc3Qgcm9vdFN0eWxlID0gcm9vdEVsLnN0eWxlO1xuICAgIHJvb3RTdHlsZS5vdmVyZmxvdyA9ICcnO1xuICAgIHJvb3RTdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgIHJvb3RTdHlsZS5kaXNwbGF5ID0gJyc7XG5cbiAgICBpZiAoc2Nyb2xsRWwpIHtcbiAgICAgIHdoaWxlIChzY3JvbGxFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXNrRWwpIHtcbiAgICAgICAgbWFza0VsLnJlbW92ZUNoaWxkKHNjcm9sbEVsKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY3JvbGxFbCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1hc2tFbCkge1xuICAgICAgcm9vdEVsLnJlbW92ZUNoaWxkKG1hc2tFbCk7XG5cbiAgICAgIHRoaXMubWFza0VsID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=