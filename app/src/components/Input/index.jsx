import React from 'react';
import styles from './index.module.scss';
import Button from '../Button';

const Input = () => {
	return (
		<div className={`${styles['input']}`}>
			<input
				className={`${styles['input__bar']}`}
				type='text'
				placeholder='Email Address'
			/>
			<Button
				style={{
					margin: '0 10px',
					justifySelf: 'start',
				}}
				className={`${styles['input__button']}`}
				variant='button-primary-outline'
				text='Sign Up'
			/>
		</div>
	);
};

export default Input;
