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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    color: black;\n\n  }\n\n  &:active, &:focus {\n    color: black;\n    border: none;\n    outline: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Inter = _styledComponents["default"].span(_templateObject(), function (_ref) {
  var init = _ref.init;
  return init ? 'black' : 'grey';
});

function _default(_ref2) {
  var text = _ref2.text,
      id = _ref2.id,
      addItemHandler = _ref2.addItemHandler,
      edit = _ref2.edit,
      init = _ref2.init,
      _ref2$onClick = _ref2.onClick,
      _onClick = _ref2$onClick === void 0 ? function () {} : _ref2$onClick;

  var _useState = (0, _react.useState)(text),
      _useState2 = _slicedToArray(_useState, 2),
      newText = _useState2[0],
      setNewText = _useState2[1];

  var onChange = function onChange(_ref3) {
    var innerHTML = _ref3.target.innerHTML;
    console.log('=> ', id);
    setNewText(innerHTML);
  };

  var changeHandler = function changeHandler() {
    addItemHandler(newText);
  };

  var onKeyPress = function onKeyPress(e) {
    if (e.keyCode == 13) {
      event.returnValue = false;
      e.preventDefault();
    }
  };

  return _react["default"].createElement(Inter, {
    onClick: function onClick() {
      return !edit && _onClick();
    },
    init: init,
    contentEditable: edit,
    dangerouslySetInnerHTML: {
      __html: text
    },
    onBlur: function onBlur() {
      return changeHandler();
    },
    onKeyDown: onKeyPress,
    onInput: onChange
  });
}