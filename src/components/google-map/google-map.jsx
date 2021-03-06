import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import googlePolyline from 'google-polyline';
import Dimensions from 'react-dimensions';
import { fitBounds } from 'google-map-react/utils';
import { lineString } from '@turf/helpers';
import bbox from '@turf/bbox';
import Vignette from '@hypersprite/react-vignette';

import MapPin from '../map-pin';
import ViewRouteMapPolylineDraw from './google-map-polyline-draw';
import googleMapStyles from './map-styles';


class ExtGoogleMapWithPolyline extends React.Component {

  static propTypes = {
    containerWidth: PropTypes.number,
    mapPolyline: PropTypes.string,
    // map: PropTypes.shape({
    //   polyline: PropTypes.string,
    // }), // supplied by google-map-react
  };

  static defaultProps = {
    map: undefined,
    // polyline: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      map: null,
      maps: null,
    };
  }

  render() {
    const mapOptions = {
      styles: googleMapStyles,
      mapTypeControl: true,
      mapTypeId: 'terrain',
      rotateControl: false,
      fullscreenControl: false,
    };
    const convertMapData = (encodedPolyline) => {
      return googlePolyline.decode(encodedPolyline).map((eP) => {
        return { lat: eP[0], lng: eP[1] };
      });
    };

    const getCenterAndZoom = (mapPolyline) => {
      const routeDataLS = lineString(convertMapData(mapPolyline)
        .map(rD => [rD.lat, rD.lng]));
      const newbounds = bbox(routeDataLS);

      const bounds = {
        nw: {
          lat: newbounds[2],
          lng: newbounds[1],
        },
        se: {
          lat: newbounds[0],
          lng: newbounds[3],
        },
      };

      const size = {
        width: 400, // Map width in pixels
        height: 400, // Map height in pixels
      };
      const result = fitBounds({ nw: bounds.nw, se: bounds.se }, size);
      return result;
    };

    this.mapData = this.props.mapPolyline && convertMapData(this.props.mapPolyline);
    this.centerZoom = this.props.mapPolyline && getCenterAndZoom(this.props.mapPolyline);
    return (
      <div style={{ width: this.props.containerWidth, height: 400 }}>
        { this.mapData ? (
          <GoogleMapReact
            onGoogleApiLoaded={({ map, maps }) => {
              this.setState({ map, maps, mapLoaded: true });
            }}
            yesIWantToUseGoogleMapApiInternals
            center={this.centerZoom.center}
            defaultZoom={this.centerZoom.zoom}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_WEB,
              language: 'en',
            }}
            options={mapOptions}
          >
            { this.state.mapLoaded &&
              <MapPin
                lat={this.mapData[0].lat}
                lng={this.mapData[0].lng}
                color="start"
              />
            }
            { this.state.mapLoaded &&
              <MapPin
                lat={this.mapData[this.mapData.length - 1].lat}
                lng={this.mapData[this.mapData.length - 1].lng}
                color="end"
              />
            }
            { this.state.mapLoaded && (
              <Vignette
                width={this.props.containerWidth}
                height={400}
              />)
            }
          </GoogleMapReact>
        ) : (
          <div style={{ width: 200, height: 400 }} >
            loading...
          </div>
        )}
        { this.state.mapLoaded &&
          <ViewRouteMapPolylineDraw
            {...this.state}
            mapData={this.mapData}
            opacity={0.7}
            weight={4}
          />
        }
      </div>
    );
  }
}

export default Dimensions()(ExtGoogleMapWithPolyline);
