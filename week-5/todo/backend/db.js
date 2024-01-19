const mongoose = require("mongoose");

let conn = mongoose.connect(
  "mongodb+srv://admin:1928@cluster0.u6nz2a9.mongodb.net/todos"
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
