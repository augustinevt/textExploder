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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  /* border: solid; */\n  padding-top: 20px;\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var Items = _styledComponents["default"].div(_templateObject2());

var AddButton = _styledComponents["default"].div(_templateObject3());

var AddButtonContainer = _styledComponents["default"].div(_templateObject4());

function _default(_ref) {
  var ItemComponent = _ref.ItemComponent,
      itemProps = _ref.itemProps,
      data = _ref.data,
      addItem = _ref.addItem,
      removeItem = _ref.removeItem,
      NewItemComponent = _ref.NewItemComponent,
      newItemProps = _ref.newItemProps;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      add = _useState2[0],
      setAdd = _useState2[1];

  console.log(itemProps);

  var addListItem = function addListItem(val) {
    addItem(val);
    setAdd(false);
  };

  var InputForm = NewItemComponent ? NewItemComponent : ItemComponent;
  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(Items, null, // NOTE: => fix the data prop!!!
  data ? data.map(function (item) {
    return _react["default"].createElement(ItemComponent, _extends({}, item, itemProps, {
      data: item,
      addItem: addListItem,
      removeItem: removeItem
    }));
  }) : "no items", add && _react["default"].createElement(InputForm, _extends({
    text: ''
  }, itemProps, newItemProps, {
    itemProps: itemProps,
    edit: true,
    id: 77,
    setAdd: setAdd,
    addItem: addListItem,
    removeItem: removeItem
  })), _react["default"].createElement(AddButtonContainer, null, _react["default"].createElement(AddButton, {
    onClick: function onClick() {
      return setAdd(true);
    }
  }, "+"))));
}