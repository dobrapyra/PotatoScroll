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

      this.isRTL = false;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwiY3NzQ2xhc3MiLCJmb3JjZUN1c3RvbSIsImZvcmNlU2l6ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsImV2ZW50Iiwid2FpdCIsInNjcm9sbCIsInJlc2l6ZSIsInJhZiIsInByb2dyZXNzIiwidiIsImgiLCJiYXIiLCJuYXRpdmVTaXplIiwibW92ZVN0YXJ0IiwibW92ZURpZmYiLCJzY3JvbGxCZWZvcmUiLCJzaXplIiwic2l6ZUZyYWN0IiwidHJhY2tTaXplIiwibW92ZVByb3AiLCJzY3JvbGxQcm9wIiwiYXhpcyIsImFjdGl2ZUJhck9iaiIsImlzUlRMIiwib25TY3JvbGxUaHJvdHRsZSIsImJpbmQiLCJvblJlc2l6ZVRocm90dGxlIiwib25SZXNpemUiLCJvbk5lc3RlZENyZWF0ZSIsInJlZnJlc2hQYXJlbnRzIiwib25Eb2NNb3VzZU1vdmUiLCJvbkRvY01vdXNlVXAiLCJvbkRvY01vdXNlTGVhdmUiLCJvblZCYXJNb3VzZURvd24iLCJvbkhCYXJNb3VzZURvd24iLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJyZWZyZXNoIiwic2V0VGltZW91dCIsInJvb3RQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwidGVzdFNjcm9sbEVsIiwiY3JlYXRlRWxlbWVudCIsInRlc3RTY3JvbGxTdHlsZSIsInN0eWxlIiwib3ZlcmZsb3ciLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInZpc2liaWxpdHkiLCJvcGFjaXR5IiwiYXBwZW5kQ2hpbGQiLCJ2TmF0aXZlU2l6ZSIsIm9mZnNldFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJoTmF0aXZlU2l6ZSIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsInRlc3RDb250ZW50RWwiLCJvZmZzZXRMZWZ0IiwicmVtb3ZlQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyb290U3R5bGUiLCJkaXNwbGF5IiwibWFza0VsIiwibWFza1N0eWxlIiwiZmxleEdyb3ciLCJ6SW5kZXgiLCJzY3JvbGxFbCIsInNjcm9sbFN0eWxlIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInZGb3JjZVNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsImhGb3JjZVNpemUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidlRyYWNrRWwiLCJ0cmFja0VsIiwidkJhckVsIiwiaFRyYWNrRWwiLCJoQmFyRWwiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldEJhcnNQb3MiLCJlIiwibW92ZUJlZ2luIiwibW92ZVVwZGF0ZSIsIm1vdmVFbmQiLCJ1c2VyU2VsZWN0IiwicG9pbnRlckV2ZW50cyIsImJpbmREb2NFdmVudHMiLCJiYXJNb3ZlVG9TY3JvbGwiLCJ1bmJpbmREb2NFdmVudHMiLCJ2QmFyT2JqIiwiaEJhck9iaiIsInZTY3JvbGxTaXplIiwidlRyYWNrU2l6ZSIsInZGcmFjdCIsInNjcm9sbFJhbmdlIiwibW92ZVJhbmdlIiwiaFNjcm9sbFNpemUiLCJoVHJhY2tTaXplIiwiaEZyYWN0IiwiZnJhY3QiLCJzZXRCYXJQb3MiLCJiYXJPYmoiLCJwb3MiLCJ0cmFuc2Zvcm0iLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJidWJibGVzIiwic2V0QmFyc1NpemUiLCJ1bmJpbmRCYXJzRXZlbnRzIiwidW5iaW5kRXZlbnRzIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTs7Ozs7O2tCQUVlQSxlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDSk1BLFk7Ozs2QkFFUztBQUFBLFVBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLFVBRXhCQyxRQUZ3QixHQUd0QkQsT0FIc0IsQ0FFeEJD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Q0FBSixDQUFNK0UsT0FBekI7QUFDQTlFLFlBQUlELENBQUosQ0FBTXRCLEVBQU4sR0FBVyxJQUFYO0FBQ0F1QixZQUFJRCxDQUFKLENBQU0rRSxPQUFOLEdBQWdCLElBQWhCO0FBQ0Q7O0FBRUR2RixhQUFPa0UsU0FBUCxDQUFpQjRELE1BQWpCLENBQXdCdkksUUFBeEI7QUFDQSxVQUFNNkUsWUFBWXBFLE9BQU8rQyxLQUF6QjtBQUNBcUIsZ0JBQVVwQixRQUFWLEdBQXFCLEVBQXJCO0FBQ0FvQixnQkFBVWpCLFFBQVYsR0FBcUIsRUFBckI7QUFDQWlCLGdCQUFVQyxPQUFWLEdBQW9CLEVBQXBCOztBQUVBLFVBQUlLLFFBQUosRUFBYztBQUNaLGVBQU9BLFNBQVNFLFVBQVQsQ0FBb0JDLE1BQTNCLEVBQW1DO0FBQ2pDN0UsaUJBQU93RCxXQUFQLENBQW1Ca0IsU0FBU0UsVUFBVCxDQUFvQixDQUFwQixDQUFuQjtBQUNEOztBQUVELFlBQUlOLE1BQUosRUFBWTtBQUNWQSxpQkFBT0wsV0FBUCxDQUFtQlMsUUFBbkI7QUFDRDs7QUFFRCxhQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0Q7O0FBRUQsVUFBSUosTUFBSixFQUFZO0FBQ1Z0RSxlQUFPaUUsV0FBUCxDQUFtQkssTUFBbkI7O0FBRUEsYUFBS0EsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUNGOzs7Ozs7a0JBNWlCa0IvRixZOzs7Ozs7Ozs7OztBQ0FyQix1QyIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVpbGQuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9TY3JvbGwgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvdGF0b1Njcm9sbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGF0b1Njcm9sbCB7XG5cbiAgc3RhdGljIGNyZWF0ZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RvcixcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgIGVsID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VPcHRpb24gPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgICAgIGluc3RhbmNlT3B0aW9uLmVsID0gZWw7XG4gICAgICAgIHJldHVybiBuZXcgUG90YXRvU2Nyb2xsKGluc3RhbmNlT3B0aW9uKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghdGhpcy5wcmVpbml0KG9wdGlvbnMpKSByZXR1cm47XG5cbiAgICB0aGlzLmJpbmRUaGlzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBwcmVpbml0KG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IE5PT1AgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgY3NzQ2xhc3MgPSAncG90YXRvU2Nyb2xsJyxcbiAgICAgIGZvcmNlQ3VzdG9tID0gZmFsc2UsXG4gICAgICBmb3JjZVNpemUgPSAyMCxcbiAgICAgIG9uTmF0aXZlU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uVG9wID0gTk9PUCxcbiAgICAgIG9uQm90dG9tID0gTk9PUCxcbiAgICAgIG9uTGVmdCA9IE5PT1AsXG4gICAgICBvblJpZ2h0ID0gTk9PUCxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsID0gZWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcblxuICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICBvbk5hdGl2ZVNjcm9sbCxcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgb25Ub3AsXG4gICAgICBvbkJvdHRvbSxcbiAgICAgIG9uTGVmdCxcbiAgICAgIG9uUmlnaHQsXG4gICAgfTtcblxuICAgIHRoaXMud2FpdCA9IHtcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXNpemU6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnJhZiA9IHtcbiAgICAgIHNjcm9sbDogbnVsbCxcbiAgICAgIHJlc2l6ZTogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmJhciA9IHtcbiAgICAgIHY6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgdHJhY2tTaXplOiAwLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFknLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsVG9wJyxcbiAgICAgICAgYXhpczogJ1knLFxuICAgICAgfSxcbiAgICAgIGg6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgdHJhY2tTaXplOiAwLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFgnLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsTGVmdCcsXG4gICAgICAgIGF4aXM6ICdYJyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHRoaXMuaXNSVEwgPSBmYWxzZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYmluZFRoaXMoKSB7XG4gICAgdGhpcy5vblNjcm9sbFRocm90dGxlID0gdGhpcy5vblNjcm9sbFRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemVUaHJvdHRsZSA9IHRoaXMub25SZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uTmVzdGVkQ3JlYXRlID0gdGhpcy5vbk5lc3RlZENyZWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmcmVzaFBhcmVudHMgPSB0aGlzLnJlZnJlc2hQYXJlbnRzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRG9jTW91c2VNb3ZlID0gdGhpcy5vbkRvY01vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZVVwID0gdGhpcy5vbkRvY01vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VMZWF2ZSA9IHRoaXMub25Eb2NNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVkJhck1vdXNlRG93biA9IHRoaXMub25WQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhCYXJNb3VzZURvd24gPSB0aGlzLm9uSEJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgJiByZWluaXRpYWxpemUgaW5zdGFuY2VcbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICB0aGlzLmFuYWx5emVOYXRpdmUoKTtcbiAgICB0aGlzLnByZXBhcmVET00oKTtcbiAgICB0aGlzLmhpZGVOYXRpdmVCYXJzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21CYXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnJlZnJlc2hQYXJlbnRzKTtcbiAgfVxuXG4gIGFuYWx5emVOYXRpdmUoKSB7XG4gICAgY29uc3QgeyByb290RWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHJvb3RQYXJlbnQgPSByb290RWwucGFyZW50RWxlbWVudDtcblxuICAgIGNvbnN0IHRlc3RTY3JvbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRlc3RTY3JvbGxTdHlsZSA9IHRlc3RTY3JvbGxFbC5zdHlsZTtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbFN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm9wYWNpdHkgPSAwO1xuXG4gICAgcm9vdFBhcmVudC5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIGJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICBiYXIuaC5uYXRpdmVTaXplID0gaE5hdGl2ZVNpemU7XG5cbiAgICBpZiAodk5hdGl2ZVNpemUgPiAwKSBiYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIGJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgUlRMXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkge1xuICAgICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgICB0aGlzLmlzUlRMID0gKHZOYXRpdmVTaXplID4gMCkgJiYgKHRlc3RDb250ZW50RWwub2Zmc2V0TGVmdCA+IHRlc3RTY3JvbGxFbC5vZmZzZXRMZWZ0KTtcblxuICAgICAgdGVzdFNjcm9sbEVsLnJlbW92ZUNoaWxkKHRlc3RDb250ZW50RWwpO1xuICAgIH1cblxuICAgIHJvb3RQYXJlbnQucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIC8vIG1hc2tFbFxuICAgIGNvbnN0IG1hc2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hc2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fbWFza2ApO1xuICAgIGNvbnN0IG1hc2tTdHlsZSA9IG1hc2tFbC5zdHlsZTtcbiAgICBtYXNrU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tTdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tTdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza1N0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza1N0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgY29uc3Qgc2Nyb2xsU3R5bGUgPSBzY3JvbGxFbC5zdHlsZTtcbiAgICBzY3JvbGxTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgc2Nyb2xsU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcblxuICAgIHdoaWxlIChyb290RWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHNjcm9sbEVsLmFwcGVuZENoaWxkKHJvb3RFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICB9XG5cbiAgICBtYXNrRWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChtYXNrRWwpO1xuXG4gICAgdGhpcy5tYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5zY3JvbGxFbCA9IHNjcm9sbEVsO1xuICB9XG5cbiAgaGlkZU5hdGl2ZUJhcnMoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgYmFyIH0gPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMuZm9yY2VDdXN0b20gJiYgKGJhci52Lm5hdGl2ZVNpemUgPT09IDAgfHwgYmFyLmgubmF0aXZlU2l6ZSA9PT0gMCkpIHtcbiAgICAgIGNvbnN0IHZGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0xlZnQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LXZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIGNvbnN0IGhGb3JjZVNpemUgPSBiYXIudi5mb3JjZVNpemU7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBgJHstaEZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nQm90dG9tID0gYCR7aEZvcmNlU2l6ZX1weGA7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JUTCkge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgfVxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyLCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBpZiAoIShcbiAgICAgIGJhci52Lm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIGJhci5oLm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIHRoaXMuZm9yY2VDdXN0b21cbiAgICApKSByZXR1cm47XG5cbiAgICBjb25zdCB2VHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0tdmApO1xuICAgIHZUcmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB2VHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyLnYudHJhY2tFbCA9IHZUcmFja0VsO1xuXG4gICAgY29uc3QgdkJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdkJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICB2QmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0tdmApO1xuICAgIGJhci52LmVsID0gdkJhckVsO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLWhgKTtcbiAgICBoVHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaFRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhci5oLnRyYWNrRWwgPSBoVHJhY2tFbDtcblxuICAgIGNvbnN0IGhCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgaEJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLWhgKTtcbiAgICBiYXIuaC5lbCA9IGhCYXJFbDtcblxuICAgIHZUcmFja0VsLmFwcGVuZENoaWxkKHZCYXJFbCk7XG4gICAgaFRyYWNrRWwuYXBwZW5kQ2hpbGQoaEJhckVsKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZCh2VHJhY2tFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGhUcmFja0VsKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuXG4gICAgdGhpcy5yb290RWwuYWRkRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENyZWF0ZScsIHRoaXMub25OZXN0ZWRDcmVhdGUpO1xuICB9XG5cbiAgdW5iaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDcmVhdGUnLCB0aGlzLm9uTmVzdGVkQ3JlYXRlKTtcbiAgfVxuXG4gIG9uU2Nyb2xsVGhyb3R0bGUoZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50Lm9uTmF0aXZlU2Nyb2xsKGV2ZW50LCB0aGlzLnJvb3RFbCk7XG5cbiAgICBpZiAodGhpcy53YWl0LnNjcm9sbCkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5zY3JvbGwgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYuc2Nyb2xsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG5cbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gZmFsc2U7XG4gIH1cblxuICBvblJlc2l6ZVRocm90dGxlKCkge1xuICAgIGlmICh0aGlzLndhaXQucmVzaXplKSByZXR1cm47XG4gICAgdGhpcy53YWl0LnJlc2l6ZSA9IHRydWU7XG5cbiAgICB0aGlzLnJhZi5yZXNpemUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHRoaXMud2FpdC5yZXNpemUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTmVzdGVkQ3JlYXRlKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIHVuYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIGJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgdW5iaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIG9uVkJhck1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci52O1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkhCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW92ZVVwZGF0ZShlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VVcChlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBtb3ZlQmVnaW4oZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF07XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IHNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXTtcbiAgfVxuXG4gIG1vdmVVcGRhdGUoZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBudWxsO1xuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IDA7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2QmFyT2JqID0gYmFyLnY7XG4gICAgY29uc3QgaEJhck9iaiA9IGJhci5oO1xuXG4gICAgY29uc3QgdlNjcm9sbFNpemUgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB2QmFyT2JqLmZvcmNlU2l6ZTtcbiAgICBjb25zdCB2VHJhY2tTaXplID0gbWFza0VsLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB2RnJhY3QgPSB2VHJhY2tTaXplIC8gdlNjcm9sbFNpemU7XG4gICAgdkJhck9iai50cmFja1NpemUgPSB2VHJhY2tTaXplO1xuICAgIHZCYXJPYmouc2l6ZUZyYWN0ID0gdkZyYWN0O1xuICAgIHZCYXJPYmouc2Nyb2xsUmFuZ2UgPSB2U2Nyb2xsU2l6ZSAtIHZUcmFja1NpemU7XG4gICAgaWYgKHZCYXJPYmouZWwpIHtcbiAgICAgIHZCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKHZCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgdkJhck9iai5lbC5zdHlsZS5oZWlnaHQgPSBgJHt2RnJhY3QgKiB2QmFyT2JqLnRyYWNrRWwub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgIHZCYXJPYmoubW92ZVJhbmdlID0gdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodCAtIHZCYXJPYmouZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IGhTY3JvbGxTaXplID0gc2Nyb2xsRWwuc2Nyb2xsV2lkdGggLSAyICogaEJhck9iai5mb3JjZVNpemU7XG4gICAgY29uc3QgaFRyYWNrU2l6ZSA9IG1hc2tFbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoRnJhY3QgPSBoVHJhY2tTaXplIC8gaFNjcm9sbFNpemU7XG4gICAgaEJhck9iai50cmFja1NpemUgPSBoVHJhY2tTaXplO1xuICAgIGhCYXJPYmouc2l6ZUZyYWN0ID0gaEZyYWN0O1xuICAgIGhCYXJPYmouc2Nyb2xsUmFuZ2UgPSBoU2Nyb2xsU2l6ZSAtIGhUcmFja1NpemU7XG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGhCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKGhCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgaEJhck9iai5lbC5zdHlsZS53aWR0aCA9IGAke2hGcmFjdCAqIGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aH1weGA7XG4gICAgICBoQmFyT2JqLm1vdmVSYW5nZSA9IGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aCAtIGhCYXJPYmouZWwub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IGJhciwgcHJvZ3Jlc3MsIGV2ZW50LCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBmcmFjdCA9IHtcbiAgICAgIHY6IDAsXG4gICAgICBoOiAwLFxuICAgIH07XG5cbiAgICBpZiAoYmFyLnYuZWwpIGZyYWN0LnYgPSB0aGlzLnNldEJhclBvcyhiYXIudik7XG4gICAgaWYgKGJhci5oLmVsKSBmcmFjdC5oID0gdGhpcy5zZXRCYXJQb3MoYmFyLmgpO1xuXG4gICAgZXZlbnQub25TY3JvbGwoZnJhY3QsIHJvb3RFbCk7XG5cbiAgICBpZiAoZnJhY3QudiAhPT0gcHJvZ3Jlc3Mudikge1xuICAgICAgaWYgKGZyYWN0LnYgPD0gMCkgZXZlbnQub25Ub3Aocm9vdEVsKTtcbiAgICAgIGlmIChmcmFjdC52ID49IDEpIGV2ZW50Lm9uQm90dG9tKHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy52ID0gZnJhY3QudjtcbiAgICB9XG5cbiAgICBpZiAoZnJhY3QuaCAhPT0gcHJvZ3Jlc3MuaCkge1xuICAgICAgaWYgKGZyYWN0LmggPD0gMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoZnJhY3QuaCA+PSAxKSBldmVudC5vblJpZ2h0KHJvb3RFbCk7XG4gICAgICBwcm9ncmVzcy5oID0gZnJhY3QuaDtcbiAgICB9XG4gIH1cblxuICBzZXRCYXJQb3MoYmFyT2JqKSB7XG4gICAgY29uc3QgZnJhY3QgPSBiYXJPYmouc2Nyb2xsUmFuZ2UgPyAoXG4gICAgICB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXSAvIGJhck9iai5zY3JvbGxSYW5nZVxuICAgICkgOiAwO1xuICAgIGNvbnN0IHBvcyA9IGZyYWN0ICogKGJhck9iai50cmFja1NpemUgKiAoMSAtIGJhck9iai5zaXplRnJhY3QpKTtcbiAgICBiYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSR7YmFyT2JqLmF4aXN9KCR7cG9zfXB4KWA7XG5cbiAgICByZXR1cm4gZnJhY3Q7XG4gIH1cblxuICBiYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKSB7XG4gICAgdGhpcy5zY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF0gPSAoXG4gICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlICsgKFxuICAgICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsUmFuZ2UgKiBhY3RpdmVCYXJPYmoubW92ZURpZmYgLyBhY3RpdmVCYXJPYmoubW92ZVJhbmdlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hQYXJlbnRzKCkge1xuICAgIGlmICghd2luZG93LkN1c3RvbUV2ZW50KSByZXR1cm47XG4gICAgdGhpcy5yb290RWwucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnUG90YXRvU2Nyb2xsLm5lc3RlZENyZWF0ZScsIHtcbiAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBSZWNhbGN1bGF0ZXMgY29udGVudCBzaXplIGFuZCBzZXQgc2Nyb2xsYmFycyBzaXplXG4gICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldEJhcnNTaXplKCk7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG4gIH1cblxuICAvKipcbiAgICAqIERlc3Ryb3lzIHRoZSBpbnN0YW5jZSBhbmQgcmVzdG9yZSBvcmlnaW5hbCBodG1sXG4gICAgKi9cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwsIHJvb3RFbCwgYmFyLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHRoaXMudW5iaW5kRG9jRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcblxuICAgIGlmIChiYXIudi50cmFja0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQoYmFyLnYudHJhY2tFbCk7XG4gICAgICBiYXIudi5lbCA9IG51bGw7XG4gICAgICBiYXIudi50cmFja0VsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGJhci5oLnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIuaC50cmFja0VsKTtcbiAgICAgIGJhci5oLmVsID0gbnVsbDtcbiAgICAgIGJhci5oLnRyYWNrRWwgPSBudWxsO1xuICAgIH1cblxuICAgIHJvb3RFbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICBjb25zdCByb290U3R5bGUgPSByb290RWwuc3R5bGU7XG4gICAgcm9vdFN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgcm9vdFN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgcm9vdFN0eWxlLmRpc3BsYXkgPSAnJztcblxuICAgIGlmIChzY3JvbGxFbCkge1xuICAgICAgd2hpbGUgKHNjcm9sbEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHJvb3RFbC5hcHBlbmRDaGlsZChzY3JvbGxFbC5jaGlsZE5vZGVzWzBdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1hc2tFbCkge1xuICAgICAgICBtYXNrRWwucmVtb3ZlQ2hpbGQoc2Nyb2xsRWwpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbEVsID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAobWFza0VsKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQobWFza0VsKTtcblxuICAgICAgdGhpcy5tYXNrRWwgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==