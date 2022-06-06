import * as React from 'react';
// import { ethers } from 'ethers';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Button from './components/Button';
import Login from './pages/Login';
import Main from './pages/Main';
import './App.scss';

export default function App() {
	const wave = () => {};

	return (
		<>
			<nav>
				<Link to='/'>
					<Button
						variant='button-primary'
						text='Main'
					/>
				</Link>
				<Link to='/login'>
					<Button
						variant='button-primary-outline'
						text='Login'
					/>
				</Link>
			</nav>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/login' element={<Login />} />
			</Routes>

			<Header />
		</>
	);
}
