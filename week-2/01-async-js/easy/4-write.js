const fs = require("fs");

fs.writeFile(
  "./01-async-js/easy/3-read-from-file.md",
  "adding from fs",
  "utf8",
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
