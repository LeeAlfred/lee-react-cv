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
    <h5>Family</h5>
    <p>
    I am a proud father of three, our daughter is currently studying at university and our two son's at school here.</p>
    
    <p> My wife is South African and we moved to Cape Town in 2019 so she can care for her family here.</p>
    

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Family