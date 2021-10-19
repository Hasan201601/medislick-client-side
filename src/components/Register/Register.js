import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bg from '../../Images/col-bgimage-4.jpg'
import logo from '../../Images/logo-2.png'

const Register = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className="shadow-lg form-login" >

                    <Row className="bg-white justify-content-center flex-column flex-md-row">
                        <Col xs={12} md={6} className="p-5">
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Control type="name" placeholder="Name" />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="password" placeholder="Re-enter Password" />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <button type="submit" className="btn-custom btn-custom-info" >Sign Up</button>
                                </Form.Group>
                                <div class="separator">
                                    <div class="separator-content">
                                        <span>or</span>
                                    </div>
                                </div>
                                <div className="text-center pb-4 p-4 ">
                                    <button className="btn-custom-outline-info">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div><i class="fab fa-google border"></i></div>
                                            <div>Continue With Google</div>
                                        </div>
                                    </button>
                                </div>
                                <Form.Group className="text-center">

                                    <span>Already have an account?</span> <NavLink to="/login"><span className="text-center name">Login</span></NavLink>
                                </Form.Group>
                            </Form>


                        </Col>
                        <Col xs={12} md={6} className="fl-bg-gradient">

                            <div className="py-4  d-flex">
                                <div className="p-4">
                                    <h4 className="name">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</h4>
                                    <h4 className="name py-2 text-white"><span><i className="far fa-calendar-alt "></i></span> Online Appointment!</h4>
                                    <h4 className="name py-2 text-white"><span><i className="fas fa-map-marker-alt"></i></span> Available at your Location</h4>
                                    <h4 className="name py-2 text-white"><span><i className="far fa-clock"></i></span> Work Improvements</h4>
                                </div>
                            </div>
                        </Col>
                    </Row >
                </div>
            </div >
        </div >
    );
};

export default Register;


