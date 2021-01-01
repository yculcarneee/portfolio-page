import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row, Nav, CardDeck} from 'react-bootstrap';   

export default function Projects() {
    return(
        <div className="App">
            <Card style={{backgroundColor: '#023e8a', color: 'white'}}>
                <Card.Body id = "projects-card">
                    {/* <div id="projects" style={{paddingTop: '50px'}}></div> */}
                    <Container className="section-top">
                        <Row style={{justifyContent: 'center', marginTop: '3vh'}}>
                            <h3> Projects </h3>
                        </Row>
                        <Row style={{justifyContent: 'center', marginTop: '3vh', marginBottom: '3vh'}}>
                            <CardDeck>
                                <Card style = {{color: 'black', width: '20rem'}}>
                                    <Card.Img variant="top" src="http://placekitten.com/96/54" />
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
                                <Card style = {{color: 'black', width: '20rem'}}>
                                    <Card.Img variant="top" src="http://placekitten.com/96/54" />
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