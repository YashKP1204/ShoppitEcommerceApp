import React from 'react'
import "./CSS/loginsignup.css"
const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" placeholder='Email Address' id="" />
                <input type="password" name="password" placeholder='Password' id="" />
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing , i agree to the terms of use & privacy </p>
            </div>
        </div>
      
    </div>
  )
}

export default LoginSignUp
