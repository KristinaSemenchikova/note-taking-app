import React from 'react';
import { connect } from 'react-redux';
import {allUsersNotes, addNewNote, deleteNote, editNote} from '../../redux/notes-reducer';
import NotesPage from './NotesPage';

const NotesPageContainer = ({allUsersNotes, addNewNote, deleteNote, editNote}) => {
  return (
    <NotesPage
    allUsersNotes = {allUsersNotes}
    addNewNote =  {addNewNote}
    deleteNote = {deleteNote}
    editNote = {editNote}
    />
  );
};

const mapStateToProps = state => {
  return {
    allUsersNotes : allUsersNotes(state)
  }
};
export default connect(mapStateToProps,{addNewNote,deleteNote , editNote}) (NotesPageContainer);
