import React, { Component } from 'react';
import 'typeface-roboto';

import GoogleMap from './components/google-map';
import ColorBox from './components/colorbox';
import DivSimpleText from './components/div-simple-text';
import routeData from './components/__test__/data-apiv1-strava-routes-id.json';
import './App.css';
import googleMapStyle from './components/google-map/map-styles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GoogleMap
          mapPolyline={routeData.map.polyline}
        />
        <ColorBox />
        <DivSimpleText
          text={`${JSON.stringify(googleMapStyle)}`}
          width={600}
          height={600}
          bcColor="#FAFAFA"
          txtColor="#B71C1C"
        />
      </div>
    );
  }
}

export default App;
