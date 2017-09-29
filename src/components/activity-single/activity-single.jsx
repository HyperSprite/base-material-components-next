import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
// import { connect } from 'react-redux';
import { IconButton } from 'material-ui';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import OpenInNewIcon from 'mdi-react/OpenInNewIcon';
// import { ActionDeleteForever } from 'material-ui/svg-icons';
import data from '../__test__/data-apiv1-activities-1-week.json';

// import * as actions from '../../../actions';

import MetricLabel from '../metric-label';
import Icon from '../icon';
import returnValues from './activity-values';
// import style from './style';

const propTypes = {
  /** Activity ID */
  activityId: PropTypes.number.isRequired,
  /** Activity array */
  activities: PropTypes.array.isRequired,
  /** Imperial or Metric */
  mPref: PropTypes.bool,
  /** Function to remove this Activity */
  removeActivity: PropTypes.func.isRequired,
  /** Sets Redux state to isFetching */
  setIsFetching: PropTypes.func.isRequired,
};

const defaultProps = {
  mPref: false,
  thisActivity: data.week[0],
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  titleBox: {
    display: 'flex',
    color: theme.palette.primary[500],
    fontSize: '1.2em',
    fontWeight: 600,
  },
  title: {
    marginTop: 14,
    fontSize: 18,
  },
  icons: {
    marginRight: '3vw',
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    maxWidth: 600,
  },
  // box: {
  //   width: 200,
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   flexWrap: 'wrap',
  // },
});

// const deleteActivityURL = 'apiv1/activities/delete-activity';

class ActivitySingle extends Component {
  constructor(props) {
    super(props);
    // this.deleteActivity = this.deleteActivity.bind(this);
  }

  // deleteActivity() {
  //   this.props.setIsFetching();
  //   this.props.removeActivity(deleteActivityURL, this.props.activityId);
  // }
  //
  // thisActivity() {
  //   return this.props.activities.filter(activity => activity.activityId === this.props.activityId);
  // }

  render() {
    const { classes, mPref, deleteActivity, thisActivity } = this.props;
    // const activity = thisActivity()[0];

    // if (thisActivity.deleted) {
    //   return (
    //     <h4 style={style.h4}>{thisActivity.name}</h4>
    //   );
    // }

    // {rV.conversionmPref ? (
    //   <span>
    //     {mPref ? (
    //       <span> {`(${rV.conversionTypeSA})`}</span>
    //     ) : (
    //       <span> {`(${rV.conversionTypeMetric})`}</span>
    //     )}
    //   </span>
    // ) : (null)}

    return (
      <div key={`${thisActivity.activityId}-single`} className={classes.root} >
        <div className={classes.titleBox} >
          <div className={classes.title} >
            {thisActivity.name}
          </div>
          <div className={classes.icons} >
            <IconButton
              onClick={() => window.open(`https://www.strava.com/activities/${thisActivity.activityId}`, '_new')}
            >
              <Icon svgIcon={OpenInNewIcon} size="sm" pointer />
            </IconButton>
            <IconButton
              onClick={deleteActivity}
              tooltip="Delete from A Race athlete (does not remove from Strava)"
            >
              <Icon svgIcon={DeleteForeverIcon} size="sm" pointer />
            </IconButton>
          </div>
        </div>
        <div className={classes.container} >

          {returnValues.map((rV) => {
            if (thisActivity[rV.activityType] && rV.conversionMetric) {
              return (
                <MetricLabel
                  size="md"
                  key={rV.activityType}
                  leftContent={rV.conversionFunction(
                    rV.conversionMetric,
                    rV.conversionYAxis,
                    thisActivity[rV.conversionData],
                    mPref,
                  )}
                  rightContent={rV.activityLabel}
                />
              );
            } else if (thisActivity[rV.activityType] && thisActivity[rV.activityType][rV.activityTypeSub]) {
              return (
                <MetricLabel
                  size="lg"
                  bias="left"
                  inverse
                  key={rV.activityType}
                  leftContent={rV.activityLabel}
                  rightContent={thisActivity[rV.activityType][rV.activityTypeSub]}
                />
              );
            } else if (thisActivity[rV.activityType]) {
              return (
                <MetricLabel
                  size="md"
                  key={rV.activityType}
                  leftContent={thisActivity[rV.activityType]}
                  rightContent={rV.activityLabel}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

ActivitySingle.propTypes = propTypes;
ActivitySingle.defaultProps = defaultProps;

// function mapStateToProps(state) {
//   return {
//     activities: state.activities.activities,
//     mPref: state.auth.user.measurement_preference === 'feet',
//   };
// }

export default withStyles(styles, { name: 'StyledSingleActivity' })(ActivitySingle);
