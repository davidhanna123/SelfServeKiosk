import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';

import { MenuItem, SubItem } from '../data/menuInterfaces';
import { subItems } from '../data/subItems';
import FlavorOption from './FlavorOption';
import ExtraOption from './ExtraOption';

interface ItemDialogProps {
  open: boolean;
  selectedItem: MenuItem | null;
  onClose: () => void;
}

const ItemDialog: React.FC<ItemDialogProps> = ({ open, selectedItem, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [selectedExtras, setSelectedExtras] = useState<Set<number>>(new Set());

  if (!selectedItem) return null;

  // Filter subItems based on whether they match the selected item's subcategory
  const matchingSubItems = subItems.filter((subItem: SubItem) =>
    subItem.itemSubcategories.includes(selectedItem.subcategory)
  );

  // Group subItems by type
  const groupedSubItems = matchingSubItems.reduce((acc: Record<string, SubItem[]>, subItem) => {
    if (!acc[subItem.type]) {
      acc[subItem.type] = [];
    }
    acc[subItem.type].push(subItem);
    return acc;
  }, {});

  // Calculate the total extra price
  const calculateExtraPrice = () => {
    return Array.from(selectedExtras).reduce((total, extraId) => {
      const extra = subItems.find((item) => item.id === extraId);
      return extra ? total + extra.extraPrice : total;
    }, 0);
  };

   // Calculate the total extra calories
   const calculateExtraCalories = () => {
    return Array.from(selectedExtras).reduce((total, extraId) => {
      const extra = subItems.find((item) => item.id === extraId);
      return extra ? total + (extra.extraCalories || 0) : total;
    }, 0);
  };

  // Handle option change for flavors
  const handleOptionChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      [id]: event.target.value,
    });
  };

  // Handle adding an extra
  const handleExtraClick = (id: number) => () => {
    setSelectedExtras((prevExtras) => {
      const newExtras = new Set(prevExtras);
      newExtras.add(id);
      return newExtras;
    });
  };

  // Handle removing an extra
  const handleRemoveExtra = (id: number) => () => {
    setSelectedExtras((prevExtras) => {
      const newExtras = new Set(prevExtras);
      newExtras.delete(id);
      return newExtras;
    });
  };

  // Display price with extras
  const totalPrice = selectedItem.price + calculateExtraPrice();
  const calories = selectedItem.calories+ calculateExtraCalories();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{selectedItem.name}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" gutterBottom>
          {selectedItem.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${totalPrice.toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calories: {calories}
        </Typography>

        {/* Display grouped subItems */}
        {Object.keys(groupedSubItems).map((type) => (
          <Box key={type} marginBottom="16px">
            <Typography variant="h6" gutterBottom>
              {type.charAt(0).toUpperCase() + type.slice(1)} Options:
            </Typography>
            {groupedSubItems[type].map((subItem) => (
              <Box key={subItem.id} marginBottom="8px">
                {subItem.type === 'flavor' ? (
                  <FlavorOption
                    name={subItem.name}
                    extraPrice={subItem.extraPrice}
                    extraCalories={subItem.extraCalories || 0}
                    options={subItem.options || []}
                    selectedValue={selectedOptions[subItem.id] || ''}
                    onChange={handleOptionChange(subItem.id)}
                  />
                ) : (
                  <ExtraOption
                    name={subItem.name}
                    extraPrice={subItem.extraPrice}
                    extraCalories={subItem.extraCalories || 0}
                    isSelected={selectedExtras.has(subItem.id)}
                    onAdd={handleExtraClick(subItem.id)}
                    onRemove={handleRemoveExtra(subItem.id)}
                  />
                )}
              </Box>
            ))}
          </Box>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={() => { /* Handle Add to Cart logic here */ }} color="primary" variant="contained">
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemDialog;
