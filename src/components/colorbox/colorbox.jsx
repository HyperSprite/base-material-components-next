import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';

import DivSimpleText from '../div-simple-text';

const propTypes = {
  /** Name of the palette, like "primary" */
  name: PropTypes.string,
  /** An object as name: hex, e.g. white: '#ffffff' */
  palette: PropTypes.object,
  classes: PropTypes.object,
};

const defaultProps = {
  name: '',
  palette: {
    600: '#aa0000',
    700: '#910000',
    800: '#770000',
    900: '#5e0000',
  },
  classes: {},
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
  title: {
    textAlign: 'center',
  },
  card: {
    // width: 240,
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


const ExtColorBox = ({ name, palette, classes }) => (
  <div>
    <h3 className={classes.title}>{name}</h3>
    {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}> */}
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs />
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            {Object.entries(palette).map(p => (
              <Card key={p[0]} className={classes.card} >
                {(p[1][0] === '#') ? (
                  <div>
                    <div className={classes.banner} >
                      <DivSimpleText
                        bcColor={p[1]}
                      />
                    </div>
                    <CardContent>
                      {`${p[0]}: '${p[1]}'`}
                    </CardContent>
                  </div>
                ) : (
                  null
                )}
              </Card>
            ))}
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
      {/* </div> */}
    </div>
  </div>
);

ExtColorBox.propTypes = propTypes;
ExtColorBox.defaultProps = defaultProps;

export default withStyles(styles)(ExtColorBox);
