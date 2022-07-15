import React from 'react';
import styles from './index.module.scss';

const Button = ({
	onClick = () => console.log('Click'),
	variant = 'button',
	text = 'Button',
	style,
	type = 'button',
}) => {
	return (
		<button
			onClick={onClick}
			type={type}
			style={style}
			className={`${styles[variant]}`}>
			{text}
		</button>
	);
};

export default Button;
