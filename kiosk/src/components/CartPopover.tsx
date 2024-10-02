import React, { useState } from 'react';
import {
  Box,
  Popover,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

interface CartPopoverProps {
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
  id?: string;
}

const CartPopover: React.FC<CartPopoverProps> = ({ anchorEl, open, onClose, id }) => {
  const { cartItems, removeItemFromCart, calculateTotalPrice, calculateTotalCalories } = useCart();

  const totalPrice = calculateTotalPrice();
  const totalCalories = calculateTotalCalories();
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleRemoveItem = (id: string, notes: string) => {
    removeItemFromCart(id, notes); // Remove item by id and notes
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (totalPrice > 0) {
      onClose();
      navigate('/PaymentPage'); 
    }
    else{
      setErrorMessage('Please add more items to cart');
    }
  };

  const handlePopoverClose = () => {
    setErrorMessage(''); 
    onClose(); 
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handlePopoverClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          width: '90vw',
          maxWidth: '400px',
          maxHeight: '500px',
          overflowY: 'auto',
        },
      }}
    >
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Your Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <>
            <List>
              {cartItems.map((item, index) => (
                <React.Fragment key={`${item.id}-${index}`}>
                  <ListItem>
                    <ListItemText
                      primary={`${item.name} (x${item.quantity})`}
                      secondary={`Notes: ${item.notes || 'None'}, Price: $${(item.price * item.quantity).toFixed(
                        2
                      )}, Calories: ${(item.calories * item.quantity)}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleRemoveItem(item.id, item.notes)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {index < cartItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>

            <Box mt={2}>
              <Typography variant="body2" gutterBottom>
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Total Calories: {totalCalories}
              </Typography>
            </Box>

            <Box mt={2} display="flex" justifyContent="flex-end" >
              <Button onClick={handleCheckout} variant="contained" color="secondary">
                Checkout
              </Button>
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-end" >
              {errorMessage && (
              <Typography color="error" variant="body2" sx={{ marginRight: '8px' }}>
              {errorMessage}
              </Typography>
              )}
            </Box>
          </>
        )}
      </Box>
    </Popover>
  );
};

export default CartPopover;
