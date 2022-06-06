import * as React from 'react';
// import { ethers } from 'ethers';
import { Link } from 'react-router-dom';
import Routing from './routes/Routing';
import Header from './components/Header';
import Button from './components/Button';
import './App.scss';

const App = () => {
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
			<Routing />

			<Header />
		</>
	);
};

export default App;
