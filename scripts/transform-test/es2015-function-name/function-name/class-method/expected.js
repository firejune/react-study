let Foo = function () {
  function Foo() {
    babelHelpers.classCallCheck(this, Foo);
  }

  babelHelpers.createClass(Foo, [{
    key: "t",
    value: function t(_t) {
      return _t;
    }
  }]);
  return Foo;
}();
