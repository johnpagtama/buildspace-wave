import React from 'react';
// import { ethers } from 'ethers';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import './App.scss';

const App = () => {
	// const wave = () => {};

	return (
		<>
			<Card title='Send messages on the Ethereum blockchain.'>
				<Button
					onClick={() =>
						console.log('Wallet Connected')
					}
					variant='button-primary'
					text='Connect Wallet'
					type='button'
				/>
			</Card>
		</>
	);
};

export default App;
