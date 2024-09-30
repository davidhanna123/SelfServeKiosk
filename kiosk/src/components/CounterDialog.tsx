import React, { useEffect } from 'react';
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';



interface CounterDialogProps {
  open: boolean;
}

const CounterDialog: React.FC<CounterDialogProps> = ({ open }) => {
  const navigate = useNavigate();
  const orderNumber = Math.floor(100 + Math.random() * 900);
  const { logout } = useAuth();
  const { clearCart } = useCart ();

  useEffect(() => {
    if (open) {
      // Redirect after a delay
      const timer = setTimeout(() => {
        logout();
        clearCart();
        //clear all context
        navigate('/'); //  main page
      }, 3000); // delay 

      return () => clearTimeout(timer); 
    }
  }, [open, navigate]);

  return (
    <Dialog
      open={open}
      onBackdropClick={(event) => event.stopPropagation()} 
      disableEscapeKeyDown 
      sx={{
        '& .MuiDialog-paper': {
          width: '400px',  
          height: '300px', 
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
