import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div class="footer-container">
    <div class="footer-content">
      <h4 class="footer-logo">Irish Odia Association</h4>
      <p class="footer-slogan">Kalinga Sahasika</p>
      <div class="button-container">
        <Link to='/donation'>
        <button class="footer-button">Donation</button>
        </Link>
        <Link to='/contact'>
        <button class="footer-button">Contact</button>
        </Link>
    </div>
      <hr class="hr-line" />
      <div class="footer-bottom">
        <p class="copyright">© Copyright 2023. All Rights Reserved</p>
        <div class="social-icons">
          <div class="icon"><i className="fa-brands fa-square-facebook"></i></div>
          <div class="icon"><i class="fab fa-twitter-square"></i></div>
          <div class="icon"><i class="fa-brands fa-square-whatsapp"></i></div>
          <div class="icon"><i className="fa-solid fa-envelope"></i></div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Footer