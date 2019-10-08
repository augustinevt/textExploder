"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _List = _interopRequireDefault(require("./List"));

var _Goals = _interopRequireDefault(require("./Goals"));

var _Modal = _interopRequireDefault(require("./Modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

function _default(_ref) {
  var addItem = _ref.addItem,
      removeItem = _ref.removeItem,
      setAdd = _ref.setAdd,
      templates = _ref.templates;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      flowStep = _useState2[0],
      setFlowStep = _useState2[1];

  var _useState3 = (0, _react.useState)('Add a label...'),
      _useState4 = _slicedToArray(_useState3, 2),
      label = _useState4[0],
      setLabel = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      goals = _useState6[0],
      setGoals = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      template = _useState8[0],
      setTemplate = _useState8[1];

  var addParagraph = function addParagraph() {
    var newParagraph = {};

    if (template) {
      newParagraph = _objectSpread({}, template, {
        goals: {
          v1: [].concat(_toConsumableArray(template.goals.v1), _toConsumableArray(goals))
        },
        label: label
      });
    } else {
      newParagraph = {
        label: label,
        goals: {
          v1: _toConsumableArray(goals)
        },
        snippets: [],
        sentences: {
          v1: []
        }
      };
    }

    addItem(newParagraph);
  };

  var getJSX = function getJSX() {
    if (flowStep === 0) {
      return _react["default"].createElement("div", null, _react["default"].createElement(_List["default"], {
        data: goals,
        ItemComponent: _Goals["default"],
        addItem: function addItem(newGoal) {
          return setGoals([].concat(_toConsumableArray(goals), [newGoal]));
        },
        removeItem: function removeItem(goalId) {
          return setGoals(goals.filter(function (_ref2) {
            var id = _ref2.id;
            return id !== goalId;
          }));
        }
      }), _react["default"].createElement("div", null, _react["default"].createElement("button", {
        onClick: function onClick() {
          return setAdd(false);
        }
      }, "Cancel"), _react["default"].createElement("button", {
        onClick: function onClick() {
          return setFlowStep(1);
        }
      }, "Templates"), _react["default"].createElement("button", {
        onClick: addParagraph
      }, "Done")));
    } else if (flowStep === 1) {
      return _react["default"].createElement("div", null, templates.map(function (template) {
        return _react["default"].createElement("span", {
          onClick: function onClick() {
            setTemplate(template);
            setFlowStep(2);
          }
        }, " ", template.label, " ");
      }), _react["default"].createElement("div", null, _react["default"].createElement("button", {
        onClick: function onClick() {
          return setAdd(false);
        }
      }, "Cancel"), _react["default"].createElement("button", {
        onClick: function onClick() {
          return setFlowStep(0);
        }
      }, "Back"), _react["default"].createElement("button", {
        onClick: addParagraph
      }, "Done")));
    } else {
      return _react["default"].createElement("div", null, _react["default"].createElement(_Modal["default"], {
        data: template
      }), _react["default"].createElement("div", null, _react["default"].createElement("button", {
        onClick: function onClick() {
          return setAdd(false);
        }
      }, "Cancel"), _react["default"].createElement("button", {
        onClick: function onClick() {
          return setFlowStep(1);
        }
      }, "Back"), _react["default"].createElement("button", {
        onClick: addParagraph
      }, "Done")));
    }
  };

  return _react["default"].createElement(Wrapper, null, _react["default"].createElement("label", null, " name "), _react["default"].createElement("input", {
    value: label,
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return setLabel(value);
    }
  }), template ? "Using template ".concat(template.label) : 'no template', _react["default"].createElement("button", {
    onClick: function onClick() {
      setTemplate(false);
      setFlowStep(0);
    }
  }, " Clear Template "), getJSX());
}