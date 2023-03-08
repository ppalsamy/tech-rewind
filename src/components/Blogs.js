import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Router, Routes } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
function Blogs() {

    return (

        <div className='main- d-flex'>
            <Nav className="flex-column" bg="light">
                <Nav.Link href="/Blogs/Pair">Pair Programming</Nav.Link>
                <Nav.Link href="/Blogs/Tdd">Test Driven Development</Nav.Link>
                <Nav.Link href="/Blogs/Devops">DevOps</Nav.Link>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header>Test Automation</Accordion.Header>
                        <Accordion.Body>
                            <Nav.Link href="/Blogs/PerfTest">Performance Test</Nav.Link>
                            <Nav.Link href="/Blogs/ContractTest">Contract Test</Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey='1'>
                        <Accordion.Header> Devops</Accordion.Header>
                        <Accordion.Body>
                            Automation is great way
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Nav>

            <Container> <Outlet /> </Container>
        </div>

    );
}
export default Blogs;