import { Datagrid } from "../../components/dataGrid/Datagrid";
import "./users.scss";



export const Users = () => {
  return (
    <div className="users">
      <div className="userContainer">
        <div className="label">Users</div>
        <div className="addButton">Add New User</div>
      </div>
      <Datagrid/>
    </div>
  )
}
