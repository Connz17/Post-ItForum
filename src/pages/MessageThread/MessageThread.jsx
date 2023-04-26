import React from 'react'
import "./MessageThread.scss"
import { useParams } from "react-router";


const MessageThread = ({blogData}) => {

  const {postID} = useParams();

  const blogPost = blogData.filter((post) => post.id == postID)


  return (
    <div>
      <p>{blogPost[0].title}</p>
    </div>
  )
}

export default MessageThread