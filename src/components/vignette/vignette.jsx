import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /** Pixels in height */
  height: PropTypes.number,
  /** Pixels in width */
  width: PropTypes.number,
};

const defaultProps = {
  height: 100,
  width: 200,
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
Vignette.defaultProps = defaultProps;

export default Vignette;
