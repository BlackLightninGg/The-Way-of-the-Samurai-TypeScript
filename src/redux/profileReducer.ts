const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

export type ActionType = AddPostActionType | ChangePostTextActionType


export type ProfileDataType = {
    postData: PostDataType[]
    textPost: string
}

export type PostDataType = {
    id: number
    message: string
    likeCounter: number
}

const initialState: ProfileDataType = {
    postData: [
        { id: 1, message: "Beautiful!", likeCounter: 9 },
        { id: 2, message: "Have a nice day!", likeCounter: 5 },
    ],
    textPost: ""
}

export const profileReducer = (state = initialState, action: ActionType): ProfileDataType => {

    switch (action.type) {
        case ADD_POST:
            if (state.textPost.trim() !== "") {

                return {
                    ...state, postData: [{
                        id: state.postData.length + 1,
                        message: state.textPost,
                        likeCounter: 0,
                    }, ...state.postData], textPost: ""
                }

            }

            return state

        case CHANGE_POST_TEXT:

            return { ...state, textPost: action.payload.newText };

        default:
            return state;
    }
};


export type AddPostActionType = ReturnType<typeof addPostAC>


export type ChangePostTextActionType = ReturnType<typeof changePostTextAC>


export const addPostAC = () => ({ type: ADD_POST } as const);

export const changePostTextAC = (newText: string) =>
({
    type: CHANGE_POST_TEXT,
    payload: {
        newText,
    },
} as const);
