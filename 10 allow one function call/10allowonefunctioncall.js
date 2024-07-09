/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let fnCalled = false;
  let answer = 0;
  return function (...args) {
    if (!fnCalled) {
      fnCalled = true;
      answer = fn(...args);

      console.log("answer: ", answer);

      return answer;
    } else {
      console.log("return undefined");
      return undefined;
    }
  };
};
const functionArgs = (a, b, c) => a + b + c;
const result = once(functionArgs);
result(1, 2, 3);
result(4, 5, 6);

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
