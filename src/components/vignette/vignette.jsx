import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

const Vignette = ({ height, width }) => (
  <div
    style={{
      position: 'absolute',
      background: 'radial-gradient( circle, transparent 70%, #020202 160%)',
      top: 0,
      left: 0,
      width,
      height,
    }}
  />
);

Vignette.propTypes = propTypes;

export default Vignette;
