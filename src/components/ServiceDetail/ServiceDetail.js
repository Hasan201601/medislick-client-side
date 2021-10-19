import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import Header from '../Shared/Header/Header';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const { services } = useServices()
    console.log(services)
    const { serviceId } = useParams();
    const detail = services.find(service => service.id === parseInt(serviceId))


    return (
        <div className="py-5 container details">
            <Header></Header>
            <Row className="flex-lg-row flex-column-reverse">
                <Col lg={3}>
                    <Row className="g-4">
                        <Col xs={12}>
                            <h4 className="name details">Our Departments</h4>
                            <ListGroup>
                                <ListGroup.Item >
                                    <i class="fab fa-hive"></i>  Cardiology
                                </ListGroup.Item>
                                <ListGroup.Item >
                                    <i class="fab fa-hive"></i>  Neurology
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fab fa-hive"></i>  Pediatrics
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fab fa-hive"></i>  Dental Care
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fab fa-hive"></i>  Eye Care
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fab fa-hive"></i>  Pulmonary
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <i class="fab fa-hive"></i>  Medicine
                                </ListGroup.Item>
                            </ListGroup>,
                        </Col>
                        <Col xs={12}>
                            <div className="help text-center py-3 text-white fw-bolder">
                                <div><i class="fas fa-headphones-alt fa-5x"></i></div>
                                <h4 className="p-3">Let Us Help You</h4>
                                <p className="m-0">34 Taltola Road</p>
                                <p>Sadar, Tottenham</p>
                                <p>1234,BD</p>
                                <p>abc@gmail.com</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={9}>
                    <div className="text-center">
                        <img className="detail-img" src={detail?.image} alt="" />
                    </div>
                    <h1 className="fw-bolder text-center name">{detail?.serviceName}</h1>
                    <hr />
                    <h6>{detail?.shortDetails}</h6>
                    <h6 className="detail">{detail?.details}</h6>
                </Col>
            </Row>
        </div>
    );
};

export default ServiceDetail;