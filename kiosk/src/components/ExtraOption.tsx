
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
    <Box display="flex" flexDirection="column">
      <Typography variant="body2">{name}</Typography>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="body2" color={theme.palette.text.secondary} sx={{ flexGrow: 1 }}>
          {extraPrice > 0 && `+$${extraPrice.toFixed(2)}`}
          {extraPrice > 0 && extraCalories > 0 && ', '}
          {extraCalories > 0 && `${extraCalories} cal`}
        </Typography>
        <IconButton onClick={isSelected ? onRemove : onAdd}>
          {isSelected ? (
            <RemoveCircleIcon fontSize="large" sx={{ color: theme.palette.primary.light }} />
          ) : (
            <AddCircleIcon fontSize="large" color="success" />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default ExtraOption;
