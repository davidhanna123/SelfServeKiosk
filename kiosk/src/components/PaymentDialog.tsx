import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@mui/system';

interface PaymentDialogProps {
  open: boolean;
  onClose: () => void;
  total: number;
}

// Keyframes for blinking dots animation
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const PaymentDialog: React.FC<PaymentDialogProps> = ({ open, onClose, total }) => {
  const [buttonText, setButtonText] = useState('Pay Now');
  const [message, setMessage] = useState(`Your total is: $${total.toFixed(2)}`);
  const [isProcessing, setIsProcessing] = useState(false); // State to track payment processing
  const navigate = useNavigate();
  const pointsEarned = Math.floor(total) * 100;

  const handlePayment = () => {
    if (isProcessing) return; // Prevent action if already processing

    setIsProcessing(true); // Set processing state to true
    setButtonText('Authorizing');
    setTimeout(() => {
      setButtonText('Transaction Completed');
      setMessage(''); // Clear the initial message
      setTimeout(() => {
        setMessage(`You earned ${pointsEarned} points today!`); // only if user logged in, (state)
        setTimeout(() => {
          navigate('/'); 
        }, 4000); // main page redirect delay
      }, 2000); // points earned message delay
    }, 2000); // authorization delay
  };

  // Prevent closing the dialog by clicking outside or pressing escape
  const handleBackdropClick = (event: React.SyntheticEvent) => {
    event.stopPropagation(); // Prevent event from propagating to parent handlers
  };

  useEffect(() => {
    if (open) {
      setButtonText('Pay Now');
      setMessage(`Your total is: $${total.toFixed(2)}`);
      setIsProcessing(false); // Reset processing state when dialog opens
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
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
        {!isProcessing && (
          <Button onClick={onClose} sx={{ minWidth: '100px' }}>Cancel</Button>
        )}
        <Button
          onClick={handlePayment}
          disabled={isProcessing} // Disable the button while processing
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

