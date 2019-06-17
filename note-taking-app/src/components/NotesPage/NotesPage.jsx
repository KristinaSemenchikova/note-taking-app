import React, {useState} from "react";
import s from "./NotesPage.module.scss";
import UsersNotes from "./UsersNotes/UsersNotes";
import AddNote from './AddNote/AddNote';
import AddNoteButton from './Button/Button';


const NotesPage = ({ allUsersNotes, addNewNote , deleteNote}) => {
  const [add, onAddClick] = useState(false);
  let newNote = () => {
    onAddClick(!add);
  };
  return (
    <div className={s.notesPage}>
      <AddNoteButton 
      onClick = {newNote}/>
      {add && <AddNote 
      onClick = {addNewNote} />}
      <UsersNotes 
      allUsersNotes={allUsersNotes}
      deleteNote = {deleteNote}
       />
    </div>
  );
};

export default NotesPage;
