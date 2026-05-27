import "./barChartRight.scss"
import { BarChart, Bar } from 'recharts';
import {barChartRight} from "../../data";
import { Tooltip } from "recharts";





export const BarchartRight = () => {
  return (
<div className="barChartRight">
<BarChart
  style={{
    width: '100%',
    maxWidth: '300px',
    maxHeight: '100px',
    aspectRatio: 1.618,
  }}
  responsive
  data={barChartRight}
    >
  <Tooltip
    formatter={(value) => [`$${value.toLocaleString()}`, 'Profit']}
    contentStyle={{
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
    }}
    itemStyle={{ color: 'yellow' }}
    labelStyle={{ color: 'yellow' }}
    cursor={{ fill: 'transparent' }}
    labelFormatter={(label, payload) => {
      return payload?.[0]?.payload?.month
    }}
    />

  <Bar dataKey="profit" name= "profit" fill="#2acb67" />
</BarChart>
    <div className ="label">Profit Earned</div>
</div>
  )
}