import React, { useState } from 'react'

//react-bootstrap
import { Container, Row, Col, Form } from 'react-bootstrap'

//components
import NavbarComp from '../../components/navbar'
import PaginationComp from '../../components/pagination'
import ProductCard from '../../components/product/ProductCard'

const products = [
	{ id: 1, name: 'Product 1', description: 'This is product 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 10, quantity: 5 },
	{ id: 2, name: 'Product 2', description: 'This is product 2', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 20, quantity: 0 },
	{ id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 30, quantity: 2 },
	{ id: 4, name: 'Product 4', description: 'This is product 4', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 40, quantity: 4 },
	{ id: 5, name: 'Product 1', description: 'This is product 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 10, quantity: 5 },
	{ id: 6, name: 'Product 2', description: 'This is product 2', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 20, quantity: 0 },
	{ id: 7, name: 'Product 3', description: 'This is product 3', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 30, quantity: 2 },
	{ id: 8, name: 'Product 4', description: 'This is product 4', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 40, quantity: 4 },
	// Add more products as needed
]

function AllProductsPage({ loggedIn, userName }) {

	//states
	const [searchTerm, setSearchTerm] = useState('')
	const [priceFilter, setPriceFilter] = useState('')
	const [cartItems, setCartItems] = useState([])

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value)
	}

	const handlePriceFilterChange = (event) => {
		setPriceFilter(event.target.value)
	}

	const filteredProducts = products
		.filter((product) => {
			const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
			return nameMatch
		})
		.sort((a, b) => {
			if (priceFilter === 'HighToLow') {
				return b.price - a.price // Sort in descending order (high to low)
			} else {
				return a.price - b.price // Sort in ascending order (low to high)
			}
		})


	const addToCart = (product) => {
		const item = filteredProducts.find((p) => p.id === product.id)
		setCartItems((prevCartItems) => [...prevCartItems, item])
	}

	return (
		<>
			<NavbarComp cartItemsCount={cartItems.length} loggedIn={loggedIn} userName={userName} userPicture={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'} />
			<Container fluid className='pt-0 p-5'>

				<Row className="mb-3 m-0 ps-1 pe-1" >
					<Col className="d-flex justify-content-start ps-0">
						<h2 className="text-primary">All Products</h2>
					</Col>
					<Col md="auto" className="d-flex align-items-center">
						<Form.Label className="me-2"><b>Search:</b></Form.Label>
						<Form.Group className="mb-1">
							<Form.Control type="text" placeholder="Search by name" value={searchTerm} onChange={handleSearchChange} />
						</Form.Group>
					</Col>
					<Col md="auto" className="d-flex align-items-center pe-0">
						<Form.Label className="me-2"><b>Sort by:</b></Form.Label>
						<Form.Group className="mb-1">
							<Form.Select value={priceFilter} onChange={handlePriceFilterChange}>
								<option value="LowToHigh">Low to High</option>
								<option value="HighToLow">High to Low</option>
							</Form.Select>
						</Form.Group>
					</Col>
				</Row>

				{/*Map all the products */}
				<Row className="justify-content-center">
					{/* Desktop: Display 4 products per row 
                    Tablet: 2 Products per row
                    Mobile: 1 product per row */}
					{filteredProducts.map((product) => (
						<Col key={product.id} xl={3} lg={6} md={6} sm={12} className="d-flex justify-content-center ps-0 pe-0 mb-5">
							<div>
								<ProductCard product={product} addToCart={addToCart} />
							</div>
						</Col>
					))}

				</Row>

				<Row className="m-0 align-items-center ps-1 pe-1">
					<Col sm={6} className="d-flex justify-content-start text-styles ps-0">{filteredProducts.length} products found in clothing and accessories</Col>
					<Col sm={6} className="d-flex justify-content-end pe-0"><PaginationComp pageSize={8} url={'/api/data'} /></Col>
				</Row>

			</Container>

		</>
	)
}

export default AllProductsPage
