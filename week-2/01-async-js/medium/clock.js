// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)
// const x = new Date();

// const formattedDate = `${x.getFullYear()}-${(x.getMonth() + 1).toString().padStart(2, '0')}-${x.getDate().toString().padStart(2, '0')} ${x.getHours().toString().padStart(2, '0')}:${x.getMinutes().toString().padStart(2, '0')}:${x.getSeconds().toString().padStart(2, '0')}`;

// console.log(formattedDate);

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const sleep = require("../hard (promises)/2-sleep-completely");
const df = require("date-fns");

for (let i = 0; i < 10000; i++) {
  let x = new Date();
  const formattedDate = df.format(x, "HH:mm:ss a");
  console.clear();
  console.log(formattedDate);
  sleep(1000);
}
