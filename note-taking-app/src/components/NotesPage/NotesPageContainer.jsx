import React from 'react';
import { connect } from 'react-redux';
import {allUsersNotes, addNewNote, deleteNote} from '../../redux/notes-reducer';
import NotesPage from './NotesPage';

const NotesPageContainer = ({allUsersNotes, addNewNote, deleteNote}) => {
  return (
    <NotesPage
    allUsersNotes = {allUsersNotes}
    addNewNote =  {addNewNote}
    deleteNote = {deleteNote}
    />
  );
};

const mapStateToProps = state => {
  return {
    allUsersNotes : allUsersNotes(state)
  }
};
export default connect(mapStateToProps,{addNewNote,deleteNote}) (NotesPageContainer);
