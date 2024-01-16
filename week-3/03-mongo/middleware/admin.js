const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const curusername = req.headers.username;
  const existingUser = await Admin.findOne({ username: curusername });
  if (!existingUser) {
    res.send(400).json({ msg: "Admin doesn't exist" });
  }
  next();
}

module.exports = adminMiddleware;
