import s from './UserMessages.module.css'
import React from "react";

type UserMessagesType = {
  text: string
}

export const UserMessages : React.FC<UserMessagesType> = ({text}) => {
  return  <div className={s.messageItem}>{text}</div>
}