import s from './UserMessages.module.css'

type UserMessagesType = {
  text: string
}

export const UserMessages = (props: UserMessagesType) => {
  return  <div className={s.messageItem}>{props.text}</div>
}