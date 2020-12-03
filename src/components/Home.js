import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Image } from 'react-image-and-background-image-fade';
import Typography from '@material-ui/core/Typography'
import 'fontsource-roboto';
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles'

let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    const text = "I LIKE TO BUILD THINGS"


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


    <MuiThemeProvider theme={theme}>

    <div className="container" style={{ align: 'center', position: 'absolute',left: '20%', top: '30%'}}>
      <Fade duration={7000}>
        <Typography
           style={{ color: 'white' }}
          variant="h1"
          gutterbottom>
          {text}
        </Typography>
      </Fade>
    </div>
    </MuiThemeProvider>
  </div>
  )
}

export default Home;