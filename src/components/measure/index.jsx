import React from 'react';
import { withContentRect } from 'react-measure'

const MeasuredHoC = props => (
  <Measure bounds>
    {({ measureRef, contentRect }) => (
      <DisplayContentRect
        innerRef={measureRef}
        contentRect={contentRect}
        {...props}
      />
    )}
  </Measure>
);
