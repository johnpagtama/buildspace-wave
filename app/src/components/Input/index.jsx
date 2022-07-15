import React from 'react';
import styles from './index.module.scss';

const Input = ({ type = 'text', placeholder = 'Enter text' }) => (
	<input
		className={`${styles['input']}`}
		type={type}
		placeholder={placeholder}
	/>
);
export default Input;
