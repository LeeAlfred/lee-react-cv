import React from "react";
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';

function Byleesampson() {
    return (
        <div className="story">
   <Container>    
         <Media>
  <img
    width={110}
    height={110}
    className="mr-3"
    src="https://s6.gifyu.com/images/Favicon.png"
    alt="Penguin Illustration"
  />
  <Media.Body>
    <h5>Penguins</h5>
   
    <p> Here is a link to a webesite I created for displaying my thoughts on Leadership using penguins <a href="http://penguins-by-lee-sampson.herokuapp.com/" target="_blank">Penguins byLeeSampson</a></p>

  </Media.Body>
</Media>
</Container> 
        </div>
    )
}

export default Byleesampson