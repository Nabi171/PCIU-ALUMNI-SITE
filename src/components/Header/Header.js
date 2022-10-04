import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import imglogo from '../images/pciu.logo.png';
import '../Header/Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);

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
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/mainHome">Home</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/events">Events</NavLink >

                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/features">Features</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/aboutus">AboutUs</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/applyFrmembership">Apply For Membership</NavLink >
                            {user ?
                                <NavLink onClick={() => signOut(auth)}
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/signup">SIGN OUT</NavLink > :
                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/login">LOGIN</NavLink >}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;