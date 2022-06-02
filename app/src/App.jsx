import * as React from 'react';
// import { ethers } from 'ethers';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import Login from './pages/Login';
import Main from './pages/Main';
import './App.scss';

export default function App() {
	const wave = () => {};

	return (
		<>
			<Router>
				<nav>
					<Link to='/'>Main</Link>
					<Link to='/login'>Login</Link>
				</nav>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route
						path='/login'
						element={<Login />}
					/>
				</Routes>
			</Router>

			<Button variant='button-primary' text='Sign up' />
		</>
	);
}
