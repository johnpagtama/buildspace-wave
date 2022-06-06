import React from 'react';
import styles from './index.module.scss';
import Button from '../Button';

const Header = () => {
	return (
		<header className={`${styles['header']}`}>
			<div className={`${styles['header__logo']}`}>Logo</div>
			<div className={`${styles['header__button']}`}>
				<Button
					variant='button-primary'
					text='Sign In'
				/>
			</div>
		</header>
	);
};

export default Header;
