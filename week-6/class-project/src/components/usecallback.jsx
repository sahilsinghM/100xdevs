/**
 * If a Main component "A" has a non-state function "F" and a child component "B" which uses that function as a prop
 * Every time the parent component "A" rerenders, the function "F" will be recreated and passed to the child component "B"
 * even if the function "F" is not changed and even if the child component "B" is under a React.memo.
 * agar F was normal int, float, etc. React.memo se kam ho jata but F is a function here
 * react doesn't know that the function "F" is the same as before.
 *  Referential equality.
 * a=1, b=1
 * a===b => true
 * function f() { return 1; }
 * function g() { return 1; }
 * f===g => false
 *  It will think that the function "F" is a new function and will rerender the child component "B"
 * a ={} b={}
 * a===b => false
 * but if you put F in useCallback, it will not be recreated and the child component "B" will not rerender
 *  */

import { memo, useCallback, useState } from "react";

function Buttoner() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default Buttoner;
