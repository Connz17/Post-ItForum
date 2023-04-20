import React from 'react'
import "./Button.scss"

const Button = () => {

    const clickHandler = () => {
            console.log("Clicked")
    }


  return (
    <div>
        <button onClick={clickHandler}>Submit</button>
    </div>
  )
}

export default Button