import React from 'react'
import "./PostCard.scss";

const PostCard = ({title, date, author, comments, tags}) => {




  return (
<>
    

    <div className='container'>

    <div className='row'>

     <div className='postsContainer'>
         <h3 className='title'><a href=""> {title} </a></h3>
         <p className='description'> Description: Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Curabitur faucibus nulla magna, vitae rhoncus turpis vulputate et. Morbi condimentum sed purus vel maximus.  </p>
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