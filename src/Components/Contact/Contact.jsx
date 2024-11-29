import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import slussLogo from '../../assets/slussLogo.jpg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ec068710-4a9d-4bcf-87a3-5c499def31fa");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={slussLogo} alt="logo" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>We're dedicated to delivering top-notch IT solutions tailored to your business needs. Whether you have a question, need support, or want to explore how our services can help your business thrive, we're here to assist you.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>slussTech@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>9860912825</p>

            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Kausaltar, Bhaktapur</p>

            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" name='email' id='email' placeholder='Enter your email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows='8' placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>

        </form>
      </div>

    </div>
  )
}

export default Contact
