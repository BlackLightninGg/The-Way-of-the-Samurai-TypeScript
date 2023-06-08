import AvatarFox from '../imgs/Fox.png'
import AvatarBear from '../imgs/Bear.png'
import AvatarOwl from '../imgs/Owl.png'
import AvatarWolf from '../imgs/Wolf.png'

const ADD_POST = "ADD-POST"
const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _renderEntireTree: () => void


    subscribe: (observer: SubscriberType) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | ChangePostTextActionType | ChangeMessageTextActionType | AddMessageActionType

type AddPostActionType = {
    type: "ADD-POST"
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
}

type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    payload: {
        newText: string
    }
}

type ChangeMessageTextActionType = {
    type: "CHANGE-MESSAGE-TEXT"
    payload: {
        newText: string
    }
}

export type StateType = {
    messagesData: MessagesData
    profileData: ProfileDataType
}

export type MessagesData = {
    messagesUsersData: UsersDataType[]
    messagesTextData: TextDataType[]
    messageText: string
}

export type ProfileDataType = {
    postData: PostDataType[]
    textPost: string
}

export type PostDataType = {
    id: number
    message: string
    likeCounter: number
}

export type UsersDataType = {
    id: number
    animalName: string
    photoAvatar: string
}

export type TextDataType = {
    id: number
    messageText: string
}

export type SubscriberType = () => void

export type addPostType = () => void
export type changePostTextType = (t: string) => void

export const store: StoreType = {
    _state: {

        messagesData: {
            messagesUsersData: [
                { id: 1, animalName: 'Fox', photoAvatar: AvatarFox },
                { id: 2, animalName: 'Bear', photoAvatar: AvatarBear },
                { id: 3, animalName: 'Owl', photoAvatar: AvatarOwl },
                { id: 4, animalName: 'Wolf', photoAvatar: AvatarWolf },
            ],

            messagesTextData: [
                { id: 1, messageText: 'Frrr fr fr' },
                { id: 2, messageText: 'Raaaaa!' },
                { id: 3, messageText: 'Wo! Wooo!' },
                { id: 4, messageText: 'Woyyyyy! woyyyy!' },
            ],

            messageText: ""
        },

        profileData: {
            postData: [
                { id: 1, message: "Beautiful!", likeCounter: 9 },
                { id: 2, message: "Have a nice day!", likeCounter: 5 },
            ],
            textPost: ""
        }

    },

    _renderEntireTree() {
        console.log("Rendering...")
    },

    getState() {
        return this._state
    },

    subscribe(observer: SubscriberType) {
        this._renderEntireTree = observer
    },



    dispatch(action) {
        switch (action.type) {
            case ADD_POST:

                if (this.getState().profileData.textPost.trim() !== '') {

                    this.getState().profileData.postData = [{
                        id: this.getState().profileData.postData.length + 1,
                        message: this.getState().profileData.textPost,
                        likeCounter: 0
                    }, ...this.getState().profileData.postData]

                    this.getState().profileData.textPost = ''
                    this._renderEntireTree()

                }

                return;

            case CHANGE_POST_TEXT:
                this.getState().profileData.textPost = action.payload.newText
                this._renderEntireTree()

                return;

            case CHANGE_MESSAGE_TEXT:
                this.getState().messagesData.messageText = action.payload.newText
                this._renderEntireTree()

                return;

            case ADD_MESSAGE:
                

                if (this.getState().messagesData.messageText.trim() !== '') {

                    this.getState().messagesData.messagesTextData = [...this.getState().messagesData.messagesTextData, {
                        id: this.getState().messagesData.messagesTextData.length + 1,
                        messageText: this.getState().messagesData.messageText,
                    }]

                    this.getState().messagesData.messageText = ''
                    this._renderEntireTree()
                    console.log(this.getState().messagesData.messagesTextData)

                }

                return;


            default:
                return;
        }
    }

}

export const addPostAC = () => ({ type: ADD_POST }) as const

export const addMessageAC = () => ({ type: ADD_MESSAGE }) as const

export const changePostTextAC = (newText: string) => ({
    type: CHANGE_POST_TEXT,
    payload: {
        newText
    }
}) as const

export const changeMessageTextAC = (newText: string) => ({
    type: CHANGE_MESSAGE_TEXT,
    payload: {
        newText
    }
}) as const
