"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SaveEditableAction = SaveEditableAction;
exports.defaultActionRender = defaultActionRender;
exports.default = exports.DeleteEditableAction = exports.recordKeyToString = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useMergedState3 = _interopRequireDefault(require("rc-util/lib/hooks/useMergedState"));

var _useLazyKVMap3 = _interopRequireDefault(require("antd/lib/table/hooks/useLazyKVMap"));

var _icons = require("@ant-design/icons");

var _proProvider = require("@ant-design/pro-provider");

var _antd = require("antd");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _set = _interopRequireDefault(require("rc-util/lib/utils/set"));

var _useMountMergeState5 = _interopRequireDefault(require("../useMountMergeState"));

var _ProFormContext = _interopRequireDefault(require("../components/ProFormContext"));

var _ = require("..");

var _excluded = ["map_row_parentKey", "map_row_key"],
    _excluded2 = ["map_row_key"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var recordKeyToString = function recordKeyToString(rowKey) {
  if (Array.isArray(rowKey)) return rowKey.join(',');
  return rowKey;
};
/**
 * 使用map 来删除数据，性能一般 但是准确率比较高
 *
 * @param params
 * @param action
 */


exports.recordKeyToString = recordKeyToString;

function editableRowByKey(params, action) {
  var _recordKeyToString;

  var getRowKey = params.getRowKey,
      row = params.row,
      data = params.data,
      childrenColumnName = params.childrenColumnName;
  var key = (_recordKeyToString = recordKeyToString(params.key)) === null || _recordKeyToString === void 0 ? void 0 : _recordKeyToString.toString();
  var kvMap = new Map();
  /**
   * 打平这个数组
   *
   * @param records
   * @param parentKey
   */

  function dig(records, map_row_parentKey) {
    records.forEach(function (record, index) {
      var recordKey = getRowKey(record, index).toString(); // children 取在前面方便拼的时候按照反顺序放回去

      if (record && _typeof(record) === 'object' && childrenColumnName in record) {
        dig(record[childrenColumnName] || [], recordKey);
      }

      var newRecord = _objectSpread(_objectSpread({}, record), {}, {
        map_row_key: recordKey,
        children: undefined,
        map_row_parentKey: map_row_parentKey
      });

      delete newRecord.children;

      if (!map_row_parentKey) {
        delete newRecord.map_row_parentKey;
      }

      kvMap.set(recordKey, newRecord);
    });
  }

  dig(data);

  if (action === 'update') {
    kvMap.set(key, _objectSpread(_objectSpread({}, kvMap.get(key)), row));
  }

  if (action === 'delete') {
    kvMap.delete(key);
  }

  var fill = function fill(map) {
    var kvArrayMap = new Map();
    var kvSource = [];
    map.forEach(function (value) {
      if (value.map_row_parentKey) {
        // @ts-ignore
        var map_row_parentKey = value.map_row_parentKey,
            map_row_key = value.map_row_key,
            reset = _objectWithoutProperties(value, _excluded);

        if (kvArrayMap.has(map_row_key)) {
          reset[childrenColumnName] = kvArrayMap.get(map_row_key);
        }

        kvArrayMap.set(map_row_parentKey, [].concat(_toConsumableArray(kvArrayMap.get(map_row_parentKey) || []), [reset]));
        return;
      }

      if (!value.map_row_parentKey) {
        // @ts-ignore
        var _map_row_key = value.map_row_key,
            rest = _objectWithoutProperties(value, _excluded2);

        if (kvArrayMap.has(_map_row_key)) {
          var item = _objectSpread(_objectSpread({}, rest), {}, _defineProperty({}, childrenColumnName, kvArrayMap.get(_map_row_key)));

          kvSource.push(item);
          return;
        }

        kvSource.push(rest);
      }
    });
    return kvSource;
  };

  var source = fill(kvMap);
  return source;
}
/**
 * 保存按钮的dom
 *
 * @param ActionRenderConfig
 */


function SaveEditableAction(_ref) {
  var recordKey = _ref.recordKey,
      onSave = _ref.onSave,
      form = _ref.form,
      row = _ref.row,
      children = _ref.children,
      newLineConfig = _ref.newLineConfig,
      editorType = _ref.editorType;
  var context = (0, _react.useContext)(_ProFormContext.default);

  var _useMountMergeState = (0, _useMountMergeState5.default)(false),
      _useMountMergeState2 = _slicedToArray(_useMountMergeState, 2),
      loading = _useMountMergeState2[0],
      setLoading = _useMountMergeState2[1];

  return /*#__PURE__*/_react.default.createElement("a", {
    key: "save",
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var isMapEditor, namePath, fields, data, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              isMapEditor = editorType === 'Map';
              namePath = Array.isArray(recordKey) ? recordKey : [recordKey];
              setLoading(true); // @ts-expect-error

              _context.next = 6;
              return form.validateFields(namePath, {
                recursive: true
              });

            case 6:
              fields = (context.getFieldFormatValue || form.getFieldValue)(namePath);
              data = isMapEditor ? (0, _set.default)({}, namePath, fields, true) : fields; // 获取数据并保存

              _context.next = 10;
              return onSave === null || onSave === void 0 ? void 0 : onSave(recordKey, // 如果是 map 模式，fields 就是一个值，所以需要set 到对象中
              // 数据模式 fields 是一个对象，所以不需要
              (0, _lodash.default)(row, data), row, newLineConfig);

            case 10:
              res = _context.sent;
              setLoading(false);
              return _context.abrupt("return", res);

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](0);
              // eslint-disable-next-line no-console
              console.log(_context.t0);
              setLoading(false);
              return _context.abrupt("return", null);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 15]]);
    }))
  }, loading ? /*#__PURE__*/_react.default.createElement(_icons.LoadingOutlined, {
    style: {
      marginRight: 8
    }
  }) : null, children || '保存');
}
/**
 * 删除按钮 dom
 *
 * @param ActionRenderConfig
 */


