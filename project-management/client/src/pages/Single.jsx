import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'

export default function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="content.png" alt="" />
        <div className="user">
          <img src="user.png" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2 `}>
              <button className="edit">Edit</button>
            </Link>
            <button className="delete ">Delete</button>
          </div>
        </div>
        <h1>Heading</h1>
        <p>
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
          <br />
          Content
        </p>
      </div>
      <Menu> </Menu>
    </div>
  )

}
