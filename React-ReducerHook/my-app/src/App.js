import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";

const initialState = {
  count: 0
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };

    case "init":
      return {
        ...state,
        count: action.payload
      };
  }
};

function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className="App">
      <div>
        set start count:{" "}
        <span>
          <input
            type="number"
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
        </span>
        <button onClick={() => dispatch({ type: "init", payload: count })}>
          Set
        </button>
      </div>

      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default App;
