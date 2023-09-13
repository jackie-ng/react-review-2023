import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

export default function Home() {

  const posts = [
    {
      id: 1,
      title: "Title 1",
      desc: "Description 1",
      img: "img-1.png"
    },
    {
      id: 2,
      title: "Title 2",
      desc: "Description 2",
      img: "img-2.png"
    },
    {
      id: 3,
      title: "Title 3",
      desc: "Description 3",
      img: "img-3.png"
    },
    {
      id: 4,
      title: "Title 4",
      desc: "Description 4",
      img: "img-4.png"
    },
    {
      id: 5,
      title: "Title 5",
      desc: "Description 5",
      img: "img-5.png"
    },
  ]
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
