import React from "react";
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';


function Surf() {
    return (
        <div className="story">
   <Container>    
         <Media>
  <img
    width={160}
    height={110}
    className="mr-3"
    src="https://s6.gifyu.com/images/IMG-20191112-WA0002.jpg"
    alt="Lee Sampson profile"
  />
  <Media.Body>
    <h5>Surf</h5>
    <p>
     I came to surfing late in life (in my late 20's) but fell in love with longboards and being out the back of the lineup and taking the time to recharge.
    </p>

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Surf