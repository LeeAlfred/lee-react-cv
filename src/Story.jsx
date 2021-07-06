import React from "react";
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';

function Story() {
    return (
        <div className="story">
   <Container fluid>    
         <Media>
  <img
    width={150}
    height={150}
    className="align-self-center mr-3"
    src="https://s6.gifyu.com/images/profileImage.png"
    alt="Lee Sampson profile"
  />
  <Media.Body>
    <h5>My Story</h5>
    <p>
      A lot of life experience has helped make me a genuinely nice person, a real team player and a talented leader who understands the importance of two way contribution.
    </p>
    <p>
      Over the past 20 years I have enjoyed leadership roles in Hospitality, Service, Finance and IT. This provides a wealth of varied skills and knowledge and confidence in adaptability.  
    </p>
    <p>
       My special power is introverted ability to empathise combined with a strong creative trait.
    </p>
  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Story