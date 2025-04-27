//when is a cleanup function called?
// when the component unmounts or when the dependencies change
// this is a custom hook that fetches data from an API and returns the data and loading state
// it takes a parameter t which is the time interval in seconds
// it uses the useEffect hook to fetch data from the API and set the state
// it uses the useState hook to manage the state of the data and loading state
// it uses axios to make the API call
// it uses setInterval to fetch new data every t seconds
// it uses clearInterval to clear the interval when the component unmounts or when the dependencies change
// this is an exmple of polling an API and also fixes the issue of loading state
// we will accomplish this by using swr library https://swr.vercel.app/
//websockets are not used in this example. but they are a better way to fetch data from an API>

import { useEffect, useState } from "react";
import axios from "axios";
// if the t changes, it will create a new interval
function useTodos(t) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
    });
    setInterval(() => {
      setLoading(true);
      // Fetch new data every t seconds
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, t * 1000);
    // Cleanup function to clear the interval
    return () => {
      clearInterval();
    };
  }, [t]);

  return { todos, loading };
}
function DataApp() {
  const { todos, loading } = useTodos(5);
  return (
    <>{loading ? "loading..." : todos.map((todo) => <Track todo={todo} />)}</>
  );
}

function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default DataApp;
