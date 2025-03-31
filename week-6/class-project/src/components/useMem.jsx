/**
 * memoization = you remember something and not computing it again. like caching.
 * in the below counter it is mandatory to use a for loop.
 * useeffect is used to handle side effects
 * useMemo is used to memoize a value. it will only recompute the value when the dependencies change.
 * useMemo doesn't stop rerendering. it just stops recomputing the value.
 *
 */

import { useState } from "react";
import { useMemo } from "react";

export default function Xounter() {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const sum = useMemo(() => {
    let total = 0;
    for (let i = 1; i <= input; i++) {
      total += i;
    }
    return total;
  }, [input]);
  return (
    <>
      <input
        type="text"
        label="put it in"
        onChange={(e) => setInput(parseInt(e.target.value))}
      />
      <p>Count is {count}</p>
      <p>{"sum from 1 to " + input + " is " + sum}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
