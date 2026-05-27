import "./pieChart.scss"
import { Pie, PieChart } from 'recharts';



const pieChartData = [
  { name: 'Mobile', value: 50, fill: '#3b82f6' },
  { name: 'Desktop', value: 20, fill: '#4fd1c5' },
  { name: 'Laptop', value: 30, fill: '#f6c344' },
]



export const Piechart = () => {
  return (
    <div className="pieChart">
        <div className="label">Leads By Source</div>
         <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
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

    </div>
  )
}
