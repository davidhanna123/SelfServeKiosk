import React from 'react';
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

interface CartPopoverProps {
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
  id?: string;
}

const CartPopover: React.FC<CartPopoverProps> = ({ anchorEl, open, onClose, id }) => {
  const { cartItems, removeItemFromCart } = useCart();

  // total price considering quantity
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // total calories considering quantity
  const calculateTotalCalories = () => {
    return cartItems.reduce((total, item) => total + item.calories * item.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();
  const totalCalories = calculateTotalCalories();

  const handleRemoveItem = (id: string, notes: string) => {
    removeItemFromCart(id, notes); // Remove item by id and notes
  };

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
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

            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button onClick={onClose} variant="contained" color="primary">
                Checkout
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Popover>
  );
};

export default CartPopover;
