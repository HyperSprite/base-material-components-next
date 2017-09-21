import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** Latitude number */
  lat: PropTypes.number,
  /** Longitude number */
  lng: PropTypes.number,
};

const defaultProps = {
  lat: null,
  lng: null,
};

const Geolocation = ({ lat, lng }) => (
  <div>
    <div>Latitude: {lat}</div>
    <div>Longitude: {lng}</div>
  </div>
);

Geolocation.propTypes = propTypes;
Geolocation.defaultProps = defaultProps;

export default Geolocation;
