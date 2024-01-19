import { application } from "express";
import { useState } from "react";
const CreateTodos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      ></input>
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      ></input>
      <button
        onClick={fetch("http://localhost:3000/todos", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description,
            done: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })}
      >
        Save
      </button>
    </div>
  );
};

export default CreateTodos;
