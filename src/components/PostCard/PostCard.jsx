import React from 'react'
import "./PostCard.scss";
import { Link } from "react-router-dom"

const PostCard = ({post, title, date, author, comments, tags}) => {




  return (
<>
    {/* <h1>Posts</h1> */}

    <div className='container'>

    <div className='row'>
     <div className='postsContainer'>
         <h3 className='title'> {title} 📝 </h3>
         <p className='description'> Description: Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Curabitur faucibus nulla magna, vitae rhoncus turpis vulputate et. Morbi condimentum sed purus vel maximus.  </p>
         <p className='date'>{date}</p>
         <p className='author'>👤 {author}</p>
    <Link to={`/post/${post.id}`}>
         <p className='more'>Read More...</p>
     </Link>
         {/* ⬇️ */}
         <p className='comments'>{comments} comments</p>
     </div>
     </div>
     </div>

    </>
  )
}

export default PostCard