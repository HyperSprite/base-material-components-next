import React, { Component } from 'react';
import 'typeface-roboto';

import GoogleMap from './components/google-map';
import ColorBox from './components/colorbox';
import routeData from './components/__test__/data-apiv1-strava-routes-id.json';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <GoogleMap
          mapPolyline={routeData.map.polyline}
        />
        <ColorBox />
      </div>
    );
  }
}

export default App;
