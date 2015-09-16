'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _FuncCurry = require('../Func/curry');

var _FuncCurry2 = _interopRequireDefault(_FuncCurry);

//+ foldl1 :: (a -> a -> a) -> [a] -> a
exports['default'] = (0, _FuncCurry2['default'])(function (fn, xs) {
  return xs.reduce(fn, 0);
});
module.exports = exports['default'];