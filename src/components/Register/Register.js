import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import bg from '../../Images/col-bgimage-4.jpg'

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error, handleNameChange, handleGoogleSignIn, removeError, text, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const signInUsingGoogle = e => {
        e.preventDefault()
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const userRegistration = e => {
        e.preventDefault(e);
        handleRegistration()
            .then(result => {
                setError('')
                history.push(redirect_uri)
            })
            .catch(err => {
                if (err.code === 'auth/email-already-in-use') {
                    setError('This email is already in use. Please select a new email')
                }

            })
            .finally(() => {
                setIsLoading(false);
            }
            )
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className="shadow-lg form-login" >

                    <Row className="bg-white justify-content-center flex-column flex-md-row">
                        <Col xs={12} md={6} className="p-lg-5 p-md-2 pt-2 pb-4 py-md-0">
                            <Form className="my-4 px-3 px-md-3" onSubmit={userRegistration}>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Control type="name" placeholder="Name" onBlur={handleNameChange} />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="email" placeholder="Email" onBlur={handleEmailChange} />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" >
                                    <button type="submit" className="btn-custom btn-custom-info" >Sign Up</button>
                                </Form.Group>
                                <div className='text-danger fw-bold'>{error}</div>
                                <div className="separator">
                                    <div className="separator-content">
                                        <span>or</span>
                                    </div>
                                </div>
                                <div className="text-center pb-4 p-4" >
                                    <button className="btn-custom-outline-info" onClick={signInUsingGoogle}>
                                        <div className="d-flex justify-content-center align-items-center" >
                                            <div><i className="fab fa-google border"></i></div>
                                            <div>Continue With Google</div>
                                        </div>
                                    </button>
                                </div>
                                <div className="text-center" >

                                    <span>Already have an account?</span> <NavLink onClick={removeError} to="/login" className="text-decoration-none"><span className="text-center">Login</span></NavLink>
                                </div>
                            </Form>


                        </Col>
                        <Col xs={12} md={6} className="fl-bg-gradient d-none d-md-block">

                            <div className="py-4  d-flex">
                                <div className="p-4">
                                    <h4 className="name">We offer extensive medical procedures to outbound and inbound patients what it is and we are very proud of achievement of our staff, We are all work together to help our all patients for recovery</h4>
                                    <h4 className="name py-2 text-white"><span><i className="far fa-calendar-alt "></i></span> Online Appointment!</h4>
                                    <h4 className="name py-2 text-white"><span><i className="fas fa-map-marker-alt"></i></span> Available at your Location</h4>
                                    <h4 className="name py-2 text-white"><span><i className="far fa-clock"></i></span> Work Improvements</h4>
                                </div>
                            </div>
                        </Col>
                    </Row >
                </div>
            </div >
        </div >
    );
};

export default Register;


