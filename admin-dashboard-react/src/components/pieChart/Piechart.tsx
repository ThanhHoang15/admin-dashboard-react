import "./pieChart.scss"
import { Pie, PieChart,Tooltip } from 'recharts';



const pieChartData = [
  { name: 'Mobile', value: 50, fill: '#3b82f6' },
  { name: 'Desktop', value: 20, fill: '#4fd1c5' },
  { name: 'Laptop', value: 30, fill: '#f6c344' },
]



export const Piechart = () => {
  return (
    <div className="pieChart">
        <div className="label">Leads By Source</div>
        <PieChart
            style={{
            width: '100%',
            maxWidth: '500px',
            maxHeight: '80vh',
            aspectRatio: 1,
            }}
            responsive
        >
            <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
            contentStyle={{
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
            }}
            itemStyle={{
                color: 'white',
            }}
            />
            <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="name"
            innerRadius="70%"
            outerRadius="90%"
            cornerRadius={50}
            paddingAngle={5}
            />
        </PieChart>
        <div className="chartInfo">
            <div className="mobile">
                <span>O</span>
                <div className="mobileLabel"> Mobile</div>
            </div>
            <div className="desktop">
                <span>O</span>
                <div className="desktopLabel"> Desktop</div>          
            </div>
            <div className="laptop">
                <span>O</span>
                <div className="laptopLabel">Laptop</div>
            </div>
        </div>

    </div>
  )
}
