import React from 'react';
import { Container, Card } from 'react-bootstrap';

function FormContainer({ children, heading }) {
  return (
    <Container>
      <div className="text-center text-primary mb-4 mt-5">
        <h1>{heading}</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <Card className="w-50 p-4 pt-3 mt-3">
          {children}
        </Card>
      </div>
    </Container>
  );
}

export default FormContainer;
