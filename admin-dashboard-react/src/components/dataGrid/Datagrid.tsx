import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./dataGrid.scss";

type Props = {
  columns: GridColDef[];
  rows: object[];
};

export const Datagrid = (props: Props) => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      {" "}
  
      <DataGrid
        className="dataGrid"
        rows={props.rows}          
        columns={props.columns}     
                                   

        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 15, 
            },
          },
        }}
        showToolbar 
        slotProps={{
          toolbar: {
            showQuickFilter: true, 
            quickFilterProps: { debounceMs: 500 }, 
          },
        }}
        pageSizeOptions={[5, 10, 15]} 
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector 
      />
    </Box>
  );
};
