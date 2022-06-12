import React from 'react';
import styles from './index.module.scss';

const Button = ({ variant = 'button', text = 'Button', style }) => {
	return (
		<button style={style} className={`${styles[variant]}`}>
			{text}
		</button>
	);
};

export default Button;
