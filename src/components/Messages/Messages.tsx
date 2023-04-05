import { NavLink } from 'react-router-dom'
import s from './Messages.module.css'


export const Messages = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialogItem}>
          <NavLink to='/fox' className={navData => navData ? s.active : s.dialogItem}>Fox</NavLink>
        </div>
        <div className={s.dialogItem}>
          <NavLink to='/bear' className={navData => navData ? s.active : s.dialogItem}>Bear</NavLink>
        </div>
        <div className={s.dialogItem}>
          <NavLink to='/owl' className={navData => navData ? s.active : s.dialogItem}>Owl</NavLink>
        </div>
        <div className={s.dialogItem}>
          <NavLink to='/wolf' className={navData => navData ? s.active : s.dialogItem}>Wolf</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.messageItem}>Frrr fr fr</div>
        <div className={s.messageItem}>Raaaaa</div>
        <div className={s.messageItem}>Woooo wo</div>
        <div className={s.messageItem}>Woyyyyy woyyyy</div>
      </div>
    </div>
  )
}