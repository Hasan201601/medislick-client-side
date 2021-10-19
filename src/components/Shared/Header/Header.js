import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    console.log(user)
    const history = useHistory();
    const handleHome = () => {
        history.push('/home')
    }
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar" fixed="top">
            <Container>
                <Navbar.Brand className="p-0"><img src={logo} style={{ backgroundColor: '#9d9e9f0f', height: '50px', cursor: 'pointer' }} alt="" onClick={() => handleHome()} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse>
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="link">Home</NavLink>
                        <NavLink to='/about' className="link">About</NavLink>
                        <NavLink to="/book" className="link">Book</NavLink>
                        {!user.email ? <NavLink to="/login" className="link">login</NavLink> :
                            <span>
                                <Navbar.Text>{user.displayName}</Navbar.Text>
                                <button className="btn-custom btn-custom-outline-info ms-2" onClick={logOut}>LogOut</button>
                            </span>
                        }
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default Header;