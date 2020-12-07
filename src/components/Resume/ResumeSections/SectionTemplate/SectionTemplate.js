import React from 'react'

import "./SectionTemplate.scss"

const SectionTemplate = (props) => {
  const { data } = props

  return (
    <div className="section">
      <div className="section-header">
        {data.icon}
        <h2 className="section-title">{data.title}</h2>
      </div>
      <div className="section-content">
        {/* Data 1 */}
        {data.values.map((v, index) => (
          <div className="section-data" key={index}>
            <div className="section-ui">
              <div className="sui-circle"></div>
              <div className="sui-line"></div>
            </div>
            <div className="section-text">
              {v.title && <h2 className="sd-title">
                {v.title}
              </h2>}
              {v.date && <p className="sd-date">
                {v.date}
              </p>}
              {v.text && <p className="sd-text">
                {v.text}
              </p>}
              {v.listData && <ul className="sd-list">
                {v.listData.map((listItem, index) => (
                  <li key={index} className="sd-text sd-listitem">{listItem}</li>
                ))}
              </ul>}

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionTemplate
