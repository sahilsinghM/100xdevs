const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const bodyParser = require("body-parser");
const jwt_secret = "secret";
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(bodyParser.json());
// User Routes

router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const userName = req.body.username;
  const existingUser = await User.findOne({
    username: userName,
  });

  if (existingUser)
    return res.status(400).json({ message: "Username already exists" });

  const password = bcrypt.hashSync(req.body.password, saltRounds);
  const user = new Admin({
    username: userName,
    password: password,
  });

  user.save();
  res.status(200).json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const userName = req.body.userName;
  const password = req.body.password;
  const existingUser = await User.findOne({
    username: userName,
  });

  if (!existingUser) {
    return res.status(401).json({ message: "No such User exist" });
  }
  if (!bcrypt.compareSync(password, existingUser.pasword)) {
    return res.status(401).json({ message: "Incorrect Password" });
  }
  res.status(200);
  res.json({
    token: jwt.sign({ username: userName, password: password }, jwt_secret),
  });
});

router.get("/users/courses", (req, res) => {
  // Implement listing all courses logic
  const courses = Course.find({}, (err, courses) => {
    return courses;
  });
  res.send(200).json(JSON.stringify(courses));
});

// - POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { message: 'Course purchased successfully' }

// Endpoint to purchase a course
router.post("/users/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const { username, password } = req.headers;
    const courseId = req.params.courseId;

    // Find the user by username and password
    const user = await User.findOne({ username, password });

    // Find the course by courseId
    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if the user is already enrolled in the course
    const existingEnrollment = await Enrollment.findOne({
      user: user._id,
      course: courseId,
    });

    if (existingEnrollment) {
      return res
        .status(400)
        .json({ message: "User is already enrolled in the course" });
    }

    // Create a new enrollment
    const newEnrollment = new Enrollment({
      user: user._id,
      course: courseId,
    });

    // Save the enrollment
    await newEnrollment.save();

    res.status(201).json({ message: "Course purchased successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// - GET /users/purchasedCourses
//   Description: Lists all the courses purchased by the user.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get("/users/purchasedCourses", async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const { username, password } = req.headers;

    // Find the user by username and password
    const user = await User.findOne({ username, password });

    // Find all enrollments for the user
    const enrollments = await Enrollment.find({ user: user._id }).populate(
      "course"
    );

    // Extract relevant course information from enrollments
    const purchasedCourses = enrollments.map((enrollment) => {
      const { id, title, description, price, imageLink, published } =
        enrollment.course;
      return { id, title, description, price, imageLink, published };
    });

    res.json({ purchasedCourses });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
