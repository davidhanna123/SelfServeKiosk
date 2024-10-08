import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import LoginSignup from './LoginSignup';
import FastfoodIcon from '@mui/icons-material/Fastfood';

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleAuthAction = () => {
    if (isLoggedIn) {
      logout(); 
    } else {
      setIsDialogOpen(true);
    }
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false); 
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000000', height: '70px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          
        <FastfoodIcon color="secondary" sx={{ marginRight: 1 }} fontSize="large" />
          <Typography variant="h4" color="secondary"> 
            Self-Serve Kiosk
          </Typography>
        </Box>
        
        <Box>
          <Button color="secondary" variant='contained' onClick={handleAuthAction}>
            {isLoggedIn ? 'Sign Out' : 'Log In / Sign Up'}
          </Button>
        </Box>
      </Toolbar>
      <LoginSignup isOpen={isDialogOpen} closeFunction={handleCloseDialog} />
    </AppBar>
  );
};

export default NavBar;
