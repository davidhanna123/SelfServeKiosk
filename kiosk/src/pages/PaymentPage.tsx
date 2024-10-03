import React, { useState } from 'react';
import { Button, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import PaymentDialog from '../components/PaymentDialog';
import CounterDialog from '../components/CounterDialog';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '@mui/material/styles'; 

const PaymentPage = () => {
  const { cartItems, calculateTotalPrice } = useCart();
  const totalPrice = calculateTotalPrice();
  const [selection, setSelection] = useState<'dineIn' | 'takeOut' | null>(null);
  const [dialogType, setDialogType] = useState<'payment' | 'counter' | null>(null);
  const { isLoggedIn, username } = useAuth();

  const theme = useTheme();

  const handleOpenPaymentDialog = () => {
    setDialogType('payment');
  };

  const handleOpenCounterDialog = () => {
    setDialogType('counter');
  };

  const handleCloseDialog = () => {
    setDialogType(null);
    setSelection(null);
  };
  //edit typographies later in theme
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full viewport height
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ color: theme.palette.primary.contrastText }} gutterBottom>
        {isLoggedIn ? `Hello, ${username}! You are earning points today.` : 'Your order:'}
      </Typography>
      
      
      <Box
        sx={{
          width: '400px',
          height: '500px',
          backgroundColor: (theme) => theme.palette.background.paper,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px', 
          overflow: 'hidden', // Prevent overflow in parent Box
        }}
      >
        <List sx={{ overflowY: 'auto', flexGrow: 1 }}> 
          {cartItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem>
                <ListItemText
                primary={`${item.name}${item.quantity > 1 ? ` (x${item.quantity})` : ''}`} 
                secondary={`${item.notes ? `Notes: ${item.notes}, ` : ''}
                Price: $${(item.price * item.quantity).toFixed(2)}`} 
                />
              </ListItem>
              {index < cartItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>

        
        <Box textAlign="right" sx={{ padding: 1 }}> 
          <Divider />
          <Typography variant="h6" gutterBottom>
            Total: ${totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Box>

     
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Button variant="contained" color='secondary'onClick={() => setSelection('dineIn')}>
          Dine In
        </Button>
        <Button variant="contained" color='secondary' onClick={() => setSelection('takeOut')}>
          Take Out
        </Button>
      </Box>

      
      {selection && (
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color='secondary' onClick={handleOpenPaymentDialog}>
            Pay Here
          </Button>
          <Button variant="contained" color='secondary' onClick={handleOpenCounterDialog}>
            Pay at the Counter
          </Button>
        </Box>
      )}

      
      {dialogType === 'payment' && (
        <PaymentDialog open={dialogType === 'payment'} onClose={handleCloseDialog} total={totalPrice} />
      )}
      {dialogType === 'counter' && (
        <CounterDialog open={dialogType === 'counter'} />
      )}
    </Box>
  );
};

export default PaymentPage;
