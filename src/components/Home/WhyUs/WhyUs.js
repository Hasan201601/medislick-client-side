import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import whyUs from '../../../Images/whyus.png'
import './WhyUs.css'


const WhyUs = () => {
    return (
        <div className="container my-5 pt-5 why-us">
            <Row className="align-items-center flex-column flex-md-row">
                <h1 className="text-center name">Why Chose Us</h1>
                <Col>
                    <img src={whyUs} className="img-fluid" alt="" /></Col>
                <Col>
                    <h1 className="name">Tackle the challenge of delivering health care</h1>
                    <p className="detail">We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                    <p className="detail">Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                    <div className="py-4">
                        <h4 className="name py-2"><span className="why-us-icon"><i className="far fa-calendar-alt "></i></span> Online Appointment!</h4>
                        <h4 className="name py-2"><span className="why-us-icon"><i className="fas fa-map-marker-alt"></i></span> Available at your Location</h4>
                        <h4 className="name py-2"><span className="why-us-icon"><i className="far fa-clock"></i></span> Work Improvments</h4>
                    </div>
                    <HashLink to="/about#about" className="text-decoration-none">
                        <button className="btn-custom btn-custom-outline-dark btn-banner">More About</button>
                    </HashLink>
                </Col>
            </Row>
        </div >
    );
};

export default WhyUs;