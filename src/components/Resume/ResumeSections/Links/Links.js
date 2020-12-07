import React from 'react'

import "./Links.scss"

const Links = (props) => {
  const { links } = props

  return (
    <div className="links-wrapper">
      <div className="dec-title">
        <div className="dec-icon" />
        <h2 className="dec-text">Links</h2>
        <div className="dec-icon" />
      </div>
      {links.map((l) => (
        <div className="links-click" key={l.link}>
          <a className="d-link" href={l.link} target="_blank" rel="noreferrer">{l.name}</a>
        </div>
      ))}
    </div>
  )
}

export default Links
