import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText, onSendMessageClick, updateNewMessageText } from './redux/state';
// import { updateNewPostText } from './redux/state';
// import { onSendMessageClick } from './redux/state';
// import { updateNewMessageText } from './redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        onSendMessageClick={onSendMessageClick}
        updateNewMessageText={updateNewMessageText} />, document.getElementById('root'));
};

