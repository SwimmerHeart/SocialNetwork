import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Привет, как дела?', likesCount: "23" },
                { id: 2, message: 'Это мой первый пост', likesCount: "5" }
            ],
            newPostText: 'Напиши мне...'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Саша' },
                { id: 2, name: 'Женя' },
                { id: 3, name: 'Александр' },
                { id: 4, name: 'Василий' },
                { id: 5, name: 'Дима' },
            ],
            messages: [
                { id: 1, message: 'Привет. Как дела?' },
                { id: 2, message: 'Изучаю React' },
                { id: 3, message: 'Давай играть в Roblox' }
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscrider() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscrider = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscrider(this._state);
    }
}



// windows.store = store;

export default store;