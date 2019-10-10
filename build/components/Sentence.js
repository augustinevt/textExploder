"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n  width: 5%;\n  color: red;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  margin-right: ", ";\n\n  margin-bottom: ", ";\n  margin-right: ", ";\n  padding: ", ";\n  border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].span(_templateObject(), function (_ref) {
  var mode = _ref.mode;
  return mode === 2 ? '0px' : '4px';
}, function (_ref2) {
  var mode = _ref2.mode;
  return mode === 2 ? '8px' : '8px';
}, function (_ref3) {
  var mode = _ref3.mode;
  return mode === 2 ? '8px' : '0px';
}, function (_ref4) {
  var mode = _ref4.mode;
  return mode === 2 ? '10px' : '0px';
});

var Text = _styledComponents["default"].span(_templateObject2());

var Remove = _styledComponents["default"].span(_templateObject3());

function _default(_ref5) {
  var id = _ref5.id,
      text = _ref5.text,
      edit = _ref5.edit,
      addItem = _ref5.addItem,
      removeItem = _ref5.removeItem,
      mode = _ref5.mode;

  var _useState = (0, _react.useState)(edit),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0, _react.useState)(text),
      _useState4 = _slicedToArray(_useState3, 2),
      newText = _useState4[0],
      setNewText = _useState4[1];

  console.log(mode);

  var onChange = function onChange(_ref6) {
    var value = _ref6.target.value;
    setNewText(value);
  };

  var addItemHandler = function addItemHandler() {
    addItem({
      text: newText,
      id: id
    });
  };

  var removeItemHandler = function removeItemHandler() {
    removeItem(id);
  };

  var onKeyPress = function onKeyPress(e) {
    e.preventDefault();

    if (e.keyCode == 13) {
      addItemHandler();
      setIsEditing(false);
    }
  };

  return _react["default"].createElement(Wrapper, {
    mode: mode
  }, _react["default"].createElement(Text, {
    mode: mode
  }, isEditing ? _react["default"].createElement("input", {
    value: newText,
    onKeyUp: onKeyPress,
    onChange: onChange
  }) : _react["default"].createElement("span", {
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, text)), mode === 2 ? _react["default"].createElement(Remove, null, _react["default"].createElement("span", {
    onClick: function onClick() {
      return removeItem(id);
    }
  }, "x")) : null);
}