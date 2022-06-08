import React from 'react';
import { v4 } from 'uuid';
import Main from '../../../../pages/Main';
import Signin from '../../../../pages/Signin';

export const routes = [
	{
		id: v4(),
		path: '/',
		element: <Main />,
	},
	{
		id: v4(),
		path: '/signin',
		element: <Signin />,
	},
];
