import React from 'react'
import "./HotPage.scss";
import Footer from '../../components/Footer/Footer'
import NavBar from '../../containers/NavBar/NavBar'
import PostContainer from '../../containers/PostContainer/PostContainer'
import Sidebar from '../../containers/Sidebar/Sidebar'
import SignInContainer from '../../containers/SignInContainer/SignInContainer'


const HotPage = () => {
  return (
    <div className='grid-container'>
        <NavBar/>
        <SignInContainer/>
        <Sidebar/>
        <h1>HotPage &#128293;</h1>
    <Footer/>
</div>
  )
}

export default HotPage