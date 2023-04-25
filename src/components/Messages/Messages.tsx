import s from './Messages.module.css'
import {DialogUser, DialogUserType} from './DialogUser/DialogUser'
import {UserMessage, UserMessageType} from './UserMessage/UserMessage'
import React from "react";

type PropsType = {
    messagesUsersData: DialogUserType[]
    messagesTextData: UserMessageType[]
}
export const Messages: React.FC<PropsType> = ({messagesUsersData, messagesTextData}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesUsersData.map(u => <DialogUser id={u.id} animalName={u.animalName} photoAvatar={u.photoAvatar}/>)}
            </div>
            <div className={s.messages}>
                {messagesTextData.map(m => <UserMessage id={m.id} messageText={m.messageText}/>)}
            </div>
        </div>
    )
}