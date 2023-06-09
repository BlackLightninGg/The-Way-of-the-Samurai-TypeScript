import AvatarBear from '../imgs/Bear.png'
import AvatarFox from '../imgs/Fox.png'
import AvatarOwl from '../imgs/Owl.png'
import AvatarWolf from '../imgs/Wolf.png'
import { AddMessageActionType, ChangeMessageTextActionType, messagesReducer } from './messagesReducer'
import { AddPostActionType, ChangePostTextActionType, profileReducer } from './profileReducer'

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _renderEntireTree: () => void


    subscribe: (observer: SubscriberType) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | ChangePostTextActionType | ChangeMessageTextActionType | AddMessageActionType

export type StateType = {
    messagesData: MessagesDataType
    profileData: ProfileDataType
}

export type MessagesDataType = {
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

        profileReducer(this.getState().profileData, action)
        messagesReducer(this.getState().messagesData, action)

        this._renderEntireTree()

    }


}
