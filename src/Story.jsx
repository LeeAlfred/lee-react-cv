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
    <h5>About</h5>
    <p>
    My life experience has helped make me a genuinely nice person who understands that getting to know people is the key to success.
    </p>
    <p>
    Over the past 20 years I have had leadership roles in Hospitality, Service, Finance and IT.   
    </p>
    <p>
    This wealth of experience allows me to cross pollinate successful skills, practices and knowledge from those sectors. It also demonstrates my comfort to continually learn, adapt and work with a diverse cross-section of society.
    </p>
    <p>
    At work I am most passionate about fostering a culture of teamwork where the customer experience and staff engagement are a team's measure of success.
    </p>
    <p>
    I excel because people can tell I genuinely care.   
    </p>
  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Story