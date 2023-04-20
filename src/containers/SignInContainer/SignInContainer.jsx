import React from 'react'
import Button from '../../components/Button/Button';
import "./SignInContainer.scss";

const SignInContainer = () => {
  return (
    <div className='signIn-container'>
        <div className='buttons-container'>
          <Button buttonText={"Log In"}/>
          <Button buttonText={"Sign Up"}/>
        </div>
    </div>
  )
}

export default SignInContainer