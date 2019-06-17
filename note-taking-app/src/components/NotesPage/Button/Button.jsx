import React  from "react";
import {Button} from "grommet";
import { Add } from "grommet-icons";

const AddNoteButton = ({onClick}) => {
  return (
        <Button
          margin="medium"
          icon={<Add />}
          label="New note"
          onClick={onClick}
        />
  );
};

export default AddNoteButton;
