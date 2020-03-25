import React from 'react';
import s from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={s.logo}>
            <h2>Friends</h2>
            <div className={s.myfriends}>
                <div className={s.item}>
                    <img className={s.avatar} src="https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg" />
                    <p>Саша</p>
                </div>
                <div className={s.item}>
                    <img className={s.avatar} src="https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg" />
                    <p>Женя</p>
                </div>
                <div className={s.item}>
                    <img className={s.avatar} src="https://www.prikol.ru/wp-content/gallery/october-2019/prikol-25102019-001.jpg" />
                    <p>Александр</p>
                </div>
            </div>
        </div>
    )
}

export default Friends;