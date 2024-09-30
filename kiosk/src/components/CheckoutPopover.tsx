import React, { useState } from 'react';
import { Box, Button, Popover, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
interface CheckoutPopoverProps {
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
  id?: string;
}

const CheckoutPopover: React.FC<CheckoutPopoverProps> = ({ anchorEl, open, onClose, id }) => {
  const { cartItems,calculateTotalPrice } = useCart();
  const navigate = useNavigate();  
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePayNowClick = () => {
    const totalPrice = calculateTotalPrice();
    if (totalPrice > 0) {
      navigate('/PaymentPage');  
      onClose();
    } else {
      setErrorMessage('Please add more items to cart');
      console.log('Cart is empty, cannot proceed to checkout.');
    }
   
    
  };
  const handlePopoverClose = () => {
    setErrorMessage(''); 
    onClose(); 
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      PaperProps={{
        sx: {
          width: '20vw', 
          maxWidth: '1100px', 
          height: '30vh', 
          maxHeight: '550px', 
        },
      }}
    >
      <Box sx={{ padding: '20px', height: '100%' }}>
       
        <Typography variant="h6" component="div">
          Are you sure?
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'flex-start',
            gap: '16px',
            marginTop: '16px',
          }}
        >
          <Button variant="contained" color="primary" onClick={ handlePopoverClose}>
            Order More
          </Button>
          <Button variant="contained" color="primary" onClick={handlePayNowClick}>
            Pay Now
          </Button>
          {errorMessage && (
            <Typography color="error" variant="body2" sx={{ marginTop: '8px' }}>
              {errorMessage}
            </Typography>
          )}
        </Box>
      </Box>
    </Popover>
  );
};

export default CheckoutPopover;

