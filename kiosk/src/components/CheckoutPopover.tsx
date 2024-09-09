import React from 'react';
import { Box, Button, Popover, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
interface CheckoutPopoverProps {
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
  id?: string;
}

const CheckoutPopover: React.FC<CheckoutPopoverProps> = ({ anchorEl, open, onClose, id }) => {

    const navigate = useNavigate();  

  const handlePayNowClick = () => {
    onClose();
    navigate('/PaymentPage');
    
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
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
          width: '20vw', // Flexible width
          maxWidth: '1100px', // Maximum width
          height: '30vh', // Flexible height
          maxHeight: '550px', // Maximum height
        },
      }}
    >
      <Box sx={{ padding: '20px', height: '100%' }}>
        {/* Popover content */}
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
          <Button variant="contained" color="primary" onClick={onClose}>
            Order More
          </Button>
          <Button variant="contained" color="primary" onClick={handlePayNowClick}>
            Pay Now
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default CheckoutPopover;

