import React, { useState } from 'react';

// react-ootstrap
import { Form, Row } from 'react-bootstrap';

//components
import CustomButton from '../../components/button';
import CustomFormField from '../../components/form-input-field';
import FormContainer from '../../components/formContainer';
import AlertComp from '../../components/alert';


//function based component
function NewPassPage() {

    //states
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showAlert, setShowAlert] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        validatePassword()

        // Perform login logic here
        console.log("password=" + password)
        console.log("confirm password = "+confirmPassword)
        console.log('password error=' + passwordError)


        if(passwordError===''){
            setShowAlert(true)
        }

        //clear all fields
        setPassword(''); setConfirmPassword('');
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
      

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <FormContainer heading="New Password">
            <Form onSubmit={handleSubmit}>
                <Row className="mt-3">
                    <CustomFormField
                        controlId="password"
                        label="Enter new Password"
                        type="password"
                        placeholder="enter password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    {passwordError && <p className="text-danger">{passwordError}</p>}
                </Row>
                <Row className="mt-3">
                    <CustomFormField
                        controlId="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        placeholder="confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </Row>
                <Row className='m-0 mt-4'>
                    <CustomButton variant="primary" type="submit" className="w-100">
                        Reset Password
                    </CustomButton>
                </Row>
            </Form>

            {showAlert && (
                <AlertComp variant="success" text="Your password has been updated.  Please check your email." onClose={() => setShowAlert(false)}/>
            )}

        </FormContainer>
    );
}

export default NewPassPage;
