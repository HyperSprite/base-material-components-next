import React from 'react';
import PropTypes from 'prop-types';
/*
/ This component is a <div> with text.
*/
const propTypes = {
  /** Text to be displayed */
  text: PropTypes.string,
  /** Overall width */
  width: PropTypes.number,
  /** Overall height */
  height: PropTypes.number,
  /** Background color */
  bcColor: PropTypes.string,
  /** Text color */
  txtColor: PropTypes.string,
};

const defaultProps = {
  text: '',
  width: 200,
  height: 100,
  bcColor: '#FAFAFA',
  txtColor: '#B71C1C',
};

const GoogleMapFlag = ({ text, width, height, bcColor, txtColor }) => (
  <div
    style={{ width, height, backgroundColor: bcColor, color: txtColor }}
  >
    {text}
  </div>);

GoogleMapFlag.propTypes = propTypes;
GoogleMapFlag.defaultProps = defaultProps;


export default GoogleMapFlag;

// text="test"
// width={200}
// height={100}
// bcColor="#FAFAFA"
// txtColor="#B71C1C"
