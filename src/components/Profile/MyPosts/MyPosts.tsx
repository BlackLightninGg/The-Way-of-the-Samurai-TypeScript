import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
  return (
    <div className={s.posts}>
      <div>
       <h3>My posts</h3>
        <div>
          <textarea></textarea>
        </div>
        <div >
          <button className={s.buttonPost}>Add post</button>
        </div>
      </div>
      <Post message="Beautiful!" likeCounter={9} />
      <Post message="Have a nice day!" likeCounter={5} />
    </div>
  )
}