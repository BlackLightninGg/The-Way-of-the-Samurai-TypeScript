import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import React from "react";
import {PostDataType} from "../../../redux/state";

type PropsType = {
    postData: PostDataType[]
}
export const MyPosts: React.FC<PropsType> = ({postData}) => {
    return (
        <div className={s.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={s.buttonPost}>Add post</button>
                </div>
            </div>

            {postData.map(p => <Post id={p.id} message={p.message} likeCounter={p.likeCounter}/>)}

        </div>
    )
}