import React, { useState, useEffect } from 'react';
import { Box, Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';
import axios, { AxiosError } from 'axios';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import FastfoodIcon from '@mui/icons-material/Fastfood';

interface PaymentDialogProps {
  open: boolean;
  onClose: () => void;
  total: number;
}

// blinking dots animation
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;
const API_BASE_URL = 'http://localhost:3001/auth';
const PaymentDialog: React.FC<PaymentDialogProps> = ({ open, onClose, total }) => {
  const [buttonText, setButtonText] = useState('Pay Now');
  const [message, setMessage] = useState(`Your total is: $${total.toFixed(2)}`);
  const [isProcessing, setIsProcessing] = useState(false); 
  const navigate = useNavigate();
  const newPoints = Math.floor(total) * 100;
  const { isLoggedIn, username,logout } = useAuth();
  const { clearCart } = useCart ();
  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_BASE_URL}/points/${username}`, { points: newPoints });
      
      
      if (response.status === 200) {
        console.log('Points updated successfully:', response.data.message);
        setMessage(`You earned ${newPoints} points today!`); 

      } else if (response.status === 400) {
        console.error('Bad request:', response.data.error);
      } else if (response.status === 404) {
        console.error('User not found:', response.data.error);
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
       
        console.error('Error updating points:', error.response?.data?.error || error.message);
      } else {
        
        console.error('Unexpected error:', error);
      }
    }
  };

  const handlePayment = () => {
    if (isProcessing) return; 

    setIsProcessing(true); 
    setButtonText('Authorizing');
    setTimeout(() => {
      setButtonText('Transaction Completed');
      setMessage(''); 
      setTimeout(() => {
        if (isLoggedIn){
          handleUpdate();
          
        }
        else{
          setMessage(`log in to earn points!`); 
        }
        setTimeout(() => {
          logout();
          clearCart();
          //clear all context stuff here
          navigate('/'); 
        }, 4000); // main page redirect delay
      }, 2000); // points earned message delay
    }, 2000); // authorization delay
  };

  
  const handleBackdropClick = (event: React.SyntheticEvent) => {
    event.stopPropagation(); 
  };

  useEffect(() => {
    if (open) {
      setButtonText('Pay Now');
      setMessage(`Your total is: $${total.toFixed(2)}`);
      setIsProcessing(false); 
    }
  }, [open, total]);

  return (
    <Dialog
      open={open}
      onClose={() => {}} 
      onBackdropClick={handleBackdropClick} 
      disableEscapeKeyDown 
      sx={{
        '& .MuiDialog-paper': {
          width: '400px',  // Set the width of the dialog
          height: '300px', // Set the height of the dialog
        },
      }}
    >
      <DialogContent sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6" sx={{ transition: 'opacity 0.5s ease-in-out' }}>
          {message}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 9 }}>
          <FastfoodIcon fontSize="large" />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
        {!isProcessing && (
          <Button onClick={onClose} sx={{ minWidth: '100px' }}>Cancel</Button>
        )}
        <Button
          onClick={handlePayment}
          disabled={isProcessing} 
          sx={{
            minWidth: '120px',
            '&::after': {
              content: buttonText === 'Authorizing' ? '"..."' : '""',
              animation: buttonText === 'Authorizing' ? `${blink} 1s infinite` : 'none',
            },
          }}
        >
          {buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PaymentDialog;

