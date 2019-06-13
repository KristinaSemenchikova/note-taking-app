import React from "react";
import style from "./AddNote.module.scss";
import { Input } from "antd";
import { Icon } from "antd";
const { TextArea } = Input;

const AddNote = () => {
  return (
    <div className= {style.addingNoteArea}>
        <TextArea
          style={{
            padding: "20px",
            resize: "none",
            height: "300px"
          }}
          rows={10}
          cols={30}
          autosize={{ minRows: 10, maxRows: 10 }}
        />
        <Icon
          style={{
            position: 'relative',
            marginLeft: "-265px",
            marginTop: "170px"
          }}
          type="paper-clip"
        />
      </div>
  );
};

export default AddNote;
