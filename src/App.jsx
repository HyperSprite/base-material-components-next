import React, { Component } from 'react';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import AppBar from './components/app-bar';
import GoogleMap from './components/google-map';
import Geolocation from './components/geolocation';

import ColorBox from './components/colorbox';
import Card from './components/card';
import Loading from './components/loading';
import routeData from './components/__test__/data-apiv1-strava-routes-id.json';
import oldTheme from './styles/theme';
import palette from './styles/mui-theme';
import LayoutSimple from './components/layout-simple';

const theme = createMuiTheme({
  palette: palette,
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className="App">
          <AppBar /> {/* icon={<ARAIcon color="primary" inverse size="md" />} */}
          <GoogleMap
            mapPolyline={routeData.map.polyline}
          />
          <Paper style={{ backgroundColor: '#eeeeee'}}>
            <LayoutSimple />


            <ColorBox palette={theme.palette.primary} name="styles/muiTheme.palette.primary" />
            <ColorBox palette={theme.palette.secondary} name="styles/muiTheme.palette.secondary" />
            <ColorBox palette={theme.palette.common} name="styles/muiTheme.palette.common" />
            <ColorBox palette={theme.palette.background} name="styles/muiTheme.palette.background" />
            <ColorBox palette={theme.palette.grey} name="styles/muiTheme.palette.grey" />
            <ColorBox palette={theme.palette.error} name="styles/muiTheme.palette.error" />

            <ColorBox palette={oldTheme.palette} name="styles/theme.palette" />
            <Card />
            <Loading />
            <Geolocation />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
