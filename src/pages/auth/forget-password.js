import React, { useState } from 'react';

// react-ootstrap
import { Form, Row, Col } from 'react-bootstrap';

//react-router-dom
import { Link,useNavigate } from 'react-router-dom';

//components
import CustomButton from '../../components/button';
import CustomFormField from '../../components/form-input-field';
import FormContainer from '../../components/formContainer';
import AlertComp from '../../components/alert';



//function based component
function ForgetPasswordPage() {

    //states
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    //object to navigate to different pages
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail()
        // Perform login logic here
        console.log('email=' + email);
        console.log('email error=' + emailError)

        //clear all fields
        setEmail('');
        if(emailError===''){
            navigate('/new-pass')
        }
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <FormContainer heading="Forgot Password">
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
                
                <Row className='m-0 mt-4'>
                    <CustomButton variant="primary" type="submit" className="w-100">
                        Forgot Password
                    </CustomButton>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <p className="text-center mb-0 text-styles" style={{color:"#5A5F7D", fontSize:"14px"}}>No, I remember my password! <Link to='/' className="text-decoration-none">Login</Link></p>
                    </Col>
                </Row>
            </Form>

            {showAlert && (
                <AlertComp variant="success" text="Your account has been created. Instruction sent to your email id." onClose={() => setShowAlert(false)}/>
            )}

        </FormContainer>
    );
}

export default ForgetPasswordPage;
