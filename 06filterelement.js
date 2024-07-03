var filter = function (arr, fn) {
  let output = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      output.push(arr[i]);
    }
  }

  console.log("output: ", output);
  return output;
};

const arr = [0, 10, 20, 30];

const greaterThan10 = function (n) {
  return n > 10;
};

const firstIndex = function (n, i) {
  return i === 0;
};

const result = filter(arr, firstIndex);
console.log("result: ", result);
