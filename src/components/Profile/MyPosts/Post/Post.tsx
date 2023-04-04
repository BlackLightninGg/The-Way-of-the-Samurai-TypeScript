import s from './Post.module.css'
import AvatarElephant from '../../../../imgs/Elephant.png'

type PostType = {
  message: string
  likeCounter: number
}


export const Post = (props:PostType) => {
  return (
    <div>
      <div className={s.item}>
        <img src={AvatarElephant} alt="Avatar elephant" />
        {props.message}
        <div>
          <span>like {props.likeCounter}</span>
        </div>
      </div>
    </div>
  )
}