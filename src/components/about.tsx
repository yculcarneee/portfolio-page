import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row} from 'react-bootstrap';   
import Profile from "../assets/images/profile.jpeg"

export default function About() {
    return(
        <div className="App">
            <Card className="about-card">
                <Card.Body id = 'about-card'>
                    <Container>
                        <Row style={{justifyContent: 'center'}}>
                            <Image src={Profile} width="155px" height="140px" roundedCircle={true} alt="Yash Kulkarni"/>
                        </Row>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <h2>Yash Kulkarni</h2>
                        </Row>
                        <Row className="about-text">
                            <p>
                                Hello, I'm Yash, a software developer with experience in development using C++ and Python and web technologies such as React, Node.js, Express, etc.                                 
                                <br/> <br/>
                                I recently completed my Master of Computer Science degree at the University of California - Irvine. I interned at Amazon Web Services in Summer 2020, where I developed a system that automates UI testing for developers in the AWS Console team. I have a strong background in Data Structures and Algorithms, along with a keen interest in Machine Learning and Artificial Intelligence.
                                <br/> <br/>
                                <b>  I am currently looking for full-time SDE/SWE opportunities in the US starting Feb 2021. If you or anyone you know is hiring for such roles, please check out my work below and reach out to me! I would love to connect and discuss opportunities where I can provide impact. </b>
                            </p>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}