import "./chartbox.scss"
import { Link } from "react-router-dom"
import { LineChart, Line, Tooltip } from "recharts";



const data = [
  {
    name: "Sun",
    uv: 2400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Mon",
    uv: 1398,
    pv: 1398,
    amt: 1398,
  },
  {
    name: "Tue",
    uv: 9800,
    pv: 9800,
    amt: 9800,
  },
  {
    name: "Wed",
    uv: 3908,
    pv: 3908,
    amt: 3908,
  },
  {
    name: "Thu",
    uv: 4800,
    pv: 4800,
    amt: 4800,
  },
  {
    name: "Fri",
    uv: 3800,
    pv: 3800,
    amt: 3800,
  },
  {
    name: "Sat",
    uv: 4300,
    pv: 4300,
    amt: 4300,
  },
];

type Props = {
  color: string,
  icon: string,
  title: string,
  number: number,
  dataKey: string,
  percentage: number,
  chartData: Object []  
}



export const Chartbox = (props : Props) => {
  return (
    <div className="chartBox">
        <div className="left">
            <div className="title">
                <img src="user.svg" alt="" />
                <span>{props.title}</span>
            </div>
            <h1 className="value">11.238</h1>
            <Link to = "/" style={{color : "#71e11c"}}>View All</Link>
        </div>


        <div className="right">
            <div className="chart">
                <LineChart width={150} height={60} data={props.chartData} >
                  <Tooltip
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 10, y: 50 }}/>
                  <Line 
                    type="monotone"
                    dataKey= {props.dataKey}
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
            </div>
            <div className="chartInfo">
                <div className="percentage">{props.percentage}</div>
                <div className="duration">this month</div>
            </div>

        </div>

    </div>
  )
}
