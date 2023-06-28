import React from 'react';
import { Form } from 'react-bootstrap';

function CustomFormField({ controlId, label, type, onBlur, placeholder, value, onChange, children }) {
  return (
    <Form.Group controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {children}
    </Form.Group>
  );
}

export default CustomFormField;
