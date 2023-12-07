import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from './Menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext.jsx';

export default function Single() {

  const [post, setPost] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext)
  const postId = location.pathname.split("/")[2]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/posts/${postId}`);
        console.log(res.data)
        setPost(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postId])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`);
      navigate("/")
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          <img src={post.userImg} alt="" />
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && <div className="edit">
            <Link to={`/write?edit=2`}>
              <button className="edit">Edit</button>
            </Link>
            <button className="delete">Delete</button>
          </div>}
        </div>
        <h1>{post.title}</h1>
        <p>
          {post.desc}
        </p>
      </div>
      <Menu> </Menu>
    </div>
  )

}
