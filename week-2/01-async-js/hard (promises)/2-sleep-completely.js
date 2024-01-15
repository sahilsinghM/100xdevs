/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const startTime = Date.now();
  let currentTime;
  do {
    currentTime = Date.now();
  } while (currentTime - startTime < milliseconds);
  return new Promise((resolve) => setTimeout(resolve, 0));
}

module.exports = sleep;
