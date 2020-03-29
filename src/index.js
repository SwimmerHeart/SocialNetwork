import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import App from './App';
import { addPost, updateNewPostText, onSendMessageClick, updateNewMessageText } from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        onSendMessageClick={onSendMessageClick}
        updateNewMessageText={updateNewMessageText} />, document.getElementById('root'));
};



rerenderEntireTree(state);

subscribe(rerenderEntireTree);