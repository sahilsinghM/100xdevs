/**
 * what happens if you call setState(count+1) twice? it will only re-render once
 * react will batch the state updates. it doesn't happen synchronously
 * instead if you do it like this
 * setState(function(prevState) {
 *  return prevState + 1;
 * }) it will update it twice
 * 
 * if you are working with arrays in a component you need to give key. key cant be map ka index.
 * index is in memomry, key is the id of the array ka item
 * 
 * hooks
 * problem comes whenever you have to do backend calls or setinterval etc
 * any other thing than rendering is called side effects
 *use effect is used to handle side effects
doing fetch calls without use effect will cause infinite loop
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => setPosts(data));
}
}, []); // empty array means it will run only once when the component mounts
dependency array
if you put something in the array, it will run whenever that thing changes
if you put an empty array, it will run only once when the component mounts

 */

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Todo2() {
  const [todo, setTodo] = useState();
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => {
        const result = response.data.title;
        setTodo(result);
        console.log(result);
      });
  }, [id]);

  const buttonHandler = (e) => {
    const buttonId = e.target.id;
    setId(buttonId);
  };

  return (
    <div>
      <button id="1" onClick={buttonHandler}>
        1
      </button>
      <button id="2" onClick={buttonHandler}>
        2
      </button>
      <button id="3" onClick={buttonHandler}>
        3
      </button>
      <button id="4" onClick={buttonHandler}>
        4
      </button>
      <h4>{todo}</h4>
      {/* <h4>{todo}</h4> */}
    </div>
  );
}
