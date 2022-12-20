import './index.css'

const CommentItem = props => {
  const {eachcomment} = props
  const {
    inputname,
    textcomment,
    date,
    classbackgroundColor,
    isLiked,
  } = eachcomment
  return (
    <li className="list">
      <div className="comment-container">
        <div className="comment-user">
          <span className={` letter-logo ${classbackgroundColor}`}>
            {inputname[0]}
          </span>
          <h3 className="username">{inputname}</h3>
          <p className="date">{date}</p>
        </div>
        <p className="comment">{textcomment}</p>
      </div>
      <div className="buttons-container">
        <button className="like-button" type="button">
          <div className="like-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              className="like"
              alt="like"
            />
            <p>Like</p>
          </div>
        </button>
        <button className="delete-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
