import React from 'react'
import "./TopicBar.scss";

const TopicBar = () => {
  return (
    <div className='topicBar'>
        <h5 className="topicName">Gaming</h5>
        <h5 className="topicName">Film</h5>
        <h5 className="topicName">Funny</h5>
        <h5 className="topicName">TV</h5>
        <h5 className="topicName">Fashion</h5>
    </div>
  )
}

export default TopicBar