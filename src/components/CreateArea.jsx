import React, { useState, useRef, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: "",
    content: [],
  });
  const [isExpanded, setExpanded] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [allItems, setAllItems] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setAllItems([...allItems, inputValue]);
    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    setShowData(true);
    setNote(( prevNote) => ({
      ...prevNote,
      content: [...allItems], // Spread the allItems array
    }));

    console.log({note},'linen no 33')
    onAdd(allItems);
  };

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleExpanded = () => {
    setExpanded(true);
  };

  console.log(allItems);

  return (
    <div>
      <form ref={formRef}>
        {isExpanded && (
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        )}
        <p>
          <input
            onClick={handleExpanded}
            name="content"
            placeholder="List Item"
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          />
        </p>
        <button onClick={handleClick} className="addbtn">Add</button>
        <button onClick={handleSubmit}>
          <IoIosAdd />
        </button>
        <ul>
        {allItems.map((item) => (
          <div>
            <li key={item}>{item}</li>
            {/* <input type="checkbox" onChange={handleCheck} /> */}
          </div>
          
        ))}
        </ul>
      </form>
    </div>
  );
}

export default CreateArea;
