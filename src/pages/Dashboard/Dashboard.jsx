import React from "react";
import Row1 from "../../components/Row1";
import Row2 from "../../components/Row2";
import Row3 from "../../components/Row3";
import { Box, Button } from "@mui/material";
import { DownloadDoneOutlined, DownloadOutlined } from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained">
          <DownloadOutlined />
          DOWNLOAD REPORTS
        </Button>
      </Box>

      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default Dashboard;
