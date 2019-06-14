let initialState = {
  usersNotes: [{ id: 1, title: "My note", text: "Buy car" }]
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default notesReducer;

export const allUsersNotes = (state) => state.notes.usersNotes;
