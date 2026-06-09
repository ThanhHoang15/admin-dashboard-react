import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "./single.scss"


type Props = {
  user: {
    id: number;
    title: string;
    img: string;
    info: {
      [key: string]: string;
    };
    chart: {
      dataKeys: {
        name: string;
        color: string;
      }[];
      data: {
        name: string;
        [key: string]: string | number;
      }[];
    };
    activities: {
      text: string;
      time: string;
    }[];
  };
};





export const Single = (props: Props) => {
    return (
        <div className="single">
            <div className="leftInfo">
                <div className="header">
                    <img src={props.user.img} alt="" />
                    <h1>{props.user.title}</h1>
                    <button>Update</button>
                </div>

                <div className="userInfo">
                    {Object.entries(props.user.info).map((item) => (
                        <div key={item[0]}>
                            {item[0]}: {item[1]}


                        </div>
                    ))}
                </div>






                <LineChart
                    style={{
                        width: "80%",
                        maxWidth: "700px",
                        height: "100%",
                        maxHeight: "70vh",
                        aspectRatio: 1.618,
                    }}
                    responsive
                    data={props.user.chart.data}    //take data[]
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
                    <XAxis dataKey="name" stroke="var(--color-text-3)" />
                    <YAxis width="auto" stroke="var(--color-text-3)" />
                    <Tooltip />
                    <Legend />
                    {props.user.chart.dataKeys.map((item) => (
                        <Line
                            key={item.name}
                            type="monotone"
                            dataKey={item.name}        //take the property
                            stroke={item.color}         //take the property
                            dot={{
                                fill: "var(--color-surface-base)",
                            }}
                            activeDot={{
                                r: 8,
                                stroke: "var(--color-surface-base)",
                            }}
                        />
                    ))}
                </LineChart>
            </div>
            <div className="rightInfo">
                <h1>Latest Activities</h1>


                {
                    props.user.activities.map(item => {
                        return (

                            <ul>
                                <li>
                                    <div>
                                        <p>{item.text}</p>
                                        <time>{item.time}</time>
                                    </div>
                                </li>

                            </ul>
                        )
                    })
                }
            </div>
        </div>
    );
};
