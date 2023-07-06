import { React, useState, useMemo } from 'react'

import { Container, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//svg
import { ReactComponent as ArrowLeft } from '../../static/images/svg/Arrow left.svg'
import { ReactComponent as ColorIcon } from '../../static/images/svg/Ellipse 1.svg'
import { ReactComponent as Decrease } from '../../static/images/svg/Minus.svg'
import { ReactComponent as Increase } from '../../static/images/svg/Plus.svg'
import { ReactComponent as Trash } from '../../static/images/svg/Trash.svg'


//components
import AlertComp from '../../components/alert'
import CustomButton from '../../components/button'
import CartTable from '../../components/table'
import DeleteConfirmationModal from '../../components/modal/delete-confirmation'
import NavbarComp from '../../components/navbar'

const ShoppingCart = ({ userName }) => {

	const taxRate = 0.1

	// states
	const [deleteItemId, setDeleteItemId] = useState(null)
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [orderPlaced, setOrderPlaced] = useState(false)

	const handlePlaceOrder = () => {
		// Handle place order logic
		// Assuming the order placement is successful
		setOrderPlaced(true)
	}

	// Sample data for the table
	const [cartItems, setCartItems] = useState([
		{ id: 1, name: 'Product 1', color: 'blue', size: 32, description: 'This is product 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 10, quantity: 5 },
		{ id: 2, name: 'Product 2', color: 'blue', size: 32, description: 'This is product 2', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 20, quantity: 0 },
		{ id: 3, name: 'Product 3', color: 'blue', size: 32, description: 'This is product 3', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 30, quantity: 2 },
		{ id: 4, name: 'Product 4', color: 'blue', size: 32, description: 'This is product 4', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 40, quantity: 4 },
		{ id: 5, name: 'Product 1', color: 'blue', size: 32, description: 'This is product 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 10, quantity: 5 },
		{ id: 6, name: 'Product 2', color: 'blue', size: 32, description: 'This is product 2', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 20, quantity: 0 },
		{ id: 7, name: 'Product 3', color: 'blue', size: 32, description: 'This is product 3', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 30, quantity: 2 },
		{ id: 8, name: 'Product 4', color: 'blue', size: 32, description: 'This is product 4', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 40, quantity: 4 },
	])


	// Function to handle quantity increase
	const handleIncrease = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
			)
		)
	}

	// Function to handle quantity decrease
	const handleDecrease = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId && item.quantity > 0
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		)
	}

	// Function to calculate subtotal
	const calculateSubTotal = useMemo(() => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
	}, [cartItems])

	// const handleDelete = (itemId) => {
	//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
	// };

	const total = useMemo(() => {
		const subTotal = calculateSubTotal
		const tax = (subTotal * taxRate) // Assuming tax rate of 10%
		return subTotal + tax
	}, [cartItems])

	const handleDelete = (itemId) => {
		setDeleteItemId(itemId)
		setShowDeleteModal(true)
	}

	const handleDeleteConfirmation = () => {
		if (deleteItemId) {
			setCartItems((prevItems) => prevItems.filter((item) => item.id !== deleteItemId))
			setDeleteItemId(null)
			setShowDeleteModal(false)
		}
	}

	// table column styling

	const columns = [
		{
			header: (
				<Form.Check type="checkbox" />
			),
			width: '10px',
			render: () => (
				<Form.Check type="checkbox" />
			),
		},
		{
			header: 'Product',
			width: '25rem',
			render: (item) => (
				<div className="row align-items-center">
					<div className="col-auto pe-0">
						<Image src={item.image} alt="Product" className='table-product-img' />
					</div>
					<div className="col">
						<span>{item.description}</span>
					</div>
				</div>
			),
		},
		{
			header: 'Color',
			width: '9rem',
			render: (item) => (
				<>
					<ColorIcon width="22" height="21" fill={item.color} />
					{item.color}
				</>
			),
		},
		{
			header: 'Size',
			width: '9rem',
			render: (item) => item.size,
		},
		{
			header: 'Qty',
			width: '25%',
			render: (item) => (
				<div className="d-flex align-items-center">
					<button className="btn btn-sm" style={{ borderColor: '#DFDFDF' }} onClick={() => handleDecrease(item.id)}>
						<Decrease />
					</button>
					<div
						className="border-outline"
						style={{
							border: '1px solid #DFDFDF',
							borderRadius: '4px',
							display: 'inline-block',
							margin: '0rem 0.625rem',
							padding: '0.38rem 1.875rem',
						}}
					>
						<span className="mx-3">{item.quantity}</span>
					</div>
					<button className="btn btn-sm " style={{ borderColor: '#DFDFDF' }} onClick={() => handleIncrease(item.id)}>
						<Increase />
					</button>
				</div>
			),
		},
		{
			header: 'Price',
			render: (item) => `$${item.price.toFixed(2)}`,
		},
		{
			header: '',
			render: (item) => (
				// <Trash onClick={() => handleDelete(item.id)} style={{ cursor: "pointer", textAlign: "center", marginRight:"1rem" }}/>
				<button onClick={() => handleDelete(item.id)} style={{ backgroundColor: 'inherit', border: 'none', marginRight: '1rem' }}><Trash /></button>
			),
			width: '12px',
			//   style: { textAlign: "center", cursor: "pointer" },
		},
	]

	return (

		<>
			<NavbarComp cartItemsCount={cartItems.length} loggedIn={true} userName={userName} userPicture={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'} />
			<Container fluid className="pt-0 p-5">
				<div className="d-flex align-items-center heading-container">
					<Link to='/products'><ArrowLeft style={{ cursor: 'pointer' }} /></Link>
					<h1 className="cart-heading ">Your Shopping Bag</h1>
				</div>

				<CartTable data={cartItems} columns={columns} />

				<div className="total-container">
					<div ><p>Sub Total:</p><b>${calculateSubTotal.toFixed(2)}</b></div>
					<div ><p>Tax:</p><b>${(calculateSubTotal * taxRate).toFixed(2)}</b></div>
					<div ><p>Total:</p><b>${total.toFixed(2)}</b></div>
				</div>
				<div className="d-flex justify-content-end">
					<CustomButton className="custom-button" variant="primary" type="submit" onClick={handlePlaceOrder}>
						Place Order
					</CustomButton>
				</div>

				{/* show the modal for confirmation on click of delte icon */}
				{showDeleteModal && <DeleteConfirmationModal showDeleteModal={showDeleteModal}
					setShowDeleteModal={setShowDeleteModal} handleDeleteConfirmation={handleDeleteConfirmation} />}

				{orderPlaced && (
					<AlertComp variant="success" text="Awesome, Your order has been placed successfully." onClose={() => setOrderPlaced(false)} />
				)}
			</Container>
		</>

	)
}

export default ShoppingCart
