import justFns from 'just-fns';

// this array will be mapped to display each metric for an activity.
const returnValues = [
  {
    activityType: 'tssScore',
    activityLabel: 'TSS',
  },
  {
    activityType: 'variability_index',
    activityLabel: 'Variability Index',
    division: justFns.divideAndRound,
    divideThis: 'weighted_average_watts',
    byThis: 'average_watts',
  },
  {
    activityType: 'kilojoules',
    activityLabel: 'Kilojoules',
  },
  {
    activityType: 'weighted_average_watts',
    activityLabel: 'Nomalized Power',
  },
  {
    activityType: 'average_watts',
    activityLabel: 'Average Power',
  },
  {
    activityType: 'suffer_score',
    activityLabel: 'Suffer Score',
  },
  {
    activityType: 'calories',
    activityLabel: 'Calories',
  },
  {
    activityType: 'moving_time',
    activityLabel: 'Moving Time',
    conversionFunction: justFns.statsConversions,
    conversionMetric: 'time',
    conversionYAxis: false,
    conversionData: 'moving_time',
  },
  {
    activityType: 'distance',
    activityLabel: 'Distance',
    conversionFunction: justFns.statsConversions,
    conversionMetric: 'dst',
    conversionYAxis: false,
    conversionData: 'distance',
    conversionTypeSA: 'miles',
    conversionTypeMetric: 'meters',
    conversionmPref: true,
  },
  {
    activityType: 'total_elevation_gain',
    activityLabel: 'Elevation',
    conversionFunction: justFns.statsConversions,
    conversionMetric: 'elev',
    conversionYAxis: false,
    conversionData: 'total_elevation_gain',
    conversionTypeSA: 'feet',
    conversionTypeMetric: 'meters',
    conversionmPref: true,
  },
  {
    activityType: 'type',
    activityLabel: 'Type',
  },
  {
    activityType: 'gear',
    activityTypeSub: 'name',
    activityLabel: 'Gear',
  },
];

export default returnValues;
