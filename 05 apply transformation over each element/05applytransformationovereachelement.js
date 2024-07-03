/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let output = [];
  for (var i = 0; i < arr.length; i++) {
    console.log("fn(arr[i], i): ", fn(arr[i], i));
    output.push(fn(arr[i], i));
  }
  return output;
};

const array = [1, 2, 3];

let plusone = function (n) {
  console.log("n + 1", n + 1);
  return n + 1;
};

let plusI = function (n, i) {
  console.log("n + i", n + i);
  return n + i;
};

let constant = function () {
  console.log("42", 42);
  return 42;
};

const result = map(array, constant);
console.log("result: ", result);
