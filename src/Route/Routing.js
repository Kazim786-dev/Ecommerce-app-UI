import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import AllProductsPage from '../pages/product/ProductsPage'
import CartPage from '../pages/cart/cart'
import ForgetPasswordPage from '../pages/auth/forget-password'
import LoginPage from '../pages/auth/login'
import NewPassPage from '../pages/auth/new-password'
import SignUpPage from '../pages/auth/signup'
import TotalOrders from '../pages/orders/cust-total-orders'

const RouterLinks = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
				<Route path="/forget-pass" element={<ForgetPasswordPage />} />
				<Route path="/new-pass" element={<NewPassPage />} />
				<Route path="/products" element={<AllProductsPage />} />
				<Route path="/cart" element={<CartPage/>}></Route>
				<Route path="/total-orders" element={<TotalOrders/>}></Route>
				<Route path="*" element={<h1>Page Not Found!</h1>} />
			</Routes>
		</BrowserRouter>
	)
}

export default RouterLinks
