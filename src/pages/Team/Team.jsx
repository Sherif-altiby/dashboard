import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./Data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              padding: "10px",
              width: "100px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "User"
                  ? theme.palette.secondary.dark
                  : "#1d415e",
            }}
          >
            {access === "Admin" ? (
              <AdminPanelSettingsOutlined  sx={{color:"#fff", fontSize :"20px"}}/>
            ) :   access === "User" ? (
              <LockOpenOutlined  sx={{color:"#fff", fontSize :"20px"}} />
            ) : (
              <SecurityOutlined   sx={{color:"#fff", fontSize :"20px"}} />
            )}

            <Typography sx={{ fontSize: "13px" , color:"#fff"}}> {access} </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 600 , width : "98%" , mx : "auto"}}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
