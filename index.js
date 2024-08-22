function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    return "hello";
  };
}
function returnsAnAnonymousFunction() {
  return function () {
    return "hello";
  };
}
receivesAFunction(returnsANamedFunction());
