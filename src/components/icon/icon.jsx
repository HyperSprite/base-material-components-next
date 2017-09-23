// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import TestIcon from './test-icon';

const propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  inverse: PropTypes.bool,
  pointer: PropTypes.bool,
  size: PropTypes.string,
  svgIcon: PropTypes.any,
};

const defaultProps = {
  color: null,
  inverse: false,
  pointer: false,
  size: null,
  svgIcon: TestIcon,
};

const styles = theme => ({
  root: {
    display: 'inline-block',
    fill: 'currentColor',
    backgroundColor: 'transparent',
    height: 24,
    width: 24,
    borderRadius: 2,
    userSelect: 'none',
    flexShrink: 0,
    transition: theme.transitions.create('fill', {
      duration: theme.transitions.duration.shorter,
    }),
  },
  primary: {
    fill: theme.palette.primary[500],
    backgroundColor: theme.palette.getContrastText(theme.palette.primary[500]),
    '&$inverse': {
      fill: theme.palette.getContrastText(theme.palette.primary[500]),
      backgroundColor: theme.palette.primary[500],
    },
  },
  accent: {
    fill: theme.palette.secondary.A200,
    backgroundColor: theme.palette.getContrastText(theme.palette.secondary.A200),
    '&$inverse': {
      fill: theme.palette.getContrastText(theme.palette.secondary.A200),
      backgroundColor: theme.palette.secondary.A200,
    },
  },
  xs: {
    height: 12,
    width: 12,
  },
  sm: {
    height: 24,
    width: 24,
  },
  md: {
    height: 48,
    width: 48,
  },
  lg: {
    height: 72,
    width: 72,
  },
  xl: {
    height: 120,
    width: 120,
  },
  inverse: {},
  pointer: {
    cursor: 'pointer',
  },
});

const Icon = (props) => {
  const { classes, color, className: classNameProp, inverse, pointer, size, svgIcon } = props;

  const className = classNames(
    {
      [classes.root]: true,
      [classes.primary]: color === 'primary',
      [classes.accent]: color === 'accent',
      [classes.inverse]: inverse,
      [classes.pointer]: pointer,
      [classes.xs]: size === 'xs',
      [classes.sm]: size === 'sm',
      [classes.md]: size === 'md',
      [classes.lg]: size === 'lg',
      [classes.xl]: size === 'xl',
    },
    classNameProp,
  );

  // if (svgIcon) {
    const SVGIcon = props.svgIcon;
    return (
      <div className={classNames(classes.root, className)} >
        <SVGIcon className={classNames(classes.root, className)} />
      </div>
    );
  // }
  // return null;
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;


export default withStyles(styles, { name: 'StyledIcon' })(Icon);
