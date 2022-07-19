import React from 'react';
import './App.scss';
import useConnect from './hooks/useConnect';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
	const { currentAccount, connectWallet, wave, allWaves } = useConnect();

	return (
		<>
			<Card title='Send messages on the Ethereum blockchain.'>
				<Button
					onClick={wave}
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

				{allWaves.map((wave, index) => {
					return (
						<div
							key={index}
							style={{
								backgroundColor:
									'OldLace',
								marginTop: '16px',
								padding: '8px',
							}}>
							<div>
								Address:{' '}
								{wave.address}
							</div>
							<div>
								Time:{' '}
								{wave.timestamp.toString()}
							</div>
							<div>
								Message:{' '}
								{wave.message}
							</div>
						</div>
					);
				})}
			</Card>
		</>
	);
};

export default App;
