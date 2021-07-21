
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Heading from './Heading';
import Story from './Story';
import Roles from './Roles';
import Skills from './Skills';
import Training from './Training';
import Family from './Family';
import Art from './Art';
import Surf from './Surf';
import Byleesampson from './Byleesampson';
import Menu from './Menu';
import Footer from './Footer'
import './App.css';
import jobs from './jobs';
import education from './education.js';
import skill from './skill';
import Developer from './Developer';


function createRoles(jobs){
  return <Roles key={jobs.id} employer={jobs.employer} role={jobs.role} description={jobs.description} keywords={jobs.keywords} achievements={jobs.achievements} />;
}

function createSkills(skill){
  return <Skills key={skill.id} skill={skill.skill} level = {skill.level} />
}


function createTraining(education){
  return <Training key={education.id} course={education.course} provider={education.provider} outline={education.outline} />
}

function App() {
  return (
    <div className="App">
    <Menu />
    <Heading />
    <Container fluid>
      <Row>
        <Col><Story /></Col>
      </Row>
      <Row>
        <Col>
        <div className="col1">
          <h5 >Skills</h5>
        {skill.map(createSkills)}
        </div>
        </Col>
        <Col>
        <div className="col1">
          <h5 >Roles</h5>
        {jobs.map(createRoles)}
        </div>
        </Col>
        <Col>
        <div className="col1">
          <h5>Training</h5>
        
        {education.map(createTraining)}
        </div>
        </Col>
      </Row>
      <Row>
      <Col>
        <Developer />
        </Col>  
      </Row>
      <Row>
        <Col><Family /></Col>
        <Col><Byleesampson /></Col>
      </Row>  
      <Row>
        <Col><Surf /></Col>
        <Col><Art /></Col>    
      </Row>
      <Footer />
    </Container>
    </div>
  );
}

export default App;
