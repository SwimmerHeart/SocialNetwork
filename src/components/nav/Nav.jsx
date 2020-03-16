import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.activ}`}>
                    <a>Profile</a>
                </li>
                <li className={s.item}>
                    <a>Messages</a>
                </li>
                <li className={s.item}>
                    <a>News</a>
                </li>
                <li className={s.item}>
                    <a>Misic</a>
                </li>
                <li className={s.item}>
                    <a>Settings</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;