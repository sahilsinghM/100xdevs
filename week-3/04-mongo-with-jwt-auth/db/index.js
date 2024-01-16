const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:1928@cluster0.u6nz2a9.mongodb.net/100xweek3"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  pasword: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  pasword: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  //   { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }
  id: Number,
  title: String,
  description: String,
  price: Number,
  imagelink: URL,
  published: Boolean,
  //   published_by: String,
});

const enrollmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  // You can include other fields as needed
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

module.exports = {
  Admin,
  User,
  Course,
  Enrollment,
};

mongoose.connection.close();
//////////////////////////////////////////////////////////////////////
