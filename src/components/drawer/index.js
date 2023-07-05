import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//svg
import { ReactComponent as ArrowLeft } from '../../static/images/svg/Arrow left.svg'

//components
import DetailsTable from '../table'
import PaginationComp from '../pagination'

function DrawerComponent() {
	const [open, setOpen] = useState(false)

	const handleToggle = () => {
		setOpen(!open)
	}

	// Sample data for the table
	const orderItems = [
		{
			Date: '22 March 2023', OrderNo: '342599', Amount: 550,
			products: [
				{ id: 1, name: 'Product 1', description: 'This is product 1', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 10, quantity: 5 },
				{ id: 2, name: 'Product 2', description: 'This is product 2', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 20, quantity: 0 },
				{ id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 30, quantity: 2 },
				{ id: 4, name: 'Product 4', description: 'This is product 4', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80', price: 40, quantity: 4 },
			]
		},
	]

	// table column styling
	const columns = [
		{
			header: 'Date',
			width: '17rem',
			render: (item) => item.Date,
		},
		{
			header: 'Order#',
			width: '20rem',
			render: (item) => (
				item.OrderNo
			),
		},
		{
			header: 'Products',
			width: '20rem',
			render: (item) => item.products.length,
		},
		{
			header: 'Amount',
			width: '17rem',
			render: (item) => item.Amount.toFixed(2)
		},
		{
			header: 'Action',
			render: () => (
				<>
					<button className="bg-white border-0">jjjjjj</button>
				</>
			),
		},
	]

	return (
		<>
			<Button variant="primary" onClick={handleToggle}>
        Open Drawer
			</Button>

			<div className={`drawer ${open ? 'open' : ''}`}>
				<div className="drawer-overlay" onClick={handleToggle} />
				<div className="drawer-content">
					<button className="drawer-close" onClick={handleToggle}>
            &times;
					</button>
					{/* Drawer content goes here */}

					<Container fluid className="pt-0 p-5">
						<div className="d-flex align-items-center heading-container">
							<Link to='/products'><ArrowLeft/></Link>
							<h1 className="cart-heading" style={{ margin: '0px', paddingLeft: '8px' }}>Orders</h1>
						</div>

						<DetailsTable data={Array(11).fill(...orderItems)} columns={columns} />

						<div className="d-flex justify-content-between align-items-center pt-3" >
							<p>{orderItems.length} Total Count</p>
							<PaginationComp numOfElementsPerPage={8} url={'/api/data'} />
						</div>

					</Container>
          
				</div>
			</div>
		</>
	)
}

export default DrawerComponent
