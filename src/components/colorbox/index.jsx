import React from 'react';
import invert from 'invert-color';
import DivSimpleText from '../div-simple-text';

const ColorBox = ({ name, palette }) => (
  <div>
    <h3>{name}</h3>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(palette).map(p => (
        <div key={p[0]} >
          {(p[1][0] === '#') ? (
            <DivSimpleText
              text={`${p[0]}: '${p[1]}', text: ${invert(`${p[1]}`)}`}
              bcColor={p[1]}
              txtColor={invert(`${p[1]}`)}
            />
          ) : (
            <div>{`${p[0]}: ${p[1]}`}</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default ColorBox;
