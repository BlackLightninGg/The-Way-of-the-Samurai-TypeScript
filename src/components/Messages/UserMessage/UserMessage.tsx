import React from "react";
import s from './UserMessage.module.css'
import {useLocation} from "react-router-dom";
import {TextDataType} from "../../../redux/store";

export const UserMessage: React.FC<TextDataType> = ({id, messageText}) => {
    const urlCurrentId = Number(useLocation().pathname[useLocation().pathname.length - 1])
    return <div className={s.messageItem}>
        <div className={id === urlCurrentId ? s.currentCircle : s.circle}></div>
        {messageText}</div>
}