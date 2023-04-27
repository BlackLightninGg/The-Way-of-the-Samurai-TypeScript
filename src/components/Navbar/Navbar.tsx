import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'
import React from "react";
import {FriendsSection} from "./FriendsSection/FriendsSection";
import {state} from "../../redux/state";

export const Navbar: React.FC = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.navButtonsSection}>
                <div>
                    <NavLink to='profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/messages'
                             className={navData => navData.isActive ? s.active : s.item}>Message</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings'
                             className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
                </div>
            </div>
            <div className={s.navFriendSection}>
                <FriendsSection friendsData={state.messagesUsersData}/>
            </div>

        </nav>
    )
}