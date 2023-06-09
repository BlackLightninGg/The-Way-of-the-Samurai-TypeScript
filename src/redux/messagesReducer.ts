const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"


export const messagesReducer = (state: any, action: any) => {
    
    switch (action.type) {
        case CHANGE_MESSAGE_TEXT:
            state.messageText = action.payload.newText

            return state;

        case ADD_MESSAGE:


            if (state.messageText.trim() !== '') {

                state.messagesTextData = [...state.messagesTextData, {
                    id: state.messagesTextData.length + 1,
                    messageText: state.messageText,
                }]

                state.messageText = ''

            }

            return state;

        default: return state
    }
}

export const addMessageAC = () => ({ type: ADD_MESSAGE }) as const

export const changeMessageTextAC = (newText: string) => ({
    type: CHANGE_MESSAGE_TEXT,
    payload: {
        newText
    }
}) as const
