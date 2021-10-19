import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Header = () => {
    const history = useHistory();
    const handleHome = e => {
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
                        <NavLink to="/login" className="user-link "><span>login</span> <i className="fas fa-user fa-2x "></i> </NavLink>
                        <NavLink to="#pricing" className="user-link"><i className="fas fa-sign-in-alt fa-2x"></i></NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default Header;