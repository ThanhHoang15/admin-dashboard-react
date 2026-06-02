import { GridColDef } from "@mui/x-data-grid";
import { Datagrid } from "../../components/dataGrid/Datagrid";
import { rows } from "../../data";
import "./users.scss";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 20 },    // adjust width of ID column here

  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={ params.row.img || "/noavatar.png" } alt = "" />
      },
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: "verified",
    headerName: "Status",
    width: 100,
    type: 'boolean',
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,                             // adjust width of first name column here
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,                             // adjust width of last name column here
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',                      // adjust width of age column here
    type: 'number',
    width: 110,
    editable: true,
    align: 'left',                          // adjust data left right center
    headerAlign: 'left',                     // adjust header left right center
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,                             // adjust width of last name column here
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 150,                             // adjust width of last name column here
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,                             // adjust width of last name column here
    editable: true,
  },
];


export const Users = () => {
  return (
    <div className="users">
      <div className="userContainer">
        <div className="label">Users</div>
        <div className="addButton">Add New User</div>
      </div>
      <Datagrid  columns={columns} rows = {rows}/>
    </div>
  )
}
