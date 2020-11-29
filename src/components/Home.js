import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Image } from 'react-image-and-background-image-fade';




const Home = () => {


  return (


  <div>

  <Image

      transitionTime="3s"
      src="https://images.unsplash.com/photo-1582282577080-2ebf8af6ca81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"
      width="2400px"
      height="1200px"
      alt="background"

      style={{ zIndex:'1', opacity: '.9', backgroudSize: 'cover', display: 'inline' }}

      />



    <div className="container" style={{ align: 'center', position: 'absolute',left: '20%', top: '30%'}}>
      <Fade duration={7000}>
        <h1 style={{ color: 'white', fontSize: '130px', textAlign: 'center' }}>I LIKE TO BUILD THINGS</h1>
      </Fade>
    </div>

  </div>
  )
}

export default Home;