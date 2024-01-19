const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { createTodo, updateTodo } = require("./types");
const { Todos } = require("./db");
const cors = require("cors");

// create a todo
//get from body

app.use(bodyParser.json());
app.use(cors());

app.post("/todos", (req, res) => {
  if (!createTodo.safeParse(req.body).success) {
    res.status(400).json({ msg: "Invalid inputs" });
    return;
  }
  try {
    Todos.create({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    });
    res.status(200).json({ msg: "Todo Successfully create" });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
    return;
  }
});

//see their todo
app.get("/todos", async (req, res) => {
  try {
    const todos_to_display = await Todos.find({});
    res.status(200).json({
      Todos: todos_to_display,
    });
    return;
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
    return;
  }
});

//mark as done
app.put("/todos/:todoid", async (req, res) => {
  if (!updateTodo.safeParse(req.params.todoid).success) {
    res.status(400).json({ msg: "Invalid todoid" });
    return;
  }
  try {
    await Todos.updateOne(
      {
        _id: req.params.todoid,
      },
      {
        done: true,
      }
    );
    res.status(200).json({ msg: "Todo Successfully updated" });
    return;
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
    return;
  }
});

app.listen(3000);
