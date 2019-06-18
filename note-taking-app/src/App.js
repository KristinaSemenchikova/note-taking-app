import React from "react";
import { Route, Switch} from 'react-router-dom';
import style from "./App.scss";
import Header from "./components/Header/Header"
import NotesPageContainer from './components/NotesPage/NotesPageContainer';

function App() {
  return (
    <div className= {style.appWrapper}>
      <Header/>
      <Switch>
      <Route path='/notes' render={() => <NotesPageContainer />} />
      </Switch>    
    </div>
  );
}

export default App;
