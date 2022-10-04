import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import imglogo from '../images/pciu.logo.png';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <div><Navbar.Brand href="#home">PCIU</Navbar.Brand>
                        <img className='img-logo' src={imglogo} alt="" />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fw-bold">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Members</Nav.Link>
                            <Nav.Link href="#features">Events</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="#features">Login</Nav.Link>
                            <Nav.Link href="#pricing">Apply For Membership</Nav.Link>
                            <Nav.Link href="#features">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;