import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store} />, document.getElementById('root'));
};



rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});