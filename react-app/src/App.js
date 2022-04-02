import React from "react";
import List from "./components/List";
import Counter from "./components/Counter";

import "./App.css";
import Button from "./components/Button";

// mounting
// updating -- prop, state
// unmounting

function App() {
  const [counter, setCounter] = React.useState(0);
  const [myState, setMyState] = React.useState("My state initial value");
  console.log("App rerendered!");

  const increment = () => {
    setCounter(counter + 1);
    setMyState("Changed value!");
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <Counter counterValue={counter} />
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement} type={"error"}>
        Decrement
      </Button>

      <div>{myState}</div>

      <List />
    </div>
  );
}

export default App;
