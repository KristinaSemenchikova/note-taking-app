import React from 'react';
import { connect } from 'react-redux';
import {allUsersNotes} from '../../redux/notes-reducer';
import NotesPage from './NotesPage';

const NotesPageContainer = ({allUsersNotes}) => {
  return (
    <NotesPage
    allUsersNotes = {allUsersNotes}
    />
  );
};

const mapStateToProps = state => {
  return {
    allUsersNotes : allUsersNotes(state)
  }
};
export default connect(mapStateToProps,null)(NotesPageContainer) ;
