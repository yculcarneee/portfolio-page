import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Container, Row, Form, Button, Col} from 'react-bootstrap';   
import isEmail from 'validator/es/lib/isEmail';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";


export default function Contact() {

    // const [valid, setValid] = useState(false)

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState(false)

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState(false)

    const checkValidity = () => {
        return new Promise((resolve, reject) => {
            let isError = false;

            if(name.length < 4) {
                isError = true;
                setNameError(true)
            }
            else {
                setNameError(false)
            }

            if(!isEmail(email)) {
                isError = true;
                setEmailError(true)
            }
            else {
                setEmailError(false)
            }

            if(message.length < 4) {
                isError = true;
                setMessageError(true)
            }
            else {
                setMessageError(false)
            }
           resolve(isError)
        })
    }
    
const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

    const submitForm = async(e: React.FormEvent) => {
        checkValidity().then((res) => {
            if(!res) {    
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: encode({ "form-name": "contact", "name": name, "email": email, "message": message })
                })
                .then(() => alert("Success!"))
                .catch(error => alert(error));

                setName('')
                setEmail('')
                setMessage('')
            }
        })

        e.preventDefault()
    }    

    return(
        <div className="App">
            <Card className="contact-card">
                <Card.Body id = "contact-card">
                    <Container fluid>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <h3> Contact </h3>
                        </Row>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <Form noValidate onSubmit={submitForm}>
                                <input type="hidden" name="form-name" value="contact" />
                                <Form.Group as={Row} controlId="formName">
                                    <Form.Label column sm={4}>Name</Form.Label>
                                    <Col sm={8}>            
                                        <Form.Control name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name..." isInvalid={nameError}/ >
                                        <Form.Control.Feedback tooltip type="invalid">
                                          Please enter a name.
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formEmail">
                                    <Form.Label column sm={4}>Email</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control name="email" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email..." isInvalid={emailError}/>
                                        <Form.Control.Feedback tooltip type="invalid">
                                          Please enter a valid email.
                                        </Form.Control.Feedback>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formMessage">                                   
                                    <Form.Label column sm={4}>Message</Form.Label>
                                    <Col sm={8}>
                                        <Form.Control name="message" as="textarea" onChange={e => setMessage(e.target.value)} value={message} rows={5} placeholder="Enter your message..." isInvalid={messageError}/>
                                        <Form.Control.Feedback tooltip type="invalid">
                                          Please enter a message.
                                        </Form.Control.Feedback>
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