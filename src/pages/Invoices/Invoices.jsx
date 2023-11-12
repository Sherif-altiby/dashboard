import React from 'react';
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./Data";



const Invoices = () => {
  return (
<Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
      checkboxSelection
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}

export default Invoices;
