import React, { useState } from 'react';

// react-ootstrap
import { Form, Row, Col } from 'react-bootstrap';

//react-router-dom
import { Link } from 'react-router-dom';

//components
import CustomButton from '../../components/button';
import CustomFormField from '../../components/form-input-field';
import FormContainer from '../../components/formContainer';
import AlertComp from '../../components/alert';



//function based component
function SignUpPage() {


    //states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail()
        validatePassword()

        // Perform login logic here
        console.log("name="+name)
        console.log('email=' + email);
        console.log("password=" + password)
        console.log("mobile=" + mobile)
        console.log('email error=' + emailError)

        if(passwordError==='' && emailError===''){
            setShowAlert(true)
        }

        //clear all fields
        setName(''); setEmail(''); setPassword(''); setMobile(''); setPasswordError(''); setEmailError('')
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*]/.test(password);
      
        if (!(hasUppercase && hasLowercase && hasNumber && hasSymbol)) {
          setPasswordError('Password must contain a capital letter, small letter, number, and symbol');
        } else {
          setPasswordError('');
        }
      };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleMobileChange = (e) => {
        setMobile(e.target.value);
    };
    

    return (
        <FormContainer heading="SignUp">
            <Form onSubmit={handleSubmit}>
                <Row>
                <CustomFormField
                        controlId="name"
                        label="Fullname"
                        type="text"
                        placeholder="Fullname"
                        value={name}
                        onChange={handleNameChange}
                    />
                </Row>
                <Row className="mt-3">
                    <CustomFormField
                        controlId="email"
                        label="Email address"
                        type="text"
                        placeholder="email address"
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
                        placeholder="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                     {passwordError && <p className="text-danger">{passwordError}</p>}
                </Row>
                <Row className="mt-3">
                    <CustomFormField
                        controlId="mobile"
                        label="Mobile"
                        type="number"
                        placeholder="mobile number"
                        value={mobile}
                        onChange={handleMobileChange}
                    />
                </Row>
                <Row className='m-0 mt-4'>
                    <CustomButton variant="primary" type="submit" className="w-100">
                        SignUp
                    </CustomButton>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <p className="text-center mb-0 text-styles">Already have an account! <Link to='/' className="text-decoration-none">Login</Link></p>
                    </Col>
                </Row>
            </Form>
            
            {showAlert && (
                <AlertComp variant="success" text="Your account has been created. Instruction sent to your email id." onClose={() => setShowAlert(false)}/>
            )}

        </FormContainer>
    );
}

export default SignUpPage;
