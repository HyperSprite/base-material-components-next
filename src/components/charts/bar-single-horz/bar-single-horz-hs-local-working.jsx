import React from 'react';
import PropTypes from 'prop-types';
import { Bar, BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const color = [
  '#93a6af',
  '#5e0000',
  '#c40000',
  '#ff5959',
  '#ffe7e7',
];

const testData = [
  {
    name: 'data1',
    valueNames: ['total', 'downloaded', 'display'],
    display: 300,
    downloaded: 320,
    total: 1018,
  },
];

const ChartBarSingleHorz = (props) => {
  const chartData = props.chartData || testData;
  let lastValue = 0;
  const adjustValue = (newVal) => {
    lastValue = newVal - lastValue;
    return lastValue;
  }

  console.log(chartData);


  return (
    <div>
      <BarChart
        data={chartData}
        width={500}
        height={40}
        layout="vertical"
        reverseStackOrder
      >
        <XAxis type="number" domain={[0, 'dataMax']} hide />
        {chartData[0].valueNames.map((vN, i) => (
          <YAxis key={vN} type="category" dataKey="name" hide yAxisId={i} />
        ))}

        <Tooltip />
        <Legend />
        {chartData[0].valueNames.map((vN, i) => (
          <Bar
            key={vN}
            dataKey={vN}
            // stackId="a"
            fill={color[i]}
            yAxisId={i}
            // barGap={1}
            // isAnimationActive={false}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default ChartBarSingleHorz;
