import React from "react";
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';

function Family() {
    return (
        <div className="story">
   <Container>    
         <Media>
  <img
    width={160}
    height={110}
    className="mr-3"
    src="https://s6.gifyu.com/images/IMG-20171125-WA0001.jpg"
    alt="Lee Sampson profile"
  />
  <Media.Body>
    <h5>My Family</h5>
    <p>
     Family is the reason for everything I do.
    </p>

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Family