import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const propTypes = {
  /**
  * Copywrite owner
  */
  brand: PropTypes.string,
  /**
  * injected by withStyles
  */
  classes: PropTypes.object.isRequired,
  /**
  * Alt text for the image
  */
  imgAlt: PropTypes.string,
  /**
  * URL string e.g. 'http://someimage.jpg'
  */
  imgLink: PropTypes.string,
  /**
  * Image can be a link or an import. Image is optional.
  */
  imgSrc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  /**
  * Comments about the site, something to make you smile, whatever.
  */
  info: PropTypes.string,
};

const defaultProps = {
  brand: '',
  imgAlt: '',
  imgLink: '',
  imgSrc: '',
  info: '',
};

const today = new Date().getFullYear();

const styles = theme => ({
  root: {
    boxSizing: 'border-box',
  },
  flexContainer: {
    backgroundColor: theme.palette.primary[900],
    minHeight: '28vh',
    display: 'flex',
    flexFlow: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  main: {
    marginTop: 72,
    flex: '6 1 auto',
    maxWidth: '56em',
    order: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  sideLight: {
    minHeight: 20,
    maxHeight: 20,
    flex: '1 6 auto',
  },
  leftPane: {
    order: 1,
    flex: '2 6 auto',
    composes: '$sideLight',
  },
  rightPane: {
    order: 3,
    flex: '4 6 auto',
    composes: '$sideLight',
  },
  footerText: {
    margin: 4,
    padding: 5,
    color: theme.palette.grey[100],
  },
  quoteBox: {
    maxWidth: '40em',
    margin: '1em',
    paddingBottom: '1em',
    composes: '$footerText',
  },
  img: {
    width: 200,
  },
});

const ExtFooter = (props) => {
  const { classes, imgAlt, imgLink, imgSrc, info, brand } = props;
  return (
    <div className={classes.root}>
      <div className={classes.flexContainer}>
        <div className={classes.leftPane} />
        <div className={classes.main}>
          <div className={classes.quoteBox}>
            <p>{info}</p>
          </div>
          {imgSrc && (
            <div>
              <a href={imgLink} target="new">
                <img src={imgSrc} alt={imgAlt} className={classes.img} />
              </a>
            </div>
          )}
          {brand && (
            <div>
              <p className={classes.footerText}>
                &copy; {today} {brand}
              </p>
            </div>
          )}
        </div>
        <div className={classes.rightPane} />
      </div>
    </div>
  );
};

ExtFooter.propTypes = propTypes;
ExtFooter.defaultProps = defaultProps;

export default withStyles(styles, { name: 'StyledExtFooter' })(ExtFooter);
