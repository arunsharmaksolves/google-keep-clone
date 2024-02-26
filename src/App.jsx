import React, { useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";

function App(props) {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    console.log(newNote, 'line no 12')
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  console.log({ notes },'lin no 16')

  function deleteNotes(id) {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note}
          onDelete={deleteNotes}
        />
      ))}
    </div>
  );
}

export default App;
