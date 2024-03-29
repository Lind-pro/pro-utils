"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _DropdownFooter = _interopRequireDefault(require("../DropdownFooter"));

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FilterDropdown = function FilterDropdown(props) {
  var children = props.children,
      label = props.label,
      footer = props.footer,
      disabled = props.disabled,
      onVisibleChange = props.onVisibleChange,
      visible = props.visible,
      footerRender = props.footerRender;

  var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  var prefixCls = getPrefixCls('pro-core-field-dropdown');
  return /*#__PURE__*/_react.default.createElement(_antd.Dropdown, {
    disabled: disabled,
    trigger: ['click'],
    visible: visible,
    onVisibleChange: onVisibleChange,
    overlay: /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-overlay")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-content")
    }, children), footer && /*#__PURE__*/_react.default.createElement(_DropdownFooter.default, _extends({
      disabled: disabled,
      footerRender: footerRender
    }, footer)))
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "".concat(prefixCls, "-label")
  }, label));
};

var _default = FilterDropdown;
exports.default = _default;