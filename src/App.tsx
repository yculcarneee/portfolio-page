import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Card, Image, Container, Row, Button, Col, Nav} from 'react-bootstrap';
import Headroom from 'react-headroom';
import Projects from './components/projects'

import react, {useState} from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";
import NavbarComponent from "./components/navbar";

// function renderSwitch(param: string) {
//   switch(param) {
//     case 'about':
//       return <About/>;
//     case 'projects':
//       return <Projects/>;
//   }
// }

{/* <Col xs={3}>
  <Nav className="flex-column">
    <Nav.Link eventKey="about" onSelect={()=>{setCategory('about')}}>About</Nav.Link>
    <Nav.Link eventKey="experience" onSelect={()=>{setCategory('experience')}}>Experience</Nav.Link>
    <Nav.Link eventKey="projects" onSelect={()=>{setCategory('projects')}}>Projects</Nav.Link>
  </Nav>
</Col>
<Col xs={9}>
  {
    renderSwitch(category)
  }
</Col> */}


function App() {

  const [category, setCategory] = useState('about');

  return (
    <div>
      {/* <Headroom>
        <NavbarComponent/>
      </Headroom>       */}
      <NavbarComponent/>
      <div>  
        <div id = "about">
          <About/>
        </div>
        <div id = "projects">
          <Projects/>
        </div>
        <div id = "experience">
          <Experience/>
        </div>
        <div id = "contact">
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
