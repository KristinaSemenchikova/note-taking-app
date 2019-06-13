import React from "react";
import style from "./App.scss";
import AddNote from "./components/AddNote/AddNote";
import Menu from './components/Menu/Menu';
import Note from "./components/Note/Note";
function App() {
  return (
    <div className= {style.appWrapper}>
      <Menu/>
      <Note/>
      <AddNote />
    </div>
  );
}

export default App;
