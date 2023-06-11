import React from "react";
import {ActionType, addMessageAC, changeMessageTextAC, MessagesDataType} from "../../redux/messagesReducer";
import {Messages} from "./Messages";

type MessagesContainerPropsType = {
    messagesData: MessagesDataType
    dispatch: (action: ActionType) => void
}
export const MessagesContainer = ({messagesData, dispatch}: MessagesContainerPropsType) => {
    const dispatchNewTextInput = (newText: string) => {
        dispatch(changeMessageTextAC(newText))
    }
    const addMessage = () => {
        dispatch(addMessageAC())
    }


    return <Messages messagesData={messagesData} dispatchNewTextInput={dispatchNewTextInput} addMessage={addMessage}/>
}