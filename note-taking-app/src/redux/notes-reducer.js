let initialState = {
  usersNotes: [{ id: 1, title: "My note", text: "Buy car" }]
};

const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

export const addNewNote = note => ({
  type: ADD_NOTE,
  note
});
export const deleteNote = noteID => ({
  type: DELETE_NOTE,
  noteID
});
export const editNote = note => ({
  type: EDIT_NOTE,
  note
});

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, usersNotes: [...state.usersNotes, action.note] };
    case DELETE_NOTE:
      let newState = { ...state, usersNotes: [...state.usersNotes] };
      let notes = newState.usersNotes.filter(
        note => note.id !== action.noteID
      );
      return { newState, usersNotes: notes };
    // case EDIT_NOTE:
    //   let newState = { ...state, usersNotes: [...state.usersNotes] };
    //   let note = newState.usersNotes.find(note => note.id == action.note.id);
    //   let editedNote = {
    //     ...note,
    //     t
    //   };
    //   return { newState, usersNotes: notes };
    default:
      return state;
  }
};
export default notesReducer;

export const allUsersNotes = state => state.notes.usersNotes;

export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};
