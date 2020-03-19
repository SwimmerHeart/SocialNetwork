import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './dialogItem/DialogItem';
import Message from "./message/Message";

let dialogs = [
    { id: 1, name: 'Саша' },
    { id: 2, name: 'Женя' },
    { id: 3, name: 'Александр' },
    { id: 4, name: 'Василий' },
    { id: 5, name: 'Дима' },
];

let messages = [
    { id: 1, message: 'Привет. Как дела?' },
    { id: 2, message: 'Изучаю React' },
    { id: 3, message: 'Давай играть в Roblox' }
];

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
let messageElements = messages.map(m => <Message message={m.message} id={m.id}/>);

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )

}
export default Dialogs;