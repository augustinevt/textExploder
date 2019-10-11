"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Cell = function Cell(_ref) {
  var cellVal = _ref.cellVal,
      index = _ref.index,
      _onClick = _ref.onClick,
      onDragOver = _ref.onDragOver,
      mouseLeave = _ref.mouseLeave,
      cellMouseDown = _ref.cellMouseDown;
  return _react["default"].createElement("div", {
    style: {
      'border': 'solid',
      'width': '25px',
      'height': '25px'
    },
    onClick: function onClick() {
      _onClick(index, cellVal);
    },
    onMouseDown: function onMouseDown() {
      cellMouseDown(index, cellVal);
    },
    onMouseOver: function onMouseOver() {
      onDragOver(index, cellVal);
    },
    onMouseOut: function onMouseOut() {
      mouseLeave(index, cellVal);
    }
  }, cellVal);
};

var _default = Cell;
exports["default"] = _default;