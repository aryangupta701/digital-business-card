import React from 'react'

const Footer = (props) => {
  return (
    <div id="footer-tag">
      <a href>
        <img src={props.twitter}/>
      </a>
      <a href>
        <img src={props.facebook}/>
      </a>
      <a href>
        <img src={props.instagram}/>
      </a>
      <a href>
        <img src={props.github}/>
      </a>
    </div>
  )
}

export default Footer