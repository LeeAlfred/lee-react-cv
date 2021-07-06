import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';


function Skills(props) {
    return(
        <div className="skill-section">
<Container>
<Card border="light">
    <Card.Body>
        <Card.Title>{props.skill}</Card.Title>
        {/* <Card.Subtitle className= "mb-2 texted-muted"></Card.Subtitle> */}
        <Card.Text>{props.level}</Card.Text>
    </Card.Body>
</Card>
</Container>
        </div>
    )
}

export default Skills