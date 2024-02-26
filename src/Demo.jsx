import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAllItems([...allItems, inputValue]);
  };

  const handleSubmit = () => {
    setShowData(true);
  };

  console.log(allItems);

  return (
    <div className="App">
      <form>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add Todo</button>
      </form>
      <button onClick={handleSubmit}>Submit</button>
      {showData && allItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}

export default App;
