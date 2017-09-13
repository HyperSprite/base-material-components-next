import React from 'react';
import appColorPalette from '../__test__/app-color-palette.json';
import GoogleMapFlag from '../google-map/google-map-flag';

const ColorBox = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {appColorPalette.map(aCP => (
      <GoogleMapFlag key={aCP.text} {...aCP} />
    ))}
  </div>
);

export default ColorBox;
