import "./revenueChart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { revenueChart } from "../../data";



export const Revenuechart = () => {
  return (
    <div className="revenueChart">
        <div className="label">Revenue Analytics</div>
 <AreaChart
  style={{
    width: '100%',
    maxWidth: '700px',
    maxHeight: '70vh',
    aspectRatio: 1.618,
  }}
  responsive
  data={revenueChart}
  margin={{
    top: 20,
    right: 0,
    left: 0,
    bottom: 0,
  }}
>
 

  <XAxis dataKey="day" />

  <YAxis width="auto" />

  <Tooltip
  contentStyle={{
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
  }}
  itemStyle={{
    color: 'white',
  }}
  cursor={{
    stroke: 'none',
  }}
/>

  <Area
    type="monotone"
    dataKey="mobile"
    stackId="1"
    stroke="#8884d8"
    fill="#8884d8"
  />

  <Area
    type="monotone"
    dataKey="desktop"
    stackId="1"
    stroke="#82ca9d"
    fill="#82ca9d"
  />

  <Area
    type="monotone"
    dataKey="tablet"
    stackId="1"
    stroke="#ffc658"
    fill="#ffc658"
  />
</AreaChart>
    </div>
  )
}
