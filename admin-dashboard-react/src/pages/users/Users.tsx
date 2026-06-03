import { GridColDef } from "@mui/x-data-grid";
import { Datagrid } from "../../components/dataGrid/Datagrid";
import { rows } from "../../data";
import "./users.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Adduser } from "../../components/addUser/Adduser";



const handleClick = (id : number) => {
  return(
    console.log(`delete ID: ${id}`)
  )
}

const columns: GridColDef[] = [
  //create a GridColDef array type --> store list of column
  { field: "id", headerName: "ID", width: 20 }, // adjust width of ID column here

  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />; //row is built in DataGrid --> params is an object contain row property
    },
    headerAlign: "center",
    align: "center",
  },
  {
    field: "verified",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150, // adjust width of first name column here
    type: "string",
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150, // adjust width of last name column here
    editable: true,
    type: "string",
  },

  {
    field: "email",
    headerName: "Email",
    width: 200, // adjust width of last name column here
    type: "string",
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150, // adjust width of last name column here
    editable: true,
    type: "number",
    headerAlign:"left",
    align:"left",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150, // adjust width of last name column here
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/users/${params.row.id}`}>
            <img src="/view.svg" alt="" />
          </Link>
          <div className="deleteUser" onClick={() => handleClick(params.row.id)} >
            <img src="/delete.svg" alt=""/>
          </div>
        </div>
      );
    },
    headerAlign: "center",
  },
];

export const Users = () => {
  const [open, setOpen] = useState(false)




  return (
    <div className="users">
      <div className="userContainer">
        <div className="label">Users</div>
        <div className="addButton" onClick={() => setOpen(true)}>Add New User</div>
      </div>
      <Datagrid columns={columns} rows={rows} />
      {open && <Adduser slug="user" column={columns} setOpen={setOpen}/>}
    </div>
  );
};
