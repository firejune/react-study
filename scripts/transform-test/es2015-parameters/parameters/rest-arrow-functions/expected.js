var concat = function () {
  var x = arguments.length <= 0 ? undefined : arguments[0];
  var y = arguments.length <= 1 ? undefined : arguments[1];
};

var somefun = function () {
  var get2ndArg = function (a, b) {
    var _b = arguments.length <= 2 ? undefined : arguments[2];
    var somef = function (x, y, z) {
      var _a = arguments.length <= 3 ? undefined : arguments[3];
    };
    var somefg = function (c, d, e, f) {
      var _a = arguments.length <= 4 ? undefined : arguments[4];
    };
    var _d = arguments.length <= 3 ? undefined : arguments[3];
  };
  var get3rdArg = function () {
    return arguments.length <= 2 ? undefined : arguments[2];
  };
};

function demo1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (i) {
    return args[i + 0];
  };
}

var x = function () {
  for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    rest[_key2] = arguments[_key2];
  }

  if (noNeedToWork) return 0;
  return rest;
};
