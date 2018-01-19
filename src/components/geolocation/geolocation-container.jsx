import React from 'react';
import PropTypes from 'prop-types';

const ExtGeolocation = Component => (
  class GeolocationContainer extends React.Component {
    static propTypes = {
      lat: PropTypes.number,
      lng: PropTypes.number,
    }

    static defaultProps = {
      lat: null,
      lng: null,
    }
    constructor(props) {
      super(props);

      this.state = {
        lat: this.props.lat,
        lng: this.props.lng,
      };


      this.handleSuccess = this.handleSuccess.bind(this);
    }

    componentDidMount() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.handleSuccess);
      }
    }

    handleSuccess({ coords }) {
      this.setState({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    }

    render() {
      return <Component {...this.state} />;
    }
  }
);


export default ExtGeolocation;
