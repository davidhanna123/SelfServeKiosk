import React from 'react';
import { Box, Button, Typography } from '@mui/material';
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
      <Button
        variant="contained"  
        color="secondary"    
        onClick={onDecrease}
        disabled={quantity <= 1}
        sx={{ borderRadius: 2, minWidth: '160px' }}  
      >
        <RemoveIcon />
      </Button>
      
      
      <Box 
        sx={{
          mx: 2                     
        }}
      >
        <Typography variant="body1">
          {quantity}
        </Typography>
      </Box>
      
      <Button
        variant="contained"  
        color="secondary"    
        onClick={onIncrease}
        disabled={quantity >= 99}
        sx={{ borderRadius: 2, minWidth: '160px' }}  
      >
        <AddIcon />
      </Button>
    </Box>
  );
};

export default QuantityBox;
