import { useState, memo } from "react";
import Button from "./Button";
import "./List.css";

function List() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  console.log("list rerendered");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    /*
      These kind of updates including the previous state are not a good practice,
      as you are not guaranteed that the state is the correct previous state
      at that point of time. Instead it can be done the following way:
      setList(prev => ([...prev, inputValue]));
    */
    setList((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  return (
    <div className="list">
      <input
        placeholder="Type here..."
        onChange={handleChange}
        value={inputValue}
        className="list-input"
      />
      <Button onClick={handleAdd} type={"secondary"}>
        Add to the list
      </Button>
      <div>
        {list.map((item, index) => {
          return (
            <div className={"list-item"} key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(List);
