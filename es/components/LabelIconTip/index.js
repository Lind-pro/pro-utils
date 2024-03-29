import "antd/es/tooltip/style";
import _Tooltip from "antd/es/tooltip";
import "antd/es/config-provider/style";
import _ConfigProvider from "antd/es/config-provider";
import React, { useContext } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import './index.less';
/**
 * 在 form 的 label 后面增加一个 tips 来展示一些说明文案
 *
 * @param props
 */

var LabelIconTip = function LabelIconTip(props) {
  var label = props.label,
      tooltip = props.tooltip,
      subTitle = props.subTitle;

  var _useContext = useContext(_ConfigProvider.ConfigContext),
      getPrefixCls = _useContext.getPrefixCls;

  if (!tooltip && !subTitle) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, label);
  }

  var className = getPrefixCls('pro-core-label-tip');
  var tooltipProps = typeof tooltip === 'string' || /*#__PURE__*/React.isValidElement(tooltip) ? {
    title: tooltip
  } : tooltip;
  var icon = (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.icon) || /*#__PURE__*/React.createElement(InfoCircleOutlined, null);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.stopPropagation();
    },
    onMouseMove: function onMouseMove(e) {
      return e.stopPropagation();
    }
  }, label, subTitle && /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, "-subtitle")
  }, subTitle), tooltip && /*#__PURE__*/React.createElement(_Tooltip, tooltipProps, /*#__PURE__*/React.createElement("span", {
    className: "".concat(className, "-icon")
  }, icon)));
};

export default /*#__PURE__*/React.memo(LabelIconTip);