import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { compose, withProps } from 'recompose';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const defaultOptions = {
	minZoom: 3,
	disableDefaultUI: true,
	styles: [
		{
			"featureType": "administrative",
			"elementType": "all",
			"stylers": [
				{
					"saturation": "-100"
				}
			]
		},
		{
			"featureType": "administrative.province",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": 65
				},
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"lightness": "50"
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
				{
					"saturation": "-100"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "all",
			"stylers": [
				{
					"lightness": "30"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "all",
			"stylers": [
				{
					"lightness": "40"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
				{
					"saturation": -100
				},
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"hue": "#ffff00"
				},
				{
					"lightness": -25
				},
				{
					"saturation": -97
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels",
			"stylers": [
				{
					"lightness": -25
				},
				{
					"saturation": -100
				}
			]
		}
	]
};

const handleClick = (event) => ({
	lat: event.latLng.lat(),
	lon: event.latLng.lng(),
});

const toCoordinate = (point) => ({
	lat: point.lat,
	lng: point.lon
});

const Map = compose(
	withProps((props) => ({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${props.apiKey}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100%` }} />,
		mapElement: <div style={{ height: `100%` }} />,
	})),
	withScriptjs,
	withGoogleMap
)((props) =>
	<GoogleMap
		defaultZoom={8}
		onClick={(event) => props.onChange(handleClick(event))}
		defaultOptions={defaultOptions}
		defaultCenter={toCoordinate(props.point)}
	>
		<Marker
			position={toCoordinate(props.point)}
		/>
	</GoogleMap>
);

Map.propTypes = {
	apiKey: PropTypes.string.isRequired,
	point: PropTypes.shape({
		lat: PropTypes.number,
		lon: PropTypes.number
	}).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Map;
