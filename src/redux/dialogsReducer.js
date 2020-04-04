const ON_SEND_MESSAGE_CLICK = 'ON-SEND-MESSAGE-CLICK';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_SEND_MESSAGE_CLICK:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default: return state;
    }
}

export const onSendMessageClickActionCreator = () => ({ type: ON_SEND_MESSAGE_CLICK });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;