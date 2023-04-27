import AvatarFox from '../imgs/Fox.png'
import AvatarBear from '../imgs/Bear.png'
import AvatarOwl from '../imgs/Owl.png'
import AvatarWolf from '../imgs/Wolf.png'

export type StateType = {
    messagesUsersData:UsersDataType[]
    messagesTextData:TextDataType[]
    postData:PostDataType[]
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

export type PostDataType = {
    id: number
    message: string
    likeCounter: number
}

export const state:StateType = {
    messagesUsersData: [
        {id: 1, animalName: 'Fox', photoAvatar: AvatarFox},
        {id: 2, animalName: 'Bear', photoAvatar: AvatarBear},
        {id: 3, animalName: 'Owl', photoAvatar: AvatarOwl},
        {id: 4, animalName: 'Wolf', photoAvatar: AvatarWolf},
    ],
    messagesTextData: [
        {id: 1, messageText: 'Frrr fr fr'},
        {id: 2, messageText: 'Raaaaa!'},
        {id: 3, messageText: 'Wo! Wooo!'},
        {id: 4, messageText: 'Woyyyyy! woyyyy!'},
    ],
    postData: [
        {id: 1, message: "Beautiful!", likeCounter: 9},
        {id: 2, message: "Have a nice day!", likeCounter: 5},
    ],

}