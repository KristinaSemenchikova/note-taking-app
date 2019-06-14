import React from "react";
import s from "./NotesPage.module.scss";
import UsersNotes from "./UsersNotes/UsersNotes";
import AddNote from './AddNote/AddNote';

const NotesPage = ({ allUsersNotes }) => {
  return (
    <div className={s.note}>
      <AddNote />
      <UsersNotes allUsersNotes={allUsersNotes} />
    </div>
  );
};

export default NotesPage;
