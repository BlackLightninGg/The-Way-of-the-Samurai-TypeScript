import s from './Messages.module.css'
import {DialogUser} from './DialogUser/DialogUser'
import {UserMessage} from './UserMessage/UserMessage'
import React from "react";
import {TextDataType, UsersDataType} from "../../redux/state";

type PropsType = {
    messagesUsersData: UsersDataType[]
    messagesTextData: TextDataType[]
}
export const Messages: React.FC<PropsType> = ({messagesUsersData, messagesTextData}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesUsersData.map(u => <DialogUser key={u.id} id={u.id} animalName={u.animalName} photoAvatar={u.photoAvatar}/>)}
            </div>
            <div className={s.messages}>
                {messagesTextData.map(m => <UserMessage key={m.id} id={m.id} messageText={m.messageText}/>)}
            </div>
        </div>
    )
}