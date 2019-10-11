"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 5%;\n  color: red;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 95%;\n  justify-content: flex-start;\n  padding: 8px 8px;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 8px;\n  /* box-shadow: 0px 0px 10px 5px lightgrey; */\n  border-radius: 5px;\n  /* padding: 8px 2px; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var Text = _styledComponents["default"].div(_templateObject2());

var Remove = _styledComponents["default"].div(_templateObject3());

function _default(_ref) {
  var id = _ref.id,
      text = _ref.text,
      init = _ref.init,
      edit = _ref.edit,
      addItem = _ref.addItem,
      removeItem = _ref.removeItem;

  var _useState = (0, _react.useState)(edit),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1];

  var _useState3 = (0, _react.useState)(text),
      _useState4 = _slicedToArray(_useState3, 2),
      newText = _useState4[0],
      setNewText = _useState4[1];

  var onChange = function onChange(_ref2) {
    var value = _ref2.target.value;
    setNewText(value);
  };

  var _addItemHandler = function addItemHandler(inputText) {
    addItem({
      text: inputText,
      id: id
    });
  };

  var removeItemHandler = function removeItemHandler() {
    removeItem(id);
  };

  var onKeyPress = function onKeyPress(e) {
    e.preventDefault();

    if (e.keyCode == 13) {
      _addItemHandler();

      setIsEditing(false);
    }
  };

  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Text, null, _react["default"].createElement(_Text["default"], {
    onClick: function onClick() {
      return setIsEditing(true);
    },
    id: id,
    edit: isEditing,
    text: text,
    init: init,
    addItemHandler: function addItemHandler(val) {
      return _addItemHandler(val);
    }
  })), _react["default"].createElement(Remove, null, _react["default"].createElement("div", {
    onClick: function onClick() {
      return removeItem(id);
    }
  }, "x")));
}