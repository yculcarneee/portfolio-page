import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {Card, Image, Container, Row, Col, Media} from 'react-bootstrap'; 

import AWS from '../assets/images/amazon-web-services.png'
import CP from '../assets/images/collegepond.png'

export default function Experience() {
    return(
        <div>
            <Card className="experience-card">
                <Card.Body id = "experience-card">
                    <Container>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <h1> Experience </h1>
                        </Row>
                        <Row className="heading-row" style={{justifyContent: 'center'}}>
                            <Card className="info-card" style={{width: '55rem'}}>
                                <Media>
                                    <Image className="align-self-center m-3 m-sm-4 m-md-4 m-lg-4 m-xl-4" src={AWS} width="100" height="60" alt="Amazon Web Services"/>
                                    <Media.Body className="mr-3 m-sm-4 m-md-4 m-lg-4 m-xl-4 p-3">
                                        <h3>Amazon Web Services</h3>
                                        <p style={{fontSize: 'large'}}>
                                            • Created and deployed a system for developers to automate running UI tests on the cloud <br/>
                                            • Implemented a process for capturing performance metrics of web pages using Lighthouse <br/>
                                            • Set up an Elasticsearch cluster to ingest results and metrics data from the UI tests for analysis <br/>
                                            • Designed visualizations to gain better insight into test data using Kibana <br/>
                                        </p>
                                    </Media.Body>
                                </Media>
                            </Card>
                            <Card className="info-card" style={{width: '55rem'}}>
                                <Media>
                                    <Image className="align-self-center m-3 m-sm-4 m-md-4 m-lg-4 m-xl-4" src={CP} width="100" height="100" alt="Collegepond"/>
                                    <Media.Body className="mr-3 m-sm-4 m-md-4 m-lg-4 m-xl-4 p-3">
                                        <h3>Collegepond</h3>
                                        <p style={{fontSize: 'large'}}>
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