/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 *
 * description is wrong. you need to define one function.
 */

function wait(t) {
  return new Promise((resolve) => setTimeout(resolve, t));
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  let promise1 = wait(t1 * 1000);
  let promise2 = wait(t2 * 1000);
  let promise3 = wait(t3 * 1000);
  return Promise.all([promise1, promise2, promise3]).then(() => {
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    return totalTime;
  });
}

module.exports = calculateTime;
