import "./App.css";
import CreateTodos from "./components/CreateTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <CreateTodos></CreateTodos>
      <Todos></Todos>
    </div>
  );
}

export default App;
