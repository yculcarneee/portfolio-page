import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Container, Row, Form, Button, Col} from 'react-bootstrap';   

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return(
        <div className="App">
            <Card className="contact-card">
                <Card.Body id = "contact-card">
                    <Container fluid>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <h3> Contact </h3>
                        </Row>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
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
                        <Row className="justify-content-center heading-row">
                            <a className="pr-4 pl-4 contact-icon" target="_blank" rel="noreferrer" href="https://www.github.com/yculcarneee">
                                <FontAwesomeIcon icon={faGithub} size="2x"/>
                            </a>
                            <a className="pr-4 pl-4 contact-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yashkulkarni97">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a className="pr-4 pl-4 contact-icon" target="_blank" rel="noreferrer" href="mailto:yukulkar@uci.edu">
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </a>
                        </Row>
                        <Row className="justify-content-center heading-row">
                            <footer className="footer-text"> © Yash Kulkarni. All rights reserved. <br/> Designed by Yash Kulkarni </footer>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}