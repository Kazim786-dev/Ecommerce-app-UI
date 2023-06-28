import React, { useState } from 'react';

// react-ootstrap
import { Form, Row, Col } from 'react-bootstrap';

//react-router-dom
import { Link } from 'react-router-dom';

//components
import CustomButton from '../../components/button';
import CustomFormField from '../../components/form-input-field';
import FormContainer from '../../components/formContainer';



//function based component
function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail()
        // Perform login logic here
        console.log('email=' + email);
        console.log("password=" + password)
        console.log("rememberMe=" + remember)
        console.log('email error=' + emailError)

        //clear all fields
        setEmail(''); setPassword(''); setRemember(false)
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <FormContainer heading="Login">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <CustomFormField
                        controlId="email"
                        label="Enter email address"
                        type="text"
                        placeholder="Please enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={validateEmail}
                    />
                    {emailError && <p className="text-danger">{emailError}</p>}

                </Row>
                <Row className="mt-3">
                    <CustomFormField
                        controlId="password"
                        label="Password"
                        type="password"
                        placeholder="Please enter password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Row>
                <Row className="mt-2">
                    <Form.Group controlId="remember" className="mb-3">
                        <Form.Check type="checkbox" label="Remember me" onChange={(e) => setRemember(e.target.checked)} />
                    </Form.Group>
                </Row>
                <Row className='m-0 mt-4'>
                    <CustomButton variant="primary" type="submit" className="w-100">
                        Login
                    </CustomButton>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <p className="text-center mb-0">Forgot password! <Link className="text-decoration-none">Reset</Link></p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <p className="text-center mb-0">I don't have an account! <Link to='/signup' className="text-decoration-none">SignUp</Link></p>
                    </Col>
                </Row>
            </Form>

        </FormContainer>
    );
}

export default LoginPage;
