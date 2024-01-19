import { useState } from "react";
import Todo from "./Todo";

const Todos = () => {
  const [todos2, setTodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async (res) => {
    const todosData = await res.json();
    setTodos(todosData.Todos);
  });
  return (
    <div>
      {todos2.map((todo) => {
        return <Todo key={todo._id} prop={todo} />;
      })}
    </div>
  );
};
export default Todos;
