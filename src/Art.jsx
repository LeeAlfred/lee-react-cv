import React from "react";
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';

function Art() {
    return (
        <div className="story">
   <Container>    
         <Media>
  <img
    width={160}
    height={110}
    className="mr-3"
    src="https://s6.gifyu.com/images/IMG-20180601-WA0008.jpg"
    alt="Lee Sampson profile"
  />
  <Media.Body>
    <h5>Art</h5>
    <p>
    I've been painting for fun and for commissions for over 20 years. My influences include the Impressionists and New Zealand contemporary artists. I'm inspired by the tempestuous relationship between land, sea and sky, using oil on canvas to bring the mood and feeling to life.</p>

    <p>Here are some examples of my <a href="https://leesampsonart.weebly.com/" target="_blank">paintings on Weebly</a> from the last decade</p>

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Art