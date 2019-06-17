import React, {useState} from "react";
import s from "./NotesPage.module.scss";
import UsersNotes from "./UsersNotes/UsersNotes";
import AddNote from './AddNote/AddNote';
import AddNoteButton from './Button/Button';
import { guid } from "../../redux/notes-reducer";

const NotesPage = ({ allUsersNotes, addNewNote , deleteNote}) => {
  const [add, onAddClick] = useState(false);
  const [noteTitle, addTitle] = useState("");
  const [noteText, addText] = useState("");
  const [placeholder, validate] = useState('Note text');

  let validateField  = () => {
    if (!noteText) {
      validate( "The field is required!")
    }
  }

  let onChange = e => {
    switch (e.currentTarget.name) {
      case "Title":
        addTitle(e.currentTarget.value);
        break;
      case "Text":
        addText(e.currentTarget.value);
        break;
    }
  };
  let newNote = () => {
    onAddClick(!add);
  };
  let saveNote  = () => {
    validateField();
    if (noteText) {
      let note = { id: guid(), title: noteTitle, text: noteText};
      addNewNote (note);
      addTitle('');
      addText('');
    }
  };
  return (
    <div className={s.notesPage}>
      <AddNoteButton 
      onClick = {newNote}/>
      {add && <AddNote 
       onChange = {onChange}
       noteTitle = {noteTitle}
       noteText = {noteText} 
      addNewNote = {addNewNote}
      onClick = {saveNote}
      placeholder = {placeholder}
      />}
      <UsersNotes 
      allUsersNotes={allUsersNotes}
      deleteNote = {deleteNote}
      onChange = {onChange}
     addNewNote = {addNewNote}
     onClick = {saveNote}
     placeholder = {placeholder}
       />
    </div>
  );
};

export default NotesPage;
