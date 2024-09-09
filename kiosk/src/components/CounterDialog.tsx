import React, { useEffect } from 'react';
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Function to generate a random 3-digit order number
const generateOrderNumber = () => Math.floor(100 + Math.random() * 900);

interface CounterDialogProps {
  open: boolean;
}

const CounterDialog: React.FC<CounterDialogProps> = ({ open }) => {
  const navigate = useNavigate();
  const orderNumber = generateOrderNumber(); // Generate order number

  useEffect(() => {
    if (open) {
      // Redirect after a delay
      const timer = setTimeout(() => {
        navigate('/'); // Redirect to the main page
      }, 3000); // Delay 

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [open, navigate]);

  return (
    <Dialog
      open={open}
      onBackdropClick={(event) => event.stopPropagation()} // Prevent closing by clicking outside
      disableEscapeKeyDown // Prevent closing by pressing escape key
      sx={{
        '& .MuiDialog-paper': {
          width: '400px',  //width
          height: '300px', //height
        },
      }}
    >
      <DialogContent sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6">
          Please pay at the counter. Order Number: {orderNumber}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CounterDialog;
