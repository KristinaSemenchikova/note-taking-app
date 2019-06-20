import React from "react";
import { connect } from "react-redux";
import {
  addNewNote,
  deleteNote,
  editNote,
  setTagFilter
} from "../../redux/notes-reducer";
import { filteredNotes, hashTags, tagFilter } from "../../redux/selectors";
import NotesPage from "./NotesPage";

const NotesPageContainer = ({
  allUsersNotes,
  hashTags,
  tagFilter,
  addNewNote,
  deleteNote,
  editNote,
  setTagFilter
}) => {
  return (
    <NotesPage
      allUsersNotes={allUsersNotes}
      addNewNote={addNewNote}
      deleteNote={deleteNote}
      editNote={editNote}
      hashTags={hashTags}
      tagFilter={tagFilter}
      setTagFilter={setTagFilter}
    />
  );
};

const mapStateToProps = state => {
  return {
    allUsersNotes: filteredNotes(state),
    hashTags: hashTags(state),
    tagFilter: tagFilter(state)
  };
};
export default connect(
  mapStateToProps,
  { addNewNote, deleteNote, editNote, setTagFilter }
)(NotesPageContainer);
