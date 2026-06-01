import { Box } from "@mui/material";
import { DataGrid, GridColDef} from "@mui/x-data-grid";
import "./dataGrid.scss";


export const Datagrid = () => {

    const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 20 },    // adjust width of ID column here

    {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
        return <img src={params.row.img || "/noavatar.png"} alt="" />
    }
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



  
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,                             // adjust width of fullname column here
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,        //add first name and last name together
//   },
    ];
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


  return (
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}


        showToolbar      // Add the built-in toolbar above the table: Search, Filter, Column options, and Export buttons
        slotProps={{
        toolbar: {
            showQuickFilter: true,      // Show the search box at the top of the grid
            quickFilterProps: { debounceMs: 500 },  // Wait 500 milliseconds after the user stops typing
        },
        }}



        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector // disable column selector
      />
    </Box>
  )
}
