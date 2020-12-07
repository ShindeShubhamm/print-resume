import React from 'react'

import "./Ratings.scss"

const Meter = (props) => {
  const { name, level } = props
  const meter = new Array(level).fill(1)
  const meterBlank = new Array(5 - level).fill(1)

  return (
    <div className="meter-wrapper">
      <p className="d-text">{name}</p>
      <div className="meter">
        {[meter.map((_, index) => (
          <div size={14} className="m-icon m-filled" key={index} />
        ))]}
        {[meterBlank.map((_, index) => (
          <div size={14} className="m-icon m-empty" key={index} />
        ))]}
      </div>
    </div>
  )
}

const Ratings = (props) => {
  const { data } = props

  return (
    <div className="ratings-wrapper">
      <div className="dec-title">
        <div className="dec-icon" />
        <h2 className="dec-text">{data.title}</h2>
        <div className="dec-icon" />
      </div>
      <div className="rating">
        {data.data.map((d, i) => (
          <Meter key={i} {...d} />
        ))}
      </div>
    </div>
  )
}

export default Ratings
