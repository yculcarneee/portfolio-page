import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Container, Row, CardDeck} from 'react-bootstrap';  

import Dreamcatcher from "../assets/images/dreamcatcher.png"
import ASL from "../assets/images/asl-letter-classifier.png"

export default function Projects() {
    return(
        <div className="App">
            <Card className="projects-card">
                <Card.Body id = "projects-card">
                    <Container>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <h3> Projects </h3>
                        </Row>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <CardDeck>
                                <Card className="info-card" style={{width: '20rem', marginBottom: '5vh'}}>
                                    <Card.Img variant="top" src={Dreamcatcher}/>
                                    <Card.Body>
                                        <Card.Title>Dreamcatcher</Card.Title>
                                        <Card.Text>
                                        Dreamcatcher is a community-driven job application tracker where users can search through and keep track of multiple job applications and get more information from their peers about new opportunities.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Link href="https://github.com/PyroGenesis/Dreamcatcher">GitHub Repository</Card.Link>
                                        <Card.Link href="https://youtu.be/4_YIT2BbuLA">Demo</Card.Link>
                                    </Card.Footer>
                                </Card>
                                <Card className="info-card" style={{width: '20rem', marginBottom: '5vh'}}>
                                    <Card.Img variant="top" src={ASL} height="180"/>
                                    <Card.Body>
                                        <Card.Title>ASL Letter Classifier</Card.Title>
                                        <Card.Text>
                                            ASL Letter Classifier is a web app that can classify and translate 26 English ASL alphabets as well as 3 special gestures into text using our camera feed.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Card.Link href="https://github.com/yculcarneee/ASL-Letter-Classifier">GitHub Repository</Card.Link>
                                        <Card.Link href="https://youtu.be/e77SXyUDf8U">Demo</Card.Link>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}