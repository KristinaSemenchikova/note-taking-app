import { createSelector } from "reselect";

export const notesSelector = state => state.notes;

export const allUsersNotes = createSelector(
  notesSelector,
  notes => notes.usersNotes
);
export const hashTags = createSelector(
  notesSelector,
  notes => notes.hashTags
);
export const tagFilter = createSelector(
  notesSelector,
  notes => notes.tagFilter
);

export const filteredNotes = createSelector(
  [allUsersNotes, tagFilter],
  (usersNotes, tagFilter) => {
      if(tagFilter)  {
          return usersNotes.filter(note => note.title.includes(tagFilter))
        }
        return usersNotes;
  }  
);
