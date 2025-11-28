import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Article from './Article';
import Image from 'react-bootstrap/Image'
export default class About extends Component {
    render() {
        return (

            <Container>

                <Container>
                    <Card border='light' style={{ width: '90%', height: '4rem' }}>
                        <Card.Header>Pathmanaban Palsamy</Card.Header>
                        <Card.Body >
                            <Image src='/img/path.jpeg' roundedCircle />
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

            </Container>


        );
    }
}