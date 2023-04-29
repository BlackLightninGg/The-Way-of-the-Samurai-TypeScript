import {MyPosts} from './MyPosts/MyPosts'
import {ProfileInformation} from './ProfileInformation/ProfileInformation'
import React from "react";
import {addPostType, changePostTextType, ProfileDataType} from "../../redux/state";

type PropsType = {
    profileData: ProfileDataType
    addPost : addPostType
    changePostText : changePostTextType
}
export const Profile: React.FC<PropsType> = ({profileData, addPost, changePostText}) => {
    return (
        <div>
            <ProfileInformation/>
            <MyPosts profileData={profileData} addPost={addPost} changePostText={changePostText}/>
        </div>
    )
}