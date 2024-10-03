import React, { useState } from 'react';

import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import LoginSignup from './LoginSignup';

const NavBar = () => {
  
  const { isLoggedIn, username, login, logout } = useAuth();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleAuthAction = () => {
    if (isLoggedIn) {
      logout(); // Call logout when the user is logged in
    } else {
      setIsDialogOpen(true);
    }
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false); // Close the dialog
  };
  
 //'#000000'
 //(theme) => theme.palette.background.default
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#000000', height: '70px' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', 
          alignItems: 'center'
        }}
      >
        
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            Kiosk
          </Typography>
        </Box>
        
       
        <Box>
          <Button color="secondary" variant='contained'  onClick={handleAuthAction}>
            {isLoggedIn ? 'Sign Out' : 'Log In / Sign Up'}
          </Button>
        </Box>
      </Toolbar>
      <LoginSignup isOpen={isDialogOpen} closeFunction={handleCloseDialog} />
    </AppBar>
  );
};

export default NavBar;
