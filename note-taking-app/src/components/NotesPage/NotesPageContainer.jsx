import React from 'react';
import { connect } from 'react-redux';
import {allUsersNotes,hashTags, addNewNote, deleteNote, editNote} from '../../redux/notes-reducer';
import NotesPage from './NotesPage';

const NotesPageContainer = ({allUsersNotes,hashTags, addNewNote, deleteNote, editNote}) => {
  return (
    <NotesPage
    allUsersNotes = {allUsersNotes}
    addNewNote =  {addNewNote}
    deleteNote = {deleteNote}
    editNote = {editNote}
    hashTags = {hashTags}
    />
  );
};

const mapStateToProps = state => {
  return {
    allUsersNotes : allUsersNotes(state),
    hashTags : hashTags(state)
  }
};
export default connect(mapStateToProps,{addNewNote,deleteNote , editNote}) (NotesPageContainer);
