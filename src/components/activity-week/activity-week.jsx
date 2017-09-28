import React from 'react';
import PropTypes from 'prop-types';
// import { addDays, eachDay, format } from 'date-fns';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

// import lib from '../../lib';
// import BarChartBox from '../bar-chart-box';
// import SingleActivity from '../form/single-activity';
import data from '../__test__/data-apiv1-activities-1-week.json';

const propTypes = {
  week: PropTypes.string.isRequired, // "2017-05-02"
  stats: PropTypes.object.isRequired,
  datePref: PropTypes.string,
  measurementPref: PropTypes.bool,
};

const defaultProps = {
  datePref: '%m/%d/%Y',
  measurementPref: false,
};

const ActivityWeek = () => {

};

ActivityWeek.propTypes = propTypes;
ActivityWeek.defaultProps = defaultProps;

export default ActivityWeek;
