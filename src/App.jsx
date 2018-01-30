import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import ActivitySingle from './components/activity-single';
import AppBar from './components/app-bar';
import BarChartBox from './components/bar-chart-box';
import Card from './components/card';
import ColorBox from './components/colorbox';
import Footer from './components/footer';
import Geolocation from './components/geolocation';
import GoogleMap from './components/google-map';
import FormGeoLatLng from './components/form-geo-lat-lng';
import Hero from './components/hero';
import LayoutSimple from './components/layout-simple';

import PoweredByStrava from './assets/api_logo_pwrdBy_strava_horiz_gray.svg';
import routeData from './components/__test__/data-apiv1-strava-routes-id.json';
import oldTheme from './styles/theme';
import palette from './styles/mui-palette';
import typography from './styles/mui-typography';
import solarized from './styles/solarized';
import deepRed from './styles/deep-red';

const theme = createMuiTheme({
  palette: palette,
  typography: typography,
});

const lrgImage = 'https://github.com/HyperSprite/redux-todo-with-auth/raw/master/web/src/server/public/images/background-large.jpg';
const smlImage = 'https://github.com/HyperSprite/redux-todo-with-auth/raw/master/web/src/server/public/images/background-small.jpg';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <Typography component="body1" >
          <div className="App" >
            <Reboot />
            <AppBar rightLink="" leftLink="" title="Demo AppBar" /> {/* icon={<ARAIcon color="primary" inverse size="md" />} */}
            <Hero backgroundImageWide={lrgImage} backgroundImageNarrow={smlImage} />
            <FormGeoLatLng
              lat={37.41779306817996}
              lng={-122.26177170119325}
              noGeolocation
            />
            <Geolocation
              lat={39.28756}
              lng={-120.19987}
              noGeolocation
            />
            <GoogleMap
              mapPolyline={routeData.map.polyline}
            />
            <Paper style={{ backgroundColor: '#eeeeee' }} >
              <ActivitySingle />
              <BarChartBox />
              <LayoutSimple />
              <ColorBox palette={theme.palette.primary} name="styles/muiTheme.palette.primary" />
              <ColorBox palette={theme.palette.secondary} name="styles/muiTheme.palette.secondary" />
              <ColorBox palette={theme.palette.common} name="styles/muiTheme.palette.common" />
              <ColorBox palette={theme.palette.background} name="styles/muiTheme.palette.background" />
              <ColorBox palette={theme.palette.grey} name="styles/muiTheme.palette.grey" />
              <ColorBox palette={theme.palette.error} name="styles/muiTheme.palette.error" />
              <ColorBox palette={oldTheme.palette} name="styles/theme.palette" />
              <ColorBox palette={solarized.palette} name="styles/solarized.palette" />
              <ColorBox palette={deepRed.palette} name="styles/deep-red.palette" />
              <Card />
              {/* <Loading /> */}

            </Paper>
            <Footer
              brand="rcrsv.com"
              imgAlt="Powered By Strava"
              imgLink="https://www.strava.com"
              imgSrc={PoweredByStrava}
              info="This app came about because I wanted to use it. It is a labor of love and suffering, much like cycling."
            />
          </div>
        </Typography>
      </MuiThemeProvider>
    );
  }
}

export default App;
