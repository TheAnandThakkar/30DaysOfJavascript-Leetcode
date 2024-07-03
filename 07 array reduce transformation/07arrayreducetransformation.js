/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  for (var i = 0; i < nums.length; i++) {
    console.log(i);
    init = fn(init, nums[i]);
    console.log("init: ", init);
  }
  return init;
};

const nums = [1, 2, 3, 4];

const sum = function (accum, curr) {
  return accum + curr;
};

const result = reduce(nums, sum, 100);
console.log("result: ", result);
