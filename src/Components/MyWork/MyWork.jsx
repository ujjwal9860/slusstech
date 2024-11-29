import React from 'react'
import './MyWork.css'
import slussLogo from '../../assets/slussLogo.jpg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>Our Latest Work</h1>
        <img src={slussLogo} alt="logo" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />
        })}

      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
