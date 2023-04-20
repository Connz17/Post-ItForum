import React from 'react'
import "./Button.scss"

const Button = ({buttonText}) => {

    const clickHandler = () => {
            console.log("Clicked")
    }


  return (
    <div>
        <button className='button' onClick={clickHandler}>{buttonText}</button>
    </div>
  )
}

export default Button