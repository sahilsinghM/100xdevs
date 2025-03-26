const { User } = require("../db/index.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

async function userMiddleware(req, res, next) {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send("Not authorized");
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    // console.log("here");
    res.status(401);
    res.send("Not authorized");
    return;
  }

  try {
    // const payload = jwt.verify(token, process.env.JWT_SECRET);
    const payload = jwt.verify(token, "secret");
    req.user = payload;
    console.log(payload);
    next();
    // return;
  } catch (e) {
    console.error(e);
    res.status(401);
    res.send("Not authorized");
    // return;
  }
}

module.exports = userMiddleware;
