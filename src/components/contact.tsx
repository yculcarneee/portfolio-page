import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row, Nav, Form, Button, Col} from 'react-bootstrap';   

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return(
        <div className="App">
            <Card style={{backgroundColor: '#e76f51', color: 'white'}}>
                <Card.Body id = "contact-card">
                    <Container fluid>
                        <Row style={{justifyContent: 'center', marginTop: '3vh'}}>
                            <h3> Contact </h3>
                        </Row>
                        <Row style={{justifyContent: 'center', marginTop: '3vh'}}>
                            <Form>
                                <Form.Group as={Row} controlId="formName">
                                    <Form.Label column sm={4}>Name</Form.Label>
                                    <Col sm={8}>            
                                        <Form.Control placeholder="Enter your name..." />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formEmail">
                                    <Form.Label column sm={4}>Email</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control type="email" placeholder="Enter your email..." />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formMessage">                                   
                                    <Form.Label column sm={4}>Message</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control as="textarea" rows={5} placeholder="Enter your message..." />
                                    </Col>
                                </Form.Group>    
                                <Form.Group as={Row}>
                                    <Col sm={{ span: 10, offset: 1 }}>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row className="justify-content-center" style={{marginTop: '3vh'}}>
                            <a className="pr-4 pl-4" target="_blank" href="https://www.github.com/yculcarneee" style={{textDecoration: 'none', color: 'inherit'}}>
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </a>
                            <a className="pr-4 pl-4" target="_blank" href="https://www.linkedin.com/in/yashkulkarni97" style={{textDecoration: 'none', color: 'inherit'}}>
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a className="pr-4 pl-4" target="_blank" href="mailto:yukulkar@uci.edu" style={{textDecoration: 'none', color: 'inherit'}}>
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                        </Row>
                        <Row className="justify-content-center" style={{marginTop: '3vh'}}>
                            <footer style={{color: 'white', fontSize: '0.75rem'}}> © Yash Kulkarni. All rights reserved. <br/> Designed by Yash Kulkarni </footer>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}