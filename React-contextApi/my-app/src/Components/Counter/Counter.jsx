import React from "react";
import { useCounter } from "../../Context/CounterContext";

const Counter = () => {
  const { count, incrementHandler, decrementHandler } = useCounter();

  return (
    <div>
      <h2>Counter : {count}</h2>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
