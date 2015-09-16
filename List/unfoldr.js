'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

//:: (a -> [b]) -> [a] -> [b]
exports['default'] = (0, _FuncCurry2['default'])(function (fn, b) {
  var result = [];
  var x = b;
  var that = undefined;
  while (that = fn(b)) {
    result.push(that[0]);
    x = that[1];
  }
  return result;
});
module.exports = exports['default'];