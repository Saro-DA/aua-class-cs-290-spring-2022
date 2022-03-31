import React from "react";
import List from "./components/List";
import Counter from "./components/Counter";

import "./App.css";
import Button from "./components/Button";

// mounting
// updating -- prop, state
// unmointing

function App() {
  const [counter, setCounter] = React.useState(0);
  console.log("App rerendered!");

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <Counter value={counter} />
      <Button onClick={increment} className="button--inc">
        Increment
      </Button>
      <Button onClick={decrement} className="button--dec">
        Decrement
      </Button>

      <List />
    </div>
  );
}

export default App;
