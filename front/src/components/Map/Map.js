import React, { Component } from 'react';
import ymaps from 'ymaps';
import './Map.css';

export default class Map extends Component {
	componentDidMount() {
		ymaps
			.load()
			.then((maps) => {
				const map = new maps.Map('map', {
					center: [-8.369326, 115.166023],
					zoom: 7,
				});
			})
			.catch((error) => console.log('Failed to load Yandex Maps', error));
	}

	render() {
		return <div id="map" className="map"></div>;
	}
}
