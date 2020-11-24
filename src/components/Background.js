import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Image } from 'react-image-and-background-image-fade';


const Background = () => {
  return (
    <Image
    transitionTime="3s"
    src="https://images.unsplash.com/photo-1496850574977-a4607106a874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    width="100%"
    height="100%"
    alt="background"
    style={{ display: 'inline' }}
    />

  )
}


export default Background;
