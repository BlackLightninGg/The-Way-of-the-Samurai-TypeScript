import {MyPosts} from './MyPosts/MyPosts'
import s from './Profile.module.css'
import {ProfileInformation} from './ProfileInformation/ProfileInformation'
import React from "react";
import {PostType} from "./MyPosts/Post/Post";

type PropsType = {
    postData: PostType[]
}
export const Profile: React.FC<PropsType> = ({postData}) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts postData={postData}/>
        </div>
    )
}