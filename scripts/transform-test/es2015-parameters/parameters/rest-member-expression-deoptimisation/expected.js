var x = function (foo) {
  for (var _len = arguments.length, bar = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    bar[_key - 1] = arguments[_key];
  }

  console.log(bar);
};

var y = function (foo) {
  for (var _len2 = arguments.length, bar = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    bar[_key2 - 1] = arguments[_key2];
  }

  var x = function z(bar) {
    bar[1] = 5;
  };
};

var b = function (x, y) {
  for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }

  console.log(args[0]);
  args.pop();
  console.log(args[1]);
};

var z = function (foo) {
  for (var _len4 = arguments.length, bar = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    bar[_key4 - 1] = arguments[_key4];
  }

  var x = function () {
    bar[1] = 5;
  };
};

var a = function (foo) {
  for (var _len5 = arguments.length, bar = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    bar[_key5 - 1] = arguments[_key5];
  }

  return bar.join(",");
};

var b = function (foo) {
  var join = "join";

  for (var _len6 = arguments.length, bar = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    bar[_key6 - 1] = arguments[_key6];
  }

  return bar[join];
};

var b = function () {
  for (var _len7 = arguments.length, bar = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    bar[_key7] = arguments[_key7];
  }

  return bar.len;
};

var b = function (foo) {
  return (arguments.length - 1) * 2;
};

var b = function (foo, baz) {
  return arguments.length - 2;
};
