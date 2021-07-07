import React from "react";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


function Roles(props) {
    return(
        <div className="roles">
     
<Container>
<Accordion>

<Card border="light">
    <Card.Body>
        <Card.Title>{props.role}</Card.Title>
        <Card.Subtitle className= "mb-2 texted-muted">{props.employer}</Card.Subtitle>
        <Accordion.Toggle as ={Card.Header} eventKey="0">
        <Card.Subtitle className= "mb-2 texted-muted">Description</Card.Subtitle>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Text>{props.description}</Card.Text>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        <Card.Subtitle className= "mb-2 texted-muted">Skills</Card.Subtitle>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Text>{props.keywords}</Card.Text>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="2">
        <Card.Subtitle className= "mb-2 texted-muted">Achievements</Card.Subtitle>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
        <Card.Text>{props.achievements}</Card.Text>
        </Accordion.Collapse>
    </Card.Body>
</Card>
</Accordion>  
</Container>
        </div>
    )
}

export default Roles