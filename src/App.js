import './App.css';
import React from 'react';
import About from './components/About'
import Info from './components/Info'
import Interests from './components/Interests'
import Footer from './components/Footer'
import ProfileImage from './images/profilepicture.png'
import EmailIcon from './images/emailIcon.png'
import linkedInIcon from './images/Vector.png'

function App() {
  return (
    <div>
      <Info image={ProfileImage} email={EmailIcon} linkedIn={linkedInIcon}/>
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App;
