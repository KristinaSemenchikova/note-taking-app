import React, { useState } from "react";
import style from "./AddNote.module.scss";
import { TextArea, Button, TextInput} from "grommet";
import { Edit, Add } from "grommet-icons";


const AddNote = ({placeholder, onChange,noteTitle, noteText , onClick}) => {
  return (
    <div className={style.addingNoteArea}>
      <TextInput
        name="Title"
        value={noteTitle}
        placeholder="Note title"
        onChange={onChange}
      />
      <TextArea
        name="Text"
        value={noteText}
        placeholder={placeholder}
        onChange={onChange}
        resize={false}
      />
      <Button
        onClick={onClick}
        margin="small"
        icon={<Edit/>}
        primary
        label = "Sumbit"
      />
    </div>
  );
};

export default AddNote;
