import React from 'react';
import invert from 'invert-color';
import GoogleMapFlag from '../google-map/google-map-flag';
import theme from '../../styles/theme';

const palette = theme.palette;
const ColorBox = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', width: 1000 }}>
    {Object.entries(palette).map(p => (
      <GoogleMapFlag
        key={p[0]}
        text={`${p[0]}: '${p[1]}', text: ${invert(`${p[1]}`)}`}
        bcColor={p[1]}
        txtColor={invert(`${p[1]}`)}
      />
    ))}
  </div>
);

export default ColorBox;
