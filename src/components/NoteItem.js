import React from "react";

function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <div className="note-actions">
        <button className="edit" onClick={onEdit}>Edit</button>
        <button className="delete" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default NoteItem;
