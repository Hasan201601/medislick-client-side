import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Route } from 'react-router';
import useServices from '../../../hooks/useServices';
import ServiceDetail from '../../ServiceDetail/ServiceDetail';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { services } = useServices();
    return (
        <div className="my-5">

            <div className="services my-5">
                <div className="section-header">
                    <h5 className="text-secondary">Our Services</h5>
                    <h2>Special High Quality Services</h2>
                </div>
                <div>
                    <Container >
                        <Row lg={4} md={2} className="g-0 shadow-lg">
                            {services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Services;