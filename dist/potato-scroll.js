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
          _options$maskEl = options.maskEl,
          maskEl = _options$maskEl === undefined ? null : _options$maskEl,
          _options$scrollEl = options.scrollEl,
          scrollEl = _options$scrollEl === undefined ? null : _options$scrollEl,
          _options$cssClass = options.cssClass,
          cssClass = _options$cssClass === undefined ? 'potatoScroll' : _options$cssClass,
          _options$forceCustom = options.forceCustom,
          forceCustom = _options$forceCustom === undefined ? false : _options$forceCustom,
          _options$forceSize = options.forceSize,
          forceSize = _options$forceSize === undefined ? 20 : _options$forceSize,
          _options$withArrows = options.withArrows,
          withArrows = _options$withArrows === undefined ? false : _options$withArrows,
          _options$arrowMove = options.arrowMove,
          arrowMove = _options$arrowMove === undefined ? 40 : _options$arrowMove,
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
    key: 'resetState',
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
    key: 'bindThis',
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
    key: 'initialize',
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

      if (!this.ownTree) rootEl.classList.add(cssClass);
      var rootStyle = rootEl.style;
      rootStyle.overflow = 'visible';
      rootStyle.position = 'relative';
      rootStyle.display = 'flex';

      // maskEl
      var maskEl = !this.ownTree ? document.createElement('div') : this.ownMaskEl;
      if (!this.ownTree) maskEl.classList.add(cssClass + '__mask');
      var maskStyle = maskEl.style;
      maskStyle.flexGrow = 1;
      maskStyle.overflow = 'hidden';
      maskStyle.position = 'relative';
      maskStyle.display = 'flex';
      maskStyle.zIndex = '0';

      // scrollEl
      var scrollEl = !this.ownTree ? document.createElement('div') : this.ownScrollEl;
      if (!this.ownTree) scrollEl.classList.add(cssClass + '__scroll');
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
    key: 'createTrackEl',
    value: function createTrackEl(axis) {
      var cssClass = this.cssClass,
          bar = this.bar;


      var trackEl = document.createElement('div');
      trackEl.classList.add(cssClass + '__track');
      trackEl.classList.add(cssClass + '__track--' + axis);
      trackEl.style.position = 'absolute';
      trackEl.style.zIndex = '1';
      bar[axis].trackEl = trackEl;

      return trackEl;
    }
  }, {
    key: 'createBarEl',
    value: function createBarEl(axis) {
      var cssClass = this.cssClass,
          bar = this.bar;


      var barEl = document.createElement('div');
      barEl.classList.add(cssClass + '__bar');
      barEl.classList.add(cssClass + '__bar--' + axis);
      bar[axis].el = barEl;

      return barEl;
    }
  }, {
    key: 'addCustomArrows',
    value: function addCustomArrows() {
      var bar = this.bar,
          rootEl = this.rootEl,
          cssClass = this.cssClass;


      rootEl.classList.add(cssClass + '--arrows');

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
    key: 'createArrowEl',
    value: function createArrowEl(direction) {
      var cssClass = this.cssClass,
          arrow = this.arrow;


      var arrowEl = document.createElement('div');
      arrowEl.classList.add(cssClass + '__arrow');
      arrowEl.classList.add(cssClass + '__arrow--' + direction);
      arrowEl.style.position = 'absolute';
      arrowEl.style.zIndex = '1';
      arrow[direction].el = arrowEl;

      return arrowEl;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      if (this.scrollEl) this.scrollEl.addEventListener('scroll', this.onScrollThrottle);

      window.addEventListener('resize', this.onResizeThrottle);

      this.rootEl.addEventListener('PotatoScroll.nestedChange', this.onNestedChange);
    }
  }, {
    key: 'unbindEvents',
    value: function unbindEvents() {
      if (this.scrollEl) this.scrollEl.removeEventListener('scroll', this.onScrollThrottle);

      window.removeEventListener('resize', this.onResizeThrottle);

      this.rootEl.removeEventListener('PotatoScroll.nestedChange', this.onNestedChange);
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
    key: 'onNestedChange',
    value: function onNestedChange() {
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
      e.preventDefault();
      this.activeBarObj = this.bar.v;

      this.moveBegin(e);
    }
  }, {
    key: 'onHBarMouseDown',
    value: function onHBarMouseDown(e) {
      e.preventDefault();
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
    key: 'bindArrowsEvents',
    value: function bindArrowsEvents() {
      var arrow = this.arrow;


      if (arrow.t.el) arrow.t.el.addEventListener('click', this.onTClick);
      if (arrow.b.el) arrow.b.el.addEventListener('click', this.onBClick);
      if (arrow.l.el) arrow.l.el.addEventListener('click', this.onLClick);
      if (arrow.r.el) arrow.r.el.addEventListener('click', this.onRClick);
    }
  }, {
    key: 'unbindArrowsEvents',
    value: function unbindArrowsEvents() {
      var arrow = this.arrow;


      if (arrow.t.el) arrow.t.el.removeEventListener('click', this.onTClick);
      if (arrow.b.el) arrow.b.el.removeEventListener('click', this.onBClick);
      if (arrow.l.el) arrow.l.el.removeEventListener('click', this.onLClick);
      if (arrow.r.el) arrow.r.el.removeEventListener('click', this.onRClick);
    }
  }, {
    key: 'onTClick',
    value: function onTClick() {
      this.smoothScrollTo('scrollTop', -this.arrowMove);
    }
  }, {
    key: 'onBClick',
    value: function onBClick() {
      this.smoothScrollTo('scrollTop', this.arrowMove);
    }
  }, {
    key: 'onLClick',
    value: function onLClick() {
      this.smoothScrollTo('scrollLeft', -this.arrowMove);
    }
  }, {
    key: 'onRClick',
    value: function onRClick() {
      this.smoothScrollTo('scrollLeft', this.arrowMove);
    }
  }, {
    key: 'smoothScrollTo',
    value: function smoothScrollTo(scrollDir, offset) {
      var scrollEl = this.scrollEl;


      scrollEl.style.scrollBehavior = 'smooth';
      scrollEl[scrollDir] += offset;
      scrollEl.style.scrollBehavior = '';
    }
  }, {
    key: 'setBarsSize',
    value: function setBarsSize() {
      var bar = this.bar;


      this.setBarSize(bar.v);
      this.setBarSize(bar.h);
    }
  }, {
    key: 'setBarSize',
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
        barObj.el.style[barObj.sizeProp] = fract * trackSize + 'px';
        barObj.moveRange = trackSize - barObj.el[barObj.measureProp];
      }
    }
  }, {
    key: 'setBarsPos',
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
    key: 'setBarPos',
    value: function setBarPos(barObj) {
      var fract = barObj.scrollRange ? this.scrollEl[barObj.scrollProp] / barObj.scrollRange : 0;

      if (barObj.el) {
        var pos = fract * (barObj.trackSize * (1 - barObj.sizeFract));
        barObj.el.style.transform = 'translate' + barObj.axis + '(' + pos + 'px)';
      }

      return fract;
    }
  }, {
    key: 'axisEdges',
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
    key: 'setArrowIf',
    value: function setArrowIf(arrowObj, disabled) {
      var cssClass = this.cssClass;


      if (arrowObj.disabled === disabled) return;

      arrowObj.disabled = disabled;

      var disabledClass = cssClass + '__arrow--disabled';
      if (disabled) {
        arrowObj.el.classList.add(disabledClass);
      } else {
        arrowObj.el.classList.remove(disabledClass);
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
      this.rootEl.parentElement.dispatchEvent(new CustomEvent('PotatoScroll.nestedChange', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vUG90YXRvU2Nyb2xsLy4vc3JjL2pzL2J1aWxkLmpzIiwid2VicGFjazovL1BvdGF0b1Njcm9sbC8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9Qb3RhdG9TY3JvbGwvLi9zcmMvc2Nzcy9pbmRleC5zY3NzPzAzNTgiXSwibmFtZXMiOlsiUG90YXRvU2Nyb2xsIiwib3B0aW9ucyIsInNlbGVjdG9yIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJtYXAiLCJjYWxsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5zdGFuY2VPcHRpb24iLCJPYmplY3QiLCJlbCIsInByZWluaXQiLCJiaW5kVGhpcyIsImluaXRpYWxpemUiLCJOT09QIiwibWFza0VsIiwic2Nyb2xsRWwiLCJjc3NDbGFzcyIsImZvcmNlQ3VzdG9tIiwiZm9yY2VTaXplIiwid2l0aEFycm93cyIsImFycm93TW92ZSIsIm9uTmF0aXZlU2Nyb2xsIiwib25TY3JvbGwiLCJvblRvcCIsIm9uQm90dG9tIiwib25MZWZ0Iiwib25SaWdodCIsInJvb3RFbCIsIm93bk1hc2tFbCIsIm93blNjcm9sbEVsIiwiZXZlbnQiLCJvd25UcmVlIiwicmVzZXRTdGF0ZSIsIndhaXQiLCJzY3JvbGwiLCJyZXNpemUiLCJyYWYiLCJwcm9ncmVzcyIsInYiLCJoIiwiYmFyIiwibmF0aXZlU2l6ZSIsInRyYWNrRWwiLCJtb3ZlU3RhcnQiLCJtb3ZlRGlmZiIsInNjcm9sbEJlZm9yZSIsInNpemUiLCJzaXplRnJhY3QiLCJ0cmFja1NpemUiLCJtb3ZlUHJvcCIsInNjcm9sbFByb3AiLCJsZW5ndGhQcm9wIiwibWVhc3VyZVByb3AiLCJzaXplUHJvcCIsImZvcmNlTXVsdGkiLCJheGlzIiwiYWN0aXZlQmFyT2JqIiwiYXJyb3ciLCJ0IiwiZGlzYWJsZWQiLCJiIiwibCIsInIiLCJpc1JUTCIsIm9uU2Nyb2xsVGhyb3R0bGUiLCJiaW5kIiwib25SZXNpemVUaHJvdHRsZSIsIm9uUmVzaXplIiwib25OZXN0ZWRDaGFuZ2UiLCJyZWZyZXNoUGFyZW50cyIsIm9uRG9jTW91c2VNb3ZlIiwib25Eb2NNb3VzZVVwIiwib25Eb2NNb3VzZUxlYXZlIiwib25WQmFyTW91c2VEb3duIiwib25IQmFyTW91c2VEb3duIiwib25UQ2xpY2siLCJvbkJDbGljayIsIm9uTENsaWNrIiwib25SQ2xpY2siLCJkZXN0cm95IiwiYW5hbHl6ZU5hdGl2ZSIsInByZXBhcmVET00iLCJoaWRlTmF0aXZlQmFycyIsImFkZEN1c3RvbUJhcnMiLCJiaW5kRXZlbnRzIiwiYmluZEJhcnNFdmVudHMiLCJiaW5kQXJyb3dzRXZlbnRzIiwicmVmcmVzaCIsInNldFRpbWVvdXQiLCJyb290UGFyZW50IiwicGFyZW50RWxlbWVudCIsInRlc3RTY3JvbGxFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXN0U2Nyb2xsU3R5bGUiLCJzdHlsZSIsIm92ZXJmbG93Iiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImFwcGVuZENoaWxkIiwidk5hdGl2ZVNpemUiLCJvZmZzZXRXaWR0aCIsInNjcm9sbFdpZHRoIiwiaE5hdGl2ZVNpemUiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0ZXN0Q29udGVudEVsIiwib2Zmc2V0TGVmdCIsInJlbW92ZUNoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicm9vdFN0eWxlIiwiZGlzcGxheSIsIm1hc2tTdHlsZSIsImZsZXhHcm93IiwiekluZGV4Iiwic2Nyb2xsU3R5bGUiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwidkZvcmNlU2l6ZSIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiaEZvcmNlU2l6ZSIsIm1hcmdpbkJvdHRvbSIsInBhZGRpbmdCb3R0b20iLCJ2VHJhY2tFbCIsImNyZWF0ZVRyYWNrRWwiLCJ2QmFyRWwiLCJjcmVhdGVCYXJFbCIsImhUcmFja0VsIiwiaEJhckVsIiwiYWRkQ3VzdG9tQXJyb3dzIiwiYmFyRWwiLCJhcnJvd1QiLCJjcmVhdGVBcnJvd0VsIiwiYXJyb3dCIiwiYXJyb3dMIiwiYXJyb3dSIiwiZGlyZWN0aW9uIiwiYXJyb3dFbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0QmFyc1BvcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm1vdmVCZWdpbiIsIm1vdmVVcGRhdGUiLCJtb3ZlRW5kIiwidXNlclNlbGVjdCIsInBvaW50ZXJFdmVudHMiLCJiaW5kRG9jRXZlbnRzIiwiYmFyTW92ZVRvU2Nyb2xsIiwidW5iaW5kRG9jRXZlbnRzIiwic21vb3RoU2Nyb2xsVG8iLCJzY3JvbGxEaXIiLCJvZmZzZXQiLCJzY3JvbGxCZWhhdmlvciIsInNldEJhclNpemUiLCJiYXJPYmoiLCJzY3JvbGxTaXplIiwibWFza1NpemUiLCJzY3JvbGxSYW5nZSIsImZyYWN0IiwibW92ZVJhbmdlIiwic2V0QmFyUG9zIiwiYXhpc0VkZ2VzIiwicG9zIiwidHJhbnNmb3JtIiwiYXJyb3dPYmowIiwiYXJyb3dPYmoxIiwiaXNFZGdlMCIsInNldEFycm93SWYiLCJpc0VkZ2UxIiwiYXJyb3dPYmoiLCJkaXNhYmxlZENsYXNzIiwicmVtb3ZlIiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiYnViYmxlcyIsInNldEJhcnNTaXplIiwidW5iaW5kQXJyb3dzRXZlbnRzIiwidW5iaW5kQmFyc0V2ZW50cyIsInVuYmluZEV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztR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LENBQW5CO0FBQ0Q7O0FBRUQsY0FBSTNHLE1BQUosRUFBWTtBQUNWQSxtQkFBT2tHLFdBQVAsQ0FBbUJqRyxRQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsWUFBSUQsTUFBSixFQUFZO0FBQ1ZhLGlCQUFPcUYsV0FBUCxDQUFtQmxHLE1BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJQyxRQUFKLEVBQWMsS0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNkLFVBQUlELE1BQUosRUFBWSxLQUFLQSxNQUFMLEdBQWMsSUFBZDs7QUFFWixXQUFLa0IsVUFBTDs7QUFFQXdELGlCQUFXLEtBQUtuQixjQUFoQjtBQUNEOzs7Ozs7a0JBaHRCa0J2RSxZOzs7Ozs7Ozs7OztBQ0FyQix1QyIsImZpbGUiOiJwb3RhdG8tc2Nyb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvYnVpbGQuanNcIik7XG4iLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCBQb3RhdG9TY3JvbGwgZnJvbSAnLi9pbmRleC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvdGF0b1Njcm9sbDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvdGF0b1Njcm9sbCB7XG5cbiAgc3RhdGljIGNyZWF0ZShvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICBzZWxlY3RvcixcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgIGVsID0+IHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VPcHRpb24gPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgICAgIGluc3RhbmNlT3B0aW9uLmVsID0gZWw7XG4gICAgICAgIHJldHVybiBuZXcgUG90YXRvU2Nyb2xsKGluc3RhbmNlT3B0aW9uKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIGlmICghdGhpcy5wcmVpbml0KG9wdGlvbnMpKSByZXR1cm47XG5cbiAgICB0aGlzLmJpbmRUaGlzKCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICBwcmVpbml0KG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IE5PT1AgPSAoKSA9PiB7fTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGVsLFxuICAgICAgbWFza0VsID0gbnVsbCxcbiAgICAgIHNjcm9sbEVsID0gbnVsbCxcbiAgICAgIGNzc0NsYXNzID0gJ3BvdGF0b1Njcm9sbCcsXG4gICAgICBmb3JjZUN1c3RvbSA9IGZhbHNlLFxuICAgICAgZm9yY2VTaXplID0gMjAsXG4gICAgICB3aXRoQXJyb3dzID0gZmFsc2UsXG4gICAgICBhcnJvd01vdmUgPSA0MCxcbiAgICAgIG9uTmF0aXZlU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uU2Nyb2xsID0gTk9PUCxcbiAgICAgIG9uVG9wID0gTk9PUCxcbiAgICAgIG9uQm90dG9tID0gTk9PUCxcbiAgICAgIG9uTGVmdCA9IE5PT1AsXG4gICAgICBvblJpZ2h0ID0gTk9PUCxcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIGlmICghZWwpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMucm9vdEVsID0gZWw7XG4gICAgdGhpcy5vd25NYXNrRWwgPSBtYXNrRWw7XG4gICAgdGhpcy5vd25TY3JvbGxFbCA9IHNjcm9sbEVsO1xuICAgIHRoaXMuY3NzQ2xhc3MgPSBjc3NDbGFzcztcbiAgICB0aGlzLmZvcmNlQ3VzdG9tID0gZm9yY2VDdXN0b207XG4gICAgdGhpcy5mb3JjZVNpemUgPSBmb3JjZVNpemU7XG4gICAgdGhpcy53aXRoQXJyb3dzID0gd2l0aEFycm93cztcbiAgICB0aGlzLmFycm93TW92ZSA9IGFycm93TW92ZTtcblxuICAgIHRoaXMuZXZlbnQgPSB7XG4gICAgICBvbk5hdGl2ZVNjcm9sbCxcbiAgICAgIG9uU2Nyb2xsLFxuICAgICAgb25Ub3AsXG4gICAgICBvbkJvdHRvbSxcbiAgICAgIG9uTGVmdCxcbiAgICAgIG9uUmlnaHQsXG4gICAgfTtcblxuICAgIHRoaXMub3duVHJlZSA9ICh0aGlzLm93bk1hc2tFbCAhPT0gbnVsbCAmJiB0aGlzLm93blNjcm9sbEVsICE9PSBudWxsKTtcblxuICAgIHRoaXMucmVzZXRTdGF0ZSgpO1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXNldFN0YXRlKCkge1xuICAgIGNvbnN0IHsgZm9yY2VDdXN0b20sIGZvcmNlU2l6ZSB9ID0gdGhpcztcblxuICAgIHRoaXMud2FpdCA9IHtcbiAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICByZXNpemU6IGZhbHNlLFxuICAgIH07XG5cbiAgICB0aGlzLnJhZiA9IHtcbiAgICAgIHNjcm9sbDogbnVsbCxcbiAgICAgIHJlc2l6ZTogbnVsbCxcbiAgICB9O1xuXG4gICAgdGhpcy5wcm9ncmVzcyA9IHtcbiAgICAgIHY6IG51bGwsXG4gICAgICBoOiBudWxsLFxuICAgIH07XG5cbiAgICB0aGlzLmJhciA9IHtcbiAgICAgIHY6IHtcbiAgICAgICAgZm9yY2VTaXplOiBmb3JjZUN1c3RvbSA/IGZvcmNlU2l6ZSA6IDAsXG4gICAgICAgIG5hdGl2ZVNpemU6IDAsXG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICB0cmFja0VsOiBudWxsLFxuICAgICAgICBtb3ZlU3RhcnQ6IG51bGwsXG4gICAgICAgIG1vdmVEaWZmOiAwLFxuICAgICAgICBzY3JvbGxCZWZvcmU6IG51bGwsXG4gICAgICAgIHNpemU6IDAsXG4gICAgICAgIHNpemVGcmFjdDogMSxcbiAgICAgICAgdHJhY2tTaXplOiAwLFxuICAgICAgICBtb3ZlUHJvcDogJ2NsaWVudFknLFxuICAgICAgICBzY3JvbGxQcm9wOiAnc2Nyb2xsVG9wJyxcbiAgICAgICAgbGVuZ3RoUHJvcDogJ3Njcm9sbEhlaWdodCcsXG4gICAgICAgIG1lYXN1cmVQcm9wOiAnb2Zmc2V0SGVpZ2h0JyxcbiAgICAgICAgc2l6ZVByb3A6ICdoZWlnaHQnLFxuICAgICAgICBmb3JjZU11bHRpOiAxLFxuICAgICAgICBheGlzOiAnWScsXG4gICAgICB9LFxuICAgICAgaDoge1xuICAgICAgICBmb3JjZVNpemU6IGZvcmNlQ3VzdG9tID8gZm9yY2VTaXplIDogMCxcbiAgICAgICAgbmF0aXZlU2l6ZTogMCxcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIHRyYWNrRWw6IG51bGwsXG4gICAgICAgIG1vdmVTdGFydDogbnVsbCxcbiAgICAgICAgbW92ZURpZmY6IDAsXG4gICAgICAgIHNjcm9sbEJlZm9yZTogbnVsbCxcbiAgICAgICAgc2l6ZTogMCxcbiAgICAgICAgc2l6ZUZyYWN0OiAxLFxuICAgICAgICB0cmFja1NpemU6IDAsXG4gICAgICAgIG1vdmVQcm9wOiAnY2xpZW50WCcsXG4gICAgICAgIHNjcm9sbFByb3A6ICdzY3JvbGxMZWZ0JyxcbiAgICAgICAgbGVuZ3RoUHJvcDogJ3Njcm9sbFdpZHRoJyxcbiAgICAgICAgbWVhc3VyZVByb3A6ICdvZmZzZXRXaWR0aCcsXG4gICAgICAgIHNpemVQcm9wOiAnd2lkdGgnLFxuICAgICAgICBmb3JjZU11bHRpOiAyLFxuICAgICAgICBheGlzOiAnWCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmFjdGl2ZUJhck9iaiA9IG51bGw7XG5cbiAgICB0aGlzLmFycm93ID0ge1xuICAgICAgdDoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGI6IHtcbiAgICAgICAgZWw6IG51bGwsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBsOiB7XG4gICAgICAgIGVsOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcjoge1xuICAgICAgICBlbDogbnVsbCxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5pc1JUTCA9IGZhbHNlO1xuICB9XG5cbiAgYmluZFRoaXMoKSB7XG4gICAgdGhpcy5vblNjcm9sbFRocm90dGxlID0gdGhpcy5vblNjcm9sbFRocm90dGxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNjcm9sbCA9IHRoaXMub25TY3JvbGwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemVUaHJvdHRsZSA9IHRoaXMub25SZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLm9uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uTmVzdGVkQ2hhbmdlID0gdGhpcy5vbk5lc3RlZENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmcmVzaFBhcmVudHMgPSB0aGlzLnJlZnJlc2hQYXJlbnRzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uRG9jTW91c2VNb3ZlID0gdGhpcy5vbkRvY01vdXNlTW92ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Eb2NNb3VzZVVwID0gdGhpcy5vbkRvY01vdXNlVXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRG9jTW91c2VMZWF2ZSA9IHRoaXMub25Eb2NNb3VzZUxlYXZlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uVkJhck1vdXNlRG93biA9IHRoaXMub25WQmFyTW91c2VEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkhCYXJNb3VzZURvd24gPSB0aGlzLm9uSEJhck1vdXNlRG93bi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblRDbGljayA9IHRoaXMub25UQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQkNsaWNrID0gdGhpcy5vbkJDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25MQ2xpY2sgPSB0aGlzLm9uTENsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblJDbGljayA9IHRoaXMub25SQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplICYgcmVpbml0aWFsaXplIGluc3RhbmNlXG4gICAqL1xuICBpbml0aWFsaXplKCkge1xuICAgIHRoaXMuZGVzdHJveSgpO1xuXG4gICAgdGhpcy5hbmFseXplTmF0aXZlKCk7XG4gICAgdGhpcy5wcmVwYXJlRE9NKCk7XG4gICAgdGhpcy5oaWRlTmF0aXZlQmFycygpO1xuICAgIHRoaXMuYWRkQ3VzdG9tQmFycygpO1xuICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIHRoaXMuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLmJpbmRBcnJvd3NFdmVudHMoKTtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHNldFRpbWVvdXQodGhpcy5yZWZyZXNoUGFyZW50cyk7XG4gIH1cblxuICBhbmFseXplTmF0aXZlKCkge1xuICAgIGNvbnN0IHsgcm9vdEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCByb290UGFyZW50ID0gcm9vdEVsLnBhcmVudEVsZW1lbnQ7XG5cbiAgICBjb25zdCB0ZXN0U2Nyb2xsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXN0U2Nyb2xsU3R5bGUgPSB0ZXN0U2Nyb2xsRWwuc3R5bGU7XG4gICAgdGVzdFNjcm9sbFN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdGVzdFNjcm9sbFN0eWxlLndpZHRoID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUuaGVpZ2h0ID0gJzEwMHB4JztcbiAgICB0ZXN0U2Nyb2xsU3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRlc3RTY3JvbGxTdHlsZS50b3AgPSAwO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5sZWZ0ID0gMDtcbiAgICB0ZXN0U2Nyb2xsU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIHRlc3RTY3JvbGxTdHlsZS5vcGFjaXR5ID0gMDtcblxuICAgIHJvb3RQYXJlbnQuYXBwZW5kQ2hpbGQodGVzdFNjcm9sbEVsKTtcblxuICAgIGNvbnN0IHZOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldFdpZHRoIC0gdGVzdFNjcm9sbEVsLnNjcm9sbFdpZHRoO1xuICAgIGNvbnN0IGhOYXRpdmVTaXplID0gdGVzdFNjcm9sbEVsLm9mZnNldEhlaWdodCAtIHRlc3RTY3JvbGxFbC5zY3JvbGxIZWlnaHQ7XG5cbiAgICBiYXIudi5uYXRpdmVTaXplID0gdk5hdGl2ZVNpemU7XG4gICAgYmFyLmgubmF0aXZlU2l6ZSA9IGhOYXRpdmVTaXplO1xuXG4gICAgaWYgKHZOYXRpdmVTaXplID4gMCkgYmFyLnYuZm9yY2VTaXplID0gMDtcbiAgICBpZiAoaE5hdGl2ZVNpemUgPiAwKSBiYXIuaC5mb3JjZVNpemUgPSAwO1xuXG4gICAgLy8gZGV0ZWN0IFJUTFxuICAgIGlmICh2TmF0aXZlU2l6ZSA+IDApIHtcbiAgICAgIGNvbnN0IHRlc3RDb250ZW50RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRlc3RTY3JvbGxFbC5hcHBlbmRDaGlsZCh0ZXN0Q29udGVudEVsKTtcblxuICAgICAgdGhpcy5pc1JUTCA9ICh2TmF0aXZlU2l6ZSA+IDApICYmICh0ZXN0Q29udGVudEVsLm9mZnNldExlZnQgPiB0ZXN0U2Nyb2xsRWwub2Zmc2V0TGVmdCk7XG5cbiAgICAgIHRlc3RTY3JvbGxFbC5yZW1vdmVDaGlsZCh0ZXN0Q29udGVudEVsKTtcbiAgICB9XG5cbiAgICByb290UGFyZW50LnJlbW92ZUNoaWxkKHRlc3RTY3JvbGxFbCk7XG4gIH1cblxuICBwcmVwYXJlRE9NKCkge1xuICAgIGNvbnN0IHsgcm9vdEVsLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIC8vIHJvb3RFbFxuICAgIGlmICghdGhpcy5vd25UcmVlKSByb290RWwuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgY29uc3Qgcm9vdFN0eWxlID0gcm9vdEVsLnN0eWxlO1xuICAgIHJvb3RTdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICByb290U3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIHJvb3RTdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgLy8gbWFza0VsXG4gICAgY29uc3QgbWFza0VsID0gKCF0aGlzLm93blRyZWUpID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgOiB0aGlzLm93bk1hc2tFbDtcbiAgICBpZiAoIXRoaXMub3duVHJlZSkgbWFza0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19tYXNrYCk7XG4gICAgY29uc3QgbWFza1N0eWxlID0gbWFza0VsLnN0eWxlO1xuICAgIG1hc2tTdHlsZS5mbGV4R3JvdyA9IDE7XG4gICAgbWFza1N0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgbWFza1N0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICBtYXNrU3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtYXNrU3R5bGUuekluZGV4ID0gJzAnO1xuXG4gICAgLy8gc2Nyb2xsRWxcbiAgICBjb25zdCBzY3JvbGxFbCA9ICghdGhpcy5vd25UcmVlKSA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIDogdGhpcy5vd25TY3JvbGxFbDtcbiAgICBpZiAoIXRoaXMub3duVHJlZSkgc2Nyb2xsRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX3Njcm9sbGApO1xuICAgIGNvbnN0IHNjcm9sbFN0eWxlID0gc2Nyb2xsRWwuc3R5bGU7XG4gICAgc2Nyb2xsU3R5bGUuZmxleEdyb3cgPSAxO1xuICAgIHNjcm9sbFN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG5cbiAgICBpZiAoIXRoaXMub3duVHJlZSkge1xuICAgICAgd2hpbGUgKHJvb3RFbC5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICBzY3JvbGxFbC5hcHBlbmRDaGlsZChyb290RWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICB9XG5cbiAgICAgIG1hc2tFbC5hcHBlbmRDaGlsZChzY3JvbGxFbCk7XG4gICAgICByb290RWwuYXBwZW5kQ2hpbGQobWFza0VsKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hc2tFbCA9IG1hc2tFbDtcbiAgICB0aGlzLnNjcm9sbEVsID0gc2Nyb2xsRWw7XG4gIH1cblxuICBoaWRlTmF0aXZlQmFycygpIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5mb3JjZUN1c3RvbSAmJiAoYmFyLnYubmF0aXZlU2l6ZSA9PT0gMCB8fCBiYXIuaC5uYXRpdmVTaXplID09PSAwKSkge1xuICAgICAgY29uc3QgdkZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkxlZnQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nTGVmdCA9IGAke3ZGb3JjZVNpemV9cHhgO1xuICAgICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luUmlnaHQgPSBgJHstdkZvcmNlU2l6ZX1weGA7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt2Rm9yY2VTaXplfXB4YDtcblxuICAgICAgY29uc3QgaEZvcmNlU2l6ZSA9IGJhci52LmZvcmNlU2l6ZTtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGAkey1oRm9yY2VTaXplfXB4YDtcbiAgICAgIHNjcm9sbEVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSBgJHtoRm9yY2VTaXplfXB4YDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUlRMKSB7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5MZWZ0ID0gYCR7LWJhci5oLm5hdGl2ZVNpemV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JvbGxFbC5zdHlsZS5tYXJnaW5SaWdodCA9IGAkey1iYXIuaC5uYXRpdmVTaXplfXB4YDtcbiAgICB9XG4gICAgc2Nyb2xsRWwuc3R5bGUubWFyZ2luQm90dG9tID0gYCR7LWJhci52Lm5hdGl2ZVNpemV9cHhgO1xuICB9XG5cbiAgYWRkQ3VzdG9tQmFycygpIHtcbiAgICBjb25zdCB7IGJhciwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKCEoXG4gICAgICBiYXIudi5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICBiYXIuaC5uYXRpdmVTaXplICE9PSAwIHx8XG4gICAgICB0aGlzLmZvcmNlQ3VzdG9tXG4gICAgKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgdlRyYWNrRWwgPSB0aGlzLmNyZWF0ZVRyYWNrRWwoJ3YnKTtcbiAgICBjb25zdCB2QmFyRWwgPSB0aGlzLmNyZWF0ZUJhckVsKCd2Jyk7XG5cbiAgICBjb25zdCBoVHJhY2tFbCA9IHRoaXMuY3JlYXRlVHJhY2tFbCgnaCcpO1xuICAgIGNvbnN0IGhCYXJFbCA9IHRoaXMuY3JlYXRlQmFyRWwoJ2gnKTtcblxuICAgIGlmICh0aGlzLndpdGhBcnJvd3MpIHRoaXMuYWRkQ3VzdG9tQXJyb3dzKCk7XG5cbiAgICB2VHJhY2tFbC5hcHBlbmRDaGlsZCh2QmFyRWwpO1xuICAgIGhUcmFja0VsLmFwcGVuZENoaWxkKGhCYXJFbCk7XG5cbiAgICByb290RWwuYXBwZW5kQ2hpbGQodlRyYWNrRWwpO1xuICAgIHJvb3RFbC5hcHBlbmRDaGlsZChoVHJhY2tFbCk7XG4gIH1cblxuICBjcmVhdGVUcmFja0VsKGF4aXMpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzLCBiYXIgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB0cmFja0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJhY2tFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fdHJhY2tgKTtcbiAgICB0cmFja0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X190cmFjay0tJHtheGlzfWApO1xuICAgIHRyYWNrRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRyYWNrRWwuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgIGJhcltheGlzXS50cmFja0VsID0gdHJhY2tFbDtcblxuICAgIHJldHVybiB0cmFja0VsO1xuICB9XG5cbiAgY3JlYXRlQmFyRWwoYXhpcykge1xuICAgIGNvbnN0IHsgY3NzQ2xhc3MsIGJhciB9ID0gdGhpcztcblxuICAgIGNvbnN0IGJhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFyRWwuY2xhc3NMaXN0LmFkZChgJHtjc3NDbGFzc31fX2JhcmApO1xuICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19iYXItLSR7YXhpc31gKTtcbiAgICBiYXJbYXhpc10uZWwgPSBiYXJFbDtcblxuICAgIHJldHVybiBiYXJFbDtcbiAgfVxuXG4gIGFkZEN1c3RvbUFycm93cygpIHtcbiAgICBjb25zdCB7IGJhciwgcm9vdEVsLCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHJvb3RFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfS0tYXJyb3dzYCk7XG5cbiAgICBjb25zdCBhcnJvd1QgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ3QnKTtcbiAgICBjb25zdCBhcnJvd0IgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ2InKTtcbiAgICBjb25zdCBhcnJvd0wgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ2wnKTtcbiAgICBjb25zdCBhcnJvd1IgPSB0aGlzLmNyZWF0ZUFycm93RWwoJ3InKTtcblxuICAgIGJhci52LnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dUKTtcbiAgICBiYXIudi50cmFja0VsLmFwcGVuZENoaWxkKGFycm93Qik7XG4gICAgYmFyLmgudHJhY2tFbC5hcHBlbmRDaGlsZChhcnJvd0wpO1xuICAgIGJhci5oLnRyYWNrRWwuYXBwZW5kQ2hpbGQoYXJyb3dSKTtcbiAgfVxuXG4gIGNyZWF0ZUFycm93RWwoZGlyZWN0aW9uKSB7XG4gICAgY29uc3QgeyBjc3NDbGFzcywgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBhcnJvd0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXJyb3dFbC5jbGFzc0xpc3QuYWRkKGAke2Nzc0NsYXNzfV9fYXJyb3dgKTtcbiAgICBhcnJvd0VsLmNsYXNzTGlzdC5hZGQoYCR7Y3NzQ2xhc3N9X19hcnJvdy0tJHtkaXJlY3Rpb259YCk7XG4gICAgYXJyb3dFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgYXJyb3dFbC5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgYXJyb3dbZGlyZWN0aW9uXS5lbCA9IGFycm93RWw7XG5cbiAgICByZXR1cm4gYXJyb3dFbDtcbiAgfVxuXG4gIGJpbmRFdmVudHMoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsRWwpIHRoaXMuc2Nyb2xsRWwuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFRocm90dGxlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplVGhyb3R0bGUpO1xuXG4gICAgdGhpcy5yb290RWwuYWRkRXZlbnRMaXN0ZW5lcignUG90YXRvU2Nyb2xsLm5lc3RlZENoYW5nZScsIHRoaXMub25OZXN0ZWRDaGFuZ2UpO1xuICB9XG5cbiAgdW5iaW5kRXZlbnRzKCkge1xuICAgIGlmICh0aGlzLnNjcm9sbEVsKSB0aGlzLnNjcm9sbEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxUaHJvdHRsZSk7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZVRocm90dGxlKTtcblxuICAgIHRoaXMucm9vdEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ1BvdGF0b1Njcm9sbC5uZXN0ZWRDaGFuZ2UnLCB0aGlzLm9uTmVzdGVkQ2hhbmdlKTtcbiAgfVxuXG4gIG9uU2Nyb2xsVGhyb3R0bGUoZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50Lm9uTmF0aXZlU2Nyb2xsKGV2ZW50LCB0aGlzLnJvb3RFbCk7XG5cbiAgICBpZiAodGhpcy53YWl0LnNjcm9sbCkgcmV0dXJuO1xuICAgIHRoaXMud2FpdC5zY3JvbGwgPSB0cnVlO1xuXG4gICAgdGhpcy5yYWYuc2Nyb2xsID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGwpO1xuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy5zZXRCYXJzUG9zKCk7XG5cbiAgICB0aGlzLndhaXQuc2Nyb2xsID0gZmFsc2U7XG4gIH1cblxuICBvblJlc2l6ZVRocm90dGxlKCkge1xuICAgIGlmICh0aGlzLndhaXQucmVzaXplKSByZXR1cm47XG4gICAgdGhpcy53YWl0LnJlc2l6ZSA9IHRydWU7XG5cbiAgICB0aGlzLnJhZi5yZXNpemUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5vblJlc2l6ZSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLnJlZnJlc2goKTtcblxuICAgIHRoaXMud2FpdC5yZXNpemUgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTmVzdGVkQ2hhbmdlKCkge1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIHVuYmluZEJhcnNFdmVudHMoKSB7XG4gICAgY29uc3QgeyBiYXIgfSA9IHRoaXM7XG5cbiAgICBpZiAoYmFyLnYuZWwpIGJhci52LmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25WQmFyTW91c2VEb3duKTtcbiAgICBpZiAoYmFyLmguZWwpIGJhci5oLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25IQmFyTW91c2VEb3duKTtcbiAgfVxuXG4gIGJpbmREb2NFdmVudHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vbkRvY01vdXNlTW92ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Eb2NNb3VzZVVwKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbkRvY01vdXNlTGVhdmUpO1xuICB9XG5cbiAgdW5iaW5kRG9jRXZlbnRzKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Eb2NNb3VzZU1vdmUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uRG9jTW91c2VVcCk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Eb2NNb3VzZUxlYXZlKTtcbiAgfVxuXG4gIG9uVkJhck1vdXNlRG93bihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gdGhpcy5iYXIudjtcblxuICAgIHRoaXMubW92ZUJlZ2luKGUpO1xuICB9XG5cbiAgb25IQmFyTW91c2VEb3duKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5hY3RpdmVCYXJPYmogPSB0aGlzLmJhci5oO1xuXG4gICAgdGhpcy5tb3ZlQmVnaW4oZSk7XG4gIH1cblxuICBvbkRvY01vdXNlTW92ZShlKSB7XG4gICAgdGhpcy5tb3ZlVXBkYXRlKGUpO1xuICB9XG5cbiAgb25Eb2NNb3VzZVVwKGUpIHtcbiAgICB0aGlzLm1vdmVFbmQoZSk7XG4gIH1cblxuICBvbkRvY01vdXNlTGVhdmUoZSkge1xuICAgIHRoaXMubW92ZUVuZChlKTtcbiAgfVxuXG4gIG1vdmVCZWdpbihlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmosIHNjcm9sbEVsIH0gPSB0aGlzO1xuICAgIGlmIChhY3RpdmVCYXJPYmogPT09IG51bGwpIHJldHVybjtcblxuICAgIHNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnbm9uZSc7XG4gICAgc2Nyb2xsRWwuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcblxuICAgIHRoaXMuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IGVbYWN0aXZlQmFyT2JqLm1vdmVQcm9wXTtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gc2Nyb2xsRWxbYWN0aXZlQmFyT2JqLnNjcm9sbFByb3BdO1xuICB9XG5cbiAgbW92ZVVwZGF0ZShlKSB7XG4gICAgY29uc3QgeyBhY3RpdmVCYXJPYmogfSA9IHRoaXM7XG4gICAgaWYgKGFjdGl2ZUJhck9iaiA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gZVthY3RpdmVCYXJPYmoubW92ZVByb3BdIC0gYWN0aXZlQmFyT2JqLm1vdmVTdGFydDtcblxuICAgIHRoaXMuYmFyTW92ZVRvU2Nyb2xsKGFjdGl2ZUJhck9iaik7XG4gIH1cblxuICBtb3ZlRW5kKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlQmFyT2JqLCBzY3JvbGxFbCB9ID0gdGhpcztcbiAgICBpZiAoYWN0aXZlQmFyT2JqID09PSBudWxsKSByZXR1cm47XG5cbiAgICB0aGlzLnVuYmluZERvY0V2ZW50cygpO1xuXG4gICAgYWN0aXZlQmFyT2JqLm1vdmVTdGFydCA9IG51bGw7XG4gICAgYWN0aXZlQmFyT2JqLm1vdmVEaWZmID0gMDtcbiAgICBhY3RpdmVCYXJPYmouc2Nyb2xsQmVmb3JlID0gbnVsbDtcblxuICAgIHRoaXMuYWN0aXZlQmFyT2JqID0gbnVsbDtcblxuICAgIHNjcm9sbEVsLnN0eWxlLnVzZXJTZWxlY3QgPSAnJztcbiAgICBzY3JvbGxFbC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJyc7XG4gIH1cblxuICBiaW5kQXJyb3dzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBpZiAoYXJyb3cudC5lbCkgYXJyb3cudC5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UQ2xpY2spO1xuICAgIGlmIChhcnJvdy5iLmVsKSBhcnJvdy5iLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJDbGljayk7XG4gICAgaWYgKGFycm93LmwuZWwpIGFycm93LmwuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTENsaWNrKTtcbiAgICBpZiAoYXJyb3cuci5lbCkgYXJyb3cuci5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25SQ2xpY2spO1xuICB9XG5cbiAgdW5iaW5kQXJyb3dzRXZlbnRzKCkge1xuICAgIGNvbnN0IHsgYXJyb3cgfSA9IHRoaXM7XG5cbiAgICBpZiAoYXJyb3cudC5lbCkgYXJyb3cudC5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25UQ2xpY2spO1xuICAgIGlmIChhcnJvdy5iLmVsKSBhcnJvdy5iLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkJDbGljayk7XG4gICAgaWYgKGFycm93LmwuZWwpIGFycm93LmwuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uTENsaWNrKTtcbiAgICBpZiAoYXJyb3cuci5lbCkgYXJyb3cuci5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25SQ2xpY2spO1xuICB9XG5cbiAgb25UQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsVG9wJywgLXRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIG9uQkNsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbFRvcCcsIHRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIG9uTENsaWNrKCkge1xuICAgIHRoaXMuc21vb3RoU2Nyb2xsVG8oJ3Njcm9sbExlZnQnLCAtdGhpcy5hcnJvd01vdmUpO1xuICB9XG5cbiAgb25SQ2xpY2soKSB7XG4gICAgdGhpcy5zbW9vdGhTY3JvbGxUbygnc2Nyb2xsTGVmdCcsIHRoaXMuYXJyb3dNb3ZlKTtcbiAgfVxuXG4gIHNtb290aFNjcm9sbFRvKHNjcm9sbERpciwgb2Zmc2V0KSB7XG4gICAgY29uc3QgeyBzY3JvbGxFbCB9ID0gdGhpcztcblxuICAgIHNjcm9sbEVsLnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ3Ntb290aCc7XG4gICAgc2Nyb2xsRWxbc2Nyb2xsRGlyXSArPSBvZmZzZXQ7XG4gICAgc2Nyb2xsRWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnJztcbiAgfVxuXG4gIHNldEJhcnNTaXplKCkge1xuICAgIGNvbnN0IHsgYmFyIH0gPSB0aGlzO1xuXG4gICAgdGhpcy5zZXRCYXJTaXplKGJhci52KTtcbiAgICB0aGlzLnNldEJhclNpemUoYmFyLmgpO1xuICB9XG5cbiAgc2V0QmFyU2l6ZShiYXJPYmopIHtcbiAgICBjb25zdCB7IHNjcm9sbEVsLCBtYXNrRWwgfSA9IHRoaXM7XG5cbiAgICBjb25zdCBzY3JvbGxTaXplID0gc2Nyb2xsRWxbYmFyT2JqLmxlbmd0aFByb3BdIC0gYmFyT2JqLmZvcmNlU2l6ZSAqIGJhck9iai5mb3JjZU11bHRpO1xuICAgIGNvbnN0IG1hc2tTaXplID0gbWFza0VsW2Jhck9iai5tZWFzdXJlUHJvcF07XG4gICAgYmFyT2JqLnNjcm9sbFJhbmdlID0gc2Nyb2xsU2l6ZSAtIG1hc2tTaXplO1xuXG4gICAgaWYgKGJhck9iai5lbCkge1xuICAgICAgY29uc3QgZnJhY3QgPSBtYXNrU2l6ZSAvIHNjcm9sbFNpemU7XG4gICAgICBjb25zdCB0cmFja1NpemUgPSBiYXJPYmoudHJhY2tFbFtiYXJPYmoubWVhc3VyZVByb3BdO1xuICAgICAgYmFyT2JqLnNpemVGcmFjdCA9IGZyYWN0O1xuICAgICAgYmFyT2JqLnRyYWNrU2l6ZSA9IHRyYWNrU2l6ZTtcbiAgICAgIGJhck9iai50cmFja0VsLnN0eWxlLmRpc3BsYXkgPSAoYmFyT2JqLnNpemVGcmFjdCA9PT0gMSkgPyAnbm9uZScgOiAnJztcbiAgICAgIGJhck9iai5lbC5zdHlsZVtiYXJPYmouc2l6ZVByb3BdID0gYCR7ZnJhY3QgKiB0cmFja1NpemV9cHhgO1xuICAgICAgYmFyT2JqLm1vdmVSYW5nZSA9IHRyYWNrU2l6ZSAtIGJhck9iai5lbFtiYXJPYmoubWVhc3VyZVByb3BdO1xuICAgIH1cbiAgfVxuXG4gIHNldEJhcnNQb3MoKSB7XG4gICAgY29uc3QgeyBiYXIsIGV2ZW50LCByb290RWwsIGFycm93IH0gPSB0aGlzO1xuXG4gICAgY29uc3QgZnJhY3QgPSB7XG4gICAgICB2OiAwLFxuICAgICAgaDogMCxcbiAgICB9O1xuXG4gICAgaWYgKGJhci52LmVsKSBmcmFjdC52ID0gdGhpcy5zZXRCYXJQb3MoYmFyLnYpO1xuICAgIGlmIChiYXIuaC5lbCkgZnJhY3QuaCA9IHRoaXMuc2V0QmFyUG9zKGJhci5oKTtcblxuICAgIGV2ZW50Lm9uU2Nyb2xsKGZyYWN0LCByb290RWwpO1xuXG4gICAgdGhpcy5heGlzRWRnZXMoZnJhY3QsICd2JywgYXJyb3cudCwgYXJyb3cuYik7XG4gICAgdGhpcy5heGlzRWRnZXMoZnJhY3QsICdoJywgYXJyb3cubCwgYXJyb3cucik7XG4gIH1cblxuICBzZXRCYXJQb3MoYmFyT2JqKSB7XG4gICAgY29uc3QgZnJhY3QgPSBiYXJPYmouc2Nyb2xsUmFuZ2UgPyAoXG4gICAgICB0aGlzLnNjcm9sbEVsW2Jhck9iai5zY3JvbGxQcm9wXSAvIGJhck9iai5zY3JvbGxSYW5nZVxuICAgICkgOiAwO1xuXG4gICAgaWYgKGJhck9iai5lbCkge1xuICAgICAgY29uc3QgcG9zID0gZnJhY3QgKiAoYmFyT2JqLnRyYWNrU2l6ZSAqICgxIC0gYmFyT2JqLnNpemVGcmFjdCkpO1xuICAgICAgYmFyT2JqLmVsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUke2Jhck9iai5heGlzfSgke3Bvc31weClgO1xuICAgIH1cblxuICAgIHJldHVybiBmcmFjdDtcbiAgfVxuXG4gIGF4aXNFZGdlcyhmcmFjdCwgYXhpcywgYXJyb3dPYmowLCBhcnJvd09iajEpIHtcbiAgICBjb25zdCB7IHByb2dyZXNzLCBldmVudCwgcm9vdEVsIH0gPSB0aGlzO1xuXG4gICAgaWYgKGZyYWN0W2F4aXNdICE9PSBwcm9ncmVzc1theGlzXSkge1xuICAgICAgcHJvZ3Jlc3NbYXhpc10gPSBmcmFjdFtheGlzXTtcblxuICAgICAgY29uc3QgaXNFZGdlMCA9IGZyYWN0W2F4aXNdIDw9IDA7XG4gICAgICBpZiAoaXNFZGdlMCkgZXZlbnQub25MZWZ0KHJvb3RFbCk7XG4gICAgICBpZiAoYXJyb3dPYmowLmVsKSB0aGlzLnNldEFycm93SWYoYXJyb3dPYmowLCBpc0VkZ2UwKTtcblxuICAgICAgY29uc3QgaXNFZGdlMSA9IGZyYWN0W2F4aXNdID49IDE7XG4gICAgICBpZiAoaXNFZGdlMSkgZXZlbnQub25SaWdodChyb290RWwpO1xuICAgICAgaWYgKGFycm93T2JqMS5lbCkgdGhpcy5zZXRBcnJvd0lmKGFycm93T2JqMSwgaXNFZGdlMSk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJyb3dJZihhcnJvd09iaiwgZGlzYWJsZWQpIHtcbiAgICBjb25zdCB7IGNzc0NsYXNzIH0gPSB0aGlzO1xuXG4gICAgaWYgKGFycm93T2JqLmRpc2FibGVkID09PSBkaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgYXJyb3dPYmouZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgIGNvbnN0IGRpc2FibGVkQ2xhc3MgPSBgJHtjc3NDbGFzc31fX2Fycm93LS1kaXNhYmxlZGA7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBhcnJvd09iai5lbC5jbGFzc0xpc3QuYWRkKGRpc2FibGVkQ2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcnJvd09iai5lbC5jbGFzc0xpc3QucmVtb3ZlKGRpc2FibGVkQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIGJhck1vdmVUb1Njcm9sbChhY3RpdmVCYXJPYmopIHtcbiAgICB0aGlzLnNjcm9sbEVsW2FjdGl2ZUJhck9iai5zY3JvbGxQcm9wXSA9IChcbiAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxCZWZvcmUgKyAoXG4gICAgICAgIGFjdGl2ZUJhck9iai5zY3JvbGxSYW5nZSAqIGFjdGl2ZUJhck9iai5tb3ZlRGlmZiAvIGFjdGl2ZUJhck9iai5tb3ZlUmFuZ2VcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFBhcmVudHMoKSB7XG4gICAgaWYgKCF3aW5kb3cuQ3VzdG9tRXZlbnQpIHJldHVybjtcbiAgICB0aGlzLnJvb3RFbC5wYXJlbnRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdQb3RhdG9TY3JvbGwubmVzdGVkQ2hhbmdlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICAqIFJlY2FsY3VsYXRlcyBjb250ZW50IHNpemUgYW5kIHNldCBzY3JvbGxiYXJzIHNpemVcbiAgICAqL1xuICByZWZyZXNoKCkge1xuICAgIHRoaXMuc2V0QmFyc1NpemUoKTtcbiAgICB0aGlzLnNldEJhcnNQb3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgICogRGVzdHJveXMgdGhlIGluc3RhbmNlIGFuZCByZXN0b3JlIG9yaWdpbmFsIGh0bWxcbiAgICAqL1xuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHsgc2Nyb2xsRWwsIG1hc2tFbCwgcm9vdEVsLCBiYXIsIGFycm93LCBjc3NDbGFzcyB9ID0gdGhpcztcblxuICAgIHRoaXMudW5iaW5kQXJyb3dzRXZlbnRzKCk7XG4gICAgdGhpcy51bmJpbmREb2NFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEJhcnNFdmVudHMoKTtcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgaWYgKGJhci52LnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIudi50cmFja0VsKTtcbiAgICAgIGJhci52LmVsID0gbnVsbDtcbiAgICAgIGJhci52LnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cudC5lbCA9IG51bGw7XG4gICAgICBhcnJvdy5iLmVsID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGJhci5oLnRyYWNrRWwpIHtcbiAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChiYXIuaC50cmFja0VsKTtcbiAgICAgIGJhci5oLmVsID0gbnVsbDtcbiAgICAgIGJhci5oLnRyYWNrRWwgPSBudWxsO1xuICAgICAgYXJyb3cubC5lbCA9IG51bGw7XG4gICAgICBhcnJvdy5yLmVsID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMub3duVHJlZSkgcm9vdEVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIGNvbnN0IHJvb3RTdHlsZSA9IHJvb3RFbC5zdHlsZTtcbiAgICByb290U3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICByb290U3R5bGUucG9zaXRpb24gPSAnJztcbiAgICByb290U3R5bGUuZGlzcGxheSA9ICcnO1xuXG4gICAgaWYgKCF0aGlzLm93blRyZWUpIHtcbiAgICAgIGlmIChzY3JvbGxFbCkge1xuICAgICAgICB3aGlsZSAoc2Nyb2xsRWwuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgICAgICByb290RWwuYXBwZW5kQ2hpbGQoc2Nyb2xsRWwuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWFza0VsKSB7XG4gICAgICAgICAgbWFza0VsLnJlbW92ZUNoaWxkKHNjcm9sbEVsKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWFza0VsKSB7XG4gICAgICAgIHJvb3RFbC5yZW1vdmVDaGlsZChtYXNrRWwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzY3JvbGxFbCkgdGhpcy5zY3JvbGxFbCA9IG51bGw7XG4gICAgaWYgKG1hc2tFbCkgdGhpcy5tYXNrRWwgPSBudWxsO1xuXG4gICAgdGhpcy5yZXNldFN0YXRlKCk7XG5cbiAgICBzZXRUaW1lb3V0KHRoaXMucmVmcmVzaFBhcmVudHMpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9