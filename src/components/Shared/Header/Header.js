import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/logo.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-bar" fixed="top">
            <Container>
                <Navbar.Brand href="#home" className="p-0"><img src={logo} style={{ backgroundColor: '#9d9e9f0f', height: '50px' }} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse>
                    <Nav className="ms-auto">
                        <NavLink to="/home" className="link">Home</NavLink>
                        <NavLink to="#features" className="link">Features</NavLink>
                        <NavLink to="#pricing" className="link">Pricing</NavLink>
                        <NavLink to="#pricing" className="user-link "><span>login</span> <i class="fas fa-user fa-2x "></i> </NavLink>
                        <NavLink to="#pricing" className="user-link"><i class="fas fa-sign-in-alt fa-2x"></i></NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default Header;