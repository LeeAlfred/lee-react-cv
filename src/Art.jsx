import React from "react";
import Container from 'react-bootstrap/Container';
import { Card } from "react-bootstrap";

function Art() {
    return (
        <div className="story">
   <Container fluid>    
  <Card border="light">
  <Card.Img className="bottom-cards" variant ="top" src="https://s6.gifyu.com/images/IMG-20180601-WA0008.jpg"
    alt="Oil Painting by Lee Sampson"
  />
  <Card.Body>
    <Card.Title>Art</Card.Title>
    <p>
    I've been painting for over 20 years. My influences include the Impressionists and New Zealand contemporary artists.</p>

    <p>Here are some examples of my <a href="https://leesampsonart.weebly.com/" target="_blank">paintings on Weebly</a></p>

  </Card.Body>
</Card>
</Container> 
        </div>
    )
}

export default Art