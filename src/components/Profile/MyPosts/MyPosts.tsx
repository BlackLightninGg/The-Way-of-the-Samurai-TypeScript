import s from './MyPosts.module.css'
import { Post } from './Post/Post'

export const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <Post message="Beautiful!" likeCounter={9}/>
      <Post message="Have a nice day!" likeCounter={5} />
    </div>
  )
}