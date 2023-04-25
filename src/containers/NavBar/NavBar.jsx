import React from 'react'
import "./NavBar.scss"
import { Link } from 'react-router-dom'

const NavBar = () => {


  return (
    <div className='navbar'>
        <Link to="/"><h3 className="navItems">Homepage</h3></Link>
        <Link to="/hot-page"><h3 className='navItems'>Hot</h3></Link>
        <Link to="/new-page"><h3 className='navItems'>New</h3></Link>
        <Link to="/top-page"><h3 className='navItems'>Top</h3></Link>
        <Link to="/promoted-page"><h3 className='navItems'>Promoted</h3></Link>
    </div>
   
  )
}

export default NavBar

