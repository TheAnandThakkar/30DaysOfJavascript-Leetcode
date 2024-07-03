/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let originalValue = init;
  function increment() {
    let addition = 1;
    init = init + addition;
    console.log("init: ", init);

    return init;
  }

  function decrement() {
    let substract = 1;
    init = init - substract;
    console.log("init: ", init);

    return init;
  }

  function reset() {
    init = originalValue;
    console.log("init: ", init);

    return init;
  }

  return { increment, decrement, reset };
};

const counter = createCounter(5);
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.decrement();
counter.increment();
counter.reset();
counter.decrement();
counter.decrement();
counter.increment();

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
