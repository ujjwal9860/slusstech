import React from 'react'
import './Services.css'
import slussLogo from '../../assets/slussLogo.jpg'
import services_data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Our Services</h1>
        <img src={slussLogo} alt="sluss" />
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>
                Read More...
              </p>
              <img src={arrow_icon} alt="" />
            </div>

          </div>
        })}

      </div>

    </div>
  )
}

export default Services
