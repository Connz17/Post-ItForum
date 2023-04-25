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
   
<<<<<<< HEAD
        // <div className='navbar'>
        //     <h3 className='navItems'>Hot</h3>
        //     <h3 className='navItems'>New</h3>
        //     <h3 className='navItems'>Top</h3>
        //     <h3 className='navItems'>Wiki</h3>
        //     <h3 className='navItems'>Promoted</h3>
        // </div>
=======
        <div className='navbar'>
            <h3 className='navItems'>Hot</h3>
            <h3 className='navItems'>New</h3>
            <h3 className='navItems'>Top</h3>
            <h3 className='navItems'>Promoted</h3>
        </div>
>>>>>>> dbcc6d0c6c775a0c9483ba328e444ce8c0c0d29e

  )
}

export default NavBar

