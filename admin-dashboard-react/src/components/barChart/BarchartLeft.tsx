import "./barChartLeft.scss"
import { BarChart, Bar } from 'recharts';
import {barChartLeft} from "../../data";
import { Tooltip } from "recharts";





export const BarchartLeft = () => {
  return (
<div className="barChartLeft">
  <BarChart
    style={{
      width: '100%',
      maxWidth: '300px',
      maxHeight: '100px',
      aspectRatio: 1.618,
    }}
    responsive
    data={barChartLeft}
      >
    <Tooltip
      contentStyle={{
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
      }}
      itemStyle={{ color: 'yellow' }}
      labelStyle={{ color: 'yellow' }}
      cursor={{ fill: 'transparent' }}
      labelFormatter={(payload) => {
        return payload?.[0]?.payload?.month
      }}
      />

    <Bar dataKey="users" name="users" fill="#8884d8" />
  </BarChart>
  <div className ="label">Total Visit</div>
</div>
  )
}