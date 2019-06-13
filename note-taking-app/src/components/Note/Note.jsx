import React from "react";
import style from "./Note.module.scss";
import { Button } from 'antd';

const Note = () => {
  return (
    <div className = {style.note}>

    <Button type="primary">Primary</Button>
   
      </div>
  );
};

export default Note;
