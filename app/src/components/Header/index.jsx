import React from 'react';
import { Link } from 'react-router-dom';
import { headerItems } from '../routes/Nav/config';

const Header = () => {
	return (
		<>
			{headerItems.map((h) => (
				<header key={h.id} className={h.parent}>
					{h.children.map((c) => (
						<div
							key={c.id}
							className={c.class}>
							<Link to={c.link}>
								{c.item}
							</Link>
						</div>
					))}
				</header>
			))}
		</>
	);
};

export default Header;
