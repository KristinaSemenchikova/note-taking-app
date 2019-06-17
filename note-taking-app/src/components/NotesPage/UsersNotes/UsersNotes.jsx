import React, { useState, useRef } from "react";
import style from "./UsersNotes.module.scss";
import { FormEdit, FormClose } from "grommet-icons";
import { Button, TextInput , TextArea } from "grommet";

const UsersNotes = ({  allUsersNotes,  deleteNote}) => {
  let inputRef = useRef(null);
  let textAreaRef = useRef(null);

  let onDelete = e => {
    let id = e.currentTarget.dataset.id;
    deleteNote(id);
  };

  let onEdit = () => {
    inputRef.current.style.display = 'block';
    textAreaRef.current.style.display = 'block';
  };
  let notesItems = allUsersNotes.map(item =>(<div className={style.noteItem} key={item.id}>
        <div>
          <Button onClick={onEdit} data-id={item.id} icon={<FormEdit />} />
          <span>{item.title}</span>
          <Button onClick={onDelete} data-id={item.id} icon={<FormClose />} />
          <TextInput style = {{display: 'none'}} name = 'Text' ref = {inputRef}/>      
        </div>
        <div>{item.text}</div>
        <TextArea style = {{display: 'none'}} ref= {textAreaRef} name = "Text" resize = {false}/>
      </div>
    )
  );
  return <div className={style.usersNotes}>{notesItems}</div>;
};

export default UsersNotes;
