import { useContext, useState } from "react";
import { CountContext } from "./context";

export default function Dashboard() {
  const [count, setCount] = useState(0);
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <CountContext.Provider value={[count, setCount]}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      {/* <CountRenderer count={count} /> you can't use it */}
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
  const [count] = useContext(CountContext);
  return (
    <div>
      <h1>Count</h1>
      <p>{count}</p>
    </div>
  );
}

function Buttons() {
  const [, setCount] = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </div>
  );
}
