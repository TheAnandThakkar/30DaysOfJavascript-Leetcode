/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};

  return function (...args) {
    console.log(args);

    if (cache[args]) {
      console.log("Fetched from cache stored", cache[args]);
      return cache[args];
    }

    const output = fn(...args);
    console.log("output: ", output);

    cache[args] = output;
    console.log("cache: ", cache);

    return output;
  };
}

function sum(a, b) {
  return a + b;
}

function factorial(n) {
  let output = 1;

  for (var i = 1; i <= n; i++) {
    output = output * i;
  }

  return output;
}

function fib(n) {
  if (n < 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

const result = memoize(fib);
/// for addition
// result(1, 2);
// result(1, 2);
// result(5, 3);

/// for factorials
// result(5);
// result(5);
// result(3);

/// for fibonacci series
result(4);
result(4);
result(5);

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {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
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
