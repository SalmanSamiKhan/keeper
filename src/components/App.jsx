import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target; //deconstruct
    setNote((oldNote) => {
      return {
        ...oldNote,
        [name]: value // [name] refers to title and content in note object
      };
    });
  }
  function handleAdd(event) {
    console.log(note);
    if (note.title.length > 0 && note.content.length > 0) {
      setNotes((oldNotes) => {
        return [...oldNotes, note];
      });
    }
    event.preventDefault();
  }
  function handleDelete(id) {
    console.log("clicked Delete");
    setNotes((oldNotes) => {
      return oldNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        handleChange={handleChange}
        handleAdd={handleAdd}
        title={note.title}
        content={note.content}
      />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            handleDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
