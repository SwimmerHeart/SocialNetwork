import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'

// let posts = [
//     { message: 'Привет, как дела?', likesCount: "23" },
//     { message: 'Это мой первый пост', likesCount: "5" }
// ];

// let dialogs = [
//     { id: 1, name: 'Саша' },
//     { id: 2, name: 'Женя' },
//     { id: 3, name: 'Александр' },
//     { id: 4, name: 'Василий' },
//     { id: 5, name: 'Дима' },
// ];

// let messages = [
//     { id: 1, message: 'Привет. Как дела?' },
//     { id: 2, message: 'Изучаю React' },
//     { id: 3, message: 'Давай играть в Roblox' }
// ];

ReactDOM.render(<App state={state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
