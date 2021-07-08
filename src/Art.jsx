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
    alt="Oil Painting by Lee Sampson"
  />
  <Media.Body>
    <h5>Art</h5>
    <p>
    I've been painting for over 20 years. My influences include the Impressionists and New Zealand contemporary artists.</p>

    <p>Here are some examples of my <a href="https://leesampsonart.weebly.com/" target="_blank">paintings on Weebly</a></p>

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Art