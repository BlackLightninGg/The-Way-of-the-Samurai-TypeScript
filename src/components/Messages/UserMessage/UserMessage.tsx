import React from "react";
import s from './UserMessage.module.css'

export type UserMessageType = {
    id: number
    messageText: string
}

export const UserMessage: React.FC<UserMessageType> = ({messageText}) => {
    return <div className={s.messageItem}>{messageText}</div>
}