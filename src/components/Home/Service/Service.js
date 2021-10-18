import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {
    const { image, serviceName, shortDetails, id } = service;
    const history = useHistory();
    const handleDetails = id => {
        history.push(`/service/${id}`)
    }
    return (
        <div>
            <Col className="h-100 p-2 border service">
                <div className="overflow-hidden">
                    <img className="service-img" src={image} alt="" />
                </div>
                <p className="name fw-bolder mt-3">{serviceName}</p>
                <p className="detail">{shortDetails}</p>
                <button className="btn-custom btn-custom-info" onClick={() => handleDetails(id)}>View More</button>
            </Col>
        </div>
    );
};

export default Service;