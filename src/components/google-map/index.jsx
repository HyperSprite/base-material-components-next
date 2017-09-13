import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import googlePolyline from 'google-polyline';
import Dimensions from 'react-dimensions';

import ViewRouteMapPolylineDraw from './google-map-polyline-draw';
// import ViewRouteMapFlag from './google-map-flag';
import styles from './styles';

class GoogleMapWithPolyline extends React.Component {

  static propTypes = {
    mapPolyline: PropTypes.string,
    zoom: PropTypes.number,
  };

  static defaultProps = {
    map: undefined,
    mapPolyline: undefined,
    zoom: 11,
  };

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      maps: null,
    };
  }

  render() {
    const convertMapData = (encodedPolyline) => {
      return googlePolyline.decode(encodedPolyline).map((eP) => {
        return { lat: eP[0], lng: eP[1] };
      });
    };

    console.log('width', this.props.containerWidth, 'height', this.props.containerHeight),

    this.mapData = convertMapData(this.props.mapPolyline);
    return (
      <div style={{ backgroundColor: 'black', width: this.props.containerWidth, height: 400 }}>
        { this.mapData &&
          <GoogleMapReact
            onGoogleApiLoaded={({ map, maps }) => {
              this.setState({ map, maps, mapLoaded: true });
            }}
            yesIWantToUseGoogleMapApiInternals
            center={this.mapData[0]}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_WEB,
              language: 'en',
            }}
            options={{ styles }}
          >
            {/* <ViewRouteMapFlag
              lat={this.mapData[0].lat}
              lng={this.mapData[0].lng}
              text={'Start'}
            /> */}
            {/* <ViewRouteMapFlag
              lat={this.mapData[this.mapData.length - 1].lat}
              lng={this.mapData[this.mapData.length - 1].lng}
              text={'End'}
            /> */}
          </GoogleMapReact>
        }
        { this.state.mapLoaded &&
          <ViewRouteMapPolylineDraw
            {...this.state}
            mapData={this.mapData}
            opacity={0.8}
            weight={5}
          />
        }
      </div>
    );
  }
}

export default Dimensions()(GoogleMapWithPolyline);
