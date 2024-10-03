import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  CardMedia
} from '@mui/material';
import { MenuItem, SubItem } from '../data/menuInterfaces';
import { subItems } from '../data/subItems';
import FlavorOption from './FlavorOption';
import ExtraOption from './ExtraOption';
import { useCart } from '../context/CartContext';
import noImage from '../images/No_Image_Available.jpg';


interface ItemDialogProps {
  open: boolean;
  selectedItem: MenuItem | null;
  onClose: () => void;
}

const ItemDialog: React.FC<ItemDialogProps> = ({ open, selectedItem, onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [selectedExtras, setSelectedExtras] = useState<Set<number>>(new Set());
  const { addItemToCart } = useCart();

  
  useEffect(() => {
    if (open) {
      setSelectedOptions({});
      setSelectedExtras(new Set());
    }
  }, [open]);

  
  if (!selectedItem) return null;

  const matchingSubItems = subItems.filter((subItem: SubItem) =>
    subItem.itemSubcategories.includes(selectedItem.subcategory)
  );

  const groupedSubItems = matchingSubItems.reduce((acc: Record<string, SubItem[]>, subItem) => {
    if (!acc[subItem.type]) {
      acc[subItem.type] = [];
    }
    acc[subItem.type].push(subItem);
    return acc;
  }, {});

  const calculateExtraPrice = () => {
    return Array.from(selectedExtras).reduce((total, extraId) => {
      const extra = subItems.find((item) => item.id === extraId);
      return extra ? total + extra.extraPrice : total;
    }, 0);
  };

  const calculateExtraCalories = () => {
    return Array.from(selectedExtras).reduce((total, extraId) => {
      const extra = subItems.find((item) => item.id === extraId);
      return extra ? total + (extra.extraCalories || 0) : total;
    }, 0);
  };

  const handleOptionChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptions({
      ...selectedOptions,
      [id]: event.target.value,
    });
  };

  const handleExtraClick = (id: number) => () => {
    setSelectedExtras((prevExtras) => {
      const newExtras = new Set(prevExtras);
      newExtras.add(id);
      return newExtras;
    });
  };

  const handleRemoveExtra = (id: number) => () => {
    setSelectedExtras((prevExtras) => {
      const newExtras = new Set(prevExtras);
      newExtras.delete(id);
      return newExtras;
    });
  };

  const totalPrice = selectedItem.price + calculateExtraPrice();
  const calories = selectedItem.calories + calculateExtraCalories();

  const handleAddToCart = () => {
    const notes = Object.entries(selectedOptions)
      .map(([id, value]) => {
        const subItem = subItems.find(item => item.id === Number(id));
        return subItem ? `${subItem.name}: ${value}` : '';
      })
      .concat(Array.from(selectedExtras).map(extraId => {
        const extra = subItems.find(item => item.id === extraId);
        return extra ? extra.name : '';
      }))
      .filter(note => note)
      .join(', ');

    addItemToCart({
      id: selectedItem.id.toString(),
      name: selectedItem.name,
      price: totalPrice,
      calories,
      notes,
      quantity: 1,
    });

    
    handleClose();
  };

  
  const flavorOptionsFilled = Object.keys(groupedSubItems).every((type) => {
    if (type === 'flavor') {
      return groupedSubItems[type].every((subItem) => selectedOptions[subItem.id]);
    }
    return true;
  });

  
  const handleClose = () => {
    setSelectedOptions({});
    setSelectedExtras(new Set());
    onClose(); 
  };
  
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" sx={{ borderRadius: 10 }}>
      <CardMedia
        component="img"
        height="200"
        image={selectedItem.image || noImage} 
        alt={selectedItem.name}
        sx={{  
          objectFit: 'contain',  
          width: '100%' 
        }} 
      />
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
        <Button onClick={handleClose} sx={{ color: "#000000" }}>
          Close
        </Button>
        <Button
          onClick={handleAddToCart}
          color="secondary"
          variant="contained"
          disabled={!flavorOptionsFilled} // all flavor options must be selected
        >
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemDialog;
