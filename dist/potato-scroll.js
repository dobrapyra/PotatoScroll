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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbIlBvdGF0b1Njcm9sbCIsIm9wdGlvbnMiLCJzZWxlY3RvciIsIkFycmF5IiwicHJvdG90eXBlIiwibWFwIiwiY2FsbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIk9iamVjdCIsImFzc2lnbiIsImVsIiwic2V0VmFycyIsImFuYWx5emVOYXRpdmUiLCJwcmVwYXJlRE9NIiwiaGlkZU5hdGl2ZUJhcnMiLCJhZGRDdXN0b21CYXJzIiwiYmluZEV2ZW50cyIsImJpbmRCYXJzRXZlbnRzIiwicmVmcmVzaCIsImNzc0NsYXNzIiwiZm9yY2VDdXN0b20iLCJmb3JjZVNpemUiLCJyb290RWwiLCJzY3JvbGxXYWl0IiwicmVzaXplV2FpdCIsImJhciIsInYiLCJuYXRpdmVTaXplIiwibW92ZVN0YXJ0IiwibW92ZURpZmYiLCJzY3JvbGxCZWZvcmUiLCJzaXplIiwic2l6ZUZyYWN0IiwibW92ZVByb3AiLCJzY3JvbGxQcm9wIiwiaCIsImFjdGl2ZUJhck9iaiIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZXN0U2Nyb2xsRWwiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsIndpZHRoIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidmlzaWJpbGl0eSIsInRlc3RDb250ZW50RWwiLCJhcHBlbmRDaGlsZCIsInZOYXRpdmVTaXplIiwib2Zmc2V0V2lkdGgiLCJzY3JvbGxXaWR0aCIsImhOYXRpdmVTaXplIiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwicmVtb3ZlQ2hpbGQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkaXNwbGF5IiwibWFza0VsIiwiZmxleEdyb3ciLCJ6SW5kZXgiLCJzY3JvbGxFbCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJ2Rm9yY2VTaXplIiwibWFyZ2luTGVmdCIsInBhZGRpbmdMZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nUmlnaHQiLCJoRm9yY2VTaXplIiwibWFyZ2luQm90dG9tIiwicGFkZGluZ0JvdHRvbSIsInZUcmFja0VsIiwidHJhY2tFbCIsInZCYXJFbCIsImhUcmFja0VsIiwiaEJhckVsIiwib25TY3JvbGwiLCJiaW5kIiwib25TY3JvbGxUaHJvdHRsZSIsIm9uUmVzaXplIiwib25SZXNpemVUaHJvdHRsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyYWYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRCYXJzUG9zIiwib25Eb2NNb3VzZU1vdmUiLCJvbkRvY01vdXNlVXAiLCJvbkRvY01vdXNlTGVhdmUiLCJvblZCYXJNb3VzZURvd24iLCJvbkhCYXJNb3VzZURvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsIm1vdmVCZWdpbiIsIm1vdmVVcGRhdGUiLCJtb3ZlRW5kIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwidkJhck9iaiIsImhCYXJPYmoiLCJ2U2Nyb2xsU2l6ZSIsInZUcmFja1NpemUiLCJ2RnJhY3QiLCJ0cmFja1NpemUiLCJzY3JvbGxSYW5nZSIsIm1vdmVSYW5nZSIsImhTY3JvbGxTaXplIiwiaFRyYWNrU2l6ZSIsImhGcmFjdCIsInZQb3MiLCJzY3JvbGxUb3AiLCJ0cmFuc2Zvcm0iLCJoUG9zIiwic2Nyb2xsTGVmdCIsInNldEJhcnNTaXplIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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QUFDRDtBQUNGOzs7aUNBRVk7QUFBQSxVQUNIWSxRQURHLEdBQ2UsSUFEZixDQUNIQSxRQURHO0FBQUEsVUFDT3ZDLEdBRFAsR0FDZSxJQURmLENBQ09BLEdBRFA7OztBQUdYLFVBQU1nRixVQUFVaEYsSUFBSUMsQ0FBcEI7QUFDQSxVQUFNZ0YsVUFBVWpGLElBQUlVLENBQXBCOztBQUVBLFVBQUlzRSxRQUFRL0YsRUFBWixFQUFnQjtBQUNkLFlBQU0wRyxPQUFRcEQsU0FBU3FELFNBQVQsR0FBcUJaLFFBQVFNLFdBQTlCLElBQ1hOLFFBQVFLLFNBQVIsSUFBcUIsSUFBSUwsUUFBUXpFLFNBQWpDLENBRFcsQ0FBYjtBQUdBeUUsZ0JBQVEvRixFQUFSLENBQVcrQixLQUFYLENBQWlCNkUsU0FBakIsbUJBQTJDRixJQUEzQztBQUNEOztBQUVELFVBQUlWLFFBQVFoRyxFQUFaLEVBQWdCO0FBQ2QsWUFBTTZHLE9BQVF2RCxTQUFTd0QsVUFBVCxHQUFzQmQsUUFBUUssV0FBL0IsSUFDWEwsUUFBUUksU0FBUixJQUFxQixJQUFJSixRQUFRMUUsU0FBakMsQ0FEVyxDQUFiO0FBR0EwRSxnQkFBUWhHLEVBQVIsQ0FBVytCLEtBQVgsQ0FBaUI2RSxTQUFqQixtQkFBMkNDLElBQTNDO0FBQ0Q7QUFDRjs7O29DQUVlbkYsWSxFQUFjO0FBQzVCLFdBQUs0QixRQUFMLENBQWM1QixhQUFhRixVQUEzQixJQUNFRSxhQUFhTixZQUFiLEdBQ0VNLGFBQWEyRSxXQUFiLEdBQTJCM0UsYUFBYVAsUUFBeEMsR0FBbURPLGFBQWE0RSxTQUZwRTtBQUtEOztBQUVEOzs7Ozs7OEJBR1U7QUFDUixXQUFLUyxXQUFMO0FBQ0EsV0FBS2hDLFVBQUw7QUFDRDs7Ozs7O2tCQXpZa0IxRixZOzs7Ozs7Ozs7OztBQ0FyQix1QyIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVpbGQuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9TY3JvbGwgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvdGF0b1Njcm9sbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGF0b1Njcm9sbCB7XG5cbiAgc3RhdGljIGNyZWF0ZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RvcixcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgIGVsID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3RhdG9TY3JvbGwoT2JqZWN0LmFzc2lnbihvcHRpb25zLCB7XG4gICAgICAgICAgZWwsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghdGhpcy5zZXRWYXJzKG9wdGlvbnMpKSByZXR1cm47XG5cbiAgICB0aGlzLmFuYWx5emVOYXRpdmUoKTtcbiAgICB0aGlzLnByZXBhcmVET00oKTtcbiAgICB0aGlzLmhpZGVOYXRpdmVCYXJzKCk7XG4gICAgdGhpcy5hZGRDdXN0b21CYXJzKCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgdGhpcy5iaW5kQmFyc0V2ZW50cygpO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgc2V0VmFycyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBlbCxcbiAgICAgIGNzc0NsYXNzID0gJ3BvdGF0b1Njcm9sbCcsXG4gICAgICBmb3JjZUN1c3RvbSA9IGZhbHNlLFxuICAgICAgZm9yY2VTaXplID0gMjAsXG4gICAgfSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XG5cbiAgICB0aGlzLnJvb3RFbCA9IGVsO1xuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcbiAgICB0aGlzLmZvcmNlQ3VzdG9tID0gZm9yY2VDdXN0b207XG5cbiAgICB0aGlzLnNjcm9sbFdhaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJlc2l6ZVdhaXQgPSBmYWxzZTtcblxuICAgIHRoaXMuYmFyID0ge1xuICAgICAgdjoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFknLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsVG9wJyxcbiAgICAgIH0sXG4gICAgICBoOiB7XG4gICAgICAgIGZvcmNlU2l6ZTogZm9yY2VDdXN0b20gPyBmb3JjZVNpemUgOiAwLFxuICAgICAgICBuYXRpdmVTaXplOiAwLFxuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgbW92ZVN0YXJ0OiBudWxsLFxuICAgICAgICBtb3ZlRGlmZjogMCxcbiAgICAgICAgc2Nyb2xsQmVmb3JlOiBudWxsLFxuICAgICAgICBzaXplOiAwLFxuICAgICAgICBzaXplRnJhY3Q6IDEsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WCcsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxMZWZ0JyxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYW5hbHl6ZU5hdGl2ZSgpIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgY29uc3QgdGVzdFNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdGVzdFNjcm9sbEVsLnN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS50b3AgPSAwO1xuICAgIHRlc3RTY3JvbGxFbC5zdHlsZS5sZWZ0ID0gMDtcbiAgICB0ZXN0U2Nyb2xsRWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG4gICAgY29uc3QgdGVzdENvbnRlbnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRlc3RTY3JvbGxFbC5hcHBlbmRDaGlsZCh0ZXN0Q29udGVudEVsKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIGNvbnN0IHZOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldFdpZHRoIC0gdGVzdFNjcm9sbEVsLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IGhOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldEhlaWdodCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG5cbiAgICB0aGlzLmJhci52Lm5hdGl2ZVNpemUgPSB2TmF0aXZlU2l6ZTtcbiAgICB0aGlzLmJhci5oLm5hdGl2ZVNpemUgPSBoTmF0aXZlU2l6ZTtcblxuICAgIGlmICh2TmF0aXZlU2l6ZSA+IDApIHRoaXMuYmFyLnYuZm9yY2VTaXplID0gMDtcbiAgICBpZiAoaE5hdGl2ZVNpemUgPiAwKSB0aGlzLmJhci5oLmZvcmNlU2l6ZSA9IDA7XG5cbiAgICAvLyBkZXRlY3QgcG9zaXRpb24gLSBSVExcblxuICAgIGJvZHkucmVtb3ZlQ2hpbGQodGVzdFNjcm9sbEVsKTtcbiAgfVxuXG4gIHByZXBhcmVET00oKSB7XG4gICAgY29uc3QgeyByb290RWwsIGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgLy8gcm9vdEVsXG4gICAgcm9vdEVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIHJvb3RFbC5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICByb290RWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHJvb3RFbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgLy8gbWFza0VsXG4gICAgY29uc3QgbWFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFza0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19tYXNrYCk7XG4gICAgbWFza0VsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBtYXNrRWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBtYXNrRWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIG1hc2tFbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIG1hc2tFbC5zdHlsZS56SW5kZXggPSAnMCc7XG5cbiAgICAvLyBzY3JvbGxFbFxuICAgIGNvbnN0IHNjcm9sbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2Nyb2xsRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3Njcm9sbGApO1xuICAgIHNjcm9sbEVsLnN0eWxlLmZsZXhHcm93ID0gMTtcbiAgICBzY3JvbGxFbC5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuXG4gICAgd2hpbGUgKHJvb3RFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc2Nyb2xsRWwuYXBwZW5kQ2hpbGQocm9vdEVsLmNoaWxkTm9kZXNbMF0pO1xuICAgIH1cblxuICAgIG1hc2tFbC5hcHBlbmRDaGlsZChzY3JvbGxFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKG1hc2tFbCk7XG5cbiAgICB0aGlzLm1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLnNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gIH1cblxuICBoaWRlTmF0aXZlQmFycygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5mb3JjZUN1c3RvbSAmJiAoYmFyLnYubmF0aXZlU2l6ZSA9PT0gMCB8fCBiYXIuaC5uYXRpdmVTaXplID09PSAwKSkge1xuICAgICAgY29uc3QgdkZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcblxuICAgICAgY29uc3QgaEZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1oRm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBgJHtoRm9yY2VTaXplfXB4YDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1iYXIudi5uYXRpdmVTaXplfXB4YDtcbiAgfVxuXG4gIGFkZEN1c3RvbUJhcnMoKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYmFyLCByb290RWwgfSA9IHRoaXM7XG5cbiAgICBpZiAoIShcbiAgICAgIGJhci52Lm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIGJhci5oLm5hdGl2ZVNpemUgIT09IDAgfHxcbiAgICAgIHRoaXMuZm9yY2VDdXN0b21cbiAgICApKSByZXR1cm47XG5cbiAgICBjb25zdCB2VHJhY2tFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFja2ApO1xuICAgIHZUcmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0tdmApO1xuICAgIHZUcmFja0VsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB2VHJhY2tFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYmFyLnYudHJhY2tFbCA9IHZUcmFja0VsO1xuXG4gICAgY29uc3QgdkJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdkJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXJgKTtcbiAgICB2QmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2Jhci0tdmApO1xuICAgIGJhci52LmVsID0gdkJhckVsO1xuXG4gICAgY29uc3QgaFRyYWNrRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICBoVHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2stLWhgKTtcbiAgICBoVHJhY2tFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaFRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhci5oLnRyYWNrRWwgPSBoVHJhY2tFbDtcblxuICAgIGNvbnN0IGhCYXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhCYXJFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYmFyYCk7XG4gICAgaEJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLWhgKTtcbiAgICBiYXIuaC5lbCA9IGhCYXJFbDtcblxuICAgIHZUcmFja0VsLmFwcGVuZENoaWxkKHZCYXJFbCk7XG4gICAgaFRyYWNrRWwuYXBwZW5kQ2hpbGQoaEJhckVsKTtcblxuICAgIHJvb3RFbC5hcHBlbmRDaGlsZCh2VHJhY2tFbCk7XG4gICAgcm9vdEVsLmFwcGVuZENoaWxkKGhUcmFja0VsKTtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUgPSB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemVUaHJvdHRsZSA9IHRoaXMub25SZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zY3JvbGxFbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsVGhyb3R0bGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuICB9XG5cbiAgb25TY3JvbGxUaHJvdHRsZSgpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxXYWl0KSByZXR1cm47XG4gICAgdGhpcy5zY3JvbGxXYWl0ID0gdHJ1ZTtcblxuICAgIHRoaXMucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG5cbiAgICB0aGlzLnNjcm9sbFdhaXQgPSBmYWxzZTtcbiAgfVxuXG4gIG9uUmVzaXplVGhyb3R0bGUoKSB7XG4gICAgaWYgKHRoaXMucmVzaXplV2FpdCkgcmV0dXJuO1xuICAgIHRoaXMucmVzaXplV2FpdCA9IHRydWU7XG5cbiAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLm9uUmVzaXplKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuXG4gICAgdGhpcy5yZXNpemVXYWl0ID0gZmFsc2U7XG4gIH1cblxuICBiaW5kQmFyc0V2ZW50cygpIHtcbiAgICB0aGlzLm9uRG9jTW91c2VNb3ZlID0gdGhpcy5vbkRvY01vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZVVwID0gdGhpcy5vbkRvY01vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VMZWF2ZSA9IHRoaXMub25Eb2NNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVkJhck1vdXNlRG93biA9IHRoaXMub25WQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhCYXJNb3VzZURvd24gPSB0aGlzLm9uSEJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMuYmFyLnYuZWwpIHRoaXMuYmFyLnYuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblZCYXJNb3VzZURvd24pO1xuICAgIGlmICh0aGlzLmJhci5oLmVsKSB0aGlzLmJhci5oLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIGJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgdW5iaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIG9uVkJhck1vdXNlRG93bihlKSB7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci52O1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkhCYXJNb3VzZURvd24oZSkge1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIuaDtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZU1vdmUoZSkge1xuICAgIHRoaXMubW92ZVVwZGF0ZShlKTtcbiAgfVxuXG4gIG9uRG9jTW91c2VVcChlKSB7XG4gICAgdGhpcy5tb3ZlRW5kKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZUxlYXZlKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBtb3ZlQmVnaW4oZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuICAgIHNjcm9sbEVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICB0aGlzLmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBlW2FjdGl2ZUJhck9iai5tb3ZlUHJvcF07XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IHNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXTtcbiAgfVxuXG4gIG1vdmVVcGRhdGUoZSkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXSAtIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQ7XG5cbiAgICB0aGlzLmJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopO1xuICB9XG5cbiAgbW92ZUVuZCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUJhck9iaiwgc2Nyb2xsRWwgfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcblxuICAgIGFjdGl2ZUJhck9iai5tb3ZlU3RhcnQgPSBudWxsO1xuICAgIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiA9IDA7XG4gICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSA9IG51bGw7XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICBzY3JvbGxFbC5zdHlsZS51c2VyU2VsZWN0ID0gJyc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICcnO1xuICB9XG5cbiAgc2V0QmFyc1NpemUoKSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCwgbWFza0VsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2QmFyT2JqID0gYmFyLnY7XG4gICAgY29uc3QgaEJhck9iaiA9IGJhci5oO1xuXG4gICAgY29uc3QgdlNjcm9sbFNpemUgPSBzY3JvbGxFbC5zY3JvbGxIZWlnaHQgLSB2QmFyT2JqLmZvcmNlU2l6ZTtcbiAgICBjb25zdCB2VHJhY2tTaXplID0gbWFza0VsLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB2RnJhY3QgPSB2VHJhY2tTaXplIC8gdlNjcm9sbFNpemU7XG4gICAgdkJhck9iai50cmFja1NpemUgPSB2VHJhY2tTaXplO1xuICAgIHZCYXJPYmouc2l6ZUZyYWN0ID0gdkZyYWN0O1xuICAgIHZCYXJPYmouc2Nyb2xsUmFuZ2UgPSB2U2Nyb2xsU2l6ZSAtIHZUcmFja1NpemU7XG4gICAgaWYgKHZCYXJPYmouZWwpIHtcbiAgICAgIHZCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKHZCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgdkJhck9iai5lbC5zdHlsZS5oZWlnaHQgPSBgJHt2RnJhY3QgKiB2QmFyT2JqLnRyYWNrRWwub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgIHZCYXJPYmoubW92ZVJhbmdlID0gdkJhck9iai50cmFja0VsLm9mZnNldEhlaWdodCAtIHZCYXJPYmouZWwub2Zmc2V0SGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IGhTY3JvbGxTaXplID0gc2Nyb2xsRWwuc2Nyb2xsV2lkdGggLSAyICogaEJhck9iai5mb3JjZVNpemU7XG4gICAgY29uc3QgaFRyYWNrU2l6ZSA9IG1hc2tFbC5vZmZzZXRXaWR0aDtcbiAgICBjb25zdCBoRnJhY3QgPSBoVHJhY2tTaXplIC8gaFNjcm9sbFNpemU7XG4gICAgaEJhck9iai50cmFja1NpemUgPSBoVHJhY2tTaXplO1xuICAgIGhCYXJPYmouc2l6ZUZyYWN0ID0gaEZyYWN0O1xuICAgIGhCYXJPYmouc2Nyb2xsUmFuZ2UgPSBoU2Nyb2xsU2l6ZSAtIGhUcmFja1NpemU7XG4gICAgaWYgKGhCYXJPYmouZWwpIHtcbiAgICAgIGhCYXJPYmoudHJhY2tFbC5zdHlsZS5kaXNwbGF5ID0gKGhCYXJPYmouc2l6ZUZyYWN0ID09PSAxKSA/ICdub25lJyA6ICcnO1xuICAgICAgaEJhck9iai5lbC5zdHlsZS53aWR0aCA9IGAke2hGcmFjdCAqIGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aH1weGA7XG4gICAgICBoQmFyT2JqLm1vdmVSYW5nZSA9IGhCYXJPYmoudHJhY2tFbC5vZmZzZXRXaWR0aCAtIGhCYXJPYmouZWwub2Zmc2V0V2lkdGg7XG4gICAgfVxuICB9XG5cbiAgc2V0QmFyc1BvcygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB2QmFyT2JqID0gYmFyLnY7XG4gICAgY29uc3QgaEJhck9iaiA9IGJhci5oO1xuXG4gICAgaWYgKHZCYXJPYmouZWwpIHtcbiAgICAgIGNvbnN0IHZQb3MgPSAoc2Nyb2xsRWwuc2Nyb2xsVG9wIC8gdkJhck9iai5zY3JvbGxSYW5nZSkgKiAoXG4gICAgICAgIHZCYXJPYmoudHJhY2tTaXplICogKDEgLSB2QmFyT2JqLnNpemVGcmFjdClcbiAgICAgICk7XG4gICAgICB2QmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVZKCR7dlBvc31weClgO1xuICAgIH1cblxuICAgIGlmIChoQmFyT2JqLmVsKSB7XG4gICAgICBjb25zdCBoUG9zID0gKHNjcm9sbEVsLnNjcm9sbExlZnQgLyBoQmFyT2JqLnNjcm9sbFJhbmdlKSAqIChcbiAgICAgICAgaEJhck9iai50cmFja1NpemUgKiAoMSAtIGhCYXJPYmouc2l6ZUZyYWN0KVxuICAgICAgKTtcbiAgICAgIGhCYXJPYmouZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtoUG9zfXB4KWA7XG4gICAgfVxuICB9XG5cbiAgYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaikge1xuICAgIHRoaXMuc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdID0gKFxuICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbEJlZm9yZSArIChcbiAgICAgICAgYWN0aXZlQmFyT2JqLnNjcm9sbFJhbmdlICogYWN0aXZlQmFyT2JqLm1vdmVEaWZmIC8gYWN0aXZlQmFyT2JqLm1vdmVSYW5nZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICAqIG1hbnVhbHkgcmVmcmVzaCBiYXJzXG4gICAgKi9cbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLnNldEJhcnNTaXplKCk7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=