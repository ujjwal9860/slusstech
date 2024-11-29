import React from 'react'
import './Header.css'
import office from '../../assets/office.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  return (
    <div id='home' className='header'>
      <img src={office} alt="" />
      <h1>We are an IT Company, based in Bhaktapur</h1>
      <p>Our IT company is dedicated to empowering businesses through innovative digital solutions. With expertise in digital marketing, web development, SEO, and graphic design, the company provides an integrated approach to help clients achieve their goals.</p>
      <div className='header-action'>
        <div className="header-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Us</AnchorLink></div>
        <div className="header-resume">Our Work</div>
      </div>
    </div>
  )
}

export default Header
