import React from 'react'
import {Link} from 'react-router-dom'
import './TopBar.css'
const TopBar = () => {
  return (
    <>
  <div class="head-container">
    <div id="social-icon">
        <div class="icons"><i className="fa-brands fa-square-facebook"></i></div>
        <div class="icons"><i class="fab fa-twitter-square"></i></div>
        <div class="icons"><i class="fa-brands fa-square-whatsapp"></i></div>
        <div class="icons"><i className="fa-solid fa-envelope"></i></div>
     </div>
    <div class="header-links">
      <a class="header-link">Become a Member</a>
      <Link to='/signin'>
       <button id="signin-btn">Sign In</button>
    </Link>
    </div>
 </div>
    </>
  )
}

export default TopBar