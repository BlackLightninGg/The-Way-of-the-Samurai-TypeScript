import s from './Post.module.css'
import AvatarElephant from '../../../../imgs/Elephant.png'

export const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src={AvatarElephant} alt="Avatar elephant" />
        post 1
        <div>
          <span>like</span>
        </div>
      </div>
    </div>
  )
}