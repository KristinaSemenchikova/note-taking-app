import React, { useState } from "react";
import s from "./NotesPage.module.scss";
import UsersNotes from "./UsersNotes/UsersNotes";
import AddNote from "./AddNote/AddNote";
import AddNoteButton from "./Button/Button";
import Search from "./SearchField/Search";


const NotesPage = ({ allUsersNotes, addNewNote, deleteNote, editNote }) => {
  const [add, onAddClick] = useState(false);
  let toggleModal = () => {
    onAddClick(!add);
  };
  return (
    <div className={s.notesPage}>
      <AddNoteButton onClick={toggleModal} />
      <Search allUsersNotes = {allUsersNotes}/>
      {add && <AddNote save={addNewNote} />}
      <UsersNotes
        allUsersNotes={allUsersNotes}
        deleteNote={deleteNote}
        editNote={editNote}
      />
    </div>
  );
};

export default NotesPage;
