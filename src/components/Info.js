import React from 'react'

const Info = (props) => {
  return (
    <div className="card">
        <img src={props.image} alt="my profile"/>
        <h1 id="info-name">Aryan Gupta</h1>
        <p id="frontend-dev">Frontend Developer</p>
        <p id="my-website">my.website</p>
        <button id="email-btn">
          {/* <div id="email-btn-text"> */}
            <img src={props.email} alt="email"/>
            <span>Email</span>
          {/* </div> */}
        </button>
        <button id="linkedIn-btn"><img src={props.linkedIn} alt="linkedIn"/>LinkedIn</button>
    </div>
  )
}

export default Info