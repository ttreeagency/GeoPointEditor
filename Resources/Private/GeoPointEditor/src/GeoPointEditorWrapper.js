import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GoogleMapLoader from './GoogleMapLoader';

class GeoPointEditorWrapper extends PureComponent {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		const {point} = this.props;
		return <GoogleMapLoader
			apiKey='AIzaSyDEfdbzA3qBvgkoEH0m374Lb_JSsfSf14E'
			point={point}
			onChange={this.handleChange}
		/>;
	}

	handleChange(newValue) {
		this.props.onChange(newValue);
	}
}

GeoPointEditorWrapper.propTypes = {
	onChange: PropTypes.func.isRequired,
	point: PropTypes.shape({
		lat: PropTypes.number,
		lon: PropTypes.number
	}).isRequired,
};

GeoPointEditorWrapper.defaultProps = {
	point: {
		lat: -34.397,
		lon: 150.644
	}
};

export default GeoPointEditorWrapper;
