import { useDispatch, useSelector } from "react-redux";
import { MessagesDataType, addMessageAC, changeMessageTextAC } from "../../redux/messagesReducer";
import { ReducersType } from "../../redux/reduxStore";
import { Messages } from "./Messages";


export const MessagesContainer = () => {

    let messagesData = useSelector<ReducersType, MessagesDataType>(state => state.messagesData)
    let dispatch = useDispatch()

    const dispatchNewTextInput = (newText: string) => {
        dispatch(changeMessageTextAC(newText))
    }
    const addMessage = () => {
        dispatch(addMessageAC())
    }


    return <Messages messagesData={messagesData} dispatchNewTextInput={dispatchNewTextInput} addMessage={addMessage} />
}


// const mapStateToProps = (state: MessagesDataType) => {
//     return {
//         messagesData: state
//     }
// }

// const mapDispatchtoProps = (dispatch: (action:MessagesReducerActionType)=>void) => {
//     return {
//         dispatchNewTextInput: (newText: string) => {
//             dispatch(changeMessageTextAC(newText))
//         },
//         addMessage: () => {
//             dispatch(addMessageAC())
//         }
//     }
// }

// export const MessagesContainer = connect(mapStateToProps, mapDispatchtoProps)(Messages)