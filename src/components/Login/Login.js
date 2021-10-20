import { Col, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import bg from '../../Images/col-bgimage-4.jpg'
import React from 'react';
import './Login.css';
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const { handleLogin, handleEmailChange, handlePasswordChange, error, handleGoogleSignIn, removeError, setError, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const userLogin = e => {

        e.preventDefault();
        handleLogin()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(err => {
                if (err.code === 'auth/user-not-found') {
                    setError('User not found.Please create a new account')
                }
                else if (err.code === 'auth/wrong-password') {
                    setError('Wrong password')
                }

            })
            .finally(() => setIsLoading(false))

    }

    return (
        <div>

            <div className="d-flex justify-content-center align-items-center py-5" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', backgroundRepeat: 'no-repeat' }}>
                <div className="shadow-lg form-login" >

                    <Row className="bg-white justify-content-center flex-column flex-md-row">
                        <Col xs={12} md={6} className="p-5">
                            <Form className="my-4 px-3" onSubmit={userLogin}>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="email" placeholder="Email" onClick={handleEmailChange} onBlur={handleEmailChange} />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                    <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange} />
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <button type="submit" className="btn-custom btn-custom-info" >Login</button>
                                </Form.Group>
                            </Form>
                            <div className='text-danger fw-bold'>{error}</div>
                            <div className="separator">
                                <div className="separator-content">
                                    <span>or</span>
                                </div>
                            </div>
                            <div className="text-center pb-4 p-4 ">
                                <button className="btn-custom-outline-info">
                                    <div className="d-flex justify-content-center align-items-center" onClick={signInUsingGoogle}>
                                        <div><i className="fab fa-google border"></i></div>
                                        <div>Continue With Google</div>
                                    </div>
                                </button>
                            </div>
                            <div className="d-block d-md-none text-center">
                                Don't have an account?<NavLink to="/signup" onClick={removeError} className="text-decoration-none ">Sign Up</NavLink>
                            </div>

                        </Col>
                        <Col xs={12} md={6} className="fl-bg-gradient text-center d-none d-md-block">

                            <div className="p-4">
                                <h1 className="pt-4">Don't have an account?</h1>
                                <h1>Sign Up and Get <br />
                                    The best Medical Service
                                </h1>
                                <div className="text-center">
                                    <NavLink to="/signup" onClick={removeError} className="text-decoration-none "><button className="btn-custom btn-custom-white">Sign Up</button></NavLink>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
};

export default Login;