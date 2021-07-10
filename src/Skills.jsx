import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Accordian from 'react-bootstrap/Accordion';



function Skills(props) {
    return(
        <div className="skill-section">
<Container>
<Accordian>
<Card border="light">
    <Card.Body>
        <Card.Title>{props.skill}</Card.Title>
        <Accordian.Toggle as={Card.Header} eventKey="0">...</Accordian.Toggle>
        <Accordian.Collapse eventKey="0">
        <Card.Text>{props.level}</Card.Text>
        </Accordian.Collapse>
    </Card.Body>
</Card>
</Accordian>
</Container>
        </div>
    )
}

export default Skills