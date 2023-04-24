import s from './DialogUser.module.css'
import { NavLink } from 'react-router-dom'
import React from "react";
type DialogUserType = {
  animalNick: string
}



export const DialogUser : React.FC<DialogUserType> = ({animalNick}) => {
  return (
    <div className={s.dialogItem}>
      <NavLink to={animalNick.toLowerCase()} className={navData => navData.isActive ? s.activeDialogItem : s.dialogItem}>{animalNick}</NavLink>
    </div>
  )
}