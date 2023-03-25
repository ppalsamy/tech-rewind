import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Article from './Article';
export default class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div >
                        <Container>
                            <Card style={{ width: '48rem', height: '4rem' }}>
                                <Card.Body>
                                    <Card.Header>Pathmanaban Palsamy</Card.Header>
                                    <Card.Text>
                                        <Article name='about' />
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer style={{}}>
                                    <Card.Link href="https://www.linkedin.com/in/pathmanabanp/" target={'_blank'}>Linkedin</Card.Link>
                                    <Card.Link href="https://github.com/ppalsamy" target={'_blank'}>GitHub</Card.Link>
                                </Card.Footer>
                            </Card>
                        </Container>
                    </div>
                </Container>

            </div>
        );
    }
}