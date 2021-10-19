import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-bg footer'>
            <Container>
                <Row className='text-start py-5 text-white'>
                    <Col lg={5} sm={12}>
                        <h3><span className='text-color'><i className="fas fa-heartbeat"></i>MediSlick Hospital</span></h3>
                        <p className='text-white py-3'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                    </Col>
                    <Col lg={3} sm={12}>
                        <h3>Opening Hours</h3>
                        <div className='py-3'>
                            <ListGroup variant="flush bg-transparent">
                                <ListGroup.Item> <p className='d-flex justify-content-between'>
                                    <span>Mon-Tues :</span>
                                    <span>6:00-10:00</span>
                                </p></ListGroup.Item>
                                <ListGroup.Item><p className='d-flex justify-content-between'>
                                    <span>Wed - Thurs :</span>
                                    <span>6:00-10:00</span>
                                </p></ListGroup.Item>
                                <ListGroup.Item><p className='d-flex justify-content-between '>
                                    <span>Sat - Sun :</span>
                                    <span>6:00-10:00</span>
                                </p></ListGroup.Item>
                                <ListGroup.Item><p className='d-flex justify-content-between'>
                                    <span>Friday :</span>
                                    <span>Closed</span>
                                </p></ListGroup.Item>
                            </ListGroup>




                        </div>
                    </Col>
                    <Col lg={4} sm={12}>
                        <h3 className='pb-3'>Get In Touch</h3>
                        <div className='d-flex align-items-center mb-3'>
                            <i className="fas fa-map-marker-alt px-4"></i>
                            <span>
                                <p className="m-0">2130 Fulton Street San</p>
                                <p>Diego CA 94117-1080 USA</p>
                            </span>
                        </div>
                        <div className='d-flex align-items-center mb-3'>
                            <i className="fas fa-envelope px-4"></i>
                            <span>
                                <small>Do you have a Question?</small>
                                <p className="m-0">info@gmail.com</p>
                            </span>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i className="fas fa-phone  px-4"></i>
                            <span>
                                <small>Coll Us Now!</small>
                                <p className="m-0">+898 68679 575</p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};


export default Footer;