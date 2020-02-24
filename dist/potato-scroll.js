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
        return new PotatoScroll(Object.assign(options, {
          el: el
        }));
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
  }

  _createClass(PotatoScroll, [{
    key: 'setVars',
    value: function setVars() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var el = options.el,
          _options$cssClass = options.cssClass,
          cssClass = _options$cssClass === undefined ? 'potatoScroll' : _options$cssClass,
          _options$forceCustom = options.forceCustom,
          forceCustom = _options$forceCustom === undefined ? false : _options$forceCustom,
          _options$forceSize = options.forceSize,
          forceSize = _options$forceSize === undefined ? 20 : _options$forceSize;


      if (!el) return false;

      this.rootEl = el;
      this.cssClass = cssClass;
      this.forceCustom = forceCustom;

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

      this.scrollEl.addEventListener('scroll', this.onScrollThrottle);
      window.addEventListener('resize', this.onResizeThrottle);
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
          bar = this.bar;


      var vBarObj = bar.v;
      var hBarObj = bar.h;

      if (vBarObj.el) {
        var vPos = scrollEl.scrollTop / vBarObj.scrollRange * (vBarObj.trackSize * (1 - vBarObj.sizeFract));
        vBarObj.el.style.transform = 'translateY(' + vPos + 'px)';
      }

      if (hBarObj.el) {
        var hPos = scrollEl.scrollLeft / hBarObj.scrollRange * (hBarObj.trackSize * (1 - hBarObj.sizeFract));
        hBarObj.el.style.transform = 'translateX(' + hPos + 'px)';
      }
    }
  }, {
    key: 'barMoveToScroll',
    value: function barMoveToScroll(activeBarObj) {
      this.scrollEl[activeBarObj.scrollProp] = activeBarObj.scrollBefore + activeBarObj.scrollRange * activeBarObj.moveDiff / activeBarObj.moveRange;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiT2JqZWN0IiwiYXNzaWduIiwiZWwiLCJzZXRWYXJzIiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJyZWZyZXNoIiwiY3NzQ2xhc3MiLCJmb3JjZUN1c3RvbSIsImZvcmNlU2l6ZSIsInJvb3RFbCIsInNjcm9sbFdhaXQiLCJyZXNpemVXYWl0IiwiYmFyIiwidiIsIm5hdGl2ZVNpemUiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJoIiwiYWN0aXZlQmFyT2JqIiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5IiwidGVzdENvbnRlbnRFbCIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJyZW1vdmVDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsImRpc3BsYXkiLCJtYXNrRWwiLCJmbGV4R3JvdyIsInpJbmRleCIsInNjcm9sbEVsIiwiY2hpbGROb2RlcyIsImxlbmd0aCIsInZGb3JjZVNpemUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZ0xlZnQiLCJtYXJnaW5SaWdodCIsInBhZGRpbmdSaWdodCIsImhGb3JjZVNpemUiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nQm90dG9tIiwidlRyYWNrRWwiLCJ0cmFja0VsIiwidkJhckVsIiwiaFRyYWNrRWwiLCJoQmFyRWwiLCJvblNjcm9sbCIsImJpbmQiLCJvblNjcm9sbFRocm90dGxlIiwib25SZXNpemUiLCJvblJlc2l6ZVRocm90dGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsInJhZiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInNldEJhcnNQb3MiLCJvbkRvY01vdXNlTW92ZSIsIm9uRG9jTW91c2VVcCIsIm9uRG9jTW91c2VMZWF2ZSIsIm9uVkJhck1vdXNlRG93biIsIm9uSEJhck1vdXNlRG93biIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlIiwibW92ZUJlZ2luIiwibW92ZVVwZGF0ZSIsIm1vdmVFbmQiLCJ1c2VyU2VsZWN0IiwicG9pbnRlckV2ZW50cyIsImJpbmREb2NFdmVudHMiLCJiYXJNb3ZlVG9TY3JvbGwiLCJ1bmJpbmREb2NFdmVudHMiLCJ2QmFyT2JqIiwiaEJhck9iaiIsInZTY3JvbGxTaXplIiwidlRyYWNrU2l6ZSIsInZGcmFjdCIsInRyYWNrU2l6ZSIsInNjcm9sbFJhbmdlIiwibW92ZVJhbmdlIiwiaFNjcm9sbFNpemUiLCJoVHJhY2tTaXplIiwiaEZyYWN0IiwidlBvcyIsInNjcm9sbFRvcCIsInRyYW5zZm9ybSIsImhQb3MiLCJzY3JvbGxMZWZ0Iiwic2V0QmFyc1NpemUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUE3RDtBQUNEO0FBQ0Y7OztpQ0FFWTtBQUFBLFVBQ0hZLFFBREcsR0FDZSxJQURmLENBQ0hBLFFBREc7QUFBQSxVQUNPdkMsR0FEUCxHQUNlLElBRGYsQ0FDT0EsR0FEUDs7O0FBR1gsVUFBTWdGLFVBQVVoRixJQUFJQyxDQUFwQjtBQUNBLFVBQU1nRixVQUFVakYsSUFBSVUsQ0FBcEI7O0FBRUEsVUFBSXNFLFFBQVEvRixFQUFaLEVBQWdCO0FBQ2QsWUFBTTBHLE9BQVFwRCxTQUFTcUQsU0FBVCxHQUFxQlosUUFBUU0sV0FBOUIsSUFDWE4sUUFBUUssU0FBUixJQUFxQixJQUFJTCxRQUFRekUsU0FBakMsQ0FEVyxDQUFiO0FBR0F5RSxnQkFBUS9GLEVBQVIsQ0FBVytCLEtBQVgsQ0FBaUI2RSxTQUFqQixtQkFBMkNGLElBQTNDO0FBQ0Q7O0FBRUQsVUFBSVYsUUFBUWhHLEVBQVosRUFBZ0I7QUFDZCxZQUFNNkcsT0FBUXZELFNBQVN3RCxVQUFULEdBQXNCZCxRQUFRSyxXQUEvQixJQUNYTCxRQUFRSSxTQUFSLElBQXFCLElBQUlKLFFBQVExRSxTQUFqQyxDQURXLENBQWI7QUFHQTBFLGdCQUFRaEcsRUFBUixDQUFXK0IsS0FBWCxDQUFpQjZFLFNBQWpCLG1CQUEyQ0MsSUFBM0M7QUFDRDtBQUNGOzs7b0NBRWVuRixZLEVBQWM7QUFDNUIsV0FBSzRCLFFBQUwsQ0FBYzVCLGFBQWFGLFVBQTNCLElBQ0VFLGFBQWFOLFlBQWIsR0FDRU0sYUFBYTJFLFdBQWIsR0FBMkIzRSxhQUFhUCxRQUF4QyxHQUFtRE8sYUFBYTRFLFNBRnBFO0FBS0Q7O0FBRUQ7Ozs7Ozs4QkFHVTtBQUNSLFdBQUtTLFdBQUw7QUFDQSxXQUFLaEMsVUFBTDtBQUNEOzs7Ozs7a0JBellrQjFGLFk7Ozs7Ozs7Ozs7O0FDQXJCLHVDIiwiZmlsZSI6InBvdGF0by1zY3JvbGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idWlsZC5qc1wiKTtcbiIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuaW1wb3J0IFBvdGF0b1Njcm9sbCBmcm9tICcuL2luZGV4LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgUG90YXRvU2Nyb2xsO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG90YXRvU2Nyb2xsIHtcblxuICBzdGF0aWMgY3JlYXRlKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdG9yLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgZWwgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFBvdGF0b1Njcm9sbChPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtcbiAgICAgICAgICBlbCxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLnNldFZhcnMob3B0aW9ucykpIHJldHVybjtcblxuICAgIHRoaXMuYW5hbHl6ZU5hdGl2ZSgpO1xuICAgIHRoaXMucHJlcGFyZURPTSgpO1xuICAgIHRoaXMuaGlkZU5hdGl2ZUJhcnMoKTtcbiAgICB0aGlzLmFkZEN1c3RvbUJhcnMoKTtcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB0aGlzLmJpbmRCYXJzRXZlbnRzKCk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBzZXRWYXJzKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgY3NzQ2xhc3MgPSAncG90YXRvU2Nyb2xsJyxcbiAgICAgIGZvcmNlQ3VzdG9tID0gZmFsc2UsXG4gICAgICBmb3JjZVNpemUgPSAyMCxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsID0gZWw7XG4gICAgdGhpcy5jc3NDbGFzcyA9IGNzc0NsYXNzO1xuICAgIHRoaXMuZm9yY2VDdXN0b20gPSBmb3JjZUN1c3RvbTtcblxuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IGZhbHNlO1xuICAgIHRoaXMucmVzaXplV2FpdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5iYXIgPSB7XG4gICAgICB2OiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WScsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxUb3AnLFxuICAgICAgfSxcbiAgICAgIGg6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRYJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbExlZnQnLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSBudWxsO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBhbmFseXplTmF0aXZlKCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXN0U2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUud2lkdGggPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLnRvcCA9IDA7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLmxlZnQgPSAwO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICBjb25zdCB0ZXN0Q29udGVudEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdFNjcm9sbEVsLmFwcGVuZENoaWxkKHRlc3RDb250ZW50RWwpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuXG4gICAgY29uc3Qgdk5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0V2lkdGggLSB0ZXN0U2Nyb2xsRWwuc2Nyb2xsV2lkdGg7XG4gICAgY29uc3QgaE5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIHRoaXMuYmFyLnYubmF0aXZlU2l6ZSA9IHZOYXRpdmVTaXplO1xuICAgIHRoaXMuYmFyLmgubmF0aXZlU2l6ZSA9IGhOYXRpdmVTaXplO1xuXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkgdGhpcy5iYXIudi5mb3JjZVNpemUgPSAwO1xuICAgIGlmIChoTmF0aXZlU2l6ZSA+IDApIHRoaXMuYmFyLmguZm9yY2VTaXplID0gMDtcblxuICAgIC8vIGRldGVjdCBwb3NpdGlvbiAtIFJUTFxuXG4gICAgYm9keS5yZW1vdmVDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuICB9XG5cbiAgcHJlcGFyZURPTSgpIHtcbiAgICBjb25zdCB7IHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICAvLyByb290RWxcbiAgICByb290RWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgcm9vdEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIHJvb3RFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgcm9vdEVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvLyBtYXNrRWxcbiAgICBjb25zdCBtYXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX21hc2tgKTtcbiAgICBtYXNrRWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tFbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza0VsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza0VsLnN0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgc2Nyb2xsRWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIHNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICB3aGlsZSAocm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzY3JvbGxFbC5hcHBlbmRDaGlsZChyb290RWwuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuXG4gICAgbWFza0VsLmFwcGVuZENoaWxkKHNjcm9sbEVsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQobWFza0VsKTtcblxuICAgIHRoaXMubWFza0VsID0gbWFza0VsO1xuICAgIHRoaXMuc2Nyb2xsRWwgPSBzY3JvbGxFbDtcbiAgfVxuXG4gIGhpZGVOYXRpdmVCYXJzKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIGJhciB9ID0gdGhpcztcblxuICAgIGlmICh0aGlzLmZvcmNlQ3VzdG9tICYmIChiYXIudi5uYXRpdmVTaXplID09PSAwIHx8IGJhci5oLm5hdGl2ZVNpemUgPT09IDApKSB7XG4gICAgICBjb25zdCB2Rm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luTGVmdCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdMZWZ0ID0gYCR7dkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey12Rm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuXG4gICAgICBjb25zdCBoRm9yY2VTaXplID0gYmFyLnYuZm9yY2VTaXplO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWhGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUucGFkZGluZ0JvdHRvbSA9IGAke2hGb3JjZVNpemV9cHhgO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstYmFyLmgubmF0aXZlU2l6ZX1weGA7XG4gICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWJhci52Lm5hdGl2ZVNpemV9cHhgO1xuICB9XG5cbiAgYWRkQ3VzdG9tQmFycygpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIsIHJvb3RFbCB9ID0gdGhpcztcblxuICAgIGlmICghKFxuICAgICAgYmFyLnYubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgYmFyLmgubmF0aXZlU2l6ZSAhPT0gMCB8fFxuICAgICAgdGhpcy5mb3JjZUN1c3RvbVxuICAgICkpIHJldHVybjtcblxuICAgIGNvbnN0IHZUcmFja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdlRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrYCk7XG4gICAgdlRyYWNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3RyYWNrLS12YCk7XG4gICAgdlRyYWNrRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHZUcmFja0VsLnN0eWxlLnpJbmRleCA9ICcxJztcbiAgICBiYXIudi50cmFja0VsID0gdlRyYWNrRWw7XG5cbiAgICBjb25zdCB2QmFyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2QmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2JhcmApO1xuICAgIHZCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyLS12YCk7XG4gICAgYmFyLnYuZWwgPSB2QmFyRWw7XG5cbiAgICBjb25zdCBoVHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIGhUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0taGApO1xuICAgIGhUcmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBoVHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyLmgudHJhY2tFbCA9IGhUcmFja0VsO1xuXG4gICAgY29uc3QgaEJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaEJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICBoQmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0taGApO1xuICAgIGJhci5oLmVsID0gaEJhckVsO1xuXG4gICAgdlRyYWNrRWwuYXBwZW5kQ2hpbGQodkJhckVsKTtcbiAgICBoVHJhY2tFbC5hcHBlbmRDaGlsZChoQmFyRWwpO1xuXG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKHZUcmFja0VsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoaFRyYWNrRWwpO1xuICB9XG5cbiAgYmluZEV2ZW50cygpIHtcbiAgICB0aGlzLm9uU2Nyb2xsID0gdGhpcy5vblNjcm9sbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TY3JvbGxUaHJvdHRsZSA9IHRoaXMub25TY3JvbGxUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJlc2l6ZVRocm90dGxlID0gdGhpcy5vblJlc2l6ZVRocm90dGxlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNjcm9sbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemVUaHJvdHRsZSk7XG4gIH1cblxuICBvblNjcm9sbFRocm90dGxlKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbFdhaXQpIHJldHVybjtcbiAgICB0aGlzLnNjcm9sbFdhaXQgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblNjcm9sbCk7XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcblxuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IGZhbHNlO1xuICB9XG5cbiAgb25SZXNpemVUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVXYWl0KSByZXR1cm47XG4gICAgdGhpcy5yZXNpemVXYWl0ID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25SZXNpemUpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB0aGlzLnJlc2l6ZVdhaXQgPSBmYWxzZTtcbiAgfVxuXG4gIGJpbmRCYXJzRXZlbnRzKCkge1xuICAgIHRoaXMub25Eb2NNb3VzZU1vdmUgPSB0aGlzLm9uRG9jTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkRvY01vdXNlVXAgPSB0aGlzLm9uRG9jTW91c2VVcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZUxlYXZlID0gdGhpcy5vbkRvY01vdXNlTGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25WQmFyTW91c2VEb3duID0gdGhpcy5vblZCYXJNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSEJhck1vdXNlRG93biA9IHRoaXMub25IQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG5cbiAgICBpZiAodGhpcy5iYXIudi5lbCkgdGhpcy5iYXIudi5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgaWYgKHRoaXMuYmFyLmguZWwpIHRoaXMuYmFyLmguZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vbkhCYXJNb3VzZURvd24pO1xuICB9XG5cbiAgYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICB1bmJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgb25WQmFyTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLnY7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uSEJhck1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci5oO1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkRvY01vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3ZlVXBkYXRlKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZVVwKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlTGVhdmUoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG1vdmVCZWdpbihlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIHRoaXMuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXTtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdO1xuICB9XG5cbiAgbW92ZVVwZGF0ZShlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmogfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdIC0gYWN0aXZlQmFyT2JqLm1vdmVTdGFydDtcblxuICAgIHRoaXMuYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaik7XG4gIH1cblxuICBtb3ZlRW5kKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLnVuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IG51bGw7XG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gMDtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gbnVsbDtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gIH1cblxuICBzZXRCYXJzU2l6ZSgpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHZCYXJPYmogPSBiYXIudjtcbiAgICBjb25zdCBoQmFyT2JqID0gYmFyLmg7XG5cbiAgICBjb25zdCB2U2Nyb2xsU2l6ZSA9IHNjcm9sbEVsLnNjcm9sbEhlaWdodCAtIHZCYXJPYmouZm9yY2VTaXplO1xuICAgIGNvbnN0IHZUcmFja1NpemUgPSBtYXNrRWwub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IHZGcmFjdCA9IHZUcmFja1NpemUgLyB2U2Nyb2xsU2l6ZTtcbiAgICB2QmFyT2JqLnRyYWNrU2l6ZSA9IHZUcmFja1NpemU7XG4gICAgdkJhck9iai5zaXplRnJhY3QgPSB2RnJhY3Q7XG4gICAgdkJhck9iai5zY3JvbGxSYW5nZSA9IHZTY3JvbGxTaXplIC0gdlRyYWNrU2l6ZTtcbiAgICBpZiAodkJhck9iai5lbCkge1xuICAgICAgdkJhck9iai50cmFja0VsLnN0eWxlLmRpc3BsYXkgPSAodkJhck9iai5zaXplRnJhY3QgPT09IDEpID8gJ25vbmUnIDogJyc7XG4gICAgICB2QmFyT2JqLmVsLnN0eWxlLmhlaWdodCA9IGAke3ZGcmFjdCAqIHZCYXJPYmoudHJhY2tFbC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgdkJhck9iai5tb3ZlUmFuZ2UgPSB2QmFyT2JqLnRyYWNrRWwub2Zmc2V0SGVpZ2h0IC0gdkJhck9iai5lbC5vZmZzZXRIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgaFNjcm9sbFNpemUgPSBzY3JvbGxFbC5zY3JvbGxXaWR0aCAtIDIgKiBoQmFyT2JqLmZvcmNlU2l6ZTtcbiAgICBjb25zdCBoVHJhY2tTaXplID0gbWFza0VsLm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGhGcmFjdCA9IGhUcmFja1NpemUgLyBoU2Nyb2xsU2l6ZTtcbiAgICBoQmFyT2JqLnRyYWNrU2l6ZSA9IGhUcmFja1NpemU7XG4gICAgaEJhck9iai5zaXplRnJhY3QgPSBoRnJhY3Q7XG4gICAgaEJhck9iai5zY3JvbGxSYW5nZSA9IGhTY3JvbGxTaXplIC0gaFRyYWNrU2l6ZTtcbiAgICBpZiAoaEJhck9iai5lbCkge1xuICAgICAgaEJhck9iai50cmFja0VsLnN0eWxlLmRpc3BsYXkgPSAoaEJhck9iai5zaXplRnJhY3QgPT09IDEpID8gJ25vbmUnIDogJyc7XG4gICAgICBoQmFyT2JqLmVsLnN0eWxlLndpZHRoID0gYCR7aEZyYWN0ICogaEJhck9iai50cmFja0VsLm9mZnNldFdpZHRofXB4YDtcbiAgICAgIGhCYXJPYmoubW92ZVJhbmdlID0gaEJhck9iai50cmFja0VsLm9mZnNldFdpZHRoIC0gaEJhck9iai5lbC5vZmZzZXRXaWR0aDtcbiAgICB9XG4gIH1cblxuICBzZXRCYXJzUG9zKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IHZCYXJPYmogPSBiYXIudjtcbiAgICBjb25zdCBoQmFyT2JqID0gYmFyLmg7XG5cbiAgICBpZiAodkJhck9iai5lbCkge1xuICAgICAgY29uc3QgdlBvcyA9IChzY3JvbGxFbC5zY3JvbGxUb3AgLyB2QmFyT2JqLnNjcm9sbFJhbmdlKSAqIChcbiAgICAgICAgdkJhck9iai50cmFja1NpemUgKiAoMSAtIHZCYXJPYmouc2l6ZUZyYWN0KVxuICAgICAgKTtcbiAgICAgIHZCYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt2UG9zfXB4KWA7XG4gICAgfVxuXG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGNvbnN0IGhQb3MgPSAoc2Nyb2xsRWwuc2Nyb2xsTGVmdCAvIGhCYXJPYmouc2Nyb2xsUmFuZ2UpICogKFxuICAgICAgICBoQmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gaEJhck9iai5zaXplRnJhY3QpXG4gICAgICApO1xuICAgICAgaEJhck9iai5lbC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2hQb3N9cHgpYDtcbiAgICB9XG4gIH1cblxuICBiYXJNb3ZlVG9TY3JvbGwoYWN0aXZlQmFyT2JqKSB7XG4gICAgdGhpcy5zY3JvbGxFbFthY3RpdmVCYXJPYmouc2Nyb2xsUHJvcF0gPSAoXG4gICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlICsgKFxuICAgICAgICBhY3RpdmVCYXJPYmouc2Nyb2xsUmFuZ2UgKiBhY3RpdmVCYXJPYmoubW92ZURpZmYgLyBhY3RpdmVCYXJPYmoubW92ZVJhbmdlXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgICogbWFudWFseSByZWZyZXNoIGJhcnNcbiAgICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0QmFyc1NpemUoKTtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==