const express = require("express");
const app = express();

const posts = [
  {
    name: "Kyle",
    title: "post1",
  },
  {
    name: "Kyle",
    title: "post1",
  },
];

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.listen(3000);
