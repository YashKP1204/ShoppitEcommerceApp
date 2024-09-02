import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className='Hero'>
       <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="hand_icon" />
        </div>
        <p>Collections</p>
        <p>For everyone</p>
        <div className="hero-latest-btn">
            <div>
                Latest Collection 
            </div>
            <img src={arrow_icon} alt="shadow icon" />
        </div>
       </div>
       <div className="hero-right">
        <img src={hero_image} alt="hero-image" />
       </div>
    </div>
  )
}

export default Hero
