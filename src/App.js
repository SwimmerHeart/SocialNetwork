import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
