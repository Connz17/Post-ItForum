import React from 'react'
import PostCard from '../../components/PostCard/PostCard'
import "./PostContainer.scss"

const PostContainer = ({blogData}) => {

  console.log(blogData);

  const blogPostJsx = blogData.map((post) =>{
    return(
      <div key={post.id}>
      <PostCard post={post} title={post.title} date={post.datePosted} author={post.author} comments={post.comments}/>
      </div>
    )
  })


  return (
    <div className='main-content'>
      <div className='Container'>
        {blogPostJsx}
      </div>

    </div>
  )
}

export default PostContainer