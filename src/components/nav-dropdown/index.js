/* eslint-disable react/prop-types */
import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { logout } from '../../redux/slice/auth/customer-slice'
import { useDispatch } from 'react-redux'

const NavDropdownComp = ({ title, items }) => {

	const dispatch = useDispatch()

	return (
		<NavDropdown title={title} id="dropdown-menu">
			{items.map((item, index) => {
				if (item === 'divider') {
					return <NavDropdown.Divider key={index} className="ms-3 me-3" />
				} else {
					return (
						<NavDropdown.Item
							key={index}
							as={Link}
							to={item.to}
							onClick={()=>dispatch(logout())}
						>
							{item.label}
						</NavDropdown.Item>
					)
				}
			})}
		</NavDropdown>
	)
}

export default NavDropdownComp