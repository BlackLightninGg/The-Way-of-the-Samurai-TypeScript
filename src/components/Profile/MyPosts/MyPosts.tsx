import s from './MyPosts.module.css'
import {Post} from './Post/Post'
import React, {useRef} from "react";
import {addPostType, PostDataType} from "../../../redux/state";

type PropsType = {
    postData: PostDataType[]
    addPost: addPostType
}
export const MyPosts: React.FC<PropsType> = ({postData, addPost} ) => {
    const getInput = useRef<HTMLTextAreaElement>(null)
    const onClickAddPostHandler = () => {
        if (getInput.current){
            if (getInput.current.value.trim() !== ''){
                addPost(getInput.current.value.trim())
                getInput.current.value = ''
            }
        }
    }
    return (
        <div className={s.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea ref={getInput}></textarea>
                </div>
                <div>
                    <button className={s.buttonPost}  onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>

            {postData.map(p => <Post key={p.id} id={p.id} message={p.message} likeCounter={p.likeCounter}/>)}

        </div>
    )
}