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
  icon: PropTypes.node,
  /** A string or function */
  leftLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  /** A string or function */
  rightLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  /** AppBar title */
  title: PropTypes.string,
};

const defaultProps = {
  icon: <Icon color="primary" size="md" />,
  leftLink: '',
  rightLink: '',
  title: 'Demo AppBar',
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

function ARAAppBar(props) {
  const classes = props.classes;
  const icon = props.icon === 'menu' ? <Icon svgIcon={MenuIcon} color="primary" inverse size="md" /> : props.icon;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            {icon}
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            {props.title}
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ARAAppBar.propTypes = propTypes;

ARAAppBar.defaultProps = defaultProps;

export default withStyles(styles, { name: 'MuiAppBar' })(ARAAppBar);
