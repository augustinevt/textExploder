"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uuid = _interopRequireDefault(require("uuid"));

var _List = _interopRequireDefault(require("./List"));

var _Goals = _interopRequireDefault(require("./Goals"));

var _Modal = _interopRequireDefault(require("./Modal"));

var _Button = _interopRequireDefault(require("./Button"));

var _Text = _interopRequireDefault(require("./Text"));

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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  text-align: left;\n  width: 100%;\n  margin: 20px;\n  margin-left: 0px;\n  font-weight: bold;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-wrap: wrap;\n  border: solid;\n  padding: 10px;\n  margin: 10px;\n  color: ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0px -4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  border: solid;\n  padding: 20px;\n  margin-bottom: 4px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /* border: solid; */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var InnerWrapper = _styledComponents["default"].div(_templateObject2());

var ButtonContainer = _styledComponents["default"].div(_templateObject3());

var TemplateSelectContainer = _styledComponents["default"].div(_templateObject4());

var TemplateOption = _styledComponents["default"].div(_templateObject5(), function (_ref) {
  var active = _ref.active;
  return active ? 'black' : 'grey';
});

var TitleContainer = _styledComponents["default"].div(_templateObject6());

var DoneButton = _styledComponents["default"].div(_templateObject7());

function _default(_ref2) {
  var addItem = _ref2.addItem,
      removeItem = _ref2.removeItem,
      setAdd = _ref2.setAdd,
      templates = _ref2.templates;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      flowStep = _useState2[0],
      setFlowStep = _useState2[1];

  var _useState3 = (0, _react.useState)('Add a label...'),
      _useState4 = _slicedToArray(_useState3, 2),
      label = _useState4[0],
      setLabel = _useState4[1];

  var _useState5 = (0, _react.useState)([{
    id: (0, _uuid["default"])(),
    text: 'Introduce Topic'
  }]),
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
          v1: _toConsumableArray(goals)
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

  var selectTemplate = function selectTemplate(selectedTemplate) {
    if (template && selectedTemplate.id === template.id) {
      var newGoals = clearGoals(template);
      setTemplate(false);
      setGoals(_toConsumableArray(newGoals));
    } else if (template) {
      var _newGoals = clearGoals(template);

      setTemplate(selectedTemplate);
      setGoals([].concat(_toConsumableArray(selectedTemplate.goals.v1), _toConsumableArray(_newGoals)));
    } else {
      setTemplate(selectedTemplate);
      setGoals([].concat(_toConsumableArray(selectedTemplate.goals.v1), _toConsumableArray(goals)));
    }
  };

  var clearGoals = function clearGoals(template) {
    return goals.filter(function (newGoals) {
      var keepGoal = true;
      template && template.goals.v1.forEach(function (templateGoals) {
        if (templateGoals.id === newGoals.id) keepGoal = false;
      });
      return keepGoal;
    });
  };

  var addGoal = function addGoal(_ref3) {
    var text = _ref3.text,
        id = _ref3.id;
    var newGoals = [];

    if (id) {
      newGoals = goals.map(function (goal) {
        return goal.id === id ? {
          text: text,
          id: id
        } : goal;
      });
      console.log(" HAD ID", goals.id, id);
    } else {
      console.log(" HAD NO ID");
      newGoals = [].concat(_toConsumableArray(goals), [{
        text: text,
        id: id
      }]);
    }

    setGoals(newGoals);
  };

  return _react["default"].createElement(Wrapper, null, _react["default"].createElement(InnerWrapper, null, _react["default"].createElement(TitleContainer, null, _react["default"].createElement(_Text["default"], {
    text: 'Add Label...',
    edit: true,
    init: true,
    addItemHandler: function addItemHandler(value) {
      return setLabel(value);
    }
  })), _react["default"].createElement(TitleContainer, null, "Add Template:"), _react["default"].createElement(TemplateSelectContainer, null, templates.map(function (templateItem) {
    return _react["default"].createElement(TemplateOption, {
      active: template && template.id === templateItem.id,
      onClick: function onClick() {
        selectTemplate(templateItem);
        setFlowStep(2);
      }
    }, " ", templateItem.label, " ");
  })), _react["default"].createElement(TitleContainer, null, "Add Goals:"), _react["default"].createElement(_List["default"], {
    data: goals,
    ItemComponent: _Goals["default"],
    newItemProps: {
      text: 'Add Goal',
      init: true
    },
    addItem: addGoal,
    removeItem: function removeItem(goalId) {
      return setGoals(goals.filter(function (_ref4) {
        var id = _ref4.id;
        return id !== goalId;
      }));
    }
  }), template && _react["default"].createElement(_Modal["default"], {
    data: template,
    explode: false
  })), _react["default"].createElement(ButtonContainer, null, _react["default"].createElement(_Button["default"], {
    text: 'Cancel',
    onClick: function onClick() {
      return setAdd(false);
    }
  }), _react["default"].createElement(_Button["default"], {
    text: 'Back',
    onClick: function onClick() {
      return setFlowStep(1);
    }
  }), _react["default"].createElement(DoneButton, null, _react["default"].createElement(_Button["default"], {
    text: 'Done',
    onClick: addParagraph
  }))));
}