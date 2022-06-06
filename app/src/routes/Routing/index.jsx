import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../../routes/config';

const Routing = () => {
	return (
		<Routes>
			{routes.map((r) => (
				<Route
					key={r}
					path={r.path}
					element={r.element}
				/>
			))}
		</Routes>
	);
};

export default Routing;
