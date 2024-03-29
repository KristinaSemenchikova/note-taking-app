let initialState = {
  usersNotes: [{ id: 1, title: "My note", text: "Buy car" }],
  hashTags: [],
  tagFilter: ""
};

const ADD_NOTE = "ADD_NOTE";
const DELETE_NOTE = "DELETE_NOTE";
const EDIT_NOTE = "EDIT_NOTE";
const SET_TAG_FILTER = "SET_TAG_FILTER";

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
export const setTagFilter = filter => ({
  type: SET_TAG_FILTER,
  filter
});

const notesReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case ADD_NOTE:
      let id = guid();
      let note = {
        id,
        ...action.note
      };
      let titleTags = searchHashTag(action.note.title);
      let stateCopy = {
        ...state,
        usersNotes: [...state.usersNotes, note]
      };
      if (titleTags !== null) {
        stateCopy.hashTags = [...stateCopy.hashTags, ...titleTags];
      }
      return stateCopy;
    case DELETE_NOTE:
      let newState = { ...state, usersNotes: [...state.usersNotes] };
      let notes = newState.usersNotes.filter(note => note.id !== action.noteID);
      return { newState, usersNotes: notes };
    case EDIT_NOTE:
      let copy = { ...state, usersNotes: [...state.usersNotes] };
      let editedNote = copy.usersNotes.find(note => note.id == action.note.id);
      if (action.note.text) {
        editedNote.text = action.note.text;
      }
      if (action.note.title) {
        editedNote.title = action.note.title;
      }
      titleTags = searchHashTag(action.note.title);
      if (titleTags !== null) {
        copy.hashTags = [...copy.hashTags, ...titleTags];
      }
      return copy;
    case SET_TAG_FILTER:
      return { ...state, tagFilter: action.filter };
    default:
      return state;
  }
};
export default notesReducer;

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
export const searchHashTag = str => {
  let hashTag = /#\w*\s?/gi;
  let tags = str.match(hashTag);
  return tags;
};
