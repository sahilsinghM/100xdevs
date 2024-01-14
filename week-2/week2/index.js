const express = require("express");
const app = express();
app.use(express.json());
var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const kidneys = users[0].kidneys;
  const numKidneys = kidneys.length;
  let healthyKidneysCount = 0;
  let unhealthyKidneysCount = 0;
  for (kidney in kidneys) {
    if (kidney.healthy) {
      healthyKidneysCount++;
    } else {
      unhealthyKidneysCount++;
    }
  }
  res.json({
    kidneys,
    numKidneys,
    unhealthyKidneysCount,
    healthyKidneysCount,
  });
});

app.post("/", (req, res) => {
  // console.log(req.body)
  users.push(req.body);
  res.json(users);
});

app.put("/", (req, res) => {});

// app.delte("/", (req, res) => {});

app.listen(3002);

// let fn = (n) => (n * (n + 1)) / 2;

// app.get("/test/", (req, res) => {
//   let n = parseInt(req.query.n);
//   let t = fn(n);
//   let l = `n = ${n} n+1 = ${n + 1} n*(n+1) = ${
//     n * (n + 1)
//  Error: listen EADDRINUSE: address already in use :::3002 } sum of first n natural numbers is ${t}`;
//   res.send(l);
//   // res.sendStatus(404);
// });
