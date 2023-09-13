import React from 'react'

export default function Menu() {

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
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map(post => {
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      })}
    </div>
  )
}
