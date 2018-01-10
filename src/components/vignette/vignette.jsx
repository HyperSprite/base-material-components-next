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
      boxShadow: 'inset 0px 0px 64px #000000',
      top: 0,
      left: 0,
      width,
      height,
    }}
  />
);

Vignette.propTypes = propTypes;

export default Vignette;
