import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false); // Example state
  // get app state later 

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between', // Ensures the title and button are spaced apart
          alignItems: 'center',
        }}
      >
        {/* Centering title */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            Kiosk
          </Typography>
        </Box>
        
        {/* Button aligned to the right */}
        <Box>
          <Button color="inherit" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Sign Out' : 'Log In / Sign Up'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
