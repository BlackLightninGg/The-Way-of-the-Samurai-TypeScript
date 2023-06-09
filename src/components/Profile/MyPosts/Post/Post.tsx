import s from './Post.module.css'
import AvatarElephant from '../../../../imgs/Elephant.png'
import React from "react";
import {PostDataType} from "../../../../redux/store";

export const Post: React.FC<PostDataType> = ({message, likeCounter}) => {
    return (
        <div>
            <div className={s.item}>
                <img src={AvatarElephant} alt="Avatar elephant"/>
                {message}
                <div>
                    <span>like {likeCounter}</span>
                </div>
            </div>
        </div>
    )
}