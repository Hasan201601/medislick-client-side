import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../Images/row.jpg'
import './AppointmentBanner.css'

const AppointmentBanner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '40vh', objectFit: 'contain', backgroundSize: 'cover', textAlign: 'center' }} className="d-flex align-items-center justify-content-center appoint-banner">
            <div>
                <div className="text-white">
                    <h3>Need a Doctor for Check-up?</h3>
                    <h1>Just make an Appointment & You’re Done!</h1>
                </div>
                <Link to="/book" className="text-decoration-none">
                    <button className="btn-custom btn-custom-outline-info ms-md-3 ms-0">Make an Appointment!</button>
                </Link>
            </div>
        </div>
    );
};

export default AppointmentBanner;