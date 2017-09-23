import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classNames';

const propTypes = {
  passedComponent: PropTypes.node.isRequired,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

const defaultProps = {
  fill: 'inherit',
  width: 'inherit',
  height: 'inherit',
};

const WithInherit = (props) => {
  const { passedComponent, classes, fill, width, height } = props;
  if (passedComponent) {
    const PassedComponent = passedComponent;
    return <PassedComponent fill={fill} width={width} height={height} />;
  }
  return null;
};

WithInherit.propTypes = propTypes;
WithInherit.defaultProps = defaultProps;

export default WithInherit;
