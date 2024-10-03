
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ExtraOptionProps {
  name: string;
  extraPrice: number;
  extraCalories: number;
  isSelected: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

const ExtraOption: React.FC<ExtraOptionProps> = ({ name, extraPrice,extraCalories, isSelected, onAdd, onRemove }) => (
  <Box display="flex" alignItems="center">
    <Typography variant="body2" style={{ flexGrow: 1 }}>
      {name}
      {extraPrice > 0 && ` . +$${extraPrice.toFixed(2)}`}
      {extraCalories > 0 && ` . +${extraCalories} cal`}
    </Typography>
    {isSelected ? (
      <IconButton color="primary" onClick={onRemove}>
        <RemoveIcon />
      </IconButton>
    ) : (
      <IconButton color="primary" onClick={onAdd}>
        <AddIcon />
      </IconButton>
    )}
  </Box>
);

export default ExtraOption;