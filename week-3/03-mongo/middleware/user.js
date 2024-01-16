const { User } = require("../db/index.js");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const curusername = req.headers.username;
  const existingUser = await User.findOne({ username: curusername });
  if (!existingUser) {
    res.send(400).json({ msg: "User doesn't exist" });
  }
  next();
}

module.exports = userMiddleware;
