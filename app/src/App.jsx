import React from 'react';
// import { ethers } from 'ethers';
import Routing from './components/routes/Routing';
import Header from './components/Header';
import './App.scss';

const App = () => {
	// const wave = () => {};

	return (
		<>
			<Header />
			<Routing />
		</>
	);
};

export default App;
