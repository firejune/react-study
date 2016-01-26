'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseFoo2 = require('./BaseFoo');

var _BaseFoo3 = babelHelpers.interopRequireDefault(_BaseFoo2);

var SubFoo = function (_BaseFoo) {
  babelHelpers.inherits(SubFoo, _BaseFoo);

  function SubFoo() {
    babelHelpers.classCallCheck(this, SubFoo);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(SubFoo).apply(this, arguments));
  }

  babelHelpers.createClass(SubFoo, null, [{
    key: 'talk',
    value: function talk() {
      babelHelpers.get(Object.getPrototypeOf(SubFoo), 'talk', this).call(this);
      console.log('SubFoo.talk');
    }
  }]);
  return SubFoo;
}(_BaseFoo3.default);

exports.default = SubFoo;
