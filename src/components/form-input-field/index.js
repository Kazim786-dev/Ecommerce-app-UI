import React from 'react';
import { Form } from 'react-bootstrap';

function CustomFormField({ className, controlId, label, type, onBlur, placeholder, value, onChange, children }) {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label className='text-styles' style={{color:"#212529"}}>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      {children}
    </Form.Group>
  );
}

export default CustomFormField;
