import React, { useState } from "react";
import style from "./AddNote.module.scss";
import { TextArea, Button, TextInput } from "grommet";
import { Edit} from "grommet-icons";
import { guid } from "../../../redux/notes-reducer";

const AddNote = ({addNewNote}) => {
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
      let note = { id: guid(), title: noteTitle, text: noteText };
      addNewNote(note);
      addTitle('');
      addText('');
    }
  }
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
