/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//svg
import { ReactComponent as ArrowLeft } from '../../static/images/svg/Arrow left.svg'
import { ReactComponent as ArrowUpRight } from '../../static/images/svg/Arrow up right.svg'

//components
import DetailsTable from '../../components/table'
// import DrawerComponent from '../../components/drawer'
import PaginationComp from '../../components/pagination'
import NavbarComp from '../../components/navbar'

function TotalOrders() {

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
					<button className="bg-white border-0" onClick={handleButtonClick}><ArrowUpRight/></button>
				</>
			),
		},
	]

	const [show, setShow] = useState(false)

	const handleButtonClick = () => {
		setShow(true)
	}

	return (
		<>
			<NavbarComp cartItemsCount={0} loggedIn={true} userName={'Johnson Charles'} userPicture={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'}/>
        
			<Container fluid className="pt-0 p-5">
				<div className="d-flex align-items-center heading-container">
					<Link to='/products'><ArrowLeft/></Link>
					<h1 className="cart-heading" >Orders</h1>
				</div>

				<DetailsTable data={Array(11).fill(...orderItems)} columns={columns} />

				<div className="d-flex justify-content-between align-items-center pt-3" >
					<p>{orderItems.length} Total Count</p>
					<PaginationComp pageSize={8} url={'/api/data'} />
				</div>

				{/* {show && <DrawerComponent show={show} setShow={setShow}/>} */}

			</Container>
		</>

	)
}

export default TotalOrders
