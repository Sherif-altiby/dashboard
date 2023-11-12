import { Paper, Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import {data , data1 , data2 , data3} from '../pages/Dashboard/Data';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';

const Row1 = () => {
  const theme = useTheme();

  return (
    <div>
      <Stack
        direction={"row"}
        sx={{  flexWrap: "wrap",  gap: "10px",  justifyContent: "center",  mt: "20px", }}  >


        <Card
          icon={<EmailIcon    sx={{  fontSize: "23px",  color : theme.palette.info.light}}  />  }
          title={"12.23"}
          subtitle={"Emial"}
          presentage={"21 %"}
          data = {data1} 
          color = {'pastel2'}
          />


        <Card
          icon={<PointOfSaleIcon    sx={{  fontSize: "23px", color : theme.palette.info.light }}  />  }
          title={"12.23"}
          subtitle={"Emial"}
          presentage={"21 %"}
          data = {data2} 
          color = {'paired'}
          />


        <Card
          icon={<PersonAddIcon    sx={{  fontSize: "23px", color : theme.palette.info.light }}  />  }
          title={"12.23"}
          subtitle={"Emial"}
          presentage={"21 %"}
          data = {data}  
          color = {'accent'}
          />

          
        <Card
          icon={<TrafficIcon    sx={{  fontSize: "23px",  color : theme.palette.info.light}}  />  }
          title={"12.23"}
          subtitle={"Emial"}
          presentage={"21 %"}
          data = {data3} 
          color = {'category10'}
          />


      </Stack>

      
    </div>
  );
};

export default Row1;
