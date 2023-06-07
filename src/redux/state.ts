import AvatarFox from '../imgs/Fox.png'
import AvatarBear from '../imgs/Bear.png'
import AvatarOwl from '../imgs/Owl.png'
import AvatarWolf from '../imgs/Wolf.png'

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _renderEntireTree: () => void
   
   
    subscribe: (observer: SubscriberType) => void
    dispatch: (action: ActionType) => void
}

export type ActionType = AddPostActionType | ChangePostTextActionType

type AddPostActionType = {
    type: "ADD-POST"
}

type ChangePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    payload: {
        newText: string
    }
}

export type StateType = {
    profileData: ProfileDataType
    messagesUsersData: UsersDataType[]
    messagesTextData: TextDataType[]
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

        profileData: {
            postData: [
                { id: 1, message: "Beautiful!", likeCounter: 9 },
                { id: 2, message: "Have a nice day!", likeCounter: 5 },
            ],
            textPost: ''
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
            case "ADD-POST":
                    
                if (this.getState().profileData.textPost.trim() !== '') {
                    this.getState().profileData.postData.push({
                        id: this.getState().profileData.postData.length + 1,
                        message: this.getState().profileData.textPost,
                        likeCounter: 0
                    })
                    this.getState().profileData.textPost = ''
                    this._renderEntireTree()
                }

                return;

            case "CHANGE-POST-TEXT":
                this.getState().profileData.textPost = action.payload.newText
                this._renderEntireTree()

                return;

            default:
                return;
        }
    }

}