import React from "react";
import { useState } from "react";

function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue || 0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);
  const reset = () => setValue(initialValue || 0);

  return {
    value,
    increment,
    decrement,
    reset,
    setValue,
  };
}

export default useCounter;
