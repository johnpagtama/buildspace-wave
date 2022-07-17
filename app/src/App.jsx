import React from 'react';
import './App.scss';
// import { ethers } from 'ethers';
import useConnect from './hooks/useConnect';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
	// const wave = () => {};
	const { currentAccount, connectWallet } = useConnect();

	return (
		<>
			<Card title='Send messages on the Ethereum blockchain.'>
				<Button
					onClick={null}
					variant='button-primary'
					text='Wave'
					type='button'
				/>

				{!currentAccount && (
					<Button
						onClick={connectWallet}
						style={{ display: 'block' }}
						variant='button-primary'
						text='Connect Wallet'
						type='button'
					/>
				)}
			</Card>
		</>
	);
};

export default App;
