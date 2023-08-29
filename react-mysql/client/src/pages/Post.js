import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/${id}`).then((response) => {
      setPost(response.data)
    })
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data)
    })
  }, [])
  const addComment = (() => {
    axios.post("http://localhost:3001/comments", { commentBody: newComment, PostId: id }).then((response) => {
      const commentToAdd = { commentBody: newComment };
      setComments([...comments, commentToAdd])
      setNewComment("")
    })
  })
  return (
    <div className='postPage'>
      <div className='leftSide'>
        <div className='post' id='individual'>
          <div className='title'>{post.title}</div>
          <div className='body'>{post.postText}</div>
          <div className='footer'>{post.username}</div>
        </div>
      </div>
      <div className='rightSide'>
        <div className="addCommentContainer">
          <input type="text" placeholder='Comment...' autoComplete='off' value={newComment} onChange={(event) => {
            setNewComment(event.target.value)
          }} />
          <button onClick={addComment}>Add Comment</button>
        </div>
        <div className="listOfComment">
          {comments.map((comment, key) => {
            return <div key={key} className='comment'>
              {comment.commentBody}
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Post
