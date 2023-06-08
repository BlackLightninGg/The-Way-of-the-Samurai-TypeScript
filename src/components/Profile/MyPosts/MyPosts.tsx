import { ChangeEvent } from "react";
import { ActionType, ProfileDataType, addPostAC, changePostTextAC } from "../../../redux/state";
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

type MyPostsPropsType = {
    profileData: ProfileDataType
    dispatch: (action: ActionType) => void
}
export const MyPosts = ({ profileData, dispatch }: MyPostsPropsType) => {

    const onChangeInputPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(changePostTextAC(e.currentTarget.value))
    }

    const onClickAddPostHandler = () => {
        dispatch(addPostAC())
    }

    return (
        <div className={s.posts}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea value={profileData.textPost} onChange={onChangeInputPostHandler} />
                </div>
                <div>
                    <button className={s.buttonPost} onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>

            {profileData.postData.map(p => <Post key={p.id} id={p.id} message={p.message}
                likeCounter={p.likeCounter} />)}

        </div>
    )
}