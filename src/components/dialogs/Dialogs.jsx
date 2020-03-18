import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

let dialogsData = [
    {id : 1, name : 'Саша'},
    {id : 2, name : 'Женя'},
    {id : 3, name : 'Александр'},
    {id : 4, name : 'Василий'},
    {id : 5, name : 'Дима'},

];
let messagesData = [
    {id : 1, message : 'Привет. Как дела?'},
    {id : 2, message : 'Изучаю React'},
    {id : 3, message : 'Давай играть в Roblox'},
];

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem name={dialogsData[0].id} id={dialogsData[0].name} />
                <DialogItem name={dialogsData[1].id} id={dialogsData[1].name} />
                <DialogItem name={dialogsData[2].id} id={dialogsData[2].name} />
                <DialogItem name={dialogsData[3].id} id={dialogsData[3].name} />
                <DialogItem name={dialogsData[4].id} id={dialogsData[4].name} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].messages} />
                <Message message={messagesData[1].messages} />
                <Message message={messagesData[2].messages} />
            </div>
        </div>
    )

}
export default Dialogs;