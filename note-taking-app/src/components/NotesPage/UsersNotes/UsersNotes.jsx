import React, { useState } from "react";
import style from "./UsersNotes.module.scss";
import { FormEdit, FormClose } from "grommet-icons";
import { Button } from "grommet";
import AddNote from "../AddNote/AddNote";

const UsersNotes = ({
  allUsersNotes,
  deleteNote,
  onChange,
  addNewNote,
  onClick,
  placeholder
}) => {
  const [isNoteEditing, edit] = useState(false);
  const [editNote, onEditNote] = useState({
    title: "",
    text: ""
  });
  let onDelete = e => {
    let id = e.currentTarget.dataset.id;
    deleteNote(id);
  };
  let onEdit = (e) => {
    edit(!isNoteEditing);
  };
  let onNoteEditing = (e) => {
    switch (e.currentTarget.name) {
      case "Title":
        onEditNote({
          ...editNote,
          title: e.currentTarget.value
        });
        break;
      case "Text":
        onEditNote({
          ...editNote,
          text: e.currentTarget.value
        });
        break;
    }
  };
  let notesItems = allUsersNotes.map(item =>
    isNoteEditing ? (
      <div className={style.edit} key={item.id}>
        <AddNote
          onChange={onNoteEditing}
          addNewNote={addNewNote}
          onClick={onClick}
          placeholder={placeholder}
          noteTitle={editNote.title}
          noteText={editNote.text}
        />
        <Button onClick={onEdit} icon={<FormClose />} data-id={item.id}/>
      </div>
    ) : (
      <div className={style.noteItem} key={item.id}>
        <div>
          <Button onClick={onEdit} data-id={item.id} icon={<FormEdit />} />
          <span>{item.title}</span>
          <Button onClick={onDelete} data-id={item.id} icon={<FormClose />} />
        </div>
        <div>{item.text}</div>
      </div>
    )
  );
  return <div className={style.usersNotes}>{notesItems}</div>;
};

export default UsersNotes;
