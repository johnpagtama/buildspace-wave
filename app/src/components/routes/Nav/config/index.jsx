import React from 'react';
import { v4 } from 'uuid';
import styles from '../../../Header/index.module.scss';
import Button from '../../../Button';

export const navItems = [
	{
		id: v4(),
		to: '/',
		item: <Button variant='button-primary' text='Main' />,
	},
	{
		id: v4(),
		to: '/signin',
		item: (
			<Button
				variant='button-primary-outline'
				text='Sign In'
			/>
		),
	},
];

export const headerItems = [
	{
		id: v4(),
		parent: `${styles['header']}`,
		children: [
			{
				id: v4(),
				link: '/',
				class: `${styles['header__logo']}`,
				item: '👋',
			},
			{
				id: v4(),
				link: '/signin',
				class: `${styles['header__button']}`,
				item: (
					<Button
						variant='button-primary'
						text='Sign In'
					/>
				),
			},
		],
	},
];
