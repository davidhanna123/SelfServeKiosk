
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';

import { useTheme } from '@mui/material/styles'; 
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
interface ExtraOptionProps {
  name: string;
  extraPrice: number;
  extraCalories: number;
  isSelected: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

const ExtraOption: React.FC<ExtraOptionProps> = ({ name, extraPrice, extraCalories, isSelected, onAdd, onRemove }) => {
  const theme = useTheme(); 

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2" style={{ flexGrow: 1 }}>
        {name}
        {extraPrice > 0 && ` . +$${extraPrice.toFixed(2)}`}
        {extraCalories > 0 && ` . +${extraCalories} cal`}
      </Typography>
      {isSelected ? (
        <IconButton sx={{ color: theme.palette.primary.light }} onClick={onRemove}>
          <RemoveCircleIcon sx={{ fontSize: '2rem' }}/>
        </IconButton>
      ) : (
        <IconButton sx={{ color: theme.palette.primary.dark }} onClick={onAdd}>
          <AddCircleIcon sx={{ fontSize: '2rem' }}/>
        </IconButton>
      )}
    </Box>
  );
};

export default ExtraOption;
