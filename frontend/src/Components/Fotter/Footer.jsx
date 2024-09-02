import React from 'react'
import "./Footer.css"
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from "../Assets/instagram_icon.png"
import pintester_icon from "../Assets/pintester_icon.png"
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="footer_logo" />
        <p>SHOPPIT</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Offices</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="iicon" />
            </div>
            <div className="footer-icons-container">
              <img src={pintester_icon} alt="iicon" />
            </div>
            <div className="footer-icons-container">
              <img src={whatsapp_icon} alt="iicon" />
            </div>
                
                
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; 2024 All Rights Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
