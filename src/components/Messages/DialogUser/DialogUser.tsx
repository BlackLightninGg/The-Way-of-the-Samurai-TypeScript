import React from "react";
import {NavLink} from 'react-router-dom'
import s from './DialogUser.module.css'

export type DialogUserType = {
    id: number
    animalName: string
}


export const DialogUser: React.FC<DialogUserType> = ({animalName}) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={animalName.toLowerCase()}
                     className={navData => navData.isActive ? s.activeDialogItem : s.dialogItem}>{animalName}</NavLink>
        </div>
    )
}