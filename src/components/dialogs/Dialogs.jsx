import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from "./message/Message";
import { onSendMessageClickActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogsReducer';


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id} />);

    // let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.store.dispatch(onSendMessageClickActionCreator());
    }
    let onMessageChange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' /*ref={newMessageElement}*/ onChange={onMessageChange} value={state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Dialogs;