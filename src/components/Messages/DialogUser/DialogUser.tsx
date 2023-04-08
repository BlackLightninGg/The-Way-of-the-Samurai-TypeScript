import s from './DialogUser.module.css'
import { NavLink } from 'react-router-dom'
type DialogUserType = {
  animalNick: string
}



export const DialogUser = (props: DialogUserType) => {
  return (
    <div className={s.dialogItem}>
      <NavLink to={props.animalNick.toLowerCase()} className={navData => navData.isActive ? s.activeDialogItem : s.dialogItem}>{props.animalNick}</NavLink>
    </div>
  )
}