import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { abi } from '../utils/WavePortal.json';

const useConnect = () => {
	// State variable to store user's wallet
	const [currentAccount, setCurrentAccount] = useState('');
	const [allWaves, setAllWaves] = useState([]);

	const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

	const contractABI = abi;

	const getAllWaves = useCallback(async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider =
					new ethers.providers.Web3Provider(
						ethereum
					);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				);

				const waves =
					await wavePortalContract.getAllWaves();

				let wavesCleaned = [];

				waves.forEach((wave) => {
					wavesCleaned.push({
						address: wave.waver,
						timestamp: new Date(
							wave.timestamp * 1000
						),
						message: wave.message,
					});
				});

				setAllWaves(wavesCleaned);
			} else {
				console.log(`Ethereum object doesn't exist`);
			}
		} catch (error) {
			console.log(error);
		}
	}, [contractAddress, contractABI]);

	const wave = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider =
					new ethers.providers.Web3Provider(
						ethereum
					);
				const signer = provider.getSigner();
				const wavePortalContract = new ethers.Contract(
					contractAddress,
					contractABI,
					signer
				);

				let count =
					await wavePortalContract.getTotalWaves();

				console.log(
					`Retrieved total wave count: ${count.toNumber()}`
				);

				// Execute wave function from smart contract
				const waveTxn = await wavePortalContract.wave();
				console.log(`Mining... ${waveTxn.hash}`);

				await waveTxn.wait();
				console.log(`Mined: ${waveTxn.hash}`);

				count =
					await wavePortalContract.getTotalWaves();
				console.log(
					`Retrieved total wave count: ${count.toNumber()}`
				);
			} else {
				console.log(`Ethereum object doesn't exist`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const checkIfWalletIsConnected = useCallback(async () => {
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

				await getAllWaves();
			} else {
				console.log(`No authorized account found`);
			}
		} catch (error) {
			console.log(error);
		}
	}, [getAllWaves]);

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
	}, [checkIfWalletIsConnected]);

	return { currentAccount, connectWallet, wave, allWaves };
};

export default useConnect;
