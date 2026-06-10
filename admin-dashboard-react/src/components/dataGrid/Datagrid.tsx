import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./dataGrid.scss";



type Props = {
columns : GridColDef[],
rows : object[],
}



export const Datagrid = (props : Props) => {


  return (
    <Box sx={{ height: '100%', width: '100%'  }}>         {/* make box 100% view */}
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15,     //show 1 page 10 users
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



        pageSizeOptions={[5, 10, 15]}     //page size option
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector // disable column selector
      />
    </Box>
  )
}
