import React from 'react';
import { Form } from 'react-bootstrap';

function FormField({ className, controlId, label, name, value, type, onBlur, placeholder, onChange, children }) {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label className='text-styles input-field' >{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      {children}
    </Form.Group>
  );
}

export default FormField;
