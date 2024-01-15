const sleep = require("../hard (promises)/2-sleep-completely");
// const wait = require("../hard (promises)/1-promisify-setTimeout");
// Example usage: Sleep for 2 seconds
for (let i = 0; i < 10000; i++) {
  console.clear();
  console.log(i);
  sleep(1000);
}
