import React, { Component } from 'react';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import GoogleMap from './components/google-map';
import Geolocation from './components/geolocation';
import ARAIcon from './components/ara-icon';
import ColorBox from './components/colorbox';
import Card from './components/card';
import Loading from './components/loading';
import routeData from './components/__test__/data-apiv1-strava-routes-id.json';
import './App.css';
import oldTheme from './styles/theme';
import palette from './styles/mui-theme';


const theme = createMuiTheme({
  palette: palette,
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div className="App">

          {/* <GoogleMap
            mapPolyline={routeData.map.polyline}
          /> */}
          <Paper >
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div>
                <ARAIcon />
                <p>{'<no options>'}</p>
              </div>
              <div>
                <ARAIcon size="xs" />
                <p>{'size="xs"'}</p>
              </div>
              <div>
                <ARAIcon color="primary" size="sm" />
                <p>{'color="primary" size="sm"'}</p>
              </div>
              <div>
                <ARAIcon color="accent" pointer size="md" />
                <p>{'color="accent" pointer size="md"'}</p>
              </div>
              <div>
                <ARAIcon color="primary" inverse size="lg" />
                <p>{'color="primary" inverse size="lg"'}</p>
              </div>
              <div>
                <ARAIcon color="accent" inverse size="xl" />
                <p>{'color="accent" inverse size="xl"'}</p>
              </div>
            </div>
            <ColorBox palette={oldTheme.palette} name="styles/theme.palette" />
            <ColorBox palette={theme.palette.common} name="styles/muiTheme.palette.common" />
            <ColorBox palette={theme.palette.background} name="styles/muiTheme.palette.background" />
            <ColorBox palette={theme.palette.primary} name="styles/muiTheme.palette.primary" />
            <ColorBox palette={theme.palette.secondary} name="styles/muiTheme.palette.secondary" />
            <ColorBox palette={theme.palette.error} name="styles/muiTheme.palette.error" />
            <ColorBox palette={theme.palette.grey} name="styles/muiTheme.palette.grey" />
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
