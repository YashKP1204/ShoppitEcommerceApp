import React, { useContext, useState } from 'react'
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';


import "./Navbar.css"
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const {getTotalCartItems} = useContext(ShopContext);
  const [menu,setMenu] = useState("shop");


  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPIT</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to={"/"} >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link to={"/men"}>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link to={"/women"}>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link to={"/kids"}>kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button><Link to={"/login"}>Login</Link></button>
        <Link to={"/cart"} ><img src={cart_icon} alt="icon" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
