import React from 'react'
import "./MessageThread.scss"
import { useParams } from "react-router";
import NavBar from '../../containers/NavBar/NavBar'
import Sidebar from '../../containers/Sidebar/Sidebar'
import SignInContainer from '../../containers/SignInContainer/SignInContainer'
import Footer from '../../components/Footer/Footer'



const MessageThread = ({blogData}) => {

  const {postID} = useParams();

  const blogPost = blogData.filter((post) => post.id == postID)


  return (
    <div className='grid-container'>
    <NavBar/>
    <SignInContainer/>
    <Sidebar/>
    <div className='individualBlog'>
      <h2>{blogPost[0].title}</h2>
      <div className="blogInfo">
        <p>&#128100; Posted By - {blogPost[0].author}</p>
        <p>&#128198; Posted on - {blogPost[0].datePosted}</p>
      </div>
      <div className='blogPost'>
        <h3>PostIt &#128204;</h3>
        <p>{blogPost[0].description}</p>
      </div>
      
      <div className="blogInfo">
        <p>&#128172; Comments: {blogPost[0].comments}</p>
        <p>&#127991;&#65039; tags: {blogPost[0].tags}</p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default MessageThread