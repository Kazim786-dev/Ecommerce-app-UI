import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ product, addToCart }) {
  return (

    <Card className="product-card py-3 px-3 pb-0">

      <Card.Img variant="top" src={product.image} className="product-card-img" />
      <Card.Body className="px-0">
        <Card.Text className='text-styles' style={{ color: "#212529", fontWeight: "500" }}>{product.description}</Card.Text>
        <Card.Text className='text-styles' style={{ fontWeight: "700", fontSize: "14px" }}>
          Price: <span className="heading-styles">${product.price.toFixed(2)}</span>
        </Card.Text>
        <Row >
          <Col className='d-flex justify-content-end'>
            {product.quantity > 0 ? (
              <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
            ) : (
              <Button variant="outline-danger" disabled>
                Out Of Stock
              </Button>
            )}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
