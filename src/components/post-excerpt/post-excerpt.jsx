import React from 'react';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const Link = e => (e);

const propTypes = {

};

const styles = theme => ({
  root: {
    padding: 16,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    marginTop: 20,
  },
});

const ExtPostExcerpt = (props) => {
  const { classes, cover, excerpt, html, path, title } = props;
  return (
    <div className={classes.root}>
      <Link to={path}>
        <Typography type="title" gutterBottom>{title}</Typography>
        {cover ? (
          <img src={cover} alt={title} />
        ) : null}
      </Link>
      <p>{excerpt}</p>
    </div>
  );
};

ExtPostExcerpt.propTypes = propTypes;

export default withStyles(styles, { name: 'StyledExtPostExcerpt' })(ExtPostExcerpt);
