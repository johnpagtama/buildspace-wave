import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './config';

const Nav = () => {
	return (
		<nav>
			{navItems.map((n) => (
				<Link key={n.id} to={n.to}>
					{n.item}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
