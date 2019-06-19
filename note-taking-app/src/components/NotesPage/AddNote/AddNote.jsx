import React, { useState } from "react";
import style from "./AddNote.module.scss";
import { TextArea, Button, TextInput } from "grommet";
import { Edit} from "grommet-icons";


const AddNote = ({save}) => {
  const [noteTitle, addTitle] = useState("");
  const [noteText, addText] = useState("");
  const [placeholder, validate] = useState('Note text');

  let validateField = () => {
    if (!noteText) {
      validate("The field is required!")
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

  let saveNote = () => {
    validateField();
    if (noteText) {
      let note = { title: noteTitle, text: noteText };
      save(note);
      addTitle('');
      addText('');
    }
  }
    return (
      <div className={style.addingNoteArea}>
        <span className = {style.text}>You can add some <span>#tags</span> for best search :) </span>
        <TextInput
          name="Title"
          value={noteTitle}
          placeholder="Note title"
          onChange={onChange}
          maxLength = {15}
        />
        <TextArea
          name="Text"
          value={noteText}
          placeholder={placeholder}
          onChange={onChange}
          resize={false}
        />
        <Button
          onClick={saveNote}
          margin="small"
          icon={<Edit />}
          primary
          label="Sumbit"
        />
      </div>
    )
  }
  export default AddNote;
