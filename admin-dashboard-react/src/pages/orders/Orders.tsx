import { useState } from "react"
import { Datagrid } from "../../components/dataGrid/Datagrid"
import { orderColumns, orderRows } from "../../data"
import "./orders.scss"
import { Addorder } from "../../components/addOrder/Addorder"



export const Orders = () => {

  const [open, setOpen] = useState(false)
  return (
    
   <div className="orders">
    <div className="orderContainer">
      <div className="label">Orders</div>
      <button className="addNewOrder" onClick={() => setOpen(true)}>Add New Order</button>
    </div>
      <Datagrid rows = {orderRows} columns={orderColumns}/>
      {open && <Addorder setOpen = {setOpen}/>}
    </div>
   
  )
}
