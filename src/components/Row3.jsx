import React from "react";
import BarChart from "../components/BarChart";
import BieChart from "../components/BieChart";
import Geo from "../components/Geo";
import { Paper, Stack } from "@mui/material";

const Row3 = () => {
  return (
    <Stack direction={'row'} gap={1} mt={1}  flexWrap={'wrap'}   >  
      <Paper sx={{width :"32%"   , minWidth :"300px", flexGrow :1    }     } >
        <BieChart  isDashboard={true} />
      </Paper>

      <Paper sx={{width :"33%" , minWidth :"300px", flexGrow :1   }     } >  
        <BarChart  isDashboard={true}  />
      </Paper>

      <Paper sx={{width :"33%" , minWidth :"300px", flexGrow :1   }        } >
        <Geo  isDashboard={true}/>
      </Paper>
    </Stack>
  );
};

export default Row3;
