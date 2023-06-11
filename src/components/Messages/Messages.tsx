import React, { ChangeEvent } from "react";
import { DialogUser } from './DialogUser/DialogUser';
import s from './Messages.module.css';
import { UserMessage } from './UserMessage/UserMessage';
import {addMessageAC, changeMessageTextAC, MessagesDataType, ActionType} from "../../redux/messagesReducer";

type PropsType = {
    messagesData: MessagesDataType
    dispatch: (action: ActionType) => void
}
export const Messages: React.FC<PropsType> = ({ messagesData, dispatch }) => {
    const onChangeMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changeMessageTextAC(e.currentTarget.value))
    }
    const onClickMessageTextHandler = () => {
        dispatch(addMessageAC())
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messagesData.messagesUsersData.map(u => <DialogUser key={u.id} id={u.id} animalName={u.animalName} photoAvatar={u.photoAvatar} />)}
            </div>
            <div className={s.messages}>
                {messagesData.messagesTextData.map(m => <UserMessage key={m.id} id={m.id} messageText={m.messageText} />)}
                <textarea onChange={onChangeMessageTextHandler} value={messagesData.messageText} placeholder="Enter your message" />
                <button onClick={onClickMessageTextHandler}>Sent message</button>
            </div>

        </div>
    )
}