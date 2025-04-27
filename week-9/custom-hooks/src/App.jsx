import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setRender((prev) => !prev);
    }, 5000);
  }, []);
  return <>{render ? <MyComponent /> : null}</>;
}

//useEffect, dependency array is empty, it will
// run only once when the component mounts
// when the component unmounts, it will run the cleanup function
// first arg is a function. this function returns a function.
// this function is the cleanup function
function MyComponent2() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.log("Component mounted");
    return () => {
      // Clean up (e.g., remove event listeners or cancel subscriptions)
      console.log("Component will unmount");
    };
  }, []);

  return (
    <div>
      <h1>My Component</h1>
      <p>This is a simple component.</p>
    </div>
  );
}

class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log("Component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("Component will unmount");
  }

  render() {
    // Render UI
    return (
      <div>
        <h1>My Component</h1>
        <p>This is a simple component.</p>
      </div>
    );
  }
}
export default App;
