import "./topBox.scss";
import {topDealUsers} from "../../data.tsx";





export const Topbox = () => {
  return (
    <div className="topBox">
    <div className="topDeals">Top Deals</div>
    {topDealUsers.map((item) => {
    return (
        <div className="userContainer" key ={item.id}>
            <div className="infoContainer">
                <img src={item.img} alt="" />
                <div className="customerInfo">
                    <div className="userName">{item.username}</div>
                    <span className="email">{item.email}</span>
                </div>
            </div>
            <span className="amount">${item.amount}</span>
        </div>)
    }
    )} 
    </div>
  )
}
