import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInformation} from './ProfileInformation/ProfileInformation'
import React from "react";
import {PostDataType} from "../../redux/state";

type PropsType = {
    postData: PostDataType[]
}
export const Profile: React.FC<PropsType> = ({postData}) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts postData={postData}/>
        </div>
    )
}