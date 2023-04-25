import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'

const NavBar = () => {


  return (
    <div className='navbar'>
        <Link to="/home-page" className="nav-item">Homepage</Link>
        <Link to="/hot-page" className='nav-item'>Hot</Link>
        <Link to="/new-page" className='nav-item'>New</Link>
        <Link to="/top-page" className='nav-item'>Top</Link>
        <Link to="/promoted-page" className='nav-item'>Promoted</Link>
    </div>
   
  )
}

export default NavBar

