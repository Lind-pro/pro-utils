import "antd/es/form/style";
import _Form from "antd/es/form";
import "antd/es/popover/style";
import _Popover from "antd/es/popover";
import "antd/es/space/style";
import _Space from "antd/es/space";
import "antd/es/progress/style";
import _Progress from "antd/es/progress";
var _excluded = ["label", "rules", "name", "children", "popoverProps", "progressProps", "form"],
    _excluded2 = ["errorType", "rules", "name", "popoverProps", "children", "progressProps"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import { CheckCircleFilled, CloseCircleFilled, LoadingOutlined } from '@ant-design/icons';
var RED = '#ff4d4f';
var YELLOW = '#faad14';
var GREEN = '#52c41a';
var PRIMARY = '#1890ff';
var COLORS = {
  RED: RED,
  YELLOW: YELLOW,
  GREEN: GREEN,
  PRIMARY: PRIMARY
};

var getStrokeColor = function getStrokeColor(percent) {
  if (percent < 50) {
    return COLORS.RED;
  }

  if (percent < 100) {
    return COLORS.YELLOW;
  }

  return COLORS.GREEN;
};

var CircleRender = function CircleRender() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '4px',
      backgroundColor: 'rgba(0,0,0,0.45)'
    }
  }));
};

var getIcon = function getIcon(fieldError, rule, isTouched, requiredChecked) {
  if (!isTouched) {
    return /*#__PURE__*/React.createElement(CircleRender, null);
  }

  if (!requiredChecked) {
    return /*#__PURE__*/React.createElement(CloseCircleFilled, {
      style: {
        color: COLORS.RED
      }
    });
  }

  if (fieldError.includes(rule.message)) {
    return /*#__PURE__*/React.createElement(CloseCircleFilled, {
      style: {
        color: COLORS.RED
      }
    });
  }

  return /*#__PURE__*/React.createElement(CheckCircleFilled, {
    style: {
      color: COLORS.GREEN
    }
  });
};

var Content = function Content(_ref) {
  var rules = _ref.rules,
      isTouched = _ref.isTouched,
      isValidating = _ref.isValidating,
      value = _ref.value,
      fieldError = _ref.fieldError,
      progressProps = _ref.progressProps;
  var percent = Math.max(0, Math.min(100, (rules.length - fieldError.length) / rules.length * 100));
  var isSingleRule = rules.length === 1;
  var requiredRule = rules.filter(function (_) {
    return _.required;
  })[0];
  var hasRequired = !!requiredRule;
  var requiredChecked = hasRequired && !fieldError.includes(requiredRule === null || requiredRule === void 0 ? void 0 : requiredRule.message);
  return /*#__PURE__*/React.createElement("div", {
    style: isSingleRule ? {} : {
      padding: '6px 8px 12px 8px'
    }
  }, (progressProps === undefined || progressProps) && /*#__PURE__*/React.createElement(_Progress, _extends({
    percent: value && isTouched ? percent : 0,
    strokeColor: getStrokeColor(percent),
    showInfo: false,
    size: "small",
    strokeLinecap: 'butt'
  }, progressProps)), /*#__PURE__*/React.createElement("ul", {
    style: isSingleRule ? {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    } : {
      margin: 0,
      marginTop: '10px',
      listStyle: 'none',
      padding: '0'
    }
  }, rules === null || rules === void 0 ? void 0 : rules.map(function (rule, idx) {
    return /*#__PURE__*/React.createElement("li", {
      key: idx,
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(_Space, null, isValidating ? /*#__PURE__*/React.createElement(LoadingOutlined, {
      style: {
        color: COLORS.PRIMARY
      }
    }) : getIcon(fieldError, rule, isTouched, hasRequired ? requiredChecked : true), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'rgba(0,0,0,0.65)'
      }
    }, rule.message)));
  })));
};

var FIX_INLINE_STYLE = {
  marginTop: -5,
  marginBottom: -5,
  marginLeft: 0,
  marginRight: 0
};

var InternalFormItem = function InternalFormItem(_ref2) {
  var label = _ref2.label,
      rules = _ref2.rules,
      name = _ref2.name,
      children = _ref2.children,
      popoverProps = _ref2.popoverProps,
      progressProps = _ref2.progressProps,
      form = _ref2.form,
      rest = _objectWithoutProperties(_ref2, _excluded);

  var fieldError = form.getFieldError(name);
  var value = form.getFieldValue(name);
  var isValidating = form.isFieldValidating(name);
  var isTouched = form.isFieldTouched(name);

  var _useState = useState(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  return /*#__PURE__*/React.createElement(_Form.Item, _extends({
    style: FIX_INLINE_STYLE,
    preserve: false,
    name: name,
    validateFirst: false,
    rules: rules // @ts-ignore
    ,
    _internalItemRender: {
      mark: 'pro_table_render',
      render: function render(inputProps, _ref3) {
        var input = _ref3.input,
            extra = _ref3.extra;
        return /*#__PURE__*/React.createElement(_Popover, {
          trigger: (popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.trigger) || 'focus',
          placement: popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.placement,
          visible: visible,
          onVisibleChange: setVisible,
          content: /*#__PURE__*/React.createElement(Content, {
            fieldError: fieldError,
            value: value,
            isValidating: isValidating,
            isTouched: isTouched,
            rules: rules,
            progressProps: progressProps
          })
        }, /*#__PURE__*/React.createElement("div", null, input, extra));
      }
    }
  }, rest), children);
};

var InlineErrorFormItem = function InlineErrorFormItem(props) {
  return /*#__PURE__*/React.createElement(_Form.Item, {
    shouldUpdate: true,
    noStyle: true
  }, function (form) {
    return /*#__PURE__*/React.createElement(InternalFormItem, _extends({}, props, {
      form: form
    }));
  });
};

export default (function (props) {
  var errorType = props.errorType,
      rules = props.rules,
      name = props.name,
      popoverProps = props.popoverProps,
      children = props.children,
      progressProps = props.progressProps,
      rest = _objectWithoutProperties(props, _excluded2);

  if (name && (rules === null || rules === void 0 ? void 0 : rules.length) && errorType === 'popover') {
    return /*#__PURE__*/React.createElement(InlineErrorFormItem, _extends({
      name: name,
      rules: rules,
      popoverProps: popoverProps,
      progressProps: rules.length > 1 ? progressProps : false
    }, rest), children);
  }

  return /*#__PURE__*/React.createElement(_Form.Item, _extends({
    rules: rules
  }, rest, {
    style: _objectSpread(_objectSpread({}, FIX_INLINE_STYLE), rest.style),
    name: name
  }), children);
});