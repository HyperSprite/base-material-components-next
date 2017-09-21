import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const propTypes = {
  classes: PropTypes.object.isRequired, // mui
};

const defaultProps = {
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  palette: {
    type: 'dark',
  },
});

function Loading(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <LinearProgress mode="query" />
    </div>
  );
}

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default withStyles(styles)(Loading);
