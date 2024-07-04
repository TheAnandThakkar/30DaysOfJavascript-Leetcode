/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  console.log(args);
  return args.length;
};

const result = argumentsLength({}, null, "3");
console.log("result: ", result);

/**
 * argumentsLength(1, 2, 3); // 3
 */
