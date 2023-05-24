"use strict";

exports.__esModule = true;
exports.default = exports.ReactReduxContext = void 0;

var _react = require("react");

const ReactReduxContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.ReactReduxContext = ReactReduxContext;

if (process.env.NODE_ENV !== 'production') {
  ReactReduxContext.displayName = 'ReactRedux';
}

var _default = ReactReduxContext;
exports.default = _default;