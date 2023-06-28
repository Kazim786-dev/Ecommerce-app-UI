import React from 'react';
import ProductCard from '../../components/product/ProductCard';
import { Container, Row, Col, Form } from 'react-bootstrap';

const products = [
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, quantity: 5 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, quantity: 0 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, quantity: 2 },
    { id: 4, name: 'Product 4', description: 'This is product 4', price: 40, quantity: 4 },
    { id: 1, name: 'Product 1', description: 'This is product 1', price: 10, quantity: 5 },
    { id: 2, name: 'Product 2', description: 'This is product 2', price: 20, quantity: 0 },
    { id: 3, name: 'Product 3', description: 'This is product 3', price: 30, quantity: 2 },
    { id: 4, name: 'Product 4', description: 'This is product 4', price: 40, quantity: 4 },
    // Add more products as needed
];

function AllProductsPage() {
    const handleSearchChange = (event) => {
        // Handle search input change
        const searchTerm = event.target.value;
        // Perform search operation with the searchTerm
        console.log('Search Term:', searchTerm);
    };

    const handlePriceFilterChange = (event) => {
        // Handle price filter change
        const priceFilter = event.target.value;
        // Perform price filter operation based on the selected value
        console.log('Price Filter:', priceFilter);
    };

    return (
        <Container fluid className="px-4">

            {/*container having header and filters*/}
            <Container fluid className="">
                <Row className="mb-3">
                    <Col className="d-flex justify-content-start">
                        <h2 className="text-primary">All Products</h2>
                    </Col>
                    <Col md="auto" className="d-flex align-items-center">
                        <Form.Label className="me-2"><b>Search:</b></Form.Label>
                        <Form.Group className="mb-1">
                            <Form.Control type="text" placeholder="Search by name" onChange={handleSearchChange} />
                        </Form.Group>
                    </Col>
                    <Col md="auto" className="d-flex align-items-center">
                        <Form.Label className="me-2"><b>Sort by:</b></Form.Label>
                        <Form.Group className="mb-1">
                            <Form.Select onChange={handlePriceFilterChange}>
                                <option value="">Low to High</option>
                                <option value="HighToLow">High to Low</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>

            {/*Map all the products */}
            <Row className="justify-content-center">
                {/* Desktop: Display 4 products per row 
                    Tablet: 2 Products per row
                    Mobile: 1 product per row */}
                {products.map((product) => (
                    <Col key={product.id} xl={3} lg={6} md={6} sm={12} className="d-flex justify-content-center mb-4">
                        <div>
                            <ProductCard product={product} />
                        </div>
                    </Col>
                ))}
            </Row>

            <Container fluid className='mt-4 mb-5'>
                <Row>
                    <Col sm={6} className="d-flex justify-content-start text-secondary">{products.length} products found in clothing and accessories</Col>
                    <Col sm={6} className="d-flex justify-content-end">2</Col>
                </Row>
            </Container>

        </Container>
    );
}

export default AllProductsPage;
