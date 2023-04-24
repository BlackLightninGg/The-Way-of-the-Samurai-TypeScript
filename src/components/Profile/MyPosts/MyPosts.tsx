import s from './MyPosts.module.css'
import {Post, PostType} from './Post/Post'
import React from "react";

export const MyPosts: React.FC = () => {

    const postData: PostType[] = [
        {id: 1, message: "Beautiful!", likeCounter: 9},
        {id: 2, message: "Have a nice day!", likeCounter: 5},
    ]

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