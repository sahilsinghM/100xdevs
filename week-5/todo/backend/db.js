const mongoose = require("mongoose");

let conn = mongoose.connect(
  "mongodb+srv://testuser:rZ1cmOLGBBq2ZxfL@cluster0.u6nz2a9.mongodb.net/"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  done: Boolean,
});

const Todos = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todos,
};
