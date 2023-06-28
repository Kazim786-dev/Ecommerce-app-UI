import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Container fluid>
          <div className="mt-3">
            {/* <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            className="img-fluid"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          /> */}
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className="img-fluid"
              style={{ width: '100%', height: '230px', objectFit: 'fit' }} />

          </div>
          <Card.Body className="px-0">
            {/* <Card.Title>{product.name}</Card.Title> */}
            <Card.Text>{product.description}</Card.Text>
            <Card.Text className='text-secondary'>
              Price: <span className="text-primary fs-5">${product.price}.00</span>
            </Card.Text>
            <Row >
              <Col className='d-flex justify-content-end'>
                {product.quantity > 0 ? (
                  <Button variant="primary">Add to Cart</Button>
                ) : (
                  <Button variant="outline-danger" disabled>
                    Out Of Stock
                  </Button>
                )}</Col>
            </Row>
          </Card.Body>
        </Container>
      </Card>

    </>
  );
}

export default ProductCard;
