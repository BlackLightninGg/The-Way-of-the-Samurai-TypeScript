import s from './Messages.module.css'
import {DialogUser, DialogUserType} from './DialogUser/DialogUser'
import {UserMessages, UserMessagesType} from './UserMessages/UserMessages'
import React from "react";


export const Messages: React.FC = () => {

    const messagesUsersData: DialogUserType[] = [
        {id: 1, animalName: 'Fox'},
        {id: 2, animalName: 'Bear'},
        {id: 3, animalName: 'Owl'},
        {id: 4, animalName: 'Wolf'},
    ]

    const messagesTextData: UserMessagesType[] = [
        {id: 1, messageText: 'Frrr fr fr'},
        {id: 2, messageText: 'Raaaaa!'},
        {id: 3, messageText: 'Wo Wooo!'},
        {id: 4, messageText: 'Woyyyyy! woyyyy!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesUsersData.map(u => <DialogUser id={u.id} animalName={u.animalName}/>)}
            </div>
            <div className={s.messages}>
                {messagesTextData.map(m => <UserMessages id={m.id} messageText={m.messageText}/>)}
            </div>
        </div>
    )
}