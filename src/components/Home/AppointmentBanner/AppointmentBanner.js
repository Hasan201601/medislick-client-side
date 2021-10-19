import React from 'react';
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
                <button className="btn-custom btn-custom-outline-info">Make An Appointment!</button>
            </div>
        </div>
    );
};

export default AppointmentBanner;