const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course, Admin } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const jwt_secret = "secret";
const bcrypt = require("bcrypt");
const saltRounds = 10;
// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const userName = req.body.username;
  const existingAdmin = await Admin.findOne({
    username: userName,
  });

  if (existingAdmin)
    return res.status(400).json({ message: "Username already exists" });

  const password = bcrypt.hashSync(req.body.password, saltRounds);
  const user = new Admin({
    username: userName,
    password: password,
  });
  user.save();
  res.status(200).json({ message: "Admin created successfully" });
});

// - POST /admin/signin
//   Description: Logs in an admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { token: 'your-token' }
router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const userName = req.body.userName;
  const password = req.body.password;
  const existingAdmin = await Admin.findOne({
    username: userName,
  });

  if (!existingAdmin) {
    return res.status(401).json({ message: "No such admin exist" });
  }
  if (!bcrypt.compareSync(password, existingAdmin.pasword)) {
    return res.status(401).json({ message: "Incorrect Password" });
  }

  res.status(200);
  res.json({
    token: jwt.sign({ username: userName, password: password }, jwt_secret),
  });
});

router.use(adminMiddleware);
// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const courseid = req.body.id;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imagelink = req.body.imageLink;
  const published = req.body.published;

  const curcourse = new Course({
    id: courseid,
    title: title,
    description: description,
    price: price,
    imagelink: imagelink,
    published: published,
  });
  curcourse.save();
  res
    .status(200)
    .json({ message: "Course created successfully", courseId: courseid });
});
// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const courses = Course.find({}, (err, courses) => {
    return courses;
  });
  res.send(200).json(JSON.stringify(courses));
});

module.exports = router;
