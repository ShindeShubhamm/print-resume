import React from 'react'
import { FaGraduationCap } from "react-icons/fa"

import "./Education.scss"

const Education = (props) => {
  return (
    <div className="section">
      <div className="section-header">
        <FaGraduationCap className="section-icon" size={22} />
        <h2 className="section-title">Education</h2>
      </div>
      <div className="section-content">
        {/* Data 1 */}
        <div className="section-data">
          <div className="section-ui">
            <div className="sui-circle"></div>
            <div className="sui-line"></div>
          </div>
          <div className="section-text">
            <h2 className="sd-title">
              BE, Computer Engineering, Savitribai Phule Pune University, Pune
            </h2>
            <p className="sd-date">
              August 2017 - Present
            </p>
          </div>
        </div>
        {/* Data 2 */}
        <div className="section-data">
          <div className="section-ui">
            <div className="sui-circle"></div>
            <div className="sui-line"></div>
          </div>
          <div className="section-text">
            <h2 className="sd-title">
              Higher Secondary School, SNBP Junior College, Pimpri, Pune
            </h2>
            <p className="sd-date">
              June 2015 - February 2017
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
