// concept of key. while rendering from an array , react generates a key
// in order to make it easier to calculate state diffs. its a good idea to
// pass key as an attribute. you dont have to pass it as a prop.
// you should always use key

// you might sort or do something with the array. react will not know
// which one is which. so you should always use key
import React from "react";
import { useState } from "react";

function Todos() {
  const [Todos, SetTodos] = useState([
    { title: "chai", description: "peelo" },
    { title: "biscuit", description: "khaalo" },
    // { title: "exercise", description: "karlo" },
  ]);
  const addTodo = (todo) => {
    SetTodos((Todos) => [...Todos, todo]);
  };
  return (
    <div>
      <CreateTodo onCreate={addTodo} todos={Todos} />
      {Todos.map((todo, index) => (
        <Todo key={index} title={todo.title} description={todo.description} /> //not good. should not use index
      ))}
    </div>
  );
}

function CreateTodo(props) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCreate({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Create</button>
    </form>
  );
}

function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h3>{props.description}</h3>
      <button onClick={props.onDelete}>Complete</button>
    </div>
  );
}
export default Todos;
