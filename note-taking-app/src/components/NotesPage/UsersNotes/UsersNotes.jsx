import React from "react";
import style from "./UsersNotes.module.scss";

const UsersNotes = ({ allUsersNotes }) => {
  let notesItems = allUsersNotes.map(item => (
    <div data-id={item.id} key={item.id}>
      <span>{item.title}</span>
      <div>{item.text}</div>
    </div>
  ));
  return <div className={style.usersNotes}>
    {notesItems}
    </div>;
};

export default UsersNotes;
