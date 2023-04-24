import React from "react";
import s from './UserMessages.module.css'

export type UserMessagesType = {
    id: number
    messageText: string
}

export const UserMessages: React.FC<UserMessagesType> = ({messageText}) => {
    return <div className={s.messageItem}>{messageText}</div>
}