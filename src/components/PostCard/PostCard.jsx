import React from 'react'
import "./PostCard.scss";

const PostCard = ({title, date, author, comments}) => {
  return (
    <div className='postsContainer'>
        <h3 className='title' role="title">{title}</h3>
        <p className='date'>{date}</p>
        <p className='author'>{author}</p>
        <p className='comments'>{comments} comments</p>
    </div>
  )
}

export default PostCard