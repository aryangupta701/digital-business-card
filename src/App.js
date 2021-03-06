import './App.css';
import React from 'react';
import About from './components/About'
import Info from './components/Info'
import Interests from './components/Interests'
import Footer from './components/Footer'
import ProfileImage from './images/profilepicture.png'
import EmailIcon from './images/emailIcon.png'
import linkedInIcon from './images/Vector.png'
import Facebook from './images/facebook.png'
import Instagram from './images/instagram.png'
import Twitter from './images/twitter.png'
import Github from './images/github.png'

function App() {
  return (
    <div className="card">
      <Info image={ProfileImage} email={EmailIcon} linkedIn={linkedInIcon}/>
      <About />
      <Interests />
      <Footer facebook={Facebook} instagram={Instagram} twitter={Twitter} github={Github}/>
    </div>
  )
}

export default App;
