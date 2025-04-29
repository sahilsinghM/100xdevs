import { useCallback, useEffect, useState } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useCallback(() => {
    callback();
  }, [callback]);
  useEffect(() => {
    const id = setInterval(savedCallback, delay);
    return () => {
      clearInterval(id);
    };
  }, [savedCallback, delay]);
};

function IntervalApp() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <div>Timer is at {count}</div>;
}

export default IntervalApp;
