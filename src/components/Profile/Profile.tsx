import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInformation} from './ProfileInformation/ProfileInformation'
import React from "react";
import {addPostType, PostDataType} from "../../redux/state";

type PropsType = {
    postData: PostDataType[]
    addPost : addPostType
}
export const Profile: React.FC<PropsType> = ({postData, addPost}) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts postData={postData} addPost={addPost}/>
        </div>
    )
}