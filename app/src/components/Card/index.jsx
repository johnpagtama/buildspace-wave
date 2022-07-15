import React from 'react';
import styles from './index.module.scss';

const Card = ({ variant, style, title, children }) => {
	return (
		<div className={`${styles['card']}`}>
			<h2>{title}</h2>
			{children}
		</div>
	);
};

export default Card;
