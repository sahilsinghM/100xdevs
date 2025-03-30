/* what do you think should happen when you click
the button. what should rerender.

only the header one should rerender right?
no all the header gets rerendered
you can verify be replacing {"hello"} with math.random

you can also download the react dev tools and see the rerendering
the react dev tools will show you the rerendering
go to components and go to settings and enable the highlight updates
it will highlight the rerendering

when a parent component rerenders, all the child components rerender
or a state change in a child component will cause rerender

you can solve it by two things. you can either push the 
state down or you can use memoization

check the slides
come back now

wrapper component = a component that takes another component as a prop 

*/

import { useState } from "react";
import Todos from "./components/todos";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [num, setNum] = useState("Sahil");
  const ClickHandler = () => {
    setNum(Math.random());
  };

  return (
    <>
      <button onClick={ClickHandler}>Click Me</button>
      <br />
      <Header title={"My name is " + num} />
      <br />
      <Header title={"Hello"} />
      <br />
      <Header title="Hello World3" />
      <br />
      <Todos />
    </>
  );
}

function Header(props) {
  return <div>{props.title}</div>;
}

export default App;
