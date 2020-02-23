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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

__webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");

var _scroll = __webpack_require__(/*! ./scroll.js */ "./src/js/scroll.js");

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _scroll2.default;

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
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
          cssClass = _options$cssClass === undefined ? 'potatoScroll' : _options$cssClass;


      if (!el) return false;

      this.rootEl = el;

      this.cssClass = cssClass;

      this.scrollWait = false;
      this.resizeWait = false;

      this.bar = {
        v: {
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

      this.bar.v.nativeSize = testScrollEl.offsetWidth - testScrollEl.scrollWidth;
      this.bar.h.nativeSize = testScrollEl.offsetHeight - testScrollEl.scrollHeight;

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


      scrollEl.style.marginRight = -bar.h.nativeSize + 'px';
      scrollEl.style.marginBottom = -bar.v.nativeSize + 'px';
    }
  }, {
    key: 'addCustomBars',
    value: function addCustomBars() {
      var cssClass = this.cssClass,
          bar = this.bar,
          rootEl = this.rootEl;


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

      this.bar.v.el.addEventListener('mousedown', this.onVBarMouseDown);
      this.bar.h.el.addEventListener('mousedown', this.onHBarMouseDown);
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
      var activeBarObj = this.activeBarObj;

      if (activeBarObj === null) return;

      this.scrollEl.style.userSelect = 'none';
      this.scrollEl.style.pointerEvents = 'none';

      this.bindDocEvents();

      activeBarObj.moveStart = e[activeBarObj.moveProp];
      activeBarObj.scrollBefore = this.scrollEl[activeBarObj.scrollProp];
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
      var activeBarObj = this.activeBarObj;

      if (activeBarObj === null) return;

      this.unbindDocEvents();

      activeBarObj.moveStart = null;
      activeBarObj.moveDiff = 0;
      activeBarObj.scrollBefore = null;

      this.activeBarObj = null;

      this.scrollEl.style.userSelect = '';
      this.scrollEl.style.pointerEvents = '';
    }
  }, {
    key: 'setBarsSize',
    value: function setBarsSize() {
      var scrollEl = this.scrollEl;


      var vBarObj = this.bar.v;
      var hBarObj = this.bar.h;

      var vTrackSize = scrollEl.offsetHeight - vBarObj.nativeSize;
      var vFract = vTrackSize / scrollEl.scrollHeight;
      vBarObj.trackSize = vTrackSize;
      vBarObj.sizeFract = vFract;
      vBarObj.el.style.height = vFract * vBarObj.trackEl.offsetHeight + 'px';
      vBarObj.scrollRange = scrollEl.scrollHeight - vTrackSize;
      vBarObj.moveRange = vBarObj.trackEl.offsetHeight - vBarObj.el.offsetHeight;
      vBarObj.trackEl.style.display = vBarObj.sizeFract === 1 ? 'none' : '';

      var hTrackSize = scrollEl.offsetWidth - vBarObj.nativeSize;
      var hFract = hTrackSize / scrollEl.scrollWidth;
      hBarObj.trackSize = hTrackSize;
      hBarObj.sizeFract = hFract;
      hBarObj.el.style.width = hFract * hBarObj.trackEl.offsetWidth + 'px';
      hBarObj.scrollRange = scrollEl.scrollWidth - hTrackSize;
      hBarObj.moveRange = hBarObj.trackEl.offsetWidth - hBarObj.el.offsetWidth;
      hBarObj.trackEl.style.display = hBarObj.sizeFract === 1 ? 'none' : '';
    }
  }, {
    key: 'setBarsPos',
    value: function setBarsPos() {
      var scrollEl = this.scrollEl;


      var vBarObj = this.bar.v;
      var hBarObj = this.bar.h;

      var vPos = scrollEl.scrollTop / vBarObj.scrollRange * (vBarObj.trackSize * (1 - vBarObj.sizeFract));
      vBarObj.el.style.transform = 'translateY(' + vPos + 'px)';

      var hPos = scrollEl.scrollLeft / hBarObj.scrollRange * (hBarObj.trackSize * (1 - hBarObj.sizeFract));
      hBarObj.el.style.transform = 'translateX(' + hPos + 'px)';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL3Njc3MvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJQb3RhdG9TY3JvbGwiLCJvcHRpb25zIiwic2VsZWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsIm1hcCIsImNhbGwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJPYmplY3QiLCJhc3NpZ24iLCJlbCIsInNldFZhcnMiLCJhbmFseXplTmF0aXZlIiwicHJlcGFyZURPTSIsImhpZGVOYXRpdmVCYXJzIiwiYWRkQ3VzdG9tQmFycyIsImJpbmRFdmVudHMiLCJiaW5kQmFyc0V2ZW50cyIsInJlZnJlc2giLCJjc3NDbGFzcyIsInJvb3RFbCIsInNjcm9sbFdhaXQiLCJyZXNpemVXYWl0IiwiYmFyIiwidiIsIm5hdGl2ZVNpemUiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJoIiwiYWN0aXZlQmFyT2JqIiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5IiwidGVzdENvbnRlbnRFbCIsImFwcGVuZENoaWxkIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsIm9mZnNldEhlaWdodCIsInNjcm9sbEhlaWdodCIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGxheSIsIm1hc2tFbCIsImZsZXhHcm93IiwiekluZGV4Iiwic2Nyb2xsRWwiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2VHJhY2tFbCIsInRyYWNrRWwiLCJ2QmFyRWwiLCJoVHJhY2tFbCIsImhCYXJFbCIsIm9uU2Nyb2xsIiwiYmluZCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJvblJlc2l6ZSIsIm9uUmVzaXplVGhyb3R0bGUiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0QmFyc1BvcyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJtb3ZlQmVnaW4iLCJtb3ZlVXBkYXRlIiwibW92ZUVuZCIsInVzZXJTZWxlY3QiLCJwb2ludGVyRXZlbnRzIiwiYmluZERvY0V2ZW50cyIsImJhck1vdmVUb1Njcm9sbCIsInVuYmluZERvY0V2ZW50cyIsInZCYXJPYmoiLCJoQmFyT2JqIiwidlRyYWNrU2l6ZSIsInZGcmFjdCIsInRyYWNrU2l6ZSIsInNjcm9sbFJhbmdlIiwibW92ZVJhbmdlIiwiaFRyYWNrU2l6ZSIsImhGcmFjdCIsInZQb3MiLCJzY3JvbGxUb3AiLCJ0cmFuc2Zvcm0iLCJoUG9zIiwic2Nyb2xsTGVmdCIsInNldEJhcnNTaXplIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztR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QUtEOztBQUVEOzs7Ozs7OEJBR1U7QUFDUixXQUFLUSxXQUFMO0FBQ0EsV0FBSzlCLFVBQUw7QUFDRDs7Ozs7O2tCQWpXa0JoRixZOzs7Ozs7Ozs7OztBQ0FyQix1QyIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9TY3JvbGwgZnJvbSAnLi9zY3JvbGwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBQb3RhdG9TY3JvbGw7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3RhdG9TY3JvbGwge1xuXG4gIHN0YXRpYyBjcmVhdGUob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0b3IsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciksXG4gICAgICBlbCA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUG90YXRvU2Nyb2xsKE9iamVjdC5hc3NpZ24ob3B0aW9ucywge1xuICAgICAgICAgIGVsLFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuc2V0VmFycyhvcHRpb25zKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5hbmFseXplTmF0aXZlKCk7XG4gICAgdGhpcy5wcmVwYXJlRE9NKCk7XG4gICAgdGhpcy5oaWRlTmF0aXZlQmFycygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQmFycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHRoaXMuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIHNldFZhcnMob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgZWwsXG4gICAgICBjc3NDbGFzcyA9ICdwb3RhdG9TY3JvbGwnLFxuICAgIH0gPSBvcHRpb25zO1xuXG4gICAgaWYgKCFlbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5yb290RWwgPSBlbDtcblxuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcblxuICAgIHRoaXMuc2Nyb2xsV2FpdCA9IGZhbHNlO1xuICAgIHRoaXMucmVzaXplV2FpdCA9IGZhbHNlO1xuXG4gICAgdGhpcy5iYXIgPSB7XG4gICAgICB2OiB7XG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgbW92ZVByb3A6ICdjbGllbnRZJyxcbiAgICAgICAgc2Nyb2xsUHJvcDogJ3Njcm9sbFRvcCcsXG4gICAgICB9LFxuICAgICAgaDoge1xuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WCcsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxMZWZ0JyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYW5hbHl6ZU5hdGl2ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgY29uc3QgdGVzdFNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS50b3AgPSAwO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5sZWZ0ID0gMDtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RTY3JvbGxFbC5hcHBlbmRDaGlsZCh0ZXN0Q29udGVudEVsKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIHRoaXMuYmFyLnYubmF0aXZlU2l6ZSA9IHRlc3RTY3JvbGxFbC5vZmZzZXRXaWR0aCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxXaWR0aDtcbiAgICB0aGlzLmJhci5oLm5hdGl2ZVNpemUgPSB0ZXN0U2Nyb2xsRWwub2Zmc2V0SGVpZ2h0IC0gdGVzdFNjcm9sbEVsLnNjcm9sbEhlaWdodDtcblxuICAgIC8vIGRldGVjdCBwb3NpdGlvbiAtIFJUTFxuXG4gICAgYm9keS5yZW1vdmVDaGlsZCh0ZXN0U2Nyb2xsRWwpO1xuICB9XG5cbiAgcHJlcGFyZURPTSgpIHtcbiAgICBjb25zdCB7IHJvb3RFbCwgY3NzQ2xhc3MgfSA9IHRoaXM7XG5cbiAgICAvLyByb290RWxcbiAgICByb290RWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgcm9vdEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgIHJvb3RFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgcm9vdEVsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvLyBtYXNrRWxcbiAgICBjb25zdCBtYXNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXNrRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX21hc2tgKTtcbiAgICBtYXNrRWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIG1hc2tFbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1hc2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgbWFza0VsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWFza0VsLnN0eWxlLnpJbmRleCA9ICcwJztcblxuICAgIC8vIHNjcm9sbEVsXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fc2Nyb2xsYCk7XG4gICAgc2Nyb2xsRWwuc3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIHNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICB3aGlsZSAocm9vdEVsLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzY3JvbGxFbC5hcHBlbmRDaGlsZChyb290RWwuY2hpbGROb2Rlc1swXSk7XG4gICAgfVxuXG4gICAgbWFza0VsLmFwcGVuZENoaWxkKHNjcm9sbEVsKTtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQobWFza0VsKTtcblxuICAgIHRoaXMubWFza0VsID0gbWFza0VsO1xuICAgIHRoaXMuc2Nyb2xsRWwgPSBzY3JvbGxFbDtcbiAgfVxuXG4gIGhpZGVOYXRpdmVCYXJzKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIGJhciB9ID0gdGhpcztcblxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyLCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2VHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0tdmApO1xuICAgIHZUcmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB2VHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyLnYudHJhY2tFbCA9IHZUcmFja0VsO1xuXG4gICAgY29uc3QgdkJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdkJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICB2QmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0tdmApO1xuICAgIGJhci52LmVsID0gdkJhckVsO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLWhgKTtcbiAgICBoVHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaFRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhci5oLnRyYWNrRWwgPSBoVHJhY2tFbDtcblxuICAgIGNvbnN0IGhCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgaEJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLWhgKTtcbiAgICBiYXIuaC5lbCA9IGhCYXJFbDtcblxuICAgIHZUcmFja0VsLmFwcGVuZENoaWxkKHZCYXJFbCk7XG4gICAgaFRyYWNrRWwuYXBwZW5kQ2hpbGQoaEJhckVsKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZCh2VHJhY2tFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGhUcmFja0VsKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemVUaHJvdHRsZSA9IHRoaXMub25SZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuICB9XG5cbiAgb25TY3JvbGxUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxXYWl0KSByZXR1cm47XG4gICAgdGhpcy5zY3JvbGxXYWl0ID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG5cbiAgICB0aGlzLnNjcm9sbFdhaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uUmVzaXplVGhyb3R0bGUoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplV2FpdCkgcmV0dXJuO1xuICAgIHRoaXMucmVzaXplV2FpdCA9IHRydWU7XG5cbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgdGhpcy5yZXNpemVXYWl0ID0gZmFsc2U7XG4gIH1cblxuICBiaW5kQmFyc0V2ZW50cygpIHtcbiAgICB0aGlzLm9uRG9jTW91c2VNb3ZlID0gdGhpcy5vbkRvY01vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZVVwID0gdGhpcy5vbkRvY01vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VMZWF2ZSA9IHRoaXMub25Eb2NNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVkJhck1vdXNlRG93biA9IHRoaXMub25WQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhCYXJNb3VzZURvd24gPSB0aGlzLm9uSEJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5iYXIudi5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVkJhck1vdXNlRG93bik7XG4gICAgdGhpcy5iYXIuaC5lbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uSEJhck1vdXNlRG93bik7XG4gIH1cblxuICBiaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZERvY0V2ZW50cygpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uRG9jTW91c2VNb3ZlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbkRvY01vdXNlVXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uRG9jTW91c2VMZWF2ZSk7XG4gIH1cblxuICBvblZCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIudjtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25IQmFyTW91c2VEb3duKGUpIHtcbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IHRoaXMuYmFyLmg7XG5cbiAgICB0aGlzLm1vdmVCZWdpbihlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VNb3ZlKGUpIHtcbiAgICB0aGlzLm1vdmVVcGRhdGUoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlVXAoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgbW92ZUJlZ2luKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLnNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgdGhpcy5zY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuXG4gICAgdGhpcy5iaW5kRG9jRXZlbnRzKCk7XG5cbiAgICBhY3RpdmVCYXJPYmoubW92ZVN0YXJ0ID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdO1xuICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgPSB0aGlzLnNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXTtcbiAgfVxuXG4gIG1vdmVVcGRhdGUoZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLnVuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IG51bGw7XG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gMDtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gbnVsbDtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHRoaXMuc2Nyb2xsRWwuc3R5bGUudXNlclNlbGVjdCA9ICcnO1xuICAgIHRoaXMuc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCB9ID0gdGhpcztcblxuICAgIGNvbnN0IHZCYXJPYmogPSB0aGlzLmJhci52O1xuICAgIGNvbnN0IGhCYXJPYmogPSB0aGlzLmJhci5oO1xuXG4gICAgY29uc3QgdlRyYWNrU2l6ZSA9IHNjcm9sbEVsLm9mZnNldEhlaWdodCAtIHZCYXJPYmoubmF0aXZlU2l6ZTtcbiAgICBjb25zdCB2RnJhY3QgPSB2VHJhY2tTaXplIC8gc2Nyb2xsRWwuc2Nyb2xsSGVpZ2h0O1xuICAgIHZCYXJPYmoudHJhY2tTaXplID0gdlRyYWNrU2l6ZTtcbiAgICB2QmFyT2JqLnNpemVGcmFjdCA9IHZGcmFjdDtcbiAgICB2QmFyT2JqLmVsLnN0eWxlLmhlaWdodCA9IGAke3ZGcmFjdCAqIHZCYXJPYmoudHJhY2tFbC5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHZCYXJPYmouc2Nyb2xsUmFuZ2UgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB2VHJhY2tTaXplO1xuICAgIHZCYXJPYmoubW92ZVJhbmdlID0gdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodCAtIHZCYXJPYmouZWwub2Zmc2V0SGVpZ2h0O1xuICAgIHZCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKHZCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuXG4gICAgY29uc3QgaFRyYWNrU2l6ZSA9IHNjcm9sbEVsLm9mZnNldFdpZHRoIC0gdkJhck9iai5uYXRpdmVTaXplO1xuICAgIGNvbnN0IGhGcmFjdCA9IGhUcmFja1NpemUgLyBzY3JvbGxFbC5zY3JvbGxXaWR0aDtcbiAgICBoQmFyT2JqLnRyYWNrU2l6ZSA9IGhUcmFja1NpemU7XG4gICAgaEJhck9iai5zaXplRnJhY3QgPSBoRnJhY3Q7XG4gICAgaEJhck9iai5lbC5zdHlsZS53aWR0aCA9IGAke2hGcmFjdCAqIGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aH1weGA7XG4gICAgaEJhck9iai5zY3JvbGxSYW5nZSA9IHNjcm9sbEVsLnNjcm9sbFdpZHRoIC0gaFRyYWNrU2l6ZTtcbiAgICBoQmFyT2JqLm1vdmVSYW5nZSA9IGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aCAtIGhCYXJPYmouZWwub2Zmc2V0V2lkdGg7XG4gICAgaEJhck9iai50cmFja0VsLnN0eWxlLmRpc3BsYXkgPSAoaEJhck9iai5zaXplRnJhY3QgPT09IDEpID8gJ25vbmUnIDogJyc7XG4gIH1cblxuICBzZXRCYXJzUG9zKCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2QmFyT2JqID0gdGhpcy5iYXIudjtcbiAgICBjb25zdCBoQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIGNvbnN0IHZQb3MgPSAoc2Nyb2xsRWwuc2Nyb2xsVG9wIC8gdkJhck9iai5zY3JvbGxSYW5nZSkgKiAoXG4gICAgICB2QmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gdkJhck9iai5zaXplRnJhY3QpXG4gICAgKTtcbiAgICB2QmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dlBvc31weClgO1xuXG4gICAgY29uc3QgaFBvcyA9IChzY3JvbGxFbC5zY3JvbGxMZWZ0IC8gaEJhck9iai5zY3JvbGxSYW5nZSkgKiAoXG4gICAgICBoQmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gaEJhck9iai5zaXplRnJhY3QpXG4gICAgKTtcbiAgICBoQmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7aFBvc31weClgO1xuICB9XG5cbiAgYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaikge1xuICAgIHRoaXMuc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdID0gKFxuICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSArIChcbiAgICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbFJhbmdlICogYWN0aXZlQmFyT2JqLm1vdmVEaWZmIC8gYWN0aXZlQmFyT2JqLm1vdmVSYW5nZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICAqIG1hbnVhbHkgcmVmcmVzaCBiYXJzXG4gICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldEJhcnNTaXplKCk7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=