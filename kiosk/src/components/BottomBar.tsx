import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material';
import CartPopover from './CartPopover';
import CheckoutPopover from './CheckoutPopover';
import { useAuth } from '../context/AuthContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../context/CartContext';

const BottomBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [checkoutAnchorEl, setCheckoutAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { isLoggedIn, username, points } = useAuth();
  const { cartItems } = useCart();

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
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#000000',height: '80px' }}>
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'

      }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" >
        {isLoggedIn ? (
          <>
          Welcome <strong>{username}</strong>!
          <br />
          you have {points} points
          </>
          ) : ('Log In to earn points!')} 
        </Typography>
        </Box>
        
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'right'}}>
        
          <Button 
          variant='contained'
          color="secondary" 
          onClick={handleCartClick}
          sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}
          >
          
          <Typography sx={{ marginRight: 1}}>
            Cart
          </Typography>
          <Badge 
              badgeContent={cartItems.reduce((total, item) => total + item.quantity, 0)} 
              color="primary" 
              
            >
          <ShoppingCartIcon />
          </Badge>
            
          </Button>
          
          <CartPopover 
            anchorEl={anchorEl} 
            open={cartOpen} 
            onClose={handleClose} 
            id={cartId} 
          />

          <Button 
          variant='contained'
          color="secondary" 
          onClick={handleCheckoutClick}
          
          >
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