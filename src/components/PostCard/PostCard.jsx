import React from 'react'
import "./PostCard.scss";

const PostCard = ({title, date, author, comments, tags}) => {




  return (
<>
    

    <div className='container'>

    <div className='row'>

     <div className='postsContainer'>
         <h3 className='title'>{title}</h3>
         <p className='date'>{date}</p>
         <p className='author'>{author}</p>
         <p className='comments'>{comments}</p>
     </div>
     </div>
     </div>

    </>
  )
}

export default PostCard