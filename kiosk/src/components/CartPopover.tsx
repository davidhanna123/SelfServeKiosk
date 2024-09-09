import React from 'react';
import { Box, Popover, Typography } from '@mui/material';

interface CartPopoverProps {
  anchorEl: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
  id?: string;
}

const CartPopover: React.FC<CartPopoverProps> = ({ anchorEl, open, onClose, id }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      PaperProps={{
        sx: {
          width: '90vw', // Flexible width (90% of the viewport width)
          maxWidth: '1100px', // Maximum width
          height: '80vh', // Flexible height (50% of the viewport height)
          maxHeight: '550px', // Maximum height
        },
      }}
    >
      <Box sx={{ padding: '20px', height: '100%' }}>
        {/* Cart elements go here */}
        <Typography variant="h6" component="div">
          Cart
        </Typography>
        <Typography variant="body2" component="div">
          No items in your cart.
        </Typography>
      </Box>
    </Popover>
  );
};

export default CartPopover;
