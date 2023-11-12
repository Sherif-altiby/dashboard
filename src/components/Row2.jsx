import { Box, Stack, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import LineChart from "./LineChart";
import { Download } from "@mui/icons-material";
import Recent from "../pages/Dashboard/Recent";

const Row2 = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"} mt={1} flexWrap={"wrap"} gap={2}>
      <Paper sx={{ maxWidth: "900px", flexGrow: 1, minWidth: "380px" }}>
        <Stack
          direction={"row"}
          padding={3}
          justifyContent={"space-between"}
          marginBottom={"-40px"}
        >
          <Box>
            <Typography
              sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
            >
              Revenue generated
            </Typography>
            <Typography sx={{ mt: "10px" }}>$ 56.342.84</Typography>
          </Box>
          <Box>
            <Download />
          </Box>
        </Stack>

        <LineChart isDashboard={true} />
      </Paper>

      <Box sx={{ flexGrow: 1, height: "360px", minWidth: "250px" }}>
        <Paper>
          <Typography
            sx={{
              textAlign: "center",
              color: theme.palette.secondary.main,
              fontWeight: "bold",
              padding: "10px",
            }}
          >
            Recent Transactions
          </Typography>
        </Paper>

        <Recent
          title="01e4dsaewf"
          name="Jhonedoe"
          date="2023-7-28"
          price="$123.5"
        />
        <Recent
          title="01e4dsaewf"
          name="Jhonedoe"
          date="2023-7-28"
          price="$123.5"
        />
        <Recent
          title="01e4dsaewf"
          name="Jhonedoe"
          date="2023-7-28"
          price="$123.5"
        />
        <Recent
          title="01e4dsaewf"
          name="Jhonedoe"
          date="2023-7-28"
          price="$123.5"
        />
      </Box>
    </Stack>
  );
};

export default Row2;
