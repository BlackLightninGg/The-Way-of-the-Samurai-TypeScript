import s from './Post.module.css'
import AvatarElephant from '../../../../imgs/Elephant.png'
import React from "react";

export type PostType = {
  message: string
  likeCounter: number
  id: number
}


export const Post : React.FC<PostType> = ({message, likeCounter}) => {
  return (
    <div>
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