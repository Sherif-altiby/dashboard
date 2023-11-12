import React from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from "./Data";

const ContactInfo = () => {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid
        slots={{
          toolbar: GridToolbar,
        }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
};

export default ContactInfo;
