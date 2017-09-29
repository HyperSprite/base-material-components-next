import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import FaMapPin from 'react-icons/lib/fa/map-pin';

const propTypes = {
  classes: PropTypes.object.isRequired,
  /** Color for pin */
  // color: PropTypes.string,
};

const defaultProps = {
  // color: theme.textBoldColor,
};

const styles = theme => ({
  root: {
    marginLeft: -12,
    marginTop: -34,
    width: 24,
    height: 24,
  },
  primary: {
    color: theme.palette.primary[500],
  },
  secondary: {
    color: theme.palette.secondary.A200,
  },
  start: {
    color: '#880000',
  },
  end: {
    color: '#00cc00',
  },
});



const MapPin = ({ classes, className: classNameProp, color }) => {
  const className = classNames(
    {
      [classes.root]: true,
      [classes.primary]: color === 'primary',
      [classes.secondary]: color === 'secondary',
      [classes.start]: color === 'start',
      [classes.end]: color === 'end',
    },
    classNameProp,
  );

  return (
    <FaMapPin
      className={classNames(classes.root, className)}
    />
  );
};

MapPin.propTypes = propTypes;
MapPin.defaultProps = defaultProps;

export default withStyles(styles, { name: 'StyledMapPin' })(MapPin);
