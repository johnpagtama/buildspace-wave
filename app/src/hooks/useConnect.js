import { useState, useEffect } from 'react';

const useConnect = () => {
	// const [connect, setConnect] = useState();

	// State variable to store user's wallet
	const [currentAccount, setCurrentAccount] = useState('');

	const checkIfWalletIsConnected = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				console.log(`Make sure you have Metamask.`);
				return;
			} else {
				console.log(`Ethereum object: `, ethereum);
			}

			// Check if authorized to access user wallet
			const accounts = await ethereum.request({
				method: 'eth_accounts',
			});

			if (accounts.length !== 0) {
				const account = accounts[0];
				console.log(
					`Found an authorized account: ${account}`
				);
				setCurrentAccount(account);
			} else {
				console.log(`No authorized account found`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert(`Get Metamask`);
				return;
			}

			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			});

			console.log(`Connected: ${accounts[0]}`);

			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return { currentAccount, connectWallet };
};

export default useConnect;
