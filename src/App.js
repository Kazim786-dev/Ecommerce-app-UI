import React from 'react'
// styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import './static/css/styles.css'
//Routes
import RouterLinks from './route/routing'

const App = () => {

	const userName = 'Johnson Charles'

	return (
		<div className="App">
			<RouterLinks loggedIn={true} userName={userName}></RouterLinks>
		</div>
	)
}

export default App
