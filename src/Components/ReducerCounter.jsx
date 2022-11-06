import React from "react";
import { useReducer } from "react";
import countReducer from "../Hooks/countReducer";

function ReducerCounter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <div>
        <span style={{ fontSize: "11rem" }}>{count}</span>
      </div>

      <div className="card">
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>
    </div>
  );
}

export default ReducerCounter;
