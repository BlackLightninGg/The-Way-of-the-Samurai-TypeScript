import ElephantBackground from '../imgs/ElephantBackground.png'

export const Profile = () => {
    return (
        <div className="content">
        <img src={ElephantBackground} alt="Elephant background" />
        <div>Avatar + description</div>
        <div>
          My posts
          <div>New post</div>
        </div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    )
}