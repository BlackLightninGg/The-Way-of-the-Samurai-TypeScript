import s from './Post.module.css'
import AvatarElephant from '../../../../imgs/Elephant.png'
import React from "react";

type PostType = {
  message: string
  likeCounter: number
}


export const Post : React.FC<PostType> = ({message, likeCounter}) => {
  return (
    <div className={s.asa}>
      <div className={s.item}>
        <img src={AvatarElephant} alt="Avatar elephant" />
        {message}
        <div>
          <span>like {likeCounter}</span>
        </div>
      </div>
    </div>
  )
}