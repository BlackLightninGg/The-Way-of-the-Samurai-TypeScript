import { connect, useDispatch, useSelector } from "react-redux";
import { MessagesReducerActionType, addMessageAC, changeMessageTextAC, MessagesDataType } from "../../redux/messagesReducer";
import { ReducersType } from "../../redux/reduxStore";
import { Messages } from "./Messages";


// export const MessagesContainer = () => {

//     let messagesData = useSelector<ReducersType, MessagesDataType>(state => state.messagesData)
//     let dispatch = useDispatch()

//     const dispatchNewTextInput = (newText: string) => {
//         dispatch(changeMessageTextAC(newText))
//     }
//     const addMessage = () => {
//         dispatch(addMessageAC())
//     }


//     return <Messages messagesData={messagesData} dispatchNewTextInput={dispatchNewTextInput} addMessage={addMessage} />
// }

type MapStateToPropsType = {
    messagesData: MessagesDataType
}

type MapDispatchtoPropsType = {
    dispatchNewTextInput: (newText: string) => void
    addMessage: () => void
}


const mapStateToProps = (state: ReducersType): MapStateToPropsType => {
    return {
        messagesData: state.messagesData
    }
}

const mapDispatchtoProps = (dispatch: (action: MessagesReducerActionType) => void): MapDispatchtoPropsType => {
    return {
        dispatchNewTextInput: (newText: string) => {
            dispatch(changeMessageTextAC(newText))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const MessagesContainer = connect(mapStateToProps, mapDispatchtoProps)(Messages)