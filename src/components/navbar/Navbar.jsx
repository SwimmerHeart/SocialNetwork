import React from 'react';
import s from './Navbar.module.css';
import Nav from './nav/Nav';
import Friends from './friends/Friends';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <Nav />
            <Friends />
        </div>
    )
}

export default Navbar;