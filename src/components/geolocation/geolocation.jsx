import React from 'react';
import PropTypes from 'prop-types';

import ExtGeolocation from '@hypersprite/react-geolocation-hoc';

const propTypes = {
  /** Latitude number */
  lat: PropTypes.number,
  /** Longitude number */
  lng: PropTypes.number,
  /** Geolocation enabled */
  geolocation: PropTypes.bool,
};

const defaultProps = {
  lat: null,
  lng: null,
  geolocation: null,
};

const Geolocation = ({ lat, lng, geolocation }) => (
  <div>
    <div>Latitude: {lat}</div>
    <div>Longitude: {lng}</div>
    {geolocation && (
      <div>Geolocation enabled</div>
    )}
  </div>
);

Geolocation.propTypes = propTypes;
Geolocation.defaultProps = defaultProps;

export default ExtGeolocation(Geolocation);
