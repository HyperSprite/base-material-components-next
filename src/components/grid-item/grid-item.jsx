import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

const propTypes = {
  classes: PropTypes.object.isRequired,

  page: PropTypes.object.isRequired,
  PostType: PropTypes.func.isRequired,
};

const styles = theme => ({
  root: {
    marginTop: 20,
  },
  paper: {
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
});

const ExtGridItem = (props) => {
  const { PostType, classes, page } = props;
  return (
    <Grid container className={classes.root} wrap="nowrap" spacing={0}>
      <Grid item xs={1} md={2} lg={3} />
      <Grid item xs={10} md={8} lg={6}>
        <PostType {...page} />
      </Grid>
      <Grid item xs={1} md={2} lg={3} />
    </Grid>
  );
};

ExtGridItem.propTypes = propTypes;

export default withStyles(styles, { name: 'StyledExtGridItem' })(ExtGridItem);
