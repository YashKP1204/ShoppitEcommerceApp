import React, { useState,} from 'react'
import "./CSS/loginsignup.css"
import { useNavigate } from "react-router-dom";

const LoginSignUp = () => {
  const [userDetails,setUserDetails] = useState({name:"",email:"",password:""});
  const [usersData,setUsersData] = useState([]);
  const [signUp,setToSignUp] = useState(true);
  const [verifiedUser,setVerifiedUser] = useState(null)
  console.log(userDetails);
  console.log(usersData);
  const navigate = useNavigate();
  console.log("verified User",verifiedUser)
  const handleChange = (event)=>{
    setUserDetails(()=>{return {...userDetails, [event.target.name]:event.target.value}})
  }
  const storeUserData = (event)=>{
    event.preventDefault();
    const user = usersData.find((item)=>{ return item.email == userDetails.email});
    if(user){
      alert("User has already signedUp. Kindly login to continue");
    }
    else{
      setUsersData(()=>{
        return [...usersData,userDetails]
      }) 
      alert("You have successfully registered. Login to move to homescreen");
    }
    setUserDetails({name:"",email:"",password:""})  
  }
  const verifyUserData = (event)=>{
    event.preventDefault();
    const user = usersData.find((item)=>{
      return item.email === userDetails.email
    })
    console.log("user:",user)
    if(!user){
      alert("Email not found")
      return;
    }
    else if(user.password !== userDetails.password){
      alert("Incorrect password")
    }
    else{
      setVerifiedUser(user);
      navigate("/");
    }
  }
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          {signUp?<div>
            <h1>Sign Up</h1>
            <form onSubmit={storeUserData} > 
            <div className="loginsignup-fields">
                <input type="text" required name="name" id="" placeholder='Your Name' value={userDetails.name} onChange={handleChange}   />
                <input type="email"  required name="email" placeholder='Email Address' id="" value={userDetails.email} onChange={handleChange}  />
                <input type="password" required name="password" placeholder='Password' id="" value={userDetails.password}  onChange={handleChange}  />
            </div>
            <button>Continue</button>
            </form>
            <p className='loginsignup-login'>Already have an account?<span onClick={()=>{setUserDetails({name:"",email:"",password:""});setToSignUp(false)}}>Login-here</span></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing , i agree to the terms of use & privacy </p>
            </div>
          </div>:
          <div>
            <h1>Login page</h1>
            <form onSubmit={verifyUserData} > 
            <div className="loginsignup-fields">
                <input type="email"  required name="email" placeholder='Email Address' id="" value={userDetails.email} onChange={handleChange}  />
                <input type="password" required name="password" placeholder='Password' id="" value={userDetails.password}  onChange={handleChange}  />
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>New-User?<span onClick={()=>{setUserDetails({name:"",email:"",password:""});setToSignUp(true)}}>Sign-up</span></p>
            </form>
          </div>
          }
        </div>
      
    </div>
  )
}

export default LoginSignUp
