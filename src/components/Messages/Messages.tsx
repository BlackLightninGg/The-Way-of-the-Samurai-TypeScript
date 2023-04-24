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
                <DialogUser id={messagesUsersData[0].id} animalName={messagesUsersData[0].animalName}/>
                <DialogUser id={messagesUsersData[1].id} animalName={messagesUsersData[1].animalName}/>
                <DialogUser id={messagesUsersData[2].id} animalName={messagesUsersData[2].animalName}/>
                <DialogUser id={messagesUsersData[3].id} animalName={messagesUsersData[3].animalName}/>
            </div>
            <div className={s.messages}>
                <UserMessages id={messagesTextData[0].id} messageText={messagesTextData[0].messageText}/>
                <UserMessages id={messagesTextData[1].id} messageText={messagesTextData[1].messageText}/>
                <UserMessages id={messagesTextData[2].id} messageText={messagesTextData[2].messageText}/>
                <UserMessages id={messagesTextData[3].id} messageText={messagesTextData[3].messageText}/>
            </div>
        </div>
    )
}