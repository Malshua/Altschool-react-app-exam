import React from "react";
import { useReducer } from "react";
import countReducer from "../Hooks/countReducer";
import "./ReducerCounter.css";

function ReducerCounter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
      </div>

      <div className="btn">
        <button
          className="redbtn"
          onClick={() => dispatch({ type: "increment" })}
        >
          increment
        </button>
        <button className="redbtn" onClick={() => dispatch({ type: "reset" })}>
          reset
        </button>
        <button
          className="redbtn"
          onClick={() => dispatch({ type: "decrement" })}
        >
          decrement
        </button>
      </div>
    </div>
  );
}

export default ReducerCounter;
