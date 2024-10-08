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
  Button,
  Alert
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
    removeItemFromCart(id, notes); 
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (totalPrice > 0) {
      onClose();
      navigate('/PaymentPage'); 
    } else {
      setErrorMessage('Please add more items');
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
          
          marginTop: '-60px',
        },
      }}
    >
      <Box p={2}>
        <Typography variant="h6" >
          Your Cart:
        </Typography>

        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <>
            
            <Box sx={{ maxHeight: '300px', overflowY: 'auto' }}>
              <List>
                {cartItems.map((item, index) => (
                  <React.Fragment key={`${item.id}-${index}`}>
                    <ListItem>
                      <ListItemText
                        primary={`${item.name}${item.quantity > 1 ? ` (x${item.quantity})` : ''}`}  
                        secondary={
                          <>
                            <Typography component="span" variant="body2">
                              Price: ${(item.price * item.quantity).toFixed(2)}, Calories: {item.calories * item.quantity}
                            </Typography>
                            {item.notes && (
                              <Typography component="span" variant="body2" display="block">
                                {item.notes}
                              </Typography>
                            )}
                          </>
                        }
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
            </Box>

            <Box mt={2} sx={{ borderTop: '1px solid', borderColor: 'grey.300', pt: 2 }}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body1" color="text.secondary">
                  Total Price:
                </Typography>
                <Typography variant="body1" color="text.secondary" fontWeight="bold">
                  ${totalPrice.toFixed(2)}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body1" color="text.secondary">
                  Total Calories:
                </Typography>
                <Typography variant="body1" color="text.secondary" fontWeight="bold">
                  {totalCalories}
                </Typography>
              </Box>
            </Box>
            
            <Box mt={2} display="flex" justifyContent="flex-end">
              {errorMessage && (
                <Alert variant="filled" severity="error" sx={{ marginRight: 1 }}>
                  {errorMessage}
                </Alert>
              )}
              <Button onClick={handleCheckout} variant="contained" color="secondary">
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
