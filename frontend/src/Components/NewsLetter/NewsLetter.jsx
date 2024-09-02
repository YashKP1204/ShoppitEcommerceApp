import React from 'react'
import "./NewsLetter.css"
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSICE OFFERS ON YOUR EMAIL</h1>
      <p>subscrive to our new letter and stay updates</p>
      <div>
        <input type="email" name="email" placeholder='Your email id' id="letter-email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
