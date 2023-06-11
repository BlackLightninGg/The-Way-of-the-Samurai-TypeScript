import React, {useContext} from "react";
import {ActionType, addMessageAC, changeMessageTextAC, MessagesDataType} from "../../redux/messagesReducer";
import {Messages} from "./Messages";
import {reduxStore} from "../../redux/reduxStore";
import {StoreContext} from "../../redux/storeContext";

// type MessagesContainerPropsType = {
//     messagesData: MessagesDataType
//     dispatch: (action: ActionType) => void
// }
export const MessagesContainer = () => {
    const messagesData = useContext(StoreContext).getState().messagesData
    const dispatch = useContext(StoreContext).dispatch

    const dispatchNewTextInput = (newText: string) => {
        dispatch(changeMessageTextAC(newText))
    }
    const addMessage = () => {
        dispatch(addMessageAC())
    }


    return <Messages messagesData={messagesData} dispatchNewTextInput={dispatchNewTextInput} addMessage={addMessage}/>
}