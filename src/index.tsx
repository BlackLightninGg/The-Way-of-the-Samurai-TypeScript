import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {DialogUserType} from "./components/Messages/DialogUser/DialogUser";
import {UserMessageType} from "./components/Messages/UserMessage/UserMessage";
import {PostType} from "./components/Profile/MyPosts/Post/Post";

const messagesUsersData: DialogUserType[] = [
    {id: 1, animalName: 'Fox'},
    {id: 2, animalName: 'Bear'},
    {id: 3, animalName: 'Owl'},
    {id: 4, animalName: 'Wolf'},
]

const messagesTextData: UserMessageType[] = [
    {id: 1, messageText: 'Frrr fr fr'},
    {id: 2, messageText: 'Raaaaa!'},
    {id: 3, messageText: 'Wo Wooo!'},
    {id: 4, messageText: 'Woyyyyy! woyyyy!'},
]

const postData: PostType[] = [
    {id: 2, message: "Have a nice day!", likeCounter: 5},
]

ReactDOM.render(
    <App messagesUsersData={messagesUsersData} messagesTextData={messagesTextData} postData={postData}/>,
    document.getElementById('root')
);