import React from "react";
import { useState } from "react";
import "./Counter.css";
import useCounter from "../Hooks/useCounter";

function Counter() {
  let initialState = 0;
  const { value, increment, decrement, reset, setValue } = useCounter(
    initialState || 0
  );

  return (
    <div className="App">
      <div>
        <h1>{value}</h1>
      </div>
      <div className="btn">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>RESET</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
