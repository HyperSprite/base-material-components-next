import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import justFns from 'just-fns';

import MetricLabel from '../metric-label';
import data from '../__test__/data-apiv1-activities-1-week.json';

// import Static from '../form/static';

const propTypes = {
  /** One week of data */
  content: PropTypes.any,
  /** Label of this chart */
  contentLabel: PropTypes.string,
  /** Used to select the proper data */
  metric: PropTypes.string,
  /** Imperial or Metric */
  mPref: PropTypes.bool,
  /** Weekly Totals array provieded by content data */
  weeklyTotals: PropTypes.array,
};

const defaultProps = {
  content: data.stats.weeklyTotals.tss.total,
  contentLabel: 'TSS',
  metric: 'tss',
  mPref: true,
  weeklyTotals: data.stats.dayTotals,
};

const styles = theme => ({
  root: {
    margin: 5,
    width: 240,
    background: theme.palette.background.default,
    display: 'flex',
    justifyContent: 'center',
  },
  barChartBox: {
    // display: 'flex',
    // justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    // display: 'flex',
    // justifyContent: 'space-around',
  },
  barChart: {
    margin: { top: 5, right: 10, left: 2, bottom: 5 },
  },
  card: {
    margin: 10,
    color: theme.palette.primary[800],
  },
  toolTip: {
    color: theme.palette.secondary[600],
    background: theme.palette.background.default,
    borderRadius: 2,
    marginTop: 50,
    marginLeft: -40,
    padding: 4,
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
  toolTipContent: {
    color: theme.palette.secondary[500],
    listStyle: 'none',
    margin: { top: 0, right: 0, left: 4, bottom: 0 },
    padding: 0,
  },
  left: {
    textAlign: 'right',
    width: 40,
    marginRight: 5,
  },
  right: {
    color: theme.palette.secondary[300],
    textAlign: 'left',
    width: 80,
    fontWeight: 700,
  },
  day: {
    fill: theme.palette.primary[400],
  },
  previous: {
    fill: theme.palette.primary[900],
  },
});

const renderTooltipContent = (o) => {
  // payload array item for each bar
  // metric = 'time', 'dst', 'elev' type: string
  // mPref = true for SAE, false for Metric
  const { classes, payload, label, metric, mPref } = o;

  const total = payload.reduce((result, entry) => (result + entry.value), 0);
  return (
    <div className={classes.toolTip} >
      <ul className={classes.toolTipContent} >
        <MetricLabel
          leftContent="Day"
          rightContent={label}
          inverse
        />
        {payload.map(entry => (
          <li
            key={`item-${entry.value + entry.name}`}
          >
            <MetricLabel
              leftContent={justFns.statsConversions(metric, false, entry.value, mPref)}
              rightContent={entry.name}
            />
          </li>
        ))}
        <li>
          <MetricLabel
            leftContent={justFns.statsConversions(metric, false, total, mPref)}
            rightContent={'Total'}
          />
        </li>
      </ul>
    </div>
  );
};

const ExtBarChartBox = ({ classes, content, contentLabel, metric, mPref, title, weeklyTotals }) => (
  <div>
    <div className={classes.barChartBox} >
      <div className={classes.title}>
        <MetricLabel
          leftContent={justFns.statsConversions(metric, false, content, mPref)}
          rightContent={contentLabel}
        />
      </div>
      <BarChart
        className={classes.barChart}
        width={180}
        height={150}
        data={weeklyTotals}

      >
        <XAxis dataKey="day" />
        <YAxis tickFormatter={justFns.statsConversions(metric, true)} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip content={renderTooltipContent} metric={metric} mPref={mPref} classes={classes} />
        <Bar name="Previous" dataKey={`${metric}.total`} stackId="a" className={classes.previous} barGap={1} isAnimationActive={false} />
        <Bar name="Day" dataKey={`${metric}.day`} stackId="a" className={classes.day} barGap={1} isAnimationActive={false} />

      </BarChart>
    </div>
  </div>

);

ExtBarChartBox.propTypes = propTypes;
ExtBarChartBox.defaultProps = defaultProps;

export default withStyles(styles, { name: 'StyledChart' })(ExtBarChartBox);
