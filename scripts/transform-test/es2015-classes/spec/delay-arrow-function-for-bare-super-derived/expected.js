var Foo = function (_Bar) {
  babelHelpers.inherits(Foo, _Bar);

  function Foo() {
    var _this;

    babelHelpers.classCallCheck(this, Foo);
    return _this = babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Foo).call(this, () => {
      _this.test;
    }));
  }

  return Foo;
}(Bar);
