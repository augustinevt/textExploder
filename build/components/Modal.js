"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _List = _interopRequireDefault(require("./List"));

var _Sentence = _interopRequireDefault(require("./Sentence"));

var _Goals = _interopRequireDefault(require("./Goals"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  /* box-shadow: 0px 0px 10px 5px lightgrey;\n  border-radius: 9px;\n  padding: 8px; */\n  margin-bottom: 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: 0px 0px 10px 5px lightgrey;\n  border-radius: 9px;\n  padding: 8px;\n  margin-bottom: 20px;\n  display:flex;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding: 0px 10px;\n  /* visibility: hidden; */\n\n  &:hover {\n    color: red;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  /* display: flex; */\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 30px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 30px;\n  width: 100%;\n  box-shadow: 0px 0px 10px 5px lightgrey;\n  border-radius: 9px;\n  padding: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

var ImplodedWrapper = _styledComponents["default"].div(_templateObject2());

var ImplodedText = _styledComponents["default"].div(_templateObject3());

var ExplodeButton = _styledComponents["default"].div(_templateObject4());

var GoalsListWrapper = _styledComponents["default"].div(_templateObject5());

var ListWrapper = _styledComponents["default"].span(_templateObject6());

function _default(_ref) {
  var data = _ref.data;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      exploded = _useState2[0],
      setExploded = _useState2[1];

  var _useState3 = (0, _react.useState)('v1'),
      _useState4 = _slicedToArray(_useState3, 2),
      version = _useState4[0],
      setVersion = _useState4[1];

  var _useState5 = (0, _react.useState)(data.goals),
      _useState6 = _slicedToArray(_useState5, 2),
      goals = _useState6[0],
      setGoals = _useState6[1];

  var _useState7 = (0, _react.useState)(data.sentences),
      _useState8 = _slicedToArray(_useState7, 2),
      sentences = _useState8[0],
      setSentences = _useState8[1];

  var _useState9 = (0, _react.useState)(data.snippets),
      _useState10 = _slicedToArray(_useState9, 2),
      snippets = _useState10[0],
      setSnippets = _useState10[1];

  var addUpdate = function addUpdate(val, collection, setCollection, isVersioned) {
    var update = false;
    var newCollection = isVersioned ? _toConsumableArray(collection[version]) : collection;
    newCollection = newCollection.map(function (item) {
      if (item.id === val.id) {
        update = true;
        return val;
      } else {
        return item;
      }
    });

    if (!update) {
      newCollection.push(val);
    }

    isVersioned ? setCollection(_objectSpread({}, collection, _defineProperty({}, version, newCollection))) : setCollection(newCollection);
  };

  var getJsx = function getJsx() {
    if (exploded) {
      return _react["default"].createElement(Wrapper, null, _react["default"].createElement("button", {
        onClick: function onClick() {
          return setExploded(false);
        }
      }, " implode "), _react["default"].createElement("h2", null, data.label && data.label), _react["default"].createElement("button", {
        onClick: function onClick() {
          return setVersion('v1');
        }
      }, " v1 "), _react["default"].createElement("button", {
        onClick: function onClick() {
          return setVersion('v2');
        }
      }, " v2 "), _react["default"].createElement("h3", null, " Goals "), _react["default"].createElement(GoalsListWrapper, null, _react["default"].createElement(_List["default"], {
        data: goals[version],
        itemProps: {
          mode: 2
        },
        ItemComponent: _Goals["default"],
        addItem: function addItem(val) {
          return addUpdate(val, goals, setGoals, true);
        },
        removeItem: function removeItem(goalId) {
          return setGoals(_objectSpread({}, goals, _defineProperty({}, version, goals[version].filter(function (_ref2) {
            var id = _ref2.id;
            return id !== goalId;
          }))));
        }
      })), _react["default"].createElement(ListWrapper, null, _react["default"].createElement(_List["default"], {
        data: sentences[version],
        itemProps: {
          mode: 2
        },
        ItemComponent: _Sentence["default"],
        addItem: function addItem(val) {
          return addUpdate(val, sentences, setSentences, true);
        },
        removeItem: function removeItem(sentenceId) {
          return setSentences(_objectSpread({}, sentences, _defineProperty({}, version, sentences[version].filter(function (_ref3) {
            var id = _ref3.id;
            return id !== sentenceId;
          }))));
        }
      })), _react["default"].createElement("h3", null, " Snippets "), _react["default"].createElement(ListWrapper, null, _react["default"].createElement(_List["default"], {
        data: snippets,
        itemProps: {
          mode: 2
        },
        ItemComponent: _Snippet["default"],
        addItem: function addItem(val) {
          return addUpdate(val, snippets, setSnippets, false);
        },
        removeItem: function removeItem(snippetsId) {
          return setSnippets(snippets.filter(function (_ref4) {
            var id = _ref4.id;
            return id !== snippetsId;
          }));
        }
      })));
    } else {
      return _react["default"].createElement(ImplodedWrapper, null, _react["default"].createElement(ImplodedText, null, sentences[version].map(function (sentence) {
        return _react["default"].createElement(_Sentence["default"], _extends({}, sentence, {
          mode: 1,
          addItem: function addItem(val) {
            return addUpdate(val, sentences, setSentences, true);
          }
        }));
      })), _react["default"].createElement(ExplodeButton, {
        onClick: function onClick() {
          return setExploded(true);
        }
      }, "\u2227 \u2228"));
    }
  };

  return getJsx();
}