import ElephantBackground from '../../imgs/ElephantBackground.png'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

export const Profile = () => {
  return (
    <div className={s.content}>
      <img src={ElephantBackground} alt="Elephant background" />
      <div>Avatar + description</div>
       <MyPosts/>
    </div>
  )
}