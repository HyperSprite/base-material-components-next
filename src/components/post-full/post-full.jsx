import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const propTypes = {
  classes: PropTypes.object.isRequired,
  html: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
});

const ExtPostFull = (props) => {
  const { classes, html, title } = props;
  return (
    <div className={classes.root}>
      <Typography type="title" gutterBottom>{title}</Typography>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

ExtPostFull.propTypes = propTypes;

export default withStyles(styles, { name: 'StyledExtPostFull' })(ExtPostFull);
