import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import listIconValues from './list-icon-values';

const propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: 240,
    margin: 10,
    color: theme.palette.primary[800],
  },
  banner: {
    height: 130,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {

  },
});

function LayoutSimple(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            {listIconValues.map(lIV => (
              <Card key={lIV.key} className={classes.card} >
                <div className={classes.banner}>
                  {lIV.banner}
                </div>
                <CardContent className={classes.content} >
                  <Typography>
                    {lIV.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

LayoutSimple.propTypes = propTypes;

export default withStyles(styles)(LayoutSimple);
