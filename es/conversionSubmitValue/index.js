function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import moment from 'moment';
import get from "rc-util/es/utils/get";
import isNil from '../isNil';
var dateFormatterMap = {
  time: 'HH:mm:ss',
  timeRange: 'HH:mm:ss',
  date: 'YYYY-MM-DD',
  dateWeek: 'YYYY-wo',
  dateMonth: 'YYYY-MM',
  dateQuarter: 'YYYY-QQ',
  dateYear: 'YYYY',
  dateRange: 'YYYY-MM-DD',
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  dateTimeRange: 'YYYY-MM-DD HH:mm:ss'
};

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

export function isPlainObject(o) {
  if (isObject(o) === false) return false; // If has modified constructor

  var ctor = o.constructor;
  if (ctor === undefined) return true; // If has modified prototype

  var prot = ctor.prototype;
  if (isObject(prot) === false) return false; // If constructor does not have an Object-specific method

  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  } // Most likely a plain Object


  return true;
}
/**
 * 根据不同的格式转化 moment
 *
 * @param value
 * @param dateFormatter
 * @param valueType
 */

var convertMoment = function convertMoment(value, dateFormatter, valueType) {
  if (!dateFormatter) {
    return value;
  }

  if (moment.isMoment(value)) {
    if (dateFormatter === 'number') {
      return value.valueOf();
    }

    if (dateFormatter === 'string') {
      return value.format(dateFormatterMap[valueType] || 'YYYY-MM-DD HH:mm:ss');
    }

    if (typeof dateFormatter === 'string' && dateFormatter !== 'string') {
      return value.format(dateFormatter);
    }
  }

  return value;
};
/**
 * 这里主要是来转化一下数据 将 moment 转化为 string 将 all 默认删除
 *
 * @param value
 * @param dateFormatter
 * @param proColumnsMap
 */


var conversionSubmitValue = function conversionSubmitValue(value, dateFormatter, valueTypeMap, omitNil, parentKey) {
  var tmpValue = {}; // 如果 value 是 string | null | Blob类型 其中之一，直接返回
  // 形如 {key: [File, File]} 的表单字段当进行第二次递归时会导致其直接越过 typeof value !== 'object' 这一判断 https://github.com/ant-design/pro-components/issues/2071

  if (_typeof(value) !== 'object' || isNil(value) || value instanceof Blob || Array.isArray(value)) {
    return value;
  }

  Object.keys(value).forEach(function (key) {
    var namePath = parentKey ? [parentKey, key].flat(1) : [key];
    var valueFormatMap = get(valueTypeMap, namePath) || 'text';
    var valueType = 'text';
    var dateFormat;

    if (typeof valueFormatMap === 'string') {
      valueType = valueFormatMap;
    } else if (valueFormatMap) {
      valueType = valueFormatMap.valueType;
      dateFormat = valueFormatMap.dateFormat;
    }

    var itemValue = value[key];

    if (isNil(itemValue) && omitNil) {
      return;
    } // 处理嵌套的情况


    if (isPlainObject(itemValue) && // 不是数组
    !Array.isArray(itemValue) && // 不是 moment
    !moment.isMoment(itemValue)) {
      tmpValue[key] = conversionSubmitValue(itemValue, dateFormatter, valueTypeMap, omitNil, [key]);
      return;
    } // 处理 FormList 的 value


    if (Array.isArray(itemValue)) {
      tmpValue[key] = itemValue.map(function (arrayValue, index) {
        if (moment.isMoment(arrayValue)) {
          return convertMoment(arrayValue, dateFormat || dateFormatter, valueType);
        }

        return conversionSubmitValue(arrayValue, dateFormatter, valueTypeMap, omitNil, [key, "".concat(index)]);
      });
      return;
    }

    tmpValue[key] = convertMoment(itemValue, dateFormat || dateFormatter, valueType);
  });
  return tmpValue;
};

export default conversionSubmitValue;