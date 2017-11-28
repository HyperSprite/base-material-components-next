import muiPalette from '../../styles/mui-palette';

export default [
  { elementType: 'geometry', stylers: [{ color: muiPalette.secondary[50] }] }, // accent2Color
  { elementType: 'labels.text.stroke', stylers: [{ color: muiPalette.secondary[100] }] }, // accent2Color
  { elementType: 'labels.text.fill', stylers: [{ color: muiPalette.primary[900] }] }, // textBoldColor
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.primary[800] }], // textColor
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [{ color: muiPalette.secondary[50] }], // accent4Color
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.primary[800] }], // textColor
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.primary[800] }], // textColor
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: muiPalette.grey[50] }], // alternateTextColor
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.primary[800] }], // textColor
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: muiPalette.secondary[700] }], // accent5Color
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: muiPalette.secondary[100] }], // borderColor
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.secondary[800] }], // accent6Color
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: muiPalette.secondary[900] }], // textBoldColor
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: muiPalette.primary[800] }], // textColor
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.primary[600] }], // primary2Color
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: muiPalette.secondary[100] }], // primary3Color
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.primary[800] }], // textColor
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: muiPalette.secondary[400] }], // accent1Color
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: muiPalette.secondary[600] }], // accent7Color
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: muiPalette.secondary[400] }], // accent1Color
  },
];
