import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes,setNotes] = useState([]);

  const addNote = note => {
      setNotes( previousNotes => [...previousNotes,note]);
  }

  const deleteNote = (noteToBeDeletedId) => {
      setNotes( previousNotes => {
        return previousNotes.filter( (note,index) => 
        index !== noteToBeDeletedId )
      }) 
}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => <Note key={index}
      id={index} 
      title={noteItem.title} 
      content={noteItem.content}
      onDelete={deleteNote} />
      )}

      <Footer />
    </div>
  );
}

export default App;
