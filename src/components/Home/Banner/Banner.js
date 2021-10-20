import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../Images/slider-mainbg-005.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '90vh', objectFit: 'contain', backgroundSize: 'cover' }} className="banner d-flex align-items-center justify-content-center pt-4">
            <div className="container" >
                <p className="text-secondary fw-bolder fs-4">We give you the best</p>
                <h1 className="banner-title">Medical Services <br />
                    That you can trust</h1>
                <p className="fs-5">Need Professional Help?Our Support staff will answer your question. <br />
                    Visit us now or make an appointment.</p>
                <div className="">
                    <Link to="/about" className="text-decoration-none">
                        <button className="btn-custom btn-custom-outline-dark btn-banner">View more Details</button>
                    </Link>
                    <Link to="/book" className="text-decoration-none">
                        <button className="btn-custom btn-custom-info ms-md-3 ms-0  btn-banner">Make an Appointment</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;