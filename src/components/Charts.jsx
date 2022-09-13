import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Charts({title,data,dataKey,grid}) {

  return (
    <div className="Charts">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width={'100%'} aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={'name'} stroke="#5900ff" />
          <Line type={'monotone'} dataKey={dataKey} stroke="#dd8100" />
          <Tooltip />
          {grid&& <CartesianGrid color="#4e4e4e"/>}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
