import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Landing() {

    return (
        <>
            <div>
                <Navbar
                    style={{ background: 'cornflowerblue' }}
                    variant='light' expand="lg"
                    sticky="top">
                    <Container fluid>
                        <Navbar.Brand href="/about">TechRewind</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll>
                                <Nav.Link href="/blogs" >Blogs</Nav.Link>
                                <Nav.Link href="/books">Books</Nav.Link>

                            </Nav>
                            {/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form> */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div><Outlet /></div>

            </div>

        </>
    )
}
export default Landing;