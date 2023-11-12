import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const Recent = (props) => {
  return (
    <Paper
      sx={{
        marginTop: "10px",
        padding: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          {props.title}
        </Typography>
        <Typography>{props.name}</Typography>
      </Box>
      <Typography>{props.date}</Typography>
      <Typography
        sx={{
          backgroundColor: "#c82a2a",
          padding: "10px",
          borderRadius: "4px 10px 10px 4px",
        }}
      >
        {" "}
        {props.price}{" "}
      </Typography>
    </Paper>
  );
};

export default Recent;
