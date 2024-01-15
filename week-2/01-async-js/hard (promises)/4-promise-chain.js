/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

const sleep = require("./2-sleep-completely");

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  let promise1 = sleep(t1 * 1000);
  let promise2 = sleep(t2 * 1000);
  let promise3 = sleep(t3 * 1000);
  return Promise.all([promise1, promise2, promise3]).then(() => {
    const endTime = Date.now();
    const totalTime = endTime - startTime;
    return totalTime;
  });
}

module.exports = calculateTime;
