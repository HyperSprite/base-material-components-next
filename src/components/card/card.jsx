// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 650,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

function CardSimple(props) {
  const classes = props.classes;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography type="body1" className={classes.title}>
            {'Simple Card using <Typography /> type="body1" className={classes.title}'}
          </Typography>
          <Typography type="headline" component="h2">
            {'This is a type="headline" component="h2" in Typography}'}
          </Typography>
          <Typography type="body1" className={classes.pos}>
            {bull}{'while this is a type="body1" class="pos"'}
          </Typography>
          <Typography component="p">
            {'and this is a lowly component="p"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense>and a button</Button>
        </CardActions>
      </Card>
    </div>
  );
}

CardSimple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardSimple);
