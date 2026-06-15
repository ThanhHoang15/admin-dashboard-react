
import { Datagrid } from "../../components/dataGrid/Datagrid";
import { columns, userRows} from "../../data";
import "./users.scss";

import { useState } from "react";
import { Adduser } from "../../components/addUser/Adduser";







export const Users = () => {
  const [open, setOpen] = useState(false)




  return (
    <div className="users">
      <div className="userContainer">
        <div className="label">Users</div>
        <div className="addButton" onClick={() => setOpen(true)}>Add New User</div>
      </div>
      <Datagrid columns={columns} rows={userRows}  
      />
      {open && <Adduser slug="user" column={columns} setOpen={setOpen}/>}
    </div>
  );
};
