import React from 'react';
import { Badge, Col, Container, ListGroup, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className='footer-bg footer'>
                <Container>
                    <Row className='text-start py-5 text-white'>
                        <Col lg={4} sm={12}>
                            <div style={{ width: '80%' }}>
                                <h3><span className='detail text-white'><i className="fas fa-heartbeat"></i>About MediSlick</span></h3>
                                <p className='detail py-3'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. <br /> We hope you will allow us to care for you and strive to be the first and best choice for your family healthcare</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <h3>Opening Hours</h3>
                            <div className='py-3 time-table'>
                                <ListGroup as="ul">
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Mon-Tues :</div>
                                        </div>
                                        <div>
                                            6.00am-10.00pm
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Wed - Thurs :</div>
                                        </div>
                                        <div>6.00am-10.00pm</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Sat - Sun :</div>
                                        </div>
                                        <div>6.00am-10.00pm</div>
                                    </ListGroup.Item>
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">Friday :</div>
                                        </div>
                                        <div>Closed</div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <h3 className='pb-2'>Get In Touch</h3>
                            <div className='d-flex align-items-center mb-2'>
                                <i className="fas fa-map-marker-alt px-4"></i>
                                <span>
                                    <p className="m-0">2130 Fulton Street San</p>
                                    <p className="m-0">Diego CA 94117-1080 USA</p>
                                </span>
                            </div>
                            <div className='d-flex align-items-center mb-2'>
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
            <div className="copyright">
                <small>Copyright &copy; 2021 by medislick hospital </small>
            </div>
        </div>
    );
};


export default Footer;