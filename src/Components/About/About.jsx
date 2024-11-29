import React from 'react'
import './About.css'
import slussLogo from '../../assets/slussLogo.jpg'
import susan from '../../assets/susan.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Us</h1>
        <img src={slussLogo} alt="tt" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={susan} alt="ff" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>slussTech is a tech shop. We build things.
              Come talk to us if you have a need for new technology development, overhaul or maintenance. We have a unique way of doing things here at slussTech, and we'd love to be a partner who helps you solve your problems, keep your existing technology up and running, or build out your dreams.</p>

          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>1+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>2+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>10+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>1+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
            <hr />

          </div>
        </div>
      </div>
    </div >
  )
}

export default About
