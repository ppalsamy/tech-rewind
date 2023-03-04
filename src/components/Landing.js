import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Landing() {

    return (
        <>
            <div>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="/">Tech Rewind</Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar
                    style={{ background: 'cornflowerblue' }}
                    variant='light' expand="lg"
                    sticky="top">
                    <Container fluid>
                        {/* <Navbar.Brand href="/">Tech Rewind</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Nav.Link href="/Blogs" >Blogs</Nav.Link>

                                <Nav.Link href="/Books">Books</Nav.Link>
                                <Nav.Link href="/Finance">Personal Finance</Nav.Link>
                                <Nav.Link href="/About">About</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div><Outlet /></div>
            </div>
        </>
    )
}
export default Landing;