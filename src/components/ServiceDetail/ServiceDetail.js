import React from 'react';
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
        <div className="py-5 container">
            <Header></Header>
            <div className="text-center">
                <img className="w-75 detail-img" src={detail?.image} alt="" />
            </div>
            <h1 className="fw-bolder text-center name">{detail?.serviceName}</h1>
            <hr />
            <h6>{detail?.shortDetails}</h6>
            <h6>{detail?.details}</h6>
        </div>
    );
};

export default ServiceDetail;