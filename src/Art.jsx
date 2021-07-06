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
    Is a big part of who I am and how I express myself.
    </p>

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Art