import React from 'react';
import PropTypes from 'prop-types';

import TagSingle from '../tag-single';
import TagArray from '../tag-array';

const propTypes = {
  /** query tag name, also used for TagSingle/TagArray switch */
  qTag: PropTypes.string,
  /** True enables onClick for Chip */
  navClick: PropTypes.bool,
  /** ['cookie', 'milk'] or 'cookie,milk' */
  tagList: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

const defaultPorps = {
  qTag: '',
  navClick: false,
  tagList: '',
};

const TagBar = ({ qTag, navClick, tagList }) => {
  if (qTag) {
    return (<TagSingle tag={qTag} />);
  }
  return (<TagArray tags={tagList} navClick={navClick} />);
};

TagBar.propTypes = propTypes;
TagBar.defaultProps = defaultPorps;

export default TagBar;
