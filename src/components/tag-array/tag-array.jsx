import React from 'react';
import PropTypes from 'prop-types';
// import { navigateTo } from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import justFns from 'just-fns';

import Chip from 'material-ui/Chip';

const navigateTo = e => (e);

const propTypes = {
  classes: PropTypes.object.isRequired,
  /** True enables onClick for Chip */
  navClick: PropTypes.bool,
  /** ['cookie', 'milk'] or 'cookie, milk' */
  tags: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

const defaultProps = {
  navClick: false,
  tags: '',
};

const styles = theme => ({
  root: {
    margin: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chip: {
    marginRight: 10,
    marginTop: 10,
  },
});

const TagArray = (props) => {
  const { classes, navClick, tags } = props;

  if (!tags) {
    return null;
  }

  let tagArr = tags;
  if (typeof tags === 'string') {
    tagArr = justFns.csvStringToArray(tags);
  }

  return (
    <div className={classes.root}>
      {tagArr && tagArr.sort().map(tag => (
        <Chip
          className={classes.chip}
          key={tag}
          label={tag}
          onClick={navClick ? () => navigateTo(`/tag?${tag}`) : null}
        />
      ))}
    </div>
  );
};

TagArray.propTypes = propTypes;
TagArray.defaultProps = defaultProps;

export default withStyles(styles, { name: 'StyledTags' })(TagArray);
