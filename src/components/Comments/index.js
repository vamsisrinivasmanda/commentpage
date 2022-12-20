import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialcommentsList = []

class Comments extends Component {
  state = {
    count: 0,
    commentsList: initialcommentsList,
    inputname: '',
    textcomment: '',
  }

  changeInput = event => {
    this.setState({inputname: event.target.value})
  }

  changeComment = event => {
    this.setState({textcomment: event.target.value})
  }
  // Add comment form click

  addComment = event => {
    event.preventDefault()
    const {inputname, textcomment} = this.state

    this.setState(prevState => ({count: prevState.count + 1}))
    const backgroundColor =
      initialContainerBackgroundClassNames[
        Math.floor(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    console.log(backgroundColor)

    const newComment = {
      id: uuidv4(),
      inputname,
      textcomment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      classbackgroundColor: backgroundColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      inputname: '',
      textcomment: '',
    }))
  }

  render() {
    const {count, inputname, textcomment, commentsList} = this.state
    console.log(formatDistanceToNow(new Date()))
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="input-image-container">
          <form className="input-container" onSubmit={this.addComment}>
            <p>Say something about 4.0 Technologies </p>
            <input
              className="input"
              placeholder="Your Name"
              value={inputname}
              onChange={this.changeInput}
            />

            <textarea
              className="text"
              rows="10"
              cols="50"
              placeholder="Your Comment"
              value={textcomment}
              onChange={this.changeComment}
            />
            <button className="button" type="submit">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comment"
          />
        </div>
        <hr className="line" />
        <div className="comments-container">
          <div className="count">{count}</div>
          <p className="comments-desc">Comments</p>
        </div>
        <ul>
          {commentsList.map(eachcomment => (
            <CommentItem key={eachcomment.id} eachcomment={eachcomment} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
