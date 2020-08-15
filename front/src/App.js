import React, { useState, useEffect } from 'react';

import pointService from './services/point.service';

import Map from './components/Map';

const App = () => {
	const [points, setPoints] = useState(null);

	useEffect(() => {
		if (!points) {
			getPoints();
		}
	});

	const getPoints = async () => {
		let res = await pointService.getAll();
		setPoints(res);
	};

	const renderPoint = (point) => {
		return (
			<li key={point._id} className="list__item point">
				<h3 className="point__title">{point.title}</h3>
				<h3 className="point__category">{point.category}</h3>
				<h3 className="point__description">{point.description}</h3>
				<h3 className="point__coordinates">{point.coordinate}</h3>
			</li>
		);
	};

	return (
		<div className="app">
			<ul className="list">
				{points && points.length > 0 ? (
					points.map((point) => renderPoint(point))
				) : (
					<p>No points found</p>
				)}
			</ul>
			<Map />
		</div>
	);
};

export default App;
