import React, { useState } from "react";
import style from "./AddNote.module.scss";
import { TextArea, Button, Form, TextInput,FormField } from "grommet";
import { Edit, Add } from "grommet-icons";

const AddNote = () => {
  const [add, onAddClick] = useState(false);
  const [noteTitle,addTitle] = useState('');
  const [noteText,addText] = useState('');
  let newNote = () => {
    onAddClick(!add);
  };
  let onChange = (e) => {
   switch(e.currentTarget.name){
     case 'Title':
       case 'Text':
   }
  };
  return (
    <div className={style.addingNoteArea}>
      <span>
        <Button
        margin="medium"
        icon={<Add />}
        label="New note"
        onClick={newNote}
      /> </span>
      {add && (
          <div>
            <TextInput name = 'Title' placeholder="Title" onChange = {onChange} />
            <TextArea  name  = 'Text' placeholder="Note text" onChange = {onChange}/>
            <Button
              margin="small"
              icon={<Edit />}
              primary
              label="Submit"
            />
          </div>
      )}
    </div>
  );
};

export default AddNote;
