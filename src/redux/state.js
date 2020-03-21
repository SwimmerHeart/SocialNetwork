let state = {
    profilePage: {
        posts: [
            { message: 'Привет, как дела?', likesCount: "23" },
            { message: 'Это мой первый пост', likesCount: "5" }
        ]
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

export default state;