var DeleteEditableAction = function DeleteEditableAction(_ref3) {
  var recordKey = _ref3.recordKey,
      onDelete = _ref3.onDelete,
      row = _ref3.row,
      children = _ref3.children,
      deletePopconfirmMessage = _ref3.deletePopconfirmMessage,
      cancelEditable = _ref3.cancelEditable;

  var _useMountMergeState3 = (0, _useMountMergeState5.default)(false),
      _useMountMergeState4 = _slicedToArray(_useMountMergeState3, 2),
      loading = _useMountMergeState4[0],
      setLoading = _useMountMergeState4[1];

  var onConfirm = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setLoading(true);
              _context2.next = 4;
              return onDelete === null || onDelete === void 0 ? void 0 : onDelete(recordKey, row);

            case 4:
              res = _context2.sent;
              setLoading(false);
              setTimeout(function () {
                cancelEditable(recordKey);
              }, 0);
              return _context2.abrupt("return", res);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              // eslint-disable-next-line no-console
              console.log(_context2.t0);
              setLoading(false);
              return _context2.abrupt("return", null);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function onConfirm() {
      return _ref4.apply(this, arguments);
    };
  }();

  return children !== false ? /*#__PURE__*/_react.default.createElement(_antd.Popconfirm, {
    key: "delete",
    title: deletePopconfirmMessage,
    onConfirm: onConfirm
  }, /*#__PURE__*/_react.default.createElement("a", null, loading ? /*#__PURE__*/_react.default.createElement(_icons.LoadingOutlined, {
    style: {
      marginRight: 8
    }
  }) : null, children || '删除')) : null;
};

exports.DeleteEditableAction = DeleteEditableAction;

var CancelEditableAction = function CancelEditableAction(props) {
  var recordKey = props.recordKey,
      newLineConfig = props.newLineConfig,
      form = props.form,
      editorType = props.editorType,
      onCancel = props.onCancel,
      cancelEditable = props.cancelEditable,
      row = props.row,
      cancelText = props.cancelText;
  var context = (0, _react.useContext)(_ProFormContext.default);
  return /*#__PURE__*/_react.default.createElement("a", {
    key: "cancel",
    onClick: /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var isMapEditor, namePath, fields, record, res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              isMapEditor = editorType === 'Map';
              namePath = Array.isArray(recordKey) ? recordKey : [recordKey];
              fields = (context.getFieldFormatValue || form.getFieldValue)(namePath);
              record = isMapEditor ? (0, _set.default)({}, namePath, fields) : fields;
              _context3.next = 6;
              return onCancel === null || onCancel === void 0 ? void 0 : onCancel(recordKey, record, row, newLineConfig);

            case 6:
              res = _context3.sent;
              cancelEditable(recordKey);
              form.setFieldsValue(row);
              return _context3.abrupt("return", res);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))
  }, cancelText || '取消');
};

