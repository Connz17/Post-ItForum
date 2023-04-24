import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../containers/NavBar/NavBar'
import PostContainer from '../../containers/PostContainer/PostContainer'
import Sidebar from '../../containers/Sidebar/Sidebar'
import SignInContainer from '../../containers/SignInContainer/SignInContainer'
import "./HomePage.scss"

const HomePage = ({blogData}) => {
  return (
    <div className='grid-container'>
        <NavBar/>
        <SignInContainer/>
        <Sidebar/>
        <PostContainer blogData={blogData}/>
        <Footer/>
    </div>
  )
}

export default HomePage
