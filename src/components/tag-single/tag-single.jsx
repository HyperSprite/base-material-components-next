import React from 'react';
import PropTypes from 'prop-types';
// import { navigateTo } from 'gatsby-link';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';

const navigateTo = e => (e);

const propTypes = {
  classes: PropTypes.object.isRequired,
  /** single tag, e.g. 'cookie' */
  tag: PropTypes.string,
};

const defaultProps = {
  tag: '',
};

const styles = theme => ({
  root: {
    margin: 10,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.primary[400],
  },
  chip: {
    marginRight: 10,
    marginTop: 10,
  },
  svgIcon: {
    fill: theme.palette.grey[100],
  },
});

const TagSingle = (props) => {
  const { classes, tag } = props;

  if (!tag) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Chip
        avatar={
          <Avatar className={classes.avatar}>
            <CloseCircleOutlineIcon className={classes.svgIcon} />
          </Avatar>
        }
        className={classes.chip}
        label={tag}
        deleteIcon
        onClick={() => navigateTo('/')}
      />
    </div>
  );
};

TagSingle.propTypes = propTypes;
TagSingle.defaultProps = defaultProps;

export default withStyles(styles, { name: 'StyledTagSingle' })(TagSingle);
