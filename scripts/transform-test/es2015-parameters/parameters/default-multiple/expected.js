var t = function () {
  var e = arguments.length <= 0 || arguments[0] === undefined ? "foo" : arguments[0];
  var f = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

  return e + " bar " + f;
};

var a = function (e) {
  var f = arguments.length <= 1 || arguments[1] === undefined ? 5 : arguments[1];

  return e + " bar " + f;
};
