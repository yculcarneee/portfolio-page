import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row, Nav, Form, Button, Col} from 'react-bootstrap';   

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
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}