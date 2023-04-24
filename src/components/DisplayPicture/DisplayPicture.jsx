import React from 'react'
import "./DisplayPicture.scss";
import avatar from "../../assets/images/avatar.png"

const DisplayPicture = () => {
  return (
    <div className='imageBox'>
        <img className='avatar' src={avatar} alt="user avatar" />
    </div>
  )
}

export default DisplayPicture