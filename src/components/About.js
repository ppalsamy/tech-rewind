import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/esm/Container';
export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div >
                        <Container>
                            With over 2 decades of experience in software engineering, I have had the opportunity to contribute in various roles such as a Software Engineer, DevOps Engineer, Cloud Application Architect, Coach, Mentor and Engineering Leader.
                            I have extensive experience in working in an Agile environment and in transforming product teams into high-performing teams.
                            I am well-practiced in multi-cloud environments such as AWS, Azure, and GCP, and have extensive knowledge in Serverless and Microservices Architecture.
                        </Container>
                    </div>
                </Container>
                {/* </div>  <CardGroup>
                    { <Card style={{ width: '24rem' }}>
                        <Card.Img variant="top" src="..\img\path.jpeg" />
                    </Card>

                    <Card style={{ width: '18rem', height: '4rem' }}>
                        {<Card.Img variant="top" src="..\img\path.jpeg" />}
                        <Card.Body>
                            <Card.Header>Pathmanaban Palsamy</Card.Header>
                            <Card.Text>
                                <div >
                                    With over 2 decades of experience in software engineering, I have had the opportunity to contribute in various roles such as a Software Engineer, DevOps Engineer, Cloud Application Architect, Coach, Mentor and Engineering Leader. I have extensive experience in working in an Agile environment and in transforming product teams into high-performing teams. I am well-practiced in multi-cloud environments such as AWS, Azure, and GCP, and have extensive knowledge in Serverless and Microservices Architecture.
                                </div>
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> }
                        </Card.Body>
                        <Card.Footer>
                            <Card.Link href="#">Linkedin</Card.Link>
                            <Card.Link href="#">GitHub</Card.Link>
                        </Card.Footer>
                    </Card>
                    <Card>
                        {/* <Card.Header>Certifications</Card.Header>
                        <Card.Body>
                            <ul text-align='left'>
                                <li>Certified AWS Solution Architect-Associate</li>
                                <li>Certified Kubernetes Application Developer </li>
                                <li>Hashicorp Certified Terraform Associate </li>
                            </ul>
                        </Card.Body>
                        <Card.Footer></Card.Footer> }
                    </Card>
                </CardGroup> */}
            </div>
        );
    }
}