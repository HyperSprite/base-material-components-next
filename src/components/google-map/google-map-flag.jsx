import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const GoogleMapFlag = ({ text = 'test', width = 200, height = 100, bcColor = '#FAFAFA', txtColor = '#B71C1C',  }) => (
  <div
    style={{ width, height, backgroundColor: bcColor, color: txtColor }}
  >
    {text}
  </div>);

GoogleMapFlag.propTypes = propTypes;

export default GoogleMapFlag;
