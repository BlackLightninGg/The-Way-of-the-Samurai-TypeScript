import ElephantBackground from '../imgs/ElephantBackground.png'
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
        <img src={ElephantBackground} alt="Elephant background" />
        <div>Avatar + description</div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div className={s.item}>post1</div>
          <div className={s.item}>post2</div>
        </div>
      </div>
    )
}