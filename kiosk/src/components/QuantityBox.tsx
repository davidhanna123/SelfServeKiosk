import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantityBoxProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityBox: React.FC<QuantityBoxProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={onDecrease} disabled={quantity <= 1}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body1" sx={{ mx: 2 }}>
        {quantity}
      </Typography>
      <IconButton onClick={onIncrease}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantityBox;
