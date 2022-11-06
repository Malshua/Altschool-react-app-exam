import React from "react";
import { useState } from "react";
import useCounter from "../Hooks/useCounter";

function Counter() {
  let initialState = 0;
  const { count, increment, decrement, reset, setCount } = useCounter(
    initialState || 0
  );

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>RESET</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default Counter;
