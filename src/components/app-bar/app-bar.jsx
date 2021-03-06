import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'mdi-react/MenuIcon';

import Icon from '../icon';

const propTypes = {
  classes: PropTypes.object.isRequired,
  /**
  * Icon (see mdi-react)
  */
  leftIcon: PropTypes.node,
  /**
  * () => window.location.assign('/auth/strava')
  */
  leftOnClick: PropTypes.func,
  /**
  * rightImgSrc ? RightButton === image : RightButton === text
  * e.g http://someimage.png or import
  */
  rightImgSrc: PropTypes.string,
  /**
  * e.g. () => window.location.assign('/auth/strava')
  */
  rightOnClick: PropTypes.func,
  /**
  * Will be used as button text or image alt text
  * e.g. 'Login with Strava'
  */
  rightText: PropTypes.string,
  /** AppBar title */
  title: PropTypes.string,
};

const defaultProps = {
  leftIcon: <Icon color="primary" size="md" />,
  rightImgSrc: null,
  rightOnClick: null,
  rightText: '',
  title: '',
};

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

function ExtAppBar(props) {
  const { classes, leftIcon, leftOnClick, rightImgSrc, rightOnClick, rightText } = props;
  const LeftIcon = leftIcon === 'menu' ? <Icon svgIcon={MenuIcon} color="primary" inverse size="md" /> : leftIcon;

  const RightButton = () => (
    <Button
      color="contrast"
      onClick={rightOnClick}
    >
      {rightImgSrc ? (
        <img src={rightImgSrc} alt={rightText} />
      ) : (
        <span>{rightText}</span>
      )}
    </Button>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={leftOnClick} className={classes.menuButton} color="contrast" aria-label="Menu">
            {LeftIcon}
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
          {rightText && <RightButton />}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ExtAppBar.propTypes = propTypes;

ExtAppBar.defaultProps = defaultProps;

export default withStyles(styles, { name: 'StyledAppBar' })(ExtAppBar);
