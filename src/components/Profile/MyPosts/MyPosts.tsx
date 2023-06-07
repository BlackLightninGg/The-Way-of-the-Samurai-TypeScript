import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import React, {ChangeEvent} from "react";
import {addPostType, changePostTextType, ProfileDataType} from "../../../redux/state";

type PropsType = {
    profileData: ProfileDataType
    addPost: addPostType
    changePostText: changePostTextType
}
export const MyPosts = ({profileData, addPost, changePostText}: PropsType) => {

    const onChangeInputPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        changePostText(e.currentTarget.value)
    }

    return (
        <div className={s.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea value={profileData.textPost} onChange={onChangeInputPostHandler}/>
                </div>
                <div>
                    <button className={s.buttonPost} onClick={()=>addPost()}>Add post</button>
                </div>
            </div>

            {profileData.postData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                 likeCounter={p.likeCounter}/>)}

        </div>
    )
}