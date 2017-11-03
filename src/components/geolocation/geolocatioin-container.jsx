import React from 'react';

import ExtGeolocation from './geolocation';

class ExtGeolocationContainer extends React.Component {
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
      <ExtGeolocation {...this.state} />
    );
  }
}

export default ExtGeolocationContainer;
