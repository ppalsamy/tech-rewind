import React, { Component } from 'react'
import Container from 'react-bootstrap/esm/Container';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
export default class Books extends Component {
    render() {
        return (
            <>
                <Container>
                    <br />
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Personal Development</Accordion.Header>
                            <Accordion.Body>
                                <CardGroup>
                                    <Card style={{ width: '10rem' }}>
                                        <a href="#"><Card.Img src="../img/books/ThinkAndGrowRich.jpg" /> </a>
                                        <Card.Body>
                                            <Card.Title>Think and Grow Rich!</Card.Title>
                                            <Card.Subtitle>By Napolean Hill</Card.Subtitle>
                                            <Card.Text><br />
                                                Think and Grow Rich, Hill draws on stories of Andrew Carnegie, Thomas Edison, Henry Ford, and other millionaires of his generation to illustrate his principles.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <br />
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/IWillTeachURich.jpg" /></a>
                                        <Card.Body>
                                            <Card.Title>I Will Teach You To Be Rich</Card.Title>
                                            <Card.Subtitle>By Ramit Sethi</Card.Subtitle>
                                            <Card.Text> <br />
                                                Live your rich life instead of tracking every last expense with Ramit Sethi’s simple, powerful, and effective six-week program for gaining control over your finances.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/Limitless.jpg" /></a>
                                        <Card.Body>
                                            <Card.Title>Limitless: Upgrade Your Brain, Learn Anything Faster, and Unlock Your Exceptional Life</Card.Title>
                                            <Card.Subtitle>By Jim Kwik</Card.Subtitle>
                                            <Card.Text> <br />
                                                Limitless gives people the ability to accomplish more - more productivity, more transformation, more personal success and business achievement - by changing their Mindset, Motivation, and Methods.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/ThinkLikeAMonk.jpg" /> </a>
                                        <Card.Body>
                                            <Card.Title>Think Like A Monk</Card.Title>
                                            <Card.Subtitle>By Jay Shetty</Card.Subtitle>
                                            <Card.Text><br />
                                                Think Like a Monk reveals how to overcome negative thoughts and habits and access the calm and purpose that lie within all of us.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/TheLeanStartup.jpg" /></a>
                                        <Card.Body>
                                            <Card.Title>The Lean Startup: How Constant Innovation Creates Radically Successful Businesses </Card.Title>
                                            <Card.Subtitle>By Eric Ries</Card.Subtitle>
                                            <Card.Text><br />
                                                The Lean Startup approach fosters companies that are both more capital efficient and that leverage human creativity more effectively.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Software Development</Accordion.Header>
                            <Accordion.Body>
                                <br />
                                <CardGroup>

                                </CardGroup>
                                <br />
                                <p>Software Development</p>
                                <CardGroup>
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/CleanCode.jpg" /></a>
                                        <Card.Body>
                                            <Card.Title>Clean Code </Card.Title>
                                            <Card.Subtitle>By Robert C. Martin</Card.Subtitle>
                                            <Card.Text>
                                                <br />
                                                Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code.
                                                The second part consists of several case studies of increasing complexity.
                                                The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/Tdd.jpg" /></a>
                                        <Card.Body>
                                            <Card.Title>Test Driven Development</Card.Title>
                                            <Card.Subtitle>By Kent Beck</Card.Subtitle>
                                            <Card.Text>
                                                <br />
                                                Test Driven Development - Write a Failing Test First, Fix or Develop your Code and Finally, Refactor .
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '18rem' }}>
                                        <a href="#"><Card.Img variant="top" src="../img/books/TerraformUpAndRunning.jpg" /></a>
                                        <Card.Body>
                                            <Card.Title>Terraform: Up and Running</Card.Title>
                                            <Card.Subtitle>By Yevgeniy Brikman </Card.Subtitle>
                                            <Card.Text>
                                                <br />
                                                Terraform's simple, declarative programming language for deploying and managing infrastructure with a few commands.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </CardGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>

            </>
        );
    }
}
