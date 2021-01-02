import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row, Button, Col, Media} from 'react-bootstrap';   

export default function Experience() {
    return(
        <div>
            <Card style={{backgroundColor: '#2a9d8f', color: 'white'}}>
                <Card.Body id = "experience-card">
                    <Container>
                        <Row style={{justifyContent: 'center', marginTop: '3vh'}}>
                            <h3> Experience </h3>
                        </Row>
                        <Row style={{justifyContent: 'center', marginTop: '3vh'}}>
                            <Card style = {{color: 'black', marginBottom: '5vh', width: '55rem'}}>
                                <Media>
                                    <img
                                        className="align-self-center m-3 m-sm-4 m-md-4 m-lg-4 m-xl-4"
                                        src="http://placekitten.com/100/100"
                                        alt="Amazon Web Services"
                                    />
                                    <Media.Body className="mr-3 m-sm-4 m-md-4 m-lg-4 m-xl-4 p-3">
                                        <h5>Amazon Web Services</h5>
                                        <p>
                                            • Created and deployed a system for developers to automate running UI tests on the cloud <br/>
                                            • Implemented a process for capturing performance metrics of web pages using Lighthouse <br/>
                                            • Set up an Elasticsearch cluster to ingest results and metrics data from the UI tests for analysis <br/>
                                            • Designed visualizations to gain better insight into test data using Kibana <br/>
                                        </p>
                                    </Media.Body>
                                </Media>
                            </Card>
                            <Card style = {{color: 'black', marginBottom: '5vh', width: '55rem'}}>
                                <Media>
                                    <img
                                        className="align-self-center m-3 m-sm-4 m-md-4 m-lg-4 m-xl-4"
                                        src="http://placekitten.com/100/100"
                                        alt="Collegepond"
                                    />
                                    <Media.Body className="mr-3 m-sm-4 m-md-4 m-lg-4 m-xl-4 p-3">
                                        <h5>Collegepond</h5>
                                        <p>
                                            • Designed new web pages for Collegepond as part of brand expansion into four new cities in WordPress <br/>
                                            • Revamped pages of Collegepond’s website resulting in a consistent experience across all devices <br/>
                                            • Technologies used: WordPress, HTML, CSS, JavaScript <br/>
                                        </p>
                                    </Media.Body>
                                </Media>    
                            </Card>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </div>
    )
}