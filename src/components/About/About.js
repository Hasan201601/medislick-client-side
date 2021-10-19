import React, { useEffect, useState } from 'react';
import Header from '../Shared/Header/Header';
import './About.css'
import about from '../../Images/single-img-two.png'
import acc1 from '../../Images/01.jpg'
import acc2 from '../../Images/02.jpg'
import acc3 from '../../Images/03.jpg'
import { Accordion, Col, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';


const About = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        const url = "./doctors.json"
        fetch(url)
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="about">
            <Header></Header>
            <div className="container pt-5 mt-5">
                <Row className="px-5">
                    <Col lg={4}>
                        <img src={about} className="img-thumbnail img-fluid" alt="" />
                    </Col>
                    <Col lg={8}>
                        <p className="detail">What We Do?</p>
                        <h2 className="name">We Have 25 Years Experience
                        </h2>
                        <p className="detail">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our stpatients for recovery</p>
                        <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Our Mission</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={3}><img src={acc1} alt="" /></Col>
                                            <Col xs={9}>
                                                <p className="detail">Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Our Vision</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={3}><img src={acc2} alt="" /></Col>
                                            <Col xs={9}>
                                                <p className="detail">Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience.</p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Our Strategies</Accordion.Header>
                                    <Accordion.Body>
                                        <Row>
                                            <Col xs={3}><img src={acc3} alt="" /></Col>
                                            <Col xs={9}>
                                                <p className="detail">
                                                    Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry. We are among the most qualified implant providers in the AUS with over 30 years of quality training and experience
                                                </p>
                                            </Col>
                                        </Row>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
                <Row className="py-5 my-5">
                    <p className="detail mb-0">Meet Our Experienced Team</p>
                    <h2 className="name">Meet Our Dedicated Doctors</h2>
                    <p className="detail">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</p>
                    <Row lg={4}>
                        {
                            doctors.map(doctor => <Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>)
                        }
                    </Row>

                </Row>

            </div>

        </div >
    );
};

export default About;