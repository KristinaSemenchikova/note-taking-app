import React, { useState } from "react";
import style from "./UsersNotes.module.scss";
import { FormEdit, FormClose } from "grommet-icons";
import { Button } from "grommet";
import AddNote from "../AddNote/AddNote";

const UsersNotes = ({ allUsersNotes, deleteNote , editNote}) => {
  const [isOpen, openModal] = useState(false);
  const [editingNote, setEditingNote] = useState(null);
  let toggleModal  = () => {
    openModal(!isOpen);
  }
  let onDelete = e => {
    let id = e.currentTarget.dataset.id;
    deleteNote(id);
  };
  let onEditNote = e => {
   toggleModal();
    setEditingNote({id : e.currentTarget.id,
      title : e.currentTarget.dataset.title})
  };
  let editNoteItem = (note) => {
    let changedNote = {
      id: editingNote.id,
      ...note
    } 
    editNote(changedNote);
  }

  let notesItems = allUsersNotes.map(item => (
    <div className={style.noteItem} key={item.id}>
      <div>
        <Button onClick={onEditNote} id={item.id} data-title={item.title} icon={<FormEdit />} />
        <span>{item.title}</span>
        <Button onClick={onDelete} data-id={item.id} icon={<FormClose />} />
      </div>
      <div>{item.text}</div>
    </div>
  ));
  return <div className={style.usersNotes}>
    {isOpen ? <div className = {style.edit}>
      <span> Now you are editing note "{editingNote.title}" 
       <Button onClick = {toggleModal} icon={<FormClose />} />
       </span>
      <AddNote save = {editNoteItem}/> 
        </div>: notesItems}  
  </div>;
};

export default UsersNotes;
