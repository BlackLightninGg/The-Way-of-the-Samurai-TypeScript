import s from './UserMessages.module.css'
import React from "react";

export type UserMessagesType = {
  messageText: string
  id: number
}

export const UserMessages : React.FC<UserMessagesType> = ({messageText}) => {
  return  <div className={s.messageItem}>{messageText}</div>
}