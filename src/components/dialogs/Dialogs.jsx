import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from "./message/Message";

const Dialogs = (props) => {
    console.log(props);

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);

    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Push</button>
                </div>
            </div>
        </div>
    )

}
export default Dialogs;