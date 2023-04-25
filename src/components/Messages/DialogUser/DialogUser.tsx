import React from "react";
import {NavLink} from 'react-router-dom'
import s from './DialogUser.module.css'

export type DialogUserType = {
    id: number
    animalName: string
    photoAvatar: string
}


export const DialogUser: React.FC<DialogUserType> = ({id, animalName, photoAvatar}) => {
    return (
        <div className={s.dialogItem}>
            <NavLink to={`${animalName.toLowerCase() +'/' +id}`}
                     className={navData => navData.isActive ? s.activeDialogItem : s.dialogItem}> <img src={photoAvatar} alt={'#'}/> <span>{animalName}</span></NavLink>
        </div>
    )
}