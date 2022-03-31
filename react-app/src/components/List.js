import { useState, memo } from "react";

function List() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  console.log("inside list");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input
        placeholder="Type here..."
        onChange={handleChange}
        value={inputValue}
      />
      <button onClick={handleAdd} className="button--inc">
        Add
      </button>
      <div>
        {list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default memo(List);