function defaultActionRender(row, config) {
  var recordKey = config.recordKey,
      newLineConfig = config.newLineConfig,
      saveText = config.saveText,
      deleteText = config.deleteText;
  return [/*#__PURE__*/_react.default.createElement(SaveEditableAction, _extends({
    key: "save"
  }, config, {
    row: row
  }), saveText), (newLineConfig === null || newLineConfig === void 0 ? void 0 : newLineConfig.options.recordKey) !== recordKey ? /*#__PURE__*/_react.default.createElement(DeleteEditableAction, _extends({
    key: "delete"
  }, config, {
    row: row
  }), deleteText) : null, /*#__PURE__*/_react.default.createElement(CancelEditableAction, _extends({
    key: "cancel"
  }, config, {
    row: row
  }))];
}
/**
 * 一个方便的hooks 用于维护编辑的状态
 *
 * @param props
 */


function useEditableArray(props) {
  var _useState = (0, _react.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      newLineRecord = _useState2[0],
      setNewLineRecord = _useState2[1];

  var newLineRecordRef = (0, _react.useRef)(undefined); // 这里这么做是为了存上次的状态，不然每次存一下再拿

  newLineRecordRef.current = newLineRecord;
  var editableType = props.type || 'single';

  var _useLazyKVMap = (0, _useLazyKVMap3.default)(props.dataSource, 'children', props.getRowKey),
      _useLazyKVMap2 = _slicedToArray(_useLazyKVMap, 1),
      getRecordByKey = _useLazyKVMap2[0];

  var _useMergedState = (0, _useMergedState3.default)([], {
    value: props.editableKeys,
    onChange: props.onChange ? function (keys) {
      var _props$onChange;

      props === null || props === void 0 ? void 0 : (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, // 计算编辑的key
      keys, // 计算编辑的行
      keys.map(function (key) {
        return getRecordByKey(key);
      }));
    } : undefined
  }),
      _useMergedState2 = _slicedToArray(_useMergedState, 2),
      editableKeys = _useMergedState2[0],
      setEditableRowKeys = _useMergedState2[1];
  /** 一个用来标志的set 提供了方便的 api 来去重什么的 */


  var editableKeysSet = (0, _react.useMemo)(function () {
    var keys = editableType === 'single' ? editableKeys === null || editableKeys === void 0 ? void 0 : editableKeys.slice(0, 1) : editableKeys;
    return new Set(keys);
  }, [(editableKeys || []).join(','), editableType]);
  var editableKeysRef = (0, _.usePrevious)(editableKeys);
  /** 这行是不是编辑状态 */

  var isEditable = (0, _react.useCallback)(function (row) {
    var recordKey = props.getRowKey(row, row.index);
    var preIsEditable = editableKeysRef === null || editableKeysRef === void 0 ? void 0 : editableKeysRef.includes(recordKey);
    return {
      recordKey: recordKey,
      isEditable: editableKeys === null || editableKeys === void 0 ? void 0 : editableKeys.includes(recordKey),
      preIsEditable: preIsEditable
    };
  }, [(editableKeys || []).join(',')]);
  /**
   * 进入编辑状态
   *
   * @param recordKey
   */

  var startEditable = function startEditable(recordKey) {
    // 如果是单行的话，不允许多行编辑
    if (editableKeysSet.size > 0 && editableType === 'single') {
      _antd.message.warn(props.onlyOneLineEditorAlertMessage || '只能同时编辑一行');

      return false;
    }

    editableKeysSet.add(recordKey);
    setEditableRowKeys(Array.from(editableKeysSet));
    return true;
  };
  /**
   * 退出编辑状态
   *
   * @param recordKey
   */


  var cancelEditable = function cancelEditable(recordKey) {
    // 防止多次渲染
    _reactDom.default.unstable_batchedUpdates(function () {
      /** 如果这个是 new Line 直接删除 */
      if (newLineRecord && newLineRecord.options.recordKey === recordKey) {
        setNewLineRecord(undefined);
      }

      editableKeysSet.delete(recordKeyToString(recordKey));
      setEditableRowKeys(Array.from(editableKeysSet));
    });

    return true;
  };

  var onValuesChange = function onValuesChange(value, values) {
    var _Object$keys$pop, _newLineRecord$option;

    if (!props.onValuesChange) {
      return;
    }

    var dataSource = props.dataSource; // 这里是把正在编辑中的所有表单数据都修改掉
    // 不然会用 props 里面的 dataSource，数据只有正在编辑中的

    Object.keys(values).forEach(function (recordKey) {
      var editRow = values[recordKey.toString()];
      dataSource = editableRowByKey({
        data: dataSource,
        getRowKey: props.getRowKey,
        row: editRow,
        key: recordKey,
        childrenColumnName: props.childrenColumnName || 'children'
      }, 'update');
    });
    var recordKey = (_Object$keys$pop = Object.keys(value).pop()) === null || _Object$keys$pop === void 0 ? void 0 : _Object$keys$pop.toString();

    if (recordKey.toString() === (newLineRecord === null || newLineRecord === void 0 ? void 0 : (_newLineRecord$option = newLineRecord.options.recordKey) === null || _newLineRecord$option === void 0 ? void 0 : _newLineRecord$option.toString())) {
      cancelEditable(recordKey);
      startEditable(recordKey);
    }

    var editRow = dataSource.find(function (item, index) {
      var _props$getRowKey;

      var key = (_props$getRowKey = props.getRowKey(item, index)) === null || _props$getRowKey === void 0 ? void 0 : _props$getRowKey.toString();
      return key === recordKey;
    }) || _objectSpread(_objectSpread({}, newLineRecord === null || newLineRecord === void 0 ? void 0 : newLineRecord.defaultValue), values[recordKey]);

    props.onValuesChange(editRow, dataSource);
  };
  /**
   * 同时只能支持一行,取消之后数据消息，不会触发 dataSource
   *
   * @param row
   * @param options
   * @name 增加新的行
   */


  var addEditRecord = function addEditRecord(row, options) {
    // 暂时不支持多行新增
    if (newLineRecordRef.current) {
      _antd.message.warn(props.onlyAddOneLineAlertMessage || '只能新增一行');

      return false;
    } // 如果是单行的话，不允许多行编辑


    if (editableKeysSet.size > 0 && editableType === 'single') {
      _antd.message.warn(props.onlyOneLineEditorAlertMessage || '只能同时编辑一行');

      return false;
    } // 防止多次渲染


    _reactDom.default.unstable_batchedUpdates(function () {
      var recordKey = props.getRowKey(row, props.dataSource.length);
      editableKeysSet.add(recordKey);
      setEditableRowKeys(Array.from(editableKeysSet));

      if ((options === null || options === void 0 ? void 0 : options.newRecordType) === 'dataSource') {
        var _props$setDataSource;

        (_props$setDataSource = props.setDataSource) === null || _props$setDataSource === void 0 ? void 0 : _props$setDataSource.call(props, [].concat(_toConsumableArray(props.dataSource), [row]));
      } else {
        setNewLineRecord({
          defaultValue: row,
          options: _objectSpread(_objectSpread({}, options), {}, {
            recordKey: recordKey
          })
        });
      }
    });

    return true;
  }; // Internationalization


  var intl = (0, _proProvider.useIntl)();
  var saveText = intl.getMessage('editableTable.action.save', '保存');
  var deleteText = intl.getMessage('editableTable.action.delete', '删除');
  var cancelText = intl.getMessage('editableTable.action.cancel', '取消');

  var actionRender = function actionRender(row, form) {
    var key = props.getRowKey(row, row.index);
    var config = {
      saveText: saveText,
      cancelText: cancelText,
      deleteText: deleteText,
      addEditRecord: addEditRecord,
      recordKey: key,
      cancelEditable: cancelEditable,
      index: row.index,
      newLineConfig: newLineRecord,
      onCancel: function () {
        var _onCancel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(recordKey, editRow, originRow, newLine) {
          var _props$onCancel;

          var res;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return props === null || props === void 0 ? void 0 : (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0 ? void 0 : _props$onCancel.call(props, recordKey, editRow, originRow, newLine);

                case 2:
                  res = _context4.sent;
                  return _context4.abrupt("return", res);

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        function onCancel(_x, _x2, _x3, _x4) {
          return _onCancel.apply(this, arguments);
        }

        return onCancel;
      }(),
      onDelete: function () {
        var _onDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(recordKey, editRow) {
          var _props$onDelete;

          var actionProps, res;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  actionProps = {
                    data: props.dataSource,
                    getRowKey: props.getRowKey,
                    row: editRow,
                    key: recordKey,
                    childrenColumnName: props.childrenColumnName || 'children'
                  };
                  _context5.next = 3;
                  return props === null || props === void 0 ? void 0 : (_props$onDelete = props.onDelete) === null || _props$onDelete === void 0 ? void 0 : _props$onDelete.call(props, recordKey, editRow);

                case 3:
                  res = _context5.sent;
                  props.setDataSource(editableRowByKey(actionProps, 'delete'));
                  return _context5.abrupt("return", res);

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function onDelete(_x5, _x6) {
          return _onDelete.apply(this, arguments);
        }

        return onDelete;
      }(),
      onSave: function () {
        var _onSave = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(recordKey, editRow, originRow, newLine) {
          var _props$onSave;

          var _ref6, options, res, actionProps;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _ref6 = newLine || {}, options = _ref6.options;
                  _context6.next = 3;
                  return props === null || props === void 0 ? void 0 : (_props$onSave = props.onSave) === null || _props$onSave === void 0 ? void 0 : _props$onSave.call(props, recordKey, editRow, originRow, newLine);

                case 3:
                  res = _context6.sent;
                  // 保存时解除编辑模式
                  cancelEditable(recordKey);

                  if (!(newLine && (options === null || options === void 0 ? void 0 : options.recordKey) === recordKey)) {
                    _context6.next = 8;
                    break;
                  }

                  if ((options === null || options === void 0 ? void 0 : options.position) === 'top') {
                    props.setDataSource([editRow].concat(_toConsumableArray(props.dataSource)));
                  } else {
                    props.setDataSource([].concat(_toConsumableArray(props.dataSource), [editRow]));
                  }

                  return _context6.abrupt("return", res);

                case 8:
                  actionProps = {
                    data: props.dataSource,
                    getRowKey: props.getRowKey,
                    row: editRow,
                    key: recordKey,
                    childrenColumnName: props.childrenColumnName || 'children'
                  };
                  props.setDataSource(editableRowByKey(actionProps, 'update'));
                  return _context6.abrupt("return", res);

                case 11:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6);
        }));

        function onSave(_x7, _x8, _x9, _x10) {
          return _onSave.apply(this, arguments);
        }

        return onSave;
      }(),
      form: form,
      editableKeys: editableKeys,
      setEditableRowKeys: setEditableRowKeys,
      deletePopconfirmMessage: props.deletePopconfirmMessage || '删除此行？'
    };
    var defaultDoms = defaultActionRender(row, config);
    if (props.actionRender) return props.actionRender(row, config, {
      save: defaultDoms[0],
      delete: defaultDoms[1],
      cancel: defaultDoms[2]
    });
    return defaultDoms;
  };

  return {
    editableKeys: editableKeys,
    setEditableRowKeys: setEditableRowKeys,
    isEditable: isEditable,
    actionRender: actionRender,
    startEditable: startEditable,
    cancelEditable: cancelEditable,
    addEditRecord: addEditRecord,
    newLineRecord: newLineRecord,
    preEditableKeys: editableKeysRef,
    onValuesChange: onValuesChange
  };
}

var _default = useEditableArray;
exports.default = _default;