import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div >
                        <Container>
                            <Card style={{ width: '48rem', height: '4rem' }}>
                                {/* <Card.Img variant="top" src="..\img\path.jpeg" /> */}
                                <Card.Body>
                                    <Card.Header>Pathmanaban Palsamy</Card.Header>
                                    <Card.Text>
                                        <div >
                                            <br />
                                            <p>
                                                With over 2 decades of experience in software engineering, I have had the opportunity to contribute in various roles such as a Software Engineer, DevOps Engineer, Cloud Application Architect, Coach, Mentor and Engineering Leader.
                                            </p><p> I have extensive experience in working in an Agile environment and in transforming product teams into high-performing teams.
                                            </p><p>I am well-practiced in multi-cloud environments such as AWS, Azure, and GCP, and have extensive knowledge in Serverless and Microservices Architecture.
                                            </p>
                                        </div>
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button>  */}
                                </Card.Body>
                                <Card.Footer style={{}}>
                                    <Card.Link href="#">Linkedin</Card.Link>
                                    <Card.Link href="#">GitHub</Card.Link>
                                </Card.Footer>
                            </Card>
                        </Container>
                    </div>
                </Container>

            </div>
        );
    }
}