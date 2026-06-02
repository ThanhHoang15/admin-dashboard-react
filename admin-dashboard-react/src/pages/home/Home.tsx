import "./home.scss";
import {Topbox} from "../../components/topBox/Topbox";
import { Chartbox } from "../../components/chartBox/Chartbox";
import { BarchartLeft} from "../../components/barChart/BarchartLeft";
import { BarchartRight} from "../../components/barChart/barChartRight";
import {chartBoxUser, chartBoxRevenue, chartBoxProducts, chartBoxRatio} from "../../data";
import { Revenuechart } from "../../components/revenueChart/Revenuechart.tsx";
import {Piechart} from "../../components/pieChart/Piechart.tsx"

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox {...chartBoxRevenue}/></div>
      <div className="box box4"><Piechart/></div>
      <div className="box box5"><Chartbox {...chartBoxProducts}/></div>
      <div className="box box6"><Chartbox {...chartBoxRatio}/></div>
      <div className="box box7"><Revenuechart/></div>
      <div className="box box8"><BarchartLeft/></div>
      <div className="box box9"><BarchartRight/></div>
    </div>
  )
}
