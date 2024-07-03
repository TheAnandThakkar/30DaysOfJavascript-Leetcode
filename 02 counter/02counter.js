/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let counter = 0;
  return function () {
    n = n + counter;
    console.log("counter: ", counter);

    if (counter !== 1) {
      counter = counter + 1;
    }
    console.log("n: ", n);
    return n;
  };
};

let myCounter = createCounter(10);
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
