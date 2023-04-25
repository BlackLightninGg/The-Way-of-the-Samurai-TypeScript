import React from "react";
import s from './UserMessage.module.css'
import {useLocation} from "react-router-dom";

export type UserMessageType = {
    id: number
    messageText: string
}

export const UserMessage: React.FC<UserMessageType> = ({id, messageText}) => {
    const urlCurrentId = Number(useLocation().pathname[useLocation().pathname.length -1])
    return <div className={s.messageItem}> <div className={id === urlCurrentId ? s.currentCircle : s.circle}></div>{messageText}</div>
}