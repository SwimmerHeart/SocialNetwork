import { rerenderEntireTree } from './../render';

let state = {
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
        ]
    }
};

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;