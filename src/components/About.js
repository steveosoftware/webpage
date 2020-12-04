import React from 'react';
import { Fade } from 'react-awesome-reveal';
import 'materialize-css'




const About = () => {
  return (
    <Fade duration={2000}>
  <nav className="nav-extended nav-full-header black " style={{ display: 'inline-block', textAlign: 'center'}}>

  <div className="">

  </div>
  <div className="nav-header">
    <div >
    <h1 className="center-align">About Me</h1>
    </div>


  </div>
  </nav>
    <div className="container" >
    <p style={{ textAlign: 'center'}}>My name is Steve O’Connor and I aim to be a proficient full stack developer.  I’ve always been passionate about problem solving and working in a team environment.  I was fortunate to have a successful career as a classical musician and hope to use some of those skills I honed toward web development.  I really enjoy building things, whether it’s a web application or a piece of furniture, as well as spending time with my wife and son.</p>

    <br/>
    <img src="%PUBLIC_URL%/images/jack.jpeg" alt="baby" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto' }}/>
    </div>


  </Fade>

  )
}

export default About;