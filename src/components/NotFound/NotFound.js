import React from 'react';
import errorImg from '../../Images/error.jpg'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ backgroundImage: `url(${errorImg})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', objectFit: 'cover', height: '100vh', textAlign: 'center' }} >
            <NavLink to="/home" className="text-decoration-none">
                <Button variant="outline-info" className="my-3 btn btn-outline">Go Back</Button>
            </NavLink>
        </div>
    );
};

export default NotFound;