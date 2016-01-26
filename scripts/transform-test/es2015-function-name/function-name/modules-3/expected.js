"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require("./store");

let Login = function (_React$Component) {
  babelHelpers.inherits(Login, _React$Component);

  function Login() {
    babelHelpers.classCallCheck(this, Login);
    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Login).apply(this, arguments));
  }

  babelHelpers.createClass(Login, [{
    key: "getForm",
    value: function getForm() {
      return (0, _store.getForm)().toJS();
    }
  }]);
  return Login;
}(React.Component);

exports.default = Login;
