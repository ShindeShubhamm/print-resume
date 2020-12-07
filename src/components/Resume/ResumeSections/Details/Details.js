import React from 'react'

import './Details.scss'

const Details = () => {
  return (
    <div className="details-wrapper">
      <div className="dec-title">
        <div className="dec-icon" />
        <h2 className="dec-text">Details</h2>
        <div className="dec-icon" />
      </div>
      <div className="details-data">
        <div className="d-data-wrapper">
          <p className="d-text">Pune, India</p>
          <p className="d-text">shubhamshinde.3151@gmail.com</p>
        </div>
        <div className="d-data-wrapper">
          <p className="d-title">Date / Place of Birth</p>
          <p className="d-text">18th December 1999</p>
          <p className="d-text">Pune, India</p>
        </div>
      </div>
    </div>
  )
}

export default Details
