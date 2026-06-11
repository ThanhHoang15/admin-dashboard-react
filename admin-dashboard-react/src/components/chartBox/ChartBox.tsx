import "./chartBox.scss";
import { Link } from "react-router-dom";
import { LineChart, Line, Tooltip } from "recharts";



type Props = {
  color: string;
  icon: string;
  title: string;
  number: string;
  dataKey: string;
  percentage: number;
  chartData: Object[];
};

export const Chartbox = (props: Props) => {
  return (
    <div className="chartBox">
      <div className="left">
        <div className="title">
          <img src= {props.icon} alt="img"  />
          <span>{props.title}</span>
        </div>
        <h1 className="value">{props.number}</h1>
        <Link to="/" style={{ color: "#71e11c" }}>
          View All
        </Link>
      </div>

      <div className="right">
        <div className="chart">
          <LineChart width={150} height={60} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: 10, y: 50 }}
            />
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </div>
        <div className="chartInfo">
          <div
            className="percentage"
            style={{ color: props.percentage > 0 ? "yellowgreen" : "tomato" }}
          >
            {props.percentage}%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};
