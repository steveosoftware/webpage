import React from 'react';
import { Fade } from 'react-awesome-reveal';




const About = () => {
  return (

<nav class="nav-extended nav-full-header">
  <div class="nav-background">
    <img class="active" src="img/cityscape-line3.png" alt="cityscape"/>
    <img src="img/cityscape-line1.png" alt="cityscape"/>
    <img src="img/cityscape-line2.png" alt="cityscape"/>
  </div>
  <div class="nav-wrapper container">
    <a href="index.html" class="brand-logo"><i class="material-icons">camera</i>Gallery</a>
  </div>
  <div class="nav-header valign-wrapper">
    <Fade duration={7000}>
      <h1>I have a passion for building things</h1>
    </Fade>
  </div>
</nav>

  )
}

export default About;