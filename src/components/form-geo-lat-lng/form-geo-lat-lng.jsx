import React from 'react';

import GoogleMapLocation from '../google-map-location';


class FormGeoLatLng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(lat, lng) {
    this.setState({ lat, lng });
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div>
        <GoogleMapLocation handleClick={this.handleClick} {...this.props} {...this.state} />
        <div>
          <a href={`https://www.google.com/maps/search/?api=1&query=${this.state.lat},${this.state.lng}`} target="new">
            Google Maps Link {this.state.lat && `${this.state.lat},${this.state.lng}`}
          </a>
        </div>
      </div>
    );
  }
}

export default FormGeoLatLng;
