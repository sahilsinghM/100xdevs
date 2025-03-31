/**
 *
 *
 */
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useTodos = () => {
  const [todo, setTodo] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        const result = response.data.title;
        setTodo(result);
        console.log(result);
      });
  }, []);
  return todo;
};

export default function Todo3() {
  const todo = useTodos();
  return <div>{todo}</div>;
}
