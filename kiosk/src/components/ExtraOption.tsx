
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
//sx={{ color: theme.palette.primary.dark }}
//sx={{ color: theme.palette.primary.light }}
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body2" style={{ flexGrow: 1 }}>
        {name}
        {extraPrice > 0 && ` . +$${extraPrice.toFixed(2)}`}
        {extraCalories > 0 && ` . +${extraCalories} cal`}
      </Typography>
      {isSelected ? (
        <IconButton  onClick={onRemove}>
          <RemoveCircleIcon fontSize="large" sx={{ color: theme.palette.primary.light }}/>
        </IconButton>
      ) : (
        <IconButton  onClick={onAdd}>
          <AddCircleIcon fontSize="large" color ="success"/>
        </IconButton>
      )}
    </Box>
  );
};

export default ExtraOption;
