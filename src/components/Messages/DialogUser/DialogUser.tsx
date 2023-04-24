import s from './DialogUser.module.css'
import {NavLink} from 'react-router-dom'
import React from "react";

export type DialogUserType = {
    animalName: string
    id: number
}


export const DialogUser: React.FC<DialogUserType> = ({animalName}) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={animalName.toLowerCase()}
                     className={navData => navData.isActive ? s.activeDialogItem : s.dialogItem}>{animalName}</NavLink>
        </div>
    )
}