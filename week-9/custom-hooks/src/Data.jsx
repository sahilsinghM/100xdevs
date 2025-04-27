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
function App() {
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

export default App;
