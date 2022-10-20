// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"GAJM":[function(require,module,exports) {
window._iconfont_svg_string_3708097 = '<svg><symbol id="iinfo" viewBox="0 0 1024 1024"><path d="M512 42.51411973c259.29429019 0 469.48588027 210.19159008 469.48588027 469.48588027s-210.19159008 469.48588027-469.48588027 469.48588027S42.51411973 771.29429019 42.51411973 512 252.70570981 42.51411973 512 42.51411973z m0 82.85044939c-213.53322445 0-386.63543088 173.10220514-386.63543088 386.63543088s173.10220514 386.63543088 386.63543088 386.63543088 386.63543088-173.10220514 386.63543088-386.63543088-173.10220514-386.63543088-386.63543088-386.63543088z m41.42522469 303.78498149v331.40179754h-82.85044938V429.14955061h82.85044938z m0-138.08408273v82.85044939h-82.85044938v-82.85044939h82.85044938z"  ></path></symbol><symbol id="iloading" viewBox="0 0 1024 1024"><path d="M560.95014935 732.93453212v248.55134815h-82.85044937v-248.55134815h82.85044937z m-226.95499724-94.00764367l58.6028841 58.6028841-175.75341952 175.72580315-58.57526771-58.54765004 175.72580313-175.78103721z m371.0595464 0l175.72580315 175.75341953-58.54765134 58.57526772-175.78103719-175.72580315 58.60288538-58.6028841zM298.59039384 470.57477531v82.85044938h-248.55134815v-82.85044938h248.55134815z m690.4204111 0v82.85044938h-248.55134814v-82.85044938h248.55134814z m-166.80557099-319.83035101l58.57526771 58.54765004-175.72580315 175.78103721-58.60288538-58.6028841 175.75342082-175.72580315z m-605.36061726 0l175.75341952 175.72580315-58.6028841 58.6028841-175.72580313-175.75341953 58.54765132-58.57526772zM560.95014935 42.51411973v248.55134815h-82.85044937V42.51411973h82.85044937z"  ></path></symbol><symbol id="iright" viewBox="0 0 1024 1024"><path d="M657.59724508 512.22880658L240.40660683 94.80936178l80.95939032-80.84498527 498.0356235 498.30256388L321.32786155 1010.03562349l-80.84498526-80.9212547z"  ></path></symbol><symbol id="ileft" viewBox="0 0 1024 1024"><path d="M743.09463107 94.80936178l-80.84498705-80.84498527-498.07375731 498.30256388 498.03562349 497.8068187 80.88312087-80.92125647-417.1525026-416.92369604z"  ></path></symbol><symbol id="idownload" viewBox="0 0 1024 1024"><path d="M777.12143803 320.42538795h88.37381267a88.37381268 88.37381268 0 0 1 88.37381267 88.37381269v500.78493894a88.37381268 88.37381268 0 0 1-88.37381267 88.37381267H158.5047493a88.37381268 88.37381268 0 0 1-88.37381267-88.37381267V408.79920064a88.37381268 88.37381268 0 0 1 88.37381267-88.37381269h88.37381267v88.37381269h-88.37381267v500.78493894h706.9905014V408.79920064h-88.37381267v-88.37381269z m-213.74679538-293.10647778l0.05891634 479.78142902 102.18958491-102.2190438 62.4508281 62.48028557-208.267619 208.29707648-208.29707649-208.26761899 62.48028557-62.50974306 101.04072674 101.04072536V27.31891017h88.37381267z"  ></path></symbol><symbol id="igood" viewBox="0 0 1024 1024"><path d="M608.20962453 40.67299953c9.27925033 0 25.59894819 1.97368137 38.08911326 6.00941926 61.50817362 19.94302419 96.91661503 85.28072923 82.57059851 150.67735062l-1.47289732 6.12725055-54.82122135 205.61640461h217.16391522c26.36485365 0 52.43512838 9.78003573 70.10989231 29.3401058 19.73681771 21.85778922 27.42533941 50.78548481 21.56321029 78.8588984l-1.47289734 6.00941924-114.50300374 407.69785536a71.64170461 71.64170461 0 0 1-63.62914513 52.14054948l-5.30242876 0.17674762H217.42062487V429.84181169c117.3015069-25.39274171 288.86453616-337.44067427 288.86453478-337.44067427C530.67633197 59.31987401 560.25210173 40.67299953 608.20962453 40.67299953zM129.04681219 423.62618732v559.70081315H40.67299953V423.62618732h88.37381266z m479.16281234-294.57937513c-13.2560719 0-18.70579081 1.53181229-25.48111692 9.13196019l-2.35663406 2.76904568-11.13510041 19.44223877-11.93046471 20.17868816a1854.25933755 1854.25933755 0 0 1-87.25441197 133.14987684c-33.84717025 46.83812071-67.1051813 87.19549563-99.74457565 119.39302093-21.71050045 21.41592014-43.0085893 39.2674303-64.51288325 53.11266141V894.95318781h477.98449389L894.95318781 498.86175939c0-0.38295274-0.17674763-0.61861669-0.67753166-1.17831704 0.41241157 0.47132654-1.17831705-0.2062051-4.5365233-0.2062051H557.541971l84.45590744-316.82011843c6.06833559-22.68261237-5.00784985-44.09853252-22.91827495-49.90174669a63.54077131 63.54077131 0 0 0-10.89943783-1.70855994z"  ></path></symbol><symbol id="iset" viewBox="0 0 1024 1024"><path d="M424.12697271 12.61501521l156.86351752 0.23566257a88.37381268 88.37381268 0 0 1 88.22652252 88.2559814l0.05891634 25.56948934a416.27011518 416.27011518 0 0 1 85.75205577 48.16372791l21.00350995-12.0777535a88.37381268 88.37381268 0 0 1 120.54188046 32.28589913l78.62323444 135.74217628a88.37381268 88.37381268 0 0 1-27.60208703 117.92012357l-4.80164337 2.94579467-21.09188375 12.16612728c3.62332633 33.46421754 3.18145726 67.45867655-1.56127114 101.24693186l14.90571685 8.63117617a88.37381268 88.37381268 0 0 1 34.8192822 116.15264733l-2.44500928 4.56598078-73.64484344 127.55286916a88.37381268 88.37381268 0 0 1-116.15264733 34.81928221l-4.59543826-2.47446676-20.35543577-11.78317456a412.23437865 412.23437865 0 0 1-82.33493454 45.95438259v35.05494477a88.37381268 88.37381268 0 0 1-82.83572136 88.31489773l-5.62646514 0.17674762-156.8635175-0.23566397a88.37381268 88.37381268 0 0 1-88.22652391-88.22652251l-0.08837381-42.27214133a417.86084381 417.86084381 0 0 1-69.13777899-41.00544908l-37.58832786 21.62212663a88.37381268 88.37381268 0 0 1-120.54188049-32.31535797l-78.62323581-135.71271741a88.37381268 88.37381268 0 0 1 27.60208703-117.94958243l4.80164475-2.9457933 38.23640203-22.00507936c-2.9457933-27.98504113-3.09308345-56.29411869-0.26512142-84.54428126l-42.44888758-24.53846243A88.37381268 88.37381268 0 0 1 23.88197511 325.752891l2.47446677-4.56598078 73.64484343-127.55286916a88.37381268 88.37381268 0 0 1 116.15264733-34.8192822l4.56598079 2.47446676 36.99917003 21.35700517a411.46847181 411.46847181 0 0 1 77.91624391-47.86914899v-33.64096515a88.37381268 88.37381268 0 0 1 82.83572134-88.3443538l5.62646516-0.17674764z m-0.11783266 88.37381268l0.08837382 89.84670863-50.78548344 23.89038828c-21.73995792 10.22190479-42.27213994 22.82990115-61.18413722 37.58832787l-46.955952 36.64567478-86.40013134-49.90174669-2.2093453-1.23723338-73.64484344 127.55286917 91.90876517 53.05374647-5.71484034 56.82436156c-2.20934532 22.06399569-2.1209715 44.33419649 0.20620649 66.39819078l6.06833422 57.20731428-88.07923239 50.72656847 78.59377695 135.7127188 87.46061707-50.28469942 46.39625165 33.96500155a328.63275185 328.63275185 0 0 0 54.49718357 32.34481545l50.72656847 23.83147193 0.17674763 98.27167969 156.83406002 0.23566397-0.08837382-94.1181105 54.49718495-22.68261238a323.86056597 323.86056597 0 0 0 64.66017202-36.05651557l46.36679417-33.31692737 69.81531202 40.29845858 73.58592848-127.58232803-66.45710712-38.41314965 8.24822205-58.94533305c3.68224266-26.36485365 4.09465286-53.05374509 1.23723337-79.53643142l-6.18616689-57.23677314 71.0525454-41.00544909-78.62323581-135.71271877-70.69905013 40.74032763-46.42570914-33.84717024a328.69166682 328.69166682 0 0 0-67.57650922-37.97128061l-54.37935227-22.56478108-0.17674763-84.48536493-156.83406002-0.23566257z m175.89334608 253.69175733a176.9832893 176.9832893 0 0 1 64.74854583 241.55508889 176.51196139 176.51196139 0 0 1-241.31942355 64.68963088 176.9832893 176.9832893 0 0 1-64.71908973-241.55508889 176.51196139 176.51196139 0 0 1 241.28996745-64.68963088z m-164.75824567 108.81762226a88.60947664 88.60947664 0 0 0 32.40373177 120.92483321 88.13814871 88.13814871 0 0 0 120.54188048-32.31535796 88.60947664 88.60947664 0 0 0-27.98504114-118.18524501l-4.41869063-2.73958821-4.5659794-2.44500928a88.13814871 88.13814871 0 0 0-115.97590108 34.76036725z"  ></path></symbol><symbol id="idown" viewBox="0 0 1024 1024"><path d="M514.73498108 677.84722135L97.35426716 260.65598787l-80.84558231 80.92244701 498.2638348 498.03502826L1012.58052889 341.57485978l-80.88312089-80.88312087z"  ></path></symbol></svg>', function (l) {
  var t = (t = document.getElementsByTagName("script"))[t.length - 1],
    e = t.getAttribute("data-injectcss"),
    t = t.getAttribute("data-disable-injectsvg");
  if (!t) {
    var o,
      _a,
      i,
      n,
      d,
      s = function s(t, e) {
        e.parentNode.insertBefore(t, e);
      };
    if (e && !l.__iconfont__svg__cssinject__) {
      l.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (t) {
        console && console.log(t);
      }
    }
    o = function o() {
      var t,
        e = document.createElement("div");
      e.innerHTML = l._iconfont_svg_string_3708097, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(o, 0) : (_a = function a() {
      document.removeEventListener("DOMContentLoaded", _a, !1), o();
    }, document.addEventListener("DOMContentLoaded", _a, !1)) : document.attachEvent && (i = o, n = l.document, d = !1, h(), n.onreadystatechange = function () {
      "complete" == n.readyState && (n.onreadystatechange = null, c());
    });
  }
  function c() {
    d || (d = !0, i());
  }
  function h() {
    try {
      n.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(h, 50);
    }
    c();
  }
}(window);
},{}],"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./svg");
//
//
//
//
//
var _default = {
  name: 'GuluIcon',
  props: ['name']
};
exports.default = _default;
        var $6cfee7 = exports.default || module.exports;
      
      if (typeof $6cfee7 === 'function') {
        $6cfee7 = $6cfee7.options;
      }
    
        /* template */
        Object.assign($6cfee7, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"g-icon frank"},[_c('use',{attrs:{"xlink:href":("#i" + _vm.name)}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-6cfee7",
            functional: undefined
          };
        })());
      
},{"./svg":"GAJM"}],"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _icon = _interopRequireDefault(require("./icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'GuluButton',
  components: {
    'g-icon': _icon.default
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator: function validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
exports.default = _default;
        var $416fae = exports.default || module.exports;
      
      if (typeof $416fae === 'function') {
        $416fae = $416fae.options;
      }
    
        /* template */
        Object.assign($416fae, (function () {
          var render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"g-button frank4",class:( _obj = {}, _obj[("icon-" + _vm.iconPosition)] = true, _obj ),on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.icon && !_vm.loading)?_c('g-icon',{staticClass:"icon",attrs:{"name":_vm.icon}}):_vm._e(),_vm._v(" "),(_vm.loading)?_c('g-icon',{staticClass:"loading icon",attrs:{"name":"loading"}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._t("default")],2)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-416fae",
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
//
//
//
//
//
//
var _default = {
  name: 'GuluButtonGroup',
  mounted: function mounted() {
    var _iterator = _createForOfIteratorHelper(this.$el.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var note = _step.value;
        if (note.nodeName !== 'BUTTON') {
          console.warn('g-button-group的子元素应该全是g-button,但是你写的是' + note.nodeName);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};
exports.default = _default;
        var $222d1f = exports.default || module.exports;
      
      if (typeof $222d1f === 'function') {
        $222d1f = $222d1f.options;
      }
    
        /* template */
        Object.assign($222d1f, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-222d1f",
            functional: undefined
          };
        })());
      
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _icon.default;
  }
});
var _button = _interopRequireDefault(require("./src/button"));
var _buttonGroup = _interopRequireDefault(require("./src/button-group"));
var _icon = _interopRequireDefault(require("./src/icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/button-group":"h0wh","./src/icon":"wFXB"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map