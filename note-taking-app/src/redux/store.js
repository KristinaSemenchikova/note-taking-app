import { combineReducers, createStore} from "redux";
import notesReducer from "./notes-reducer";




let reducers = combineReducers({
    notes: notesReducer,
});
let store = createStore(reducers);

export default store;