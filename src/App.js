import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";

const API_URL = `${process.env.REACT_APP_API_URL}/notes`;


function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  const fetchNotes = async () => {
    const res = await axios.get(API_URL);
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note) => {
    await axios.post(API_URL, note);
    fetchNotes();
  };

  const updateNote = async (id, note) => {
    await axios.put(`${API_URL}/${id}`, note);
    fetchNotes();
    setEditingNote(null);
  };

  const deleteNote = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchNotes();
  };

  return (
    <div className="container">
      <h1>📝 Quick Notes</h1>
      <NoteForm
        onSubmit={addNote}
        onUpdate={updateNote}
        editingNote={editingNote}
      />
      <NoteList
        notes={notes}
        onEdit={setEditingNote}
        onDelete={deleteNote}
      />
    </div>
  );
}

export default App;
