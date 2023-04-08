import s from './Messages.module.css'
import { DialogUser } from './DialogUser/DialogUser'
import { UserMessages } from './UserMessages/UserMessages'


export const Messages = () => {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogUser animalNick='Fox' />
        <DialogUser animalNick='Bear' />
        <DialogUser animalNick='Owl' />
        <DialogUser animalNick='Wolf' />
      </div>
      <div className={s.messages}>
        <UserMessages text='Frrr fr fr' />
        <UserMessages text='Raaaaa' />
        <UserMessages text='Wo Wooo' />
        <UserMessages text='Woyyyyy woyyyy' />
      </div>
    </div >
  )
}