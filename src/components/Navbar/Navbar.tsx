import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import React from "react";

export const Navbar : React.FC = () => {
    return (
        <nav className={s.navbar}>
            <div>
                <NavLink to='profile' className={navData => navData.isActive? s.active : s.item}>Profile</NavLink>
            </div>
            <div >
                <NavLink to='/messages' className={navData => navData.isActive? s.active : s.item}>Message</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={navData => navData.isActive? s.active : s.item}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={navData => navData.isActive? s.active : s.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={navData => navData.isActive? s.active : s.item}>Settings</NavLink>
            </div>
        </nav>
    )
}