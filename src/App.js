import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={() => <Dialogs store={props.store} /*dialogsPage={props.state.dialogsPage}*/ dispatch={props.dispatch} />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;
