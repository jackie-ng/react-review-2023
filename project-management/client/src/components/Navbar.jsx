import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">logo</div>
        <div className="links">
          <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className='link' to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className='link' to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
          <span><h6>Username</h6></span>
          <span><h6>Logout</h6></span>
          <span className='write'>
            <Link className='link' to="/write"><h6>Write</h6></Link>
          </span>
        </div>
      </div>
    </div>
  )
}
