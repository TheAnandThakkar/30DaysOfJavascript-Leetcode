/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const result = createHelloWorld();
result();
console.log("result: ", result());

/* *
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
