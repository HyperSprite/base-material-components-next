import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Dimensions from 'react-dimensions';
import ExtGeolocation from '@hypersprite/react-geolocation-hoc';

import MapPin from '../map-pin';
import googleMapStyles from './map-styles';

class ExtGoogleMapWithLocation extends React.Component {

  static propTypes = {
    containerWidth: PropTypes.number,
    /** returns lat, lng from map pin location */
    handleClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    map: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      maps: null,
      lat: null,
      lng: null,
    };
    this.targetLocation = this.targetLocation.bind(this);
  }

  targetLocation(lat, lng) {
    this.setState({ lat, lng });
    if (this.props.handleClick) {
      this.props.handleClick(lat, lng);
    }
  }

  render() {
    const mapOptions = {
      styles: googleMapStyles,
      mapTypeControl: true,
      mapTypeId: 'terrain',
      rotateControl: false,
      fullscreenControl: false,
    };

    return (
      <div style={{ width: this.props.containerWidth, height: 400 }}>
        { this.props.lat ? (
          <GoogleMapReact
            onGoogleApiLoaded={({ map, maps }) => {
              this.setState({ map, maps, mapLoaded: true });
            }}
            yesIWantToUseGoogleMapApiInternals
            center={{ lat: this.props.lat, lng: this.props.lng }}
            defaultZoom={14}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_WEB,
              language: 'en',
            }}
            options={mapOptions}
            onClick={({ lat, lng }) => this.targetLocation(lat, lng)}
          >
            { this.state.mapLoaded &&
              <MapPin
                lat={this.state.lat || this.props.lat}
                lng={this.state.lng || this.props.lng}
                color="end"
              />
            }
          </GoogleMapReact>
        ) : (
          <div style={{ width: 200, height: 400 }} >
            Waiting for user verification
          </div>
        )}
      </div>
    );
  }
}

export default ExtGeolocation(Dimensions()(ExtGoogleMapWithLocation));
