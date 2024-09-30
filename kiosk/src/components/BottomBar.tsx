import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import CartPopover from './CartPopover';
import CheckoutPopover from './CheckoutPopover';
import { useAuth } from '../context/AuthContext';

const BottomBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [checkoutAnchorEl, setCheckoutAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { isLoggedIn, username } = useAuth();

  const handleCartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCheckoutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCheckoutAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCheckoutAnchorEl(null);
  };

  const cartOpen = Boolean(anchorEl);
  const checkoutOpen = Boolean(checkoutAnchorEl);
  const cartId = cartOpen ? 'cart-popover' : undefined;
  const checkoutId = checkoutOpen ? 'checkout-popover' : undefined;

  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
        <Typography variant="h6" component="div">
            {isLoggedIn ? `Welcome, ${username}` : 'Log in to earn points!'} 
          </Typography>
        </Box>
        
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right' }}>
          <Button color="inherit" onClick={handleCartClick}>
            Cart
          </Button>

          <CartPopover 
            anchorEl={anchorEl} 
            open={cartOpen} 
            onClose={handleClose} 
            id={cartId} 
          />

          <Button color="inherit" onClick={handleCheckoutClick}>
            Check Out
          </Button>

          <CheckoutPopover 
            anchorEl={checkoutAnchorEl} 
            open={checkoutOpen} 
            onClose={handleClose} 
            id={checkoutId} 
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
