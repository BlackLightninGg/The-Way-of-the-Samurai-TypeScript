import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'
import { ProlifeInformation } from './ProlifeInformation/ProlifeInformation'

export const Profile = () => {
  return (
    <div>
      <ProlifeInformation />
      <MyPosts />
    </div>
  )
}