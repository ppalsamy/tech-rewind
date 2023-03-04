import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Outlet, Router, Routes } from 'react-router-dom';

function Blogs() {

    return (

        <div className='main- d-flex'>
            <Nav className="flex-column">
                <Nav.Link href="/Blogs/Pair">Extreme Programming</Nav.Link>
                <Nav.Link href="/Blogs/Openai">OpenAI</Nav.Link>
                <Nav.Link href="/Blogs/Devops">DevOps</Nav.Link>
            </Nav>

            <Container> <Outlet />
            </Container>
        </div>

    );
}
export default Blogs;