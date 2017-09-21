import React from 'react';

import Geolocation from './geolocation';

class GeolocationContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
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
    return (
      <Geolocation {...this.state} />
    );
  }
}

export default GeolocationContainer;
