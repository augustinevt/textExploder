"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uuid = _interopRequireDefault(require("uuid"));

var _NewParagraph = _interopRequireDefault(require("./NewParagraph"));

var _List = _interopRequireDefault(require("./List"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  justify-content: center;\n  display: flex;\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 40px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  flex-wrap: nowrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  padding: 30px;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var DocHeader = _styledComponents["default"].div(_templateObject2());

var Title = _styledComponents["default"].div(_templateObject3());

var Body = _styledComponents["default"].div(_templateObject4());

var templates = [{
  label: "Opinion",
  id: 'asdf9d8s09d8f',
  goals: {
    v1: [{
      text: 'v2',
      id: 23
    }, {
      text: 'Oh the pain',
      id: 35
    }, {
      text: 'concddlude',
      id: 67
    }]
  },
  sentences: {
    v1: [{
      id: 1,
      text: 'Arco claims to have eaten something like "------"(p. 119)'
    }, {
      id: 30,
      text: 'Food is poop.'
    }, {
      id: 31,
      text: 'Food is snoopdog.'
    }]
  },
  snippets: []
}, {
  label: "Support",
  id: '9d8sasdf09d8f',
  goals: {
    v1: [{
      text: 'v1',
      id: 23
    }, {
      text: 'explain uondl',
      id: 35
    }, {
      text: 'concddlude',
      id: 67
    }]
  },
  sentences: {
    v1: [{
      id: 1,
      text: 'Food is fruad.'
    }, {
      id: 30,
      text: 'Food is meat.'
    }, {
      id: 31,
      text: 'Food is plant.'
    }]
  },
  snippets: []
}];

function _default(_ref) {
  var data = _ref.data,
      back = _ref.back;

  var _useState = (0, _react.useState)(data.paragraphs),
      _useState2 = _slicedToArray(_useState, 2),
      paragraphs = _useState2[0],
      setParagraphs = _useState2[1];

  var addParagraph = function addParagraph(newParagraph) {
    newParagraph.id = (0, _uuid["default"])();
    paragraphs.push(newParagraph);
  };

  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(DocHeader, null, _react["default"].createElement("div", {
    onClick: function onClick() {
      return back();
    }
  }, " < Back "), _react["default"].createElement(Title, null, " ", data.name, " ")), _react["default"].createElement(Body, null, _react["default"].createElement(_List["default"], {
    data: data.paragraphs,
    ItemComponent: _Modal["default"],
    NewItemComponent: _NewParagraph["default"],
    newItemProps: {
      templates: templates
    },
    addItem: function addItem(val) {
      return addParagraph(val);
    },
    removeItem: function removeItem(val) {
      return console.log('');
    }
  })));
}