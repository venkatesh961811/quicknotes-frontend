import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onEdit, onDelete }) {
  if (!notes.length) {
    return <p style={{ textAlign: "center" }}>No notes yet. Add one!</p>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          onEdit={() => onEdit(note)}
          onDelete={() => onDelete(note._id)}
        />
      ))}
    </div>
  );
}

export default NoteList;
