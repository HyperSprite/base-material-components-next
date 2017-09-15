import React from 'react';
import invert from 'invert-color';
import DivSimpleText from '../div-simple-text';
import theme from '../../styles/theme';

const palette = theme.palette;
const ColorBox = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Object.entries(palette).map(p => (
      <DivSimpleText
        key={p[0]}
        text={`${p[0]}: '${p[1]}', text: ${invert(`${p[1]}`)}`}
        bcColor={p[1]}
        txtColor={invert(`${p[1]}`)}
      />
    ))}
  </div>
);

export default ColorBox;
