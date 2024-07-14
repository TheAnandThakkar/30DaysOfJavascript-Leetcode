/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  let t = Date.now();
  console.log("Time before promise", t);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let difference = Date.now() - t;
      console.log("Time after promise", Date.now() - t);
      console.log("difference", difference);
      resolve(difference);
    }, millis);
  });
}

sleep(3000).then((difference) => {
  console.log("difference", difference);
  console.log(`Promise has been consumed after ${difference} milliseconds`);
});

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
