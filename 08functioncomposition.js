/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  console.log("functions: ", functions.length);

  let output = 0;

  if (functions.length) {
    return function (x) {
      console.log("x: ", x);
      for (var i = functions.length - 1; i >= 0; i--) {
        console.log("i: ", i);
        output = functions[i](x);
        x = output;
        console.log("output: ", output);
      }
      return output;
    };
  } else {
    return function (x) {
      console.log("x: ", x);
      return x;
    };
  }
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
const result = fn(4);
console.log("result: ", result);
