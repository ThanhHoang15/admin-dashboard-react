import "./barChart.scss"
import { BarChart, Bar } from 'recharts';
import {barChart} from "../../data";
import { LineChart, Line, Tooltip } from "recharts";





export const Barchart = () => {
  return (
<div className="barChart">
    <BarChart
      style={{
        width: '100%',
        maxWidth: '300px',
        maxHeight: '100px',
        aspectRatio: 1.618,
        
      }}
      responsive
      data={barChart}
      dataKey="month"

    >
      <Tooltip
        contentStyle={{
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
        }}
        itemStyle={{
          color: 'yellow',
        }}
        labelStyle={{
          color: 'yellow',
        }}
        cursor={{ fill: 'transparent' }}
      />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
    <div className ="label">Monthly Revenue</div>
</div>
  )
}