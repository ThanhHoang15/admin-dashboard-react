import "./home.scss";
import {Topbox} from "../../components/topBox/Topbox";
import { Chartbox } from "../../components/chartBox/Chartbox";
import {chartBoxUser} from "../../data.ts";

export const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox/>
      </div>
      <div className="box box2"><Chartbox {...chartBoxUser}/></div>
      <div className="box box3"><Chartbox/></div>
      <div className="box box4">box6</div>
      <div className="box box5"><Chartbox/></div>
      <div className="box box6"><Chartbox/></div>
      <div className="box box7">box7</div>
      <div className="box box8">box8</div>
      <div className="box box9">box9</div>
    </div>
  )
}
