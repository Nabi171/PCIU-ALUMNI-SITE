import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import imglogo from '../images/pciu.logo.png';
import '../Header/Header.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import useAdmin from '../Hooks/useAdmin';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    console.log(user);

    return (
        <div className='sticky-top' >
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <div><Navbar.Brand href="#home">PCIU</Navbar.Brand>
                        <Link to='/'><img className='img-logo' src={imglogo} alt="" /></Link>
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
                                to="/gallery">Gallery</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/aboutus">AboutUs</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/membership">Membership-Form</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/mems">Members</NavLink >

                                {
                                    user &&  <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/newsFeed">NewsFeed</NavLink >
                                }
                           
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/newsForm">AddPost</NavLink >
                            {user ?
                                <NavLink onClick={() => signOut(auth)}
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/signup">logOut</NavLink >
                                :
                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/login">LOGIN</NavLink >}




                            {admin &&
                                <>
                                    <NavLink
                                        className={({ isActive }) => isActive ? "active-link" : "link"}
                                        to="/MainPanel">Admin-Panel</NavLink >}
                        </>
                            }



                            <li>{user &&

                                <div>
                                    <div className="text-info ms-1">
                                        <span className="fw-bold">{user.displayName}</span>
                                        <span>
                                            <img className='rounded-circle w-25' src={user.photoURL
                                            } alt="" srcset="" />
                                        </span>
                                    </div>
                                </div>

                            }</li>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;