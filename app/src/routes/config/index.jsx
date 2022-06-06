import React from 'react';
import Main from '../../pages/Main';
import Login from '../../pages/Login';

export const routes = [
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/login',
		element: <Login />,
	},
];
