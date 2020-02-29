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

    this.bindThis();
    this.initialize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInNldFZhcnMiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwiY3NzQ2xhc3MiLCJmb3JjZUN1c3RvbSIsImZvcmNlU2l6ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsImV2ZW50IiwicHJvZ3Jlc3MiLCJ2IiwiaCIsInNjcm9sbFdhaXQiLCJyZXNpemVXYWl0IiwiYmFyIiwibmF0aXZlU2l6ZSIsIm1vdmVTdGFydCIsIm1vdmVEaWZmIiwic2Nyb2xsQmVmb3JlIiwic2l6ZSIsInNpemVGcmFjdCIsIm1vdmVQcm9wIiwic2Nyb2xsUHJvcCIsImFjdGl2ZUJhck9iaiIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDcmVhdGUiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwiZGVzdHJveSIsImFuYWx5emVOYXRpdmUiLCJwcmVwYXJlRE9NIiwiaGlkZU5hdGl2ZUJhcnMiLCJhZGRDdXN0b21CYXJzIiwiYmluZEV2ZW50cyIsImJpbmRCYXJzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJib2R5IiwiZG9jdW1lbnRFbGVtZW50IiwidGVzdFNjcm9sbEVsIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInZpc2liaWxpdHkiLCJ0ZXN0Q29udGVudEVsIiwiYXBwZW5kQ2hpbGQiLCJ2TmF0aXZlU2l6ZSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJoTmF0aXZlU2l6ZSIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsIm1hc2tFbCIsIm1hc2tTdHlsZSIsImZsZXhHcm93IiwiekluZGV4Iiwic2Nyb2xsRWwiLCJzY3JvbGxTdHlsZSIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJ2Rm9yY2VTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJoRm9yY2VTaXplIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsInZUcmFja0VsIiwidHJhY2tFbCIsInZCYXJFbCIsImhUcmFja0VsIiwiaEJhckVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRCYXJzUG9zIiwiZSIsIm1vdmVCZWdpbiIsIm1vdmVVcGRhdGUiLCJtb3ZlRW5kIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwidkJhck9iaiIsImhCYXJPYmoiLCJ2U2Nyb2xsU2l6ZSIsInZUcmFja1NpemUiLCJ2RnJhY3QiLCJ0cmFja1NpemUiLCJzY3JvbGxSYW5nZSIsIm1vdmVSYW5nZSIsImhTY3JvbGxTaXplIiwiaFRyYWNrU2l6ZSIsImhGcmFjdCIsImZyYWN0Iiwic2Nyb2xsVG9wIiwidlBvcyIsInRyYW5zZm9ybSIsInNjcm9sbExlZnQiLCJoUG9zIiwiQ3VzdG9tRXZlbnQiLCJwYXJlbnRFbGVtZW50IiwiZGlzcGF0Y2hFdmVudCIsImJ1YmJsZXMiLCJzZXRCYXJzU2l6ZSIsInVuYmluZEJhcnNFdmVudHMiLCJ1bmJpbmRFdmVudHMiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBOzs7Ozs7a0JBRWVBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKTUEsWTs7OzZCQUVTO0FBQUEsVUFBZEMsT0FBYyx1RUFBSixFQUFJO0FBQUEsVUFFeEJDLFFBRndCLEdBR3RCRCxPQUhzQixDQUV4QkMsUUFGd0I7OztBQUsxQixhQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQkMsSUFBcEIsQ0FDTEMsU0FBU0MsZ0JBQVQsQ0FBMEJOLFFBQTFCLENBREssRUFFTCxjQUFNO0FBQ0osWUFBTU8saUJBQWlCQyxPQUFPVCxPQUFQLENBQXZCO0FBQ0FRLHVCQUFlRSxFQUFmLEdBQW9CQSxFQUFwQjtBQUNBLGVBQU8sSUFBSVgsWUFBSixDQUFpQlMsY0FBakIsQ0FBUDtBQUNELE9BTkksQ0FBUDtBQVFEOzs7QUFFRCx3QkFBWVIsT0FBWixFQUFxQjtBQUFBOztBQUNuQixRQUFJLENBQUMsS0FBS1csT0FBTCxDQUFhWCxPQUFiLENBQUwsRUFBNEI7O0FBRTVCLFNBQUtZLFFBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0Q7Ozs7OEJBRXFCO0FBQUEsVUFBZGIsT0FBYyx1RUFBSixFQUFJOztBQUNwQixVQUFNYyxPQUFPLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQURvQixVQUlsQkosRUFKa0IsR0FjaEJWLE9BZGdCLENBSWxCVSxFQUprQjtBQUFBLDhCQWNoQlYsT0FkZ0IsQ0FLbEJlLFFBTGtCO0FBQUEsVUFLbEJBLFFBTGtCLHFDQUtQLGNBTE87QUFBQSxpQ0FjaEJmLE9BZGdCLENBTWxCZ0IsV0FOa0I7QUFBQSxVQU1sQkEsV0FOa0Isd0NBTUosS0FOSTtBQUFBLCtCQWNoQmhCLE9BZGdCLENBT2xCaUIsU0FQa0I7QUFBQSxVQU9sQkEsU0FQa0Isc0NBT04sRUFQTTtBQUFBLGtDQWNoQmpCLE9BZGdCLENBUWxCa0IsY0FSa0I7QUFBQSxVQVFsQkEsY0FSa0IseUNBUURKLElBUkM7QUFBQSw4QkFjaEJkLE9BZGdCLENBU2xCbUIsUUFUa0I7QUFBQSxVQVNsQkEsUUFUa0IscUNBU1BMLElBVE87QUFBQSwyQkFjaEJkLE9BZGdCLENBVWxCb0IsS0FWa0I7QUFBQSxVQVVsQkEsS0FWa0Isa0NBVVZOLElBVlU7QUFBQSw4QkFjaEJkLE9BZGdCLENBV2xCcUIsUUFYa0I7QUFBQSxVQVdsQkEsUUFYa0IscUNBV1BQLElBWE87QUFBQSw0QkFjaEJkLE9BZGdCLENBWWxCc0IsTUFaa0I7QUFBQSxVQVlsQkEsTUFaa0IsbUNBWVRSLElBWlM7QUFBQSw2QkFjaEJkLE9BZGdCLENBYWxCdUIsT0Fia0I7QUFBQSxVQWFsQkEsT0Fia0Isb0NBYVJULElBYlE7OztBQWdCcEIsVUFBSSxDQUFDSixFQUFMLEVBQVMsT0FBTyxLQUFQOztBQUVULFdBQUtjLE1BQUwsR0FBY2QsRUFBZDtBQUNBLFdBQUtLLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7O0FBRUEsV0FBS1MsS0FBTCxHQUFhO0FBQ1hQLHNDQURXO0FBRVhDLDBCQUZXO0FBR1hDLG9CQUhXO0FBSVhDLDBCQUpXO0FBS1hDLHNCQUxXO0FBTVhDO0FBTlcsT0FBYjs7QUFTQSxXQUFLRyxRQUFMLEdBQWdCO0FBQ2RDLFdBQUcsQ0FEVztBQUVkQyxXQUFHO0FBRlcsT0FBaEI7O0FBS0EsV0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsV0FBS0MsR0FBTCxHQUFXO0FBQ1RKLFdBQUc7QUFDRFYscUJBQVdELGNBQWNDLFNBQWQsR0FBMEIsQ0FEcEM7QUFFRGUsc0JBQVksQ0FGWDtBQUdEdEIsY0FBSSxJQUhIO0FBSUR1QixxQkFBVyxJQUpWO0FBS0RDLG9CQUFVLENBTFQ7QUFNREMsd0JBQWMsSUFOYjtBQU9EQyxnQkFBTSxDQVBMO0FBUURDLHFCQUFXLENBUlY7QUFTREMsb0JBQVUsU0FUVDtBQVVEQyxzQkFBWTtBQVZYLFNBRE07QUFhVFgsV0FBRztBQUNEWCxxQkFBV0QsY0FBY0MsU0FBZCxHQUEwQixDQURwQztBQUVEZSxzQkFBWSxDQUZYO0FBR0R0QixjQUFJLElBSEg7QUFJRHVCLHFCQUFXLElBSlY7QUFLREMsb0JBQVUsQ0FMVDtBQU1EQyx3QkFBYyxJQU5iO0FBT0RDLGdCQUFNLENBUEw7QUFRREMscUJBQVcsQ0FSVjtBQVNEQyxvQkFBVSxTQVRUO0FBVURDLHNCQUFZO0FBVlg7QUFiTSxPQUFYOztBQTJCQSxXQUFLQyxZQUFMLEdBQW9CLElBQXBCOztBQUVBLGFBQU8sSUFBUDtBQUNEOzs7K0JBRVU7QUFDVCxXQUFLQyxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEI7QUFDQSxXQUFLdkIsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWN1QixJQUFkLENBQW1CLElBQW5CLENBQWhCOztBQUVBLFdBQUtDLGdCQUFMLEdBQXdCLEtBQUtBLGdCQUFMLENBQXNCRCxJQUF0QixDQUEyQixJQUEzQixDQUF4QjtBQUNBLFdBQUtFLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRixJQUFkLENBQW1CLElBQW5CLENBQWhCOztBQUVBLFdBQUtHLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkgsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxXQUFLSSxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsQ0FBb0JKLElBQXBCLENBQXlCLElBQXpCLENBQXRCOztBQUVBLFdBQUtLLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkwsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxXQUFLTSxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JOLElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsV0FBS08sZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCUCxJQUFyQixDQUEwQixJQUExQixDQUF2Qjs7QUFFQSxXQUFLUSxlQUFMLEdBQXVCLEtBQUtBLGVBQUwsQ0FBcUJSLElBQXJCLENBQTBCLElBQTFCLENBQXZCO0FBQ0EsV0FBS1MsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCVCxJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNEOztBQUVEOzs7Ozs7aUNBR2E7QUFDWCxXQUFLVSxPQUFMOztBQUVBLFdBQUtDLGFBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLGFBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS0MsY0FBTDtBQUNBLFdBQUtDLE9BQUw7O0FBRUFDLGlCQUFXLEtBQUtkLGNBQWhCO0FBQ0Q7OztvQ0FFZTtBQUFBLFVBQ05mLEdBRE0sR0FDRSxJQURGLENBQ05BLEdBRE07O0FBRWQsVUFBTThCLE9BQU92RCxTQUFTd0QsZUFBdEI7O0FBRUEsVUFBTUMsZUFBZXpELFNBQVMwRCxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELG1CQUFhRSxLQUFiLENBQW1CQyxRQUFuQixHQUE4QixRQUE5QjtBQUNBSCxtQkFBYUUsS0FBYixDQUFtQkUsS0FBbkIsR0FBMkIsT0FBM0I7QUFDQUosbUJBQWFFLEtBQWIsQ0FBbUJHLE1BQW5CLEdBQTRCLE9BQTVCO0FBQ0FMLG1CQUFhRSxLQUFiLENBQW1CSSxRQUFuQixHQUE4QixVQUE5QjtBQUNBTixtQkFBYUUsS0FBYixDQUFtQkssR0FBbkIsR0FBeUIsQ0FBekI7QUFDQVAsbUJBQWFFLEtBQWIsQ0FBbUJNLElBQW5CLEdBQTBCLENBQTFCO0FBQ0FSLG1CQUFhRSxLQUFiLENBQW1CTyxVQUFuQixHQUFnQyxRQUFoQzs7QUFFQSxVQUFNQyxnQkFBZ0JuRSxTQUFTMEQsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBRCxtQkFBYVcsV0FBYixDQUF5QkQsYUFBekI7O0FBRUFaLFdBQUthLFdBQUwsQ0FBaUJYLFlBQWpCOztBQUVBLFVBQU1ZLGNBQWNaLGFBQWFhLFdBQWIsR0FBMkJiLGFBQWFjLFdBQTVEO0FBQ0EsVUFBTUMsY0FBY2YsYUFBYWdCLFlBQWIsR0FBNEJoQixhQUFhaUIsWUFBN0Q7O0FBRUFqRCxVQUFJSixDQUFKLENBQU1LLFVBQU4sR0FBbUIyQyxXQUFuQjtBQUNBNUMsVUFBSUgsQ0FBSixDQUFNSSxVQUFOLEdBQW1COEMsV0FBbkI7O0FBRUEsVUFBSUgsY0FBYyxDQUFsQixFQUFxQjVDLElBQUlKLENBQUosQ0FBTVYsU0FBTixHQUFrQixDQUFsQjtBQUNyQixVQUFJNkQsY0FBYyxDQUFsQixFQUFxQi9DLElBQUlILENBQUosQ0FBTVgsU0FBTixHQUFrQixDQUFsQjs7QUFFckI7O0FBRUE0QyxXQUFLb0IsV0FBTCxDQUFpQmxCLFlBQWpCO0FBQ0Q7OztpQ0FFWTtBQUFBLFVBQ0h2QyxNQURHLEdBQ2tCLElBRGxCLENBQ0hBLE1BREc7QUFBQSxVQUNLVCxRQURMLEdBQ2tCLElBRGxCLENBQ0tBLFFBREw7O0FBR1g7O0FBQ0FTLGFBQU8wRCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQnBFLFFBQXJCO0FBQ0EsVUFBTXFFLFlBQVk1RCxPQUFPeUMsS0FBekI7QUFDQW1CLGdCQUFVbEIsUUFBVixHQUFxQixTQUFyQjtBQUNBa0IsZ0JBQVVmLFFBQVYsR0FBcUIsVUFBckI7QUFDQWUsZ0JBQVVDLE9BQVYsR0FBb0IsTUFBcEI7O0FBRUE7QUFDQSxVQUFNQyxTQUFTaEYsU0FBUzBELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBc0IsYUFBT0osU0FBUCxDQUFpQkMsR0FBakIsQ0FBd0JwRSxRQUF4QjtBQUNBLFVBQU13RSxZQUFZRCxPQUFPckIsS0FBekI7QUFDQXNCLGdCQUFVQyxRQUFWLEdBQXFCLENBQXJCO0FBQ0FELGdCQUFVckIsUUFBVixHQUFxQixRQUFyQjtBQUNBcUIsZ0JBQVVsQixRQUFWLEdBQXFCLFVBQXJCO0FBQ0FrQixnQkFBVUYsT0FBVixHQUFvQixNQUFwQjtBQUNBRSxnQkFBVUUsTUFBVixHQUFtQixHQUFuQjs7QUFFQTtBQUNBLFVBQU1DLFdBQVdwRixTQUFTMEQsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBMEIsZUFBU1IsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBMEJwRSxRQUExQjtBQUNBLFVBQU00RSxjQUFjRCxTQUFTekIsS0FBN0I7QUFDQTBCLGtCQUFZSCxRQUFaLEdBQXVCLENBQXZCO0FBQ0FHLGtCQUFZekIsUUFBWixHQUF1QixRQUF2Qjs7QUFFQSxhQUFPMUMsT0FBT29FLFVBQVAsQ0FBa0JDLE1BQXpCLEVBQWlDO0FBQy9CSCxpQkFBU2hCLFdBQVQsQ0FBcUJsRCxPQUFPb0UsVUFBUCxDQUFrQixDQUFsQixDQUFyQjtBQUNEOztBQUVETixhQUFPWixXQUFQLENBQW1CZ0IsUUFBbkI7QUFDQWxFLGFBQU9rRCxXQUFQLENBQW1CWSxNQUFuQjs7QUFFQSxXQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxXQUFLSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7cUNBRWdCO0FBQUEsVUFDUEEsUUFETyxHQUNXLElBRFgsQ0FDUEEsUUFETztBQUFBLFVBQ0czRCxHQURILEdBQ1csSUFEWCxDQUNHQSxHQURIOzs7QUFHZixVQUFJLEtBQUtmLFdBQUwsS0FBcUJlLElBQUlKLENBQUosQ0FBTUssVUFBTixLQUFxQixDQUFyQixJQUEwQkQsSUFBSUgsQ0FBSixDQUFNSSxVQUFOLEtBQXFCLENBQXBFLENBQUosRUFBNEU7QUFDMUUsWUFBTThELGFBQWEvRCxJQUFJSixDQUFKLENBQU1WLFNBQXpCO0FBQ0F5RSxpQkFBU3pCLEtBQVQsQ0FBZThCLFVBQWYsR0FBK0IsQ0FBQ0QsVUFBaEM7QUFDQUosaUJBQVN6QixLQUFULENBQWUrQixXQUFmLEdBQWdDRixVQUFoQztBQUNBSixpQkFBU3pCLEtBQVQsQ0FBZWdDLFdBQWYsR0FBZ0MsQ0FBQ0gsVUFBakM7QUFDQUosaUJBQVN6QixLQUFULENBQWVpQyxZQUFmLEdBQWlDSixVQUFqQzs7QUFFQSxZQUFNSyxhQUFhcEUsSUFBSUosQ0FBSixDQUFNVixTQUF6QjtBQUNBeUUsaUJBQVN6QixLQUFULENBQWVtQyxZQUFmLEdBQWlDLENBQUNELFVBQWxDO0FBQ0FULGlCQUFTekIsS0FBVCxDQUFlb0MsYUFBZixHQUFrQ0YsVUFBbEM7O0FBRUE7QUFDRDs7QUFFRFQsZUFBU3pCLEtBQVQsQ0FBZWdDLFdBQWYsR0FBZ0MsQ0FBQ2xFLElBQUlILENBQUosQ0FBTUksVUFBdkM7QUFDQTBELGVBQVN6QixLQUFULENBQWVtQyxZQUFmLEdBQWlDLENBQUNyRSxJQUFJSixDQUFKLENBQU1LLFVBQXhDO0FBQ0Q7OztvQ0FFZTtBQUFBLFVBQ05qQixRQURNLEdBQ29CLElBRHBCLENBQ05BLFFBRE07QUFBQSxVQUNJZ0IsR0FESixHQUNvQixJQURwQixDQUNJQSxHQURKO0FBQUEsVUFDU1AsTUFEVCxHQUNvQixJQURwQixDQUNTQSxNQURUOzs7QUFHZCxVQUFJLEVBQ0ZPLElBQUlKLENBQUosQ0FBTUssVUFBTixLQUFxQixDQUFyQixJQUNBRCxJQUFJSCxDQUFKLENBQU1JLFVBQU4sS0FBcUIsQ0FEckIsSUFFQSxLQUFLaEIsV0FISCxDQUFKLEVBSUc7O0FBRUgsVUFBTXNGLFdBQVdoRyxTQUFTMEQsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBc0MsZUFBU3BCLFNBQVQsQ0FBbUJDLEdBQW5CLENBQTBCcEUsUUFBMUI7QUFDQXVGLGVBQVNwQixTQUFULENBQW1CQyxHQUFuQixDQUEwQnBFLFFBQTFCO0FBQ0F1RixlQUFTckMsS0FBVCxDQUFlSSxRQUFmLEdBQTBCLFVBQTFCO0FBQ0FpQyxlQUFTckMsS0FBVCxDQUFld0IsTUFBZixHQUF3QixHQUF4QjtBQUNBMUQsVUFBSUosQ0FBSixDQUFNNEUsT0FBTixHQUFnQkQsUUFBaEI7O0FBRUEsVUFBTUUsU0FBU2xHLFNBQVMwRCxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQXdDLGFBQU90QixTQUFQLENBQWlCQyxHQUFqQixDQUF3QnBFLFFBQXhCO0FBQ0F5RixhQUFPdEIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBd0JwRSxRQUF4QjtBQUNBZ0IsVUFBSUosQ0FBSixDQUFNakIsRUFBTixHQUFXOEYsTUFBWDs7QUFFQSxVQUFNQyxXQUFXbkcsU0FBUzBELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBakI7QUFDQXlDLGVBQVN2QixTQUFULENBQW1CQyxHQUFuQixDQUEwQnBFLFFBQTFCO0FBQ0EwRixlQUFTdkIsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBMEJwRSxRQUExQjtBQUNBMEYsZUFBU3hDLEtBQVQsQ0FBZUksUUFBZixHQUEwQixVQUExQjtBQUNBb0MsZUFBU3hDLEtBQVQsQ0FBZXdCLE1BQWYsR0FBd0IsR0FBeEI7QUFDQTFELFVBQUlILENBQUosQ0FBTTJFLE9BQU4sR0FBZ0JFLFFBQWhCOztBQUVBLFVBQU1DLFNBQVNwRyxTQUFTMEQsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EwQyxhQUFPeEIsU0FBUCxDQUFpQkMsR0FBakIsQ0FBd0JwRSxRQUF4QjtBQUNBMkYsYUFBT3hCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXdCcEUsUUFBeEI7QUFDQWdCLFVBQUlILENBQUosQ0FBTWxCLEVBQU4sR0FBV2dHLE1BQVg7O0FBRUFKLGVBQVM1QixXQUFULENBQXFCOEIsTUFBckI7QUFDQUMsZUFBUy9CLFdBQVQsQ0FBcUJnQyxNQUFyQjs7QUFFQWxGLGFBQU9rRCxXQUFQLENBQW1CNEIsUUFBbkI7QUFDQTlFLGFBQU9rRCxXQUFQLENBQW1CK0IsUUFBbkI7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBSSxLQUFLZixRQUFULEVBQW1CLEtBQUtBLFFBQUwsQ0FBY2lCLGdCQUFkLENBQStCLFFBQS9CLEVBQXlDLEtBQUtsRSxnQkFBOUM7O0FBRW5CbUUsYUFBT0QsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsS0FBS2hFLGdCQUF2Qzs7QUFFQSxXQUFLbkIsTUFBTCxDQUFZbUYsZ0JBQVosQ0FBNkIsMkJBQTdCLEVBQTBELEtBQUs5RCxjQUEvRDtBQUNEOzs7bUNBRWM7QUFDYixVQUFJLEtBQUs2QyxRQUFULEVBQW1CLEtBQUtBLFFBQUwsQ0FBY21CLG1CQUFkLENBQWtDLFFBQWxDLEVBQTRDLEtBQUtwRSxnQkFBakQ7O0FBRW5CbUUsYUFBT0MsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUMsS0FBS2xFLGdCQUExQzs7QUFFQSxXQUFLbkIsTUFBTCxDQUFZcUYsbUJBQVosQ0FBZ0MsMkJBQWhDLEVBQTZELEtBQUtoRSxjQUFsRTtBQUNEOzs7cUNBRWdCcEIsSyxFQUFPO0FBQ3RCLFdBQUtBLEtBQUwsQ0FBV1AsY0FBWCxDQUEwQk8sS0FBMUIsRUFBaUMsS0FBS0QsTUFBdEM7O0FBRUEsVUFBSSxLQUFLSyxVQUFULEVBQXFCO0FBQ3JCLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUEsV0FBS2lGLEdBQUwsR0FBV0Msc0JBQXNCLEtBQUs1RixRQUEzQixDQUFYO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUs2RixVQUFMOztBQUVBLFdBQUtuRixVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7Ozt1Q0FFa0I7QUFDakIsVUFBSSxLQUFLQyxVQUFULEVBQXFCO0FBQ3JCLFdBQUtBLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUEsV0FBS2dGLEdBQUwsR0FBV0Msc0JBQXNCLEtBQUtuRSxRQUEzQixDQUFYO0FBQ0Q7OzsrQkFFVTtBQUNULFdBQUtlLE9BQUw7O0FBRUEsV0FBSzdCLFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7O3FDQUVnQjtBQUNmLFdBQUs2QixPQUFMO0FBQ0Q7OztxQ0FFZ0I7QUFBQSxVQUNQNUIsR0FETyxHQUNDLElBREQsQ0FDUEEsR0FETzs7O0FBR2YsVUFBSUEsSUFBSUosQ0FBSixDQUFNakIsRUFBVixFQUFjcUIsSUFBSUosQ0FBSixDQUFNakIsRUFBTixDQUFTaUcsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS3pELGVBQTVDO0FBQ2QsVUFBSW5CLElBQUlILENBQUosQ0FBTWxCLEVBQVYsRUFBY3FCLElBQUlILENBQUosQ0FBTWxCLEVBQU4sQ0FBU2lHLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUt4RCxlQUE1QztBQUNmOzs7dUNBRWtCO0FBQUEsVUFDVHBCLEdBRFMsR0FDRCxJQURDLENBQ1RBLEdBRFM7OztBQUdqQixVQUFJQSxJQUFJSixDQUFKLENBQU1qQixFQUFWLEVBQWNxQixJQUFJSixDQUFKLENBQU1qQixFQUFOLENBQVNtRyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLM0QsZUFBL0M7QUFDZCxVQUFJbkIsSUFBSUgsQ0FBSixDQUFNbEIsRUFBVixFQUFjcUIsSUFBSUgsQ0FBSixDQUFNbEIsRUFBTixDQUFTbUcsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBSzFELGVBQS9DO0FBQ2Y7OztvQ0FFZTtBQUNkN0MsZUFBU3FHLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUs1RCxjQUE1QztBQUNBekMsZUFBU3FHLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDLEtBQUszRCxZQUExQztBQUNBMUMsZUFBU3FHLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLEtBQUsxRCxlQUE3QztBQUNEOzs7c0NBRWlCO0FBQ2hCM0MsZUFBU3VHLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUs5RCxjQUEvQztBQUNBekMsZUFBU3VHLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUs3RCxZQUE3QztBQUNBMUMsZUFBU3VHLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDLEtBQUs1RCxlQUFoRDtBQUNEOzs7b0NBRWVnRSxDLEVBQUc7QUFDakIsV0FBS3pFLFlBQUwsR0FBb0IsS0FBS1QsR0FBTCxDQUFTSixDQUE3Qjs7QUFFQSxXQUFLdUYsU0FBTCxDQUFlRCxDQUFmO0FBQ0Q7OztvQ0FFZUEsQyxFQUFHO0FBQ2pCLFdBQUt6RSxZQUFMLEdBQW9CLEtBQUtULEdBQUwsQ0FBU0gsQ0FBN0I7O0FBRUEsV0FBS3NGLFNBQUwsQ0FBZUQsQ0FBZjtBQUNEOzs7bUNBRWNBLEMsRUFBRztBQUNoQixXQUFLRSxVQUFMLENBQWdCRixDQUFoQjtBQUNEOzs7aUNBRVlBLEMsRUFBRztBQUNkLFdBQUtHLE9BQUwsQ0FBYUgsQ0FBYjtBQUNEOzs7b0NBRWVBLEMsRUFBRztBQUNqQixXQUFLRyxPQUFMLENBQWFILENBQWI7QUFDRDs7OzhCQUVTQSxDLEVBQUc7QUFBQSxVQUNIekUsWUFERyxHQUN3QixJQUR4QixDQUNIQSxZQURHO0FBQUEsVUFDV2tELFFBRFgsR0FDd0IsSUFEeEIsQ0FDV0EsUUFEWDs7QUFFWCxVQUFJbEQsaUJBQWlCLElBQXJCLEVBQTJCOztBQUUzQmtELGVBQVN6QixLQUFULENBQWVvRCxVQUFmLEdBQTRCLE1BQTVCO0FBQ0EzQixlQUFTekIsS0FBVCxDQUFlcUQsYUFBZixHQUErQixNQUEvQjs7QUFFQSxXQUFLQyxhQUFMOztBQUVBL0UsbUJBQWFQLFNBQWIsR0FBeUJnRixFQUFFekUsYUFBYUYsUUFBZixDQUF6QjtBQUNBRSxtQkFBYUwsWUFBYixHQUE0QnVELFNBQVNsRCxhQUFhRCxVQUF0QixDQUE1QjtBQUNEOzs7K0JBRVUwRSxDLEVBQUc7QUFBQSxVQUNKekUsWUFESSxHQUNhLElBRGIsQ0FDSkEsWUFESTs7QUFFWixVQUFJQSxpQkFBaUIsSUFBckIsRUFBMkI7O0FBRTNCQSxtQkFBYU4sUUFBYixHQUF3QitFLEVBQUV6RSxhQUFhRixRQUFmLElBQTJCRSxhQUFhUCxTQUFoRTs7QUFFQSxXQUFLdUYsZUFBTCxDQUFxQmhGLFlBQXJCO0FBQ0Q7Ozs4QkFFUztBQUFBLFVBQ0FBLFlBREEsR0FDMkIsSUFEM0IsQ0FDQUEsWUFEQTtBQUFBLFVBQ2NrRCxRQURkLEdBQzJCLElBRDNCLENBQ2NBLFFBRGQ7O0FBRVIsVUFBSWxELGlCQUFpQixJQUFyQixFQUEyQjs7QUFFM0IsV0FBS2lGLGVBQUw7O0FBRUFqRixtQkFBYVAsU0FBYixHQUF5QixJQUF6QjtBQUNBTyxtQkFBYU4sUUFBYixHQUF3QixDQUF4QjtBQUNBTSxtQkFBYUwsWUFBYixHQUE0QixJQUE1Qjs7QUFFQSxXQUFLSyxZQUFMLEdBQW9CLElBQXBCOztBQUVBa0QsZUFBU3pCLEtBQVQsQ0FBZW9ELFVBQWYsR0FBNEIsRUFBNUI7QUFDQTNCLGVBQVN6QixLQUFULENBQWVxRCxhQUFmLEdBQStCLEVBQS9CO0FBQ0Q7OztrQ0FFYTtBQUFBLFVBQ0o1QixRQURJLEdBQ3NCLElBRHRCLENBQ0pBLFFBREk7QUFBQSxVQUNNSixNQUROLEdBQ3NCLElBRHRCLENBQ01BLE1BRE47QUFBQSxVQUNjdkQsR0FEZCxHQUNzQixJQUR0QixDQUNjQSxHQURkOzs7QUFHWixVQUFNMkYsVUFBVTNGLElBQUlKLENBQXBCO0FBQ0EsVUFBTWdHLFVBQVU1RixJQUFJSCxDQUFwQjs7QUFFQSxVQUFNZ0csY0FBY2xDLFNBQVNWLFlBQVQsR0FBd0IwQyxRQUFRekcsU0FBcEQ7QUFDQSxVQUFNNEcsYUFBYXZDLE9BQU9QLFlBQTFCO0FBQ0EsVUFBTStDLFNBQVNELGFBQWFELFdBQTVCO0FBQ0FGLGNBQVFLLFNBQVIsR0FBb0JGLFVBQXBCO0FBQ0FILGNBQVFyRixTQUFSLEdBQW9CeUYsTUFBcEI7QUFDQUosY0FBUU0sV0FBUixHQUFzQkosY0FBY0MsVUFBcEM7QUFDQSxVQUFJSCxRQUFRaEgsRUFBWixFQUFnQjtBQUNkZ0gsZ0JBQVFuQixPQUFSLENBQWdCdEMsS0FBaEIsQ0FBc0JvQixPQUF0QixHQUFpQ3FDLFFBQVFyRixTQUFSLEtBQXNCLENBQXZCLEdBQTRCLE1BQTVCLEdBQXFDLEVBQXJFO0FBQ0FxRixnQkFBUWhILEVBQVIsQ0FBV3VELEtBQVgsQ0FBaUJHLE1BQWpCLEdBQTZCMEQsU0FBU0osUUFBUW5CLE9BQVIsQ0FBZ0J4QixZQUF0RDtBQUNBMkMsZ0JBQVFPLFNBQVIsR0FBb0JQLFFBQVFuQixPQUFSLENBQWdCeEIsWUFBaEIsR0FBK0IyQyxRQUFRaEgsRUFBUixDQUFXcUUsWUFBOUQ7QUFDRDs7QUFFRCxVQUFNbUQsY0FBY3hDLFNBQVNiLFdBQVQsR0FBdUIsSUFBSThDLFFBQVExRyxTQUF2RDtBQUNBLFVBQU1rSCxhQUFhN0MsT0FBT1YsV0FBMUI7QUFDQSxVQUFNd0QsU0FBU0QsYUFBYUQsV0FBNUI7QUFDQVAsY0FBUUksU0FBUixHQUFvQkksVUFBcEI7QUFDQVIsY0FBUXRGLFNBQVIsR0FBb0IrRixNQUFwQjtBQUNBVCxjQUFRSyxXQUFSLEdBQXNCRSxjQUFjQyxVQUFwQztBQUNBLFVBQUlSLFFBQVFqSCxFQUFaLEVBQWdCO0FBQ2RpSCxnQkFBUXBCLE9BQVIsQ0FBZ0J0QyxLQUFoQixDQUFzQm9CLE9BQXRCLEdBQWlDc0MsUUFBUXRGLFNBQVIsS0FBc0IsQ0FBdkIsR0FBNEIsTUFBNUIsR0FBcUMsRUFBckU7QUFDQXNGLGdCQUFRakgsRUFBUixDQUFXdUQsS0FBWCxDQUFpQkUsS0FBakIsR0FBNEJpRSxTQUFTVCxRQUFRcEIsT0FBUixDQUFnQjNCLFdBQXJEO0FBQ0ErQyxnQkFBUU0sU0FBUixHQUFvQk4sUUFBUXBCLE9BQVIsQ0FBZ0IzQixXQUFoQixHQUE4QitDLFFBQVFqSCxFQUFSLENBQVdrRSxXQUE3RDtBQUNEO0FBQ0Y7OztpQ0FFWTtBQUFBLFVBQ0hjLFFBREcsR0FDd0MsSUFEeEMsQ0FDSEEsUUFERztBQUFBLFVBQ08zRCxHQURQLEdBQ3dDLElBRHhDLENBQ09BLEdBRFA7QUFBQSxVQUNZTCxRQURaLEdBQ3dDLElBRHhDLENBQ1lBLFFBRFo7QUFBQSxVQUNzQkQsS0FEdEIsR0FDd0MsSUFEeEMsQ0FDc0JBLEtBRHRCO0FBQUEsVUFDNkJELE1BRDdCLEdBQ3dDLElBRHhDLENBQzZCQSxNQUQ3Qjs7O0FBR1gsVUFBTWtHLFVBQVUzRixJQUFJSixDQUFwQjtBQUNBLFVBQU1nRyxVQUFVNUYsSUFBSUgsQ0FBcEI7O0FBRUEsVUFBTXlHLFFBQVE7QUFDWjFHLFdBQUcsQ0FEUztBQUVaQyxXQUFHO0FBRlMsT0FBZDs7QUFLQSxVQUFJOEYsUUFBUWhILEVBQVosRUFBZ0I7QUFDZDJILGNBQU0xRyxDQUFOLEdBQVUrRixRQUFRTSxXQUFSLEdBQXVCdEMsU0FBUzRDLFNBQVQsR0FBcUJaLFFBQVFNLFdBQXBELEdBQW1FLENBQTdFO0FBQ0EsWUFBTU8sT0FBT0YsTUFBTTFHLENBQU4sSUFBVytGLFFBQVFLLFNBQVIsSUFBcUIsSUFBSUwsUUFBUXJGLFNBQWpDLENBQVgsQ0FBYjtBQUNBcUYsZ0JBQVFoSCxFQUFSLENBQVd1RCxLQUFYLENBQWlCdUUsU0FBakIsbUJBQTJDRCxJQUEzQztBQUNEOztBQUVELFVBQUlaLFFBQVFqSCxFQUFaLEVBQWdCO0FBQ2QySCxjQUFNekcsQ0FBTixHQUFVK0YsUUFBUUssV0FBUixHQUF1QnRDLFNBQVMrQyxVQUFULEdBQXNCZCxRQUFRSyxXQUFyRCxHQUFvRSxDQUE5RTtBQUNBLFlBQU1VLE9BQU9MLE1BQU16RyxDQUFOLElBQVcrRixRQUFRSSxTQUFSLElBQXFCLElBQUlKLFFBQVF0RixTQUFqQyxDQUFYLENBQWI7QUFDQXNGLGdCQUFRakgsRUFBUixDQUFXdUQsS0FBWCxDQUFpQnVFLFNBQWpCLG1CQUEyQ0UsSUFBM0M7QUFDRDs7QUFFRGpILFlBQU1OLFFBQU4sQ0FBZWtILEtBQWYsRUFBc0I3RyxNQUF0Qjs7QUFFQSxVQUFJNkcsTUFBTTFHLENBQU4sS0FBWUQsU0FBU0MsQ0FBekIsRUFBNEI7QUFDMUIsWUFBSTBHLE1BQU0xRyxDQUFOLElBQVcsQ0FBZixFQUFrQkYsTUFBTUwsS0FBTixDQUFZSSxNQUFaO0FBQ2xCLFlBQUk2RyxNQUFNMUcsQ0FBTixJQUFXLENBQWYsRUFBa0JGLE1BQU1KLFFBQU4sQ0FBZUcsTUFBZjtBQUNsQkUsaUJBQVNDLENBQVQsR0FBYTBHLE1BQU0xRyxDQUFuQjtBQUNEOztBQUVELFVBQUkwRyxNQUFNekcsQ0FBTixLQUFZRixTQUFTRSxDQUF6QixFQUE0QjtBQUMxQixZQUFJeUcsTUFBTXpHLENBQU4sSUFBVyxDQUFmLEVBQWtCSCxNQUFNSCxNQUFOLENBQWFFLE1BQWI7QUFDbEIsWUFBSTZHLE1BQU16RyxDQUFOLElBQVcsQ0FBZixFQUFrQkgsTUFBTUYsT0FBTixDQUFjQyxNQUFkO0FBQ2xCRSxpQkFBU0UsQ0FBVCxHQUFheUcsTUFBTXpHLENBQW5CO0FBQ0Q7QUFDRjs7O29DQUVlWSxZLEVBQWM7QUFDNUIsV0FBS2tELFFBQUwsQ0FBY2xELGFBQWFELFVBQTNCLElBQ0VDLGFBQWFMLFlBQWIsR0FDRUssYUFBYXdGLFdBQWIsR0FBMkJ4RixhQUFhTixRQUF4QyxHQUFtRE0sYUFBYXlGLFNBRnBFO0FBS0Q7OztxQ0FFZ0I7QUFDZixVQUFJLENBQUNyQixPQUFPK0IsV0FBWixFQUF5QjtBQUN6QixXQUFLbkgsTUFBTCxDQUFZb0gsYUFBWixDQUEwQkMsYUFBMUIsQ0FBd0MsSUFBSUYsV0FBSixDQUFnQiwyQkFBaEIsRUFBNkM7QUFDbkZHLGlCQUFTO0FBRDBFLE9BQTdDLENBQXhDO0FBR0Q7O0FBRUQ7Ozs7Ozs4QkFHVTtBQUNSLFdBQUtDLFdBQUw7QUFDQSxXQUFLL0IsVUFBTDtBQUNEOztBQUVEOzs7Ozs7OEJBR1U7QUFBQSxVQUNBdEIsUUFEQSxHQUM0QyxJQUQ1QyxDQUNBQSxRQURBO0FBQUEsVUFDVUosTUFEVixHQUM0QyxJQUQ1QyxDQUNVQSxNQURWO0FBQUEsVUFDa0I5RCxNQURsQixHQUM0QyxJQUQ1QyxDQUNrQkEsTUFEbEI7QUFBQSxVQUMwQk8sR0FEMUIsR0FDNEMsSUFENUMsQ0FDMEJBLEdBRDFCO0FBQUEsVUFDK0JoQixRQUQvQixHQUM0QyxJQUQ1QyxDQUMrQkEsUUFEL0I7OztBQUdSLFdBQUswRyxlQUFMO0FBQ0EsV0FBS3VCLGdCQUFMO0FBQ0EsV0FBS0MsWUFBTDs7QUFFQSxVQUFJbEgsSUFBSUosQ0FBSixDQUFNNEUsT0FBVixFQUFtQjtBQUNqQi9FLGVBQU95RCxXQUFQLENBQW1CbEQsSUFBSUosQ0FBSixDQUFNNEUsT0FBekI7QUFDQXhFLFlBQUlKLENBQUosQ0FBTWpCLEVBQU4sR0FBVyxJQUFYO0FBQ0FxQixZQUFJSixDQUFKLENBQU00RSxPQUFOLEdBQWdCLElBQWhCO0FBQ0Q7QUFDRCxVQUFJeEUsSUFBSUgsQ0FBSixDQUFNMkUsT0FBVixFQUFtQjtBQUNqQi9FLGVBQU95RCxXQUFQLENBQW1CbEQsSUFBSUgsQ0FBSixDQUFNMkUsT0FBekI7QUFDQXhFLFlBQUlILENBQUosQ0FBTWxCLEVBQU4sR0FBVyxJQUFYO0FBQ0FxQixZQUFJSCxDQUFKLENBQU0yRSxPQUFOLEdBQWdCLElBQWhCO0FBQ0Q7O0FBRUQvRSxhQUFPMEQsU0FBUCxDQUFpQmdFLE1BQWpCLENBQXdCbkksUUFBeEI7QUFDQSxVQUFNcUUsWUFBWTVELE9BQU95QyxLQUF6QjtBQUNBbUIsZ0JBQVVsQixRQUFWLEdBQXFCLEVBQXJCO0FBQ0FrQixnQkFBVWYsUUFBVixHQUFxQixFQUFyQjtBQUNBZSxnQkFBVUMsT0FBVixHQUFvQixFQUFwQjs7QUFFQSxVQUFJSyxRQUFKLEVBQWM7QUFDWixlQUFPQSxTQUFTRSxVQUFULENBQW9CQyxNQUEzQixFQUFtQztBQUNqQ3JFLGlCQUFPa0QsV0FBUCxDQUFtQmdCLFNBQVNFLFVBQVQsQ0FBb0IsQ0FBcEIsQ0FBbkI7QUFDRDs7QUFFRCxZQUFJTixNQUFKLEVBQVk7QUFDVkEsaUJBQU9MLFdBQVAsQ0FBbUJTLFFBQW5CO0FBQ0Q7O0FBRUQsYUFBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNEOztBQUVELFVBQUlKLE1BQUosRUFBWTtBQUNWOUQsZUFBT3lELFdBQVAsQ0FBbUJLLE1BQW5COztBQUVBLGFBQUtBLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFDRjs7Ozs7O2tCQXJoQmtCdkYsWTs7Ozs7Ozs7Ozs7QUNBckIsdUMiLCJmaWxlIjoicG90YXRvLXNjcm9sbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2J1aWxkLmpzXCIpO1xuIiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgUG90YXRvU2Nyb2xsIGZyb20gJy4vaW5kZXguanMnO1xuXG5leHBvcnQgZGVmYXVsdCBQb3RhdG9TY3JvbGw7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9TY3JvbGwge1xuXG4gIHN0YXRpYyBjcmVhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3IsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICBlbCA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlT3B0aW9uID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgICAgICBpbnN0YW5jZU9wdGlvbi5lbCA9IGVsO1xuICAgICAgICByZXR1cm4gbmV3IFBvdGF0b1Njcm9sbChpbnN0YW5jZU9wdGlvbik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycyhvcHRpb25zKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5iaW5kVGhpcygpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgc2V0VmFycyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBOT09QID0gKCkgPT4ge307XG5cbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGNzc0NsYXNzID0gJ3BvdGF0b1Njcm9sbCcsXG4gICAgICBmb3JjZUN1c3RvbSA9IGZhbHNlLFxuICAgICAgZm9yY2VTaXplID0gMjAsXG4gICAgICBvbk5hdGl2ZVNjcm9sbCA9IE5PT1AsXG4gICAgICBvblNjcm9sbCA9IE5PT1AsXG4gICAgICBvblRvcCA9IE5PT1AsXG4gICAgICBvbkJvdHRvbSA9IE5PT1AsXG4gICAgICBvbkxlZnQgPSBOT09QLFxuICAgICAgb25SaWdodCA9IE5PT1AsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnJvb3RFbCA9IGVsO1xuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcbiAgICB0aGlzLmZvcmNlQ3VzdG9tID0gZm9yY2VDdXN0b207XG5cbiAgICB0aGlzLmV2ZW50ID0ge1xuICAgICAgb25OYXRpdmVTY3JvbGwsXG4gICAgICBvblNjcm9sbCxcbiAgICAgIG9uVG9wLFxuICAgICAgb25Cb3R0b20sXG4gICAgICBvbkxlZnQsXG4gICAgICBvblJpZ2h0LFxuICAgIH07XG5cbiAgICB0aGlzLnByb2dyZXNzID0ge1xuICAgICAgdjogMCxcbiAgICAgIGg6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IGZhbHNlO1xuICAgIHRoaXMucmVzaXplV2FpdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5iYXIgPSB7XG4gICAgICB2OiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WScsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxUb3AnLFxuICAgICAgfSxcbiAgICAgIGg6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBiaW5kVGhpcygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZVRocm90dGxlID0gdGhpcy5vblJlc2l6ZVRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMub25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25OZXN0ZWRDcmVhdGUgPSB0aGlzLm9uTmVzdGVkQ3JlYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoUGFyZW50cyA9IHRoaXMucmVmcmVzaFBhcmVudHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25Eb2NNb3VzZU1vdmUgPSB0aGlzLm9uRG9jTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlVXAgPSB0aGlzLm9uRG9jTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZUxlYXZlID0gdGhpcy5vbkRvY01vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25WQmFyTW91c2VEb3duID0gdGhpcy5vblZCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSEJhck1vdXNlRG93biA9IHRoaXMub25IQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSAmIHJlaW5pdGlhbGl6ZSBpbnN0YW5jZVxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgIHRoaXMuYW5hbHl6ZU5hdGl2ZSgpO1xuICAgIHRoaXMucHJlcGFyZURPTSgpO1xuICAgIHRoaXMuaGlkZU5hdGl2ZUJhcnMoKTtcbiAgICB0aGlzLmFkZEN1c3RvbUJhcnMoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB0aGlzLmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVmcmVzaFBhcmVudHMpO1xuICB9XG5cbiAgYW5hbHl6ZU5hdGl2ZSgpIHtcbiAgICBjb25zdCB7IGJhciB9ID0gdGhpcztcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgY29uc3QgdGVzdFNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS50b3AgPSAwO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5sZWZ0ID0gMDtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RTY3JvbGxFbC5hcHBlbmRDaGlsZCh0ZXN0Q29udGVudEVsKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIGNvbnN0IHZOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldFdpZHRoIC0gdGVzdFNjcm9sbEVsLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IGhOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldEhlaWdodCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG5cbiAgICBiYXIudi5uYXRpdmVTaXplID0gdk5hdGl2ZVNpemU7XG4gICAgYmFyLmgubmF0aXZlU2l6ZSA9IGhOYXRpdmVTaXplO1xuXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkgYmFyLnYuZm9yY2VTaXplID0gMDtcbiAgICBpZiAoaE5hdGl2ZVNpemUgPiAwKSBiYXIuaC5mb3JjZVNpemUgPSAwO1xuXG4gICAgLy8gZGV0ZWN0IHBvc2l0aW9uIC0gUlRMXG5cbiAgICBib2R5LnJlbW92ZUNoaWxkKHRlc3RTY3JvbGxFbCk7XG4gIH1cblxuICBwcmVwYXJlRE9NKCkge1xuICAgIGNvbnN0IHsgcm9vdEVsLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIC8vIHJvb3RFbFxuICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIHJvb3RTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvLyBtYXNrRWxcbiAgICBjb25zdCBtYXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX21hc2tgKTtcbiAgICBjb25zdCBtYXNrU3R5bGUgPSBtYXNrRWwuc3R5bGU7XG4gICAgbWFza1N0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBtYXNrU3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBtYXNrU3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIG1hc2tTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1hc2tTdHlsZS56SW5kZXggPSAnMCc7XG5cbiAgICAvLyBzY3JvbGxFbFxuICAgIGNvbnN0IHNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3Njcm9sbGApO1xuICAgIGNvbnN0IHNjcm9sbFN0eWxlID0gc2Nyb2xsRWwuc3R5bGU7XG4gICAgc2Nyb2xsU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIHNjcm9sbFN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICB3aGlsZSAocm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzY3JvbGxFbC5hcHBlbmRDaGlsZChyb290RWwuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuXG4gICAgbWFza0VsLmFwcGVuZENoaWxkKHNjcm9sbEVsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQobWFza0VsKTtcblxuICAgIHRoaXMubWFza0VsID0gbWFza0VsO1xuICAgIHRoaXMuc2Nyb2xsRWwgPSBzY3JvbGxFbDtcbiAgfVxuXG4gIGhpZGVOYXRpdmVCYXJzKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIGJhciB9ID0gdGhpcztcblxuICAgIGlmICh0aGlzLmZvcmNlQ3VzdG9tICYmIChiYXIudi5uYXRpdmVTaXplID09PSAwIHx8IGJhci5oLm5hdGl2ZVNpemUgPT09IDApKSB7XG4gICAgICBjb25zdCB2Rm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuXG4gICAgICBjb25zdCBoRm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWhGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke2hGb3JjZVNpemV9cHhgO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWJhci52Lm5hdGl2ZVNpemV9cHhgO1xuICB9XG5cbiAgYWRkQ3VzdG9tQmFycygpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmICghKFxuICAgICAgYmFyLnYubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgYmFyLmgubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgdGhpcy5mb3JjZUN1c3RvbVxuICAgICkpIHJldHVybjtcblxuICAgIGNvbnN0IHZUcmFja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdlRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgdlRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrLS12YCk7XG4gICAgdlRyYWNrRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHZUcmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXIudi50cmFja0VsID0gdlRyYWNrRWw7XG5cbiAgICBjb25zdCB2QmFyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2QmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2JhcmApO1xuICAgIHZCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS12YCk7XG4gICAgYmFyLnYuZWwgPSB2QmFyRWw7XG5cbiAgICBjb25zdCBoVHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIGhUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0taGApO1xuICAgIGhUcmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBoVHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyLmgudHJhY2tFbCA9IGhUcmFja0VsO1xuXG4gICAgY29uc3QgaEJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaEJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICBoQmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0taGApO1xuICAgIGJhci5oLmVsID0gaEJhckVsO1xuXG4gICAgdlRyYWNrRWwuYXBwZW5kQ2hpbGQodkJhckVsKTtcbiAgICBoVHJhY2tFbC5hcHBlbmRDaGlsZChoQmFyRWwpO1xuXG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKHZUcmFja0VsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoaFRyYWNrRWwpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxFbCkgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG5cbiAgICB0aGlzLnJvb3RFbC5hZGRFdmVudExpc3RlbmVyKCdQb3RhdG9TY3JvbGwubmVzdGVkQ3JlYXRlJywgdGhpcy5vbk5lc3RlZENyZWF0ZSk7XG4gIH1cblxuICB1bmJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlKTtcblxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuXG4gICAgdGhpcy5yb290RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENyZWF0ZScsIHRoaXMub25OZXN0ZWRDcmVhdGUpO1xuICB9XG5cbiAgb25TY3JvbGxUaHJvdHRsZShldmVudCkge1xuICAgIHRoaXMuZXZlbnQub25OYXRpdmVTY3JvbGwoZXZlbnQsIHRoaXMucm9vdEVsKTtcblxuICAgIGlmICh0aGlzLnNjcm9sbFdhaXQpIHJldHVybjtcbiAgICB0aGlzLnNjcm9sbFdhaXQgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbCk7XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcblxuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVXYWl0KSByZXR1cm47XG4gICAgdGhpcy5yZXNpemVXYWl0ID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLnJlc2l6ZVdhaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTmVzdGVkQ3JlYXRlKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIHVuYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIGJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgdW5iaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIG9uVkJhck1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci52O1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkhCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW92ZVVwZGF0ZShlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VVcChlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBtb3ZlQmVnaW4oZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF07XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IHNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXTtcbiAgfVxuXG4gIG1vdmVVcGRhdGUoZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBudWxsO1xuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IDA7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2QmFyT2JqID0gYmFyLnY7XG4gICAgY29uc3QgaEJhck9iaiA9IGJhci5oO1xuXG4gICAgY29uc3QgdlNjcm9sbFNpemUgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB2QmFyT2JqLmZvcmNlU2l6ZTtcbiAgICBjb25zdCB2VHJhY2tTaXplID0gbWFza0VsLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB2RnJhY3QgPSB2VHJhY2tTaXplIC8gdlNjcm9sbFNpemU7XG4gICAgdkJhck9iai50cmFja1NpemUgPSB2VHJhY2tTaXplO1xuICAgIHZCYXJPYmouc2l6ZUZyYWN0ID0gdkZyYWN0O1xuICAgIHZCYXJPYmouc2Nyb2xsUmFuZ2UgPSB2U2Nyb2xsU2l6ZSAtIHZUcmFja1NpemU7XG4gICAgaWYgKHZCYXJPYmouZWwpIHtcbiAgICAgIHZCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKHZCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgdkJhck9iai5lbC5zdHlsZS5oZWlnaHQgPSBgJHt2RnJhY3QgKiB2QmFyT2JqLnRyYWNrRWwub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgIHZCYXJPYmoubW92ZVJhbmdlID0gdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodCAtIHZCYXJPYmouZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IGhTY3JvbGxTaXplID0gc2Nyb2xsRWwuc2Nyb2xsV2lkdGggLSAyICogaEJhck9iai5mb3JjZVNpemU7XG4gICAgY29uc3QgaFRyYWNrU2l6ZSA9IG1hc2tFbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoRnJhY3QgPSBoVHJhY2tTaXplIC8gaFNjcm9sbFNpemU7XG4gICAgaEJhck9iai50cmFja1NpemUgPSBoVHJhY2tTaXplO1xuICAgIGhCYXJPYmouc2l6ZUZyYWN0ID0gaEZyYWN0O1xuICAgIGhCYXJPYmouc2Nyb2xsUmFuZ2UgPSBoU2Nyb2xsU2l6ZSAtIGhUcmFja1NpemU7XG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGhCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKGhCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgaEJhck9iai5lbC5zdHlsZS53aWR0aCA9IGAke2hGcmFjdCAqIGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aH1weGA7XG4gICAgICBoQmFyT2JqLm1vdmVSYW5nZSA9IGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aCAtIGhCYXJPYmouZWwub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIsIHByb2dyZXNzLCBldmVudCwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgY29uc3QgdkJhck9iaiA9IGJhci52O1xuICAgIGNvbnN0IGhCYXJPYmogPSBiYXIuaDtcblxuICAgIGNvbnN0IGZyYWN0ID0ge1xuICAgICAgdjogMCxcbiAgICAgIGg6IDAsXG4gICAgfTtcblxuICAgIGlmICh2QmFyT2JqLmVsKSB7XG4gICAgICBmcmFjdC52ID0gdkJhck9iai5zY3JvbGxSYW5nZSA/IChzY3JvbGxFbC5zY3JvbGxUb3AgLyB2QmFyT2JqLnNjcm9sbFJhbmdlKSA6IDA7XG4gICAgICBjb25zdCB2UG9zID0gZnJhY3QudiAqICh2QmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gdkJhck9iai5zaXplRnJhY3QpKTtcbiAgICAgIHZCYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt2UG9zfXB4KWA7XG4gICAgfVxuXG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGZyYWN0LmggPSBoQmFyT2JqLnNjcm9sbFJhbmdlID8gKHNjcm9sbEVsLnNjcm9sbExlZnQgLyBoQmFyT2JqLnNjcm9sbFJhbmdlKSA6IDA7XG4gICAgICBjb25zdCBoUG9zID0gZnJhY3QuaCAqIChoQmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gaEJhck9iai5zaXplRnJhY3QpKTtcbiAgICAgIGhCYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtoUG9zfXB4KWA7XG4gICAgfVxuXG4gICAgZXZlbnQub25TY3JvbGwoZnJhY3QsIHJvb3RFbCk7XG5cbiAgICBpZiAoZnJhY3QudiAhPT0gcHJvZ3Jlc3Mudikge1xuICAgICAgaWYgKGZyYWN0LnYgPD0gMCkgZXZlbnQub25Ub3Aocm9vdEVsKTtcbiAgICAgIGlmIChmcmFjdC52ID49IDEpIGV2ZW50Lm9uQm90dG9tKHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy52ID0gZnJhY3QudjtcbiAgICB9XG5cbiAgICBpZiAoZnJhY3QuaCAhPT0gcHJvZ3Jlc3MuaCkge1xuICAgICAgaWYgKGZyYWN0LmggPD0gMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoZnJhY3QuaCA+PSAxKSBldmVudC5vblJpZ2h0KHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy5oID0gZnJhY3QuaDtcbiAgICB9XG4gIH1cblxuICBiYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKSB7XG4gICAgdGhpcy5zY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF0gPSAoXG4gICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlICsgKFxuICAgICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsUmFuZ2UgKiBhY3RpdmVCYXJPYmoubW92ZURpZmYgLyBhY3RpdmVCYXJPYmoubW92ZVJhbmdlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hQYXJlbnRzKCkge1xuICAgIGlmICghd2luZG93LkN1c3RvbUV2ZW50KSByZXR1cm47XG4gICAgdGhpcy5yb290RWwucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnUG90YXRvU2Nyb2xsLm5lc3RlZENyZWF0ZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBSZWNhbGN1bGF0ZXMgY29udGVudCBzaXplIGFuZCBzZXQgc2Nyb2xsYmFycyBzaXplXG4gICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldEJhcnNTaXplKCk7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG4gIH1cblxuICAvKipcbiAgICAqIERlc3Ryb3lzIHRoZSBpbnN0YW5jZSBhbmQgcmVzdG9yZSBvcmlnaW5hbCBodG1sXG4gICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwsIHJvb3RFbCwgYmFyLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIGlmIChiYXIudi50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLnYudHJhY2tFbCk7XG4gICAgICBiYXIudi5lbCA9IG51bGw7XG4gICAgICBiYXIudi50cmFja0VsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGJhci5oLnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIuaC50cmFja0VsKTtcbiAgICAgIGJhci5oLmVsID0gbnVsbDtcbiAgICAgIGJhci5oLnRyYWNrRWwgPSBudWxsO1xuICAgIH1cblxuICAgIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgIGlmIChzY3JvbGxFbCkge1xuICAgICAgd2hpbGUgKHNjcm9sbEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChzY3JvbGxFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hc2tFbCkge1xuICAgICAgICBtYXNrRWwucmVtb3ZlQ2hpbGQoc2Nyb2xsRWwpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbEVsID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWFza0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQobWFza0VsKTtcblxuICAgICAgdGhpcy5tYXNrRWwgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==