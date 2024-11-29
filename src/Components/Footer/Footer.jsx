import React from 'react'
import './Footer.css'
import slussLogo from '../../assets/slussLogo.jpg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={slussLogo} alt="" />
          <p>Our mission is to empower businesses with innovative technology solutions that drive success.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>© slussTech. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with us</p>
        </div>
      </div>


    </div>
  )
}

export default Footer
