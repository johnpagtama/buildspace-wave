import React from 'react';
import styles from './index.module.scss';
import Input from '../../components/Input';

const Signup = () => {
	return (
		<div className={`${styles['layout']}`}>
			<div className={`${styles['layout__heading']}`}>
				<h1>Send messages and wave to other users.</h1>
				<h4>Powered by the Ethereum network.</h4>
			</div>
			<div className={`${styles['layout__text']}`}>
				<p>Enter email to start sending messages.</p>
			</div>
			<Input />
		</div>
	);
};

export default Signup;
