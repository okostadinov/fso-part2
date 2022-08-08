import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("add a note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((allNotes) => setNotes(allNotes));
  }, []);

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addNote = (e) => {
    e.preventDefault();

    const noteObj = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    noteService.create(noteObj).then((newNote) => {
      setNotes(notes.concat(newNote));
      setNewNote("");
    });
  };

  const updateNewNote = (e) => {
    setNewNote(e.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((updatedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : updatedNote)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "all"}
      </button>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={updateNewNote} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
