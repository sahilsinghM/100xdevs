/**
 * ## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
 */

const fs = require("fs");

let x = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // return await data;
  console.log(data);
  let newdata = data
    .split(" ")
    .filter((chr) => !" ".includes(chr))
    .join(" ");
  console.log(newdata);
  // console.log(process.cwd());
  fs.writeFile("./file2.txt", newdata, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};
// read the file, once it is read, do x
fs.readFile("./file.txt", "utf8", x);

/**
 * if i try to use data outside the readfile it doesn't let me
 * synchronous func - executes one line after the other. takes a lot of time. slow.
 * async - break thread. func executes
 * */
