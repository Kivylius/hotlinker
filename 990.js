(self['webpackChunkhotlinker'] = self['webpackChunkhotlinker'] || []).push([["990"], {
"251": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var f = __webpack_require__(/*! react */"454"), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;
}),
"893": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */"251");
}),
"130": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  onPress: function() { return onPress; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */"454");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


 var onPress = function(param) {
    var config = param.config;
    if (config.link) window.open(config.link, "_blank");
};
var styles = {
    borderRadius: "4px",
    padding: "2em",
    backgroundColor: "green",
    color: "white"
};
var App = function(param) {
    var config = param.config, setConfig = param.setConfig;
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: styles,
        children: [
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                children: "hotlinker plugin"
            }),
            /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "setting",
                children: [
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
                        htmlFor: "link",
                        children: "link: "
                    }),
                    /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                        type: "text",
                        name: "link",
                        placeholder: "http://",
                        onChange: function(e) {
                            return setConfig({
                                link: e.target.value
                            });
                        },
                        value: config.link || ""
                    })
                ]
            })
        ]
    });
};
var __WEBPACK_DEFAULT_EXPORT__ = App;
}),

}]);
//# sourceMappingURL=990.js.map