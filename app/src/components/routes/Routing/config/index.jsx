import React from 'react';
import { v4 } from 'uuid';
import Signup from '../../../../pages/Signup';
import Signin from '../../../../pages/Signin';

export const routes = [
	{
		id: v4(),
		path: '/',
		element: <Signup />,
	},
	{
		id: v4(),
		path: '/signin',
		element: <Signin />,
	},
];
