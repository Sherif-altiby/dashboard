import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TopBar from './components/TopBar';
import AsidBar from './components/AsidBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {getDesignTokens} from './components/Theme';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : "light" );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (

    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

    <TopBar open={open} handleDrawerOpen={handleDrawerOpen}  setMode={setMode}  /> 

    <AsidBar open={open} handleDrawerClose={handleDrawerClose} />


      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      
      <Outlet />
        
      </Box>
    </Box>
    </ThemeProvider>
  );
}


