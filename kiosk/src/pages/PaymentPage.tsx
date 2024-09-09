//need to tweak

import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import PaymentDialog from '../components/PaymentDialog';
import CounterDialog from '../components/CounterDialog';

const PaymentPage = () => {
  const total: number = 99.99;
  const [selection, setSelection] = useState<'dineIn' | 'takeOut' | null>(null);
  const [dialogType, setDialogType] = useState<'payment' | 'counter' | null>(null);

  
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Make sure it takes full viewport height
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Total is: ${total.toFixed(2)}
      </Typography>

      {/* Dine In and Take Out buttons */}
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Button variant="contained" onClick={() => setSelection('dineIn')}>
          Dine In
        </Button>
        <Button variant="contained" onClick={() => setSelection('takeOut')}>
          Take Out
        </Button>
      </Box>

      {/* Conditional rendering of payment options */}
      {selection && (
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" onClick={handleOpenPaymentDialog}>
            Pay Here
          </Button>
          <Button variant="contained" onClick={handleOpenCounterDialog}>
            Pay at the Counter
          </Button>
        </Box>
      )}

      {/* Conditional rendering of dialogs */}
      {dialogType === 'payment' && (
        <PaymentDialog open={dialogType === 'payment'} onClose={handleCloseDialog} total={total} />
      )}
      {dialogType === 'counter' && (
        <CounterDialog open={dialogType === 'counter'} />
      )}
    </Box>
  );
};

export default PaymentPage;
