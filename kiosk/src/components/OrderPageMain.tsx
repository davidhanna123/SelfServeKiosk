import React from 'react';
import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import CreateCard from './CreateCard';
import ItemDialog from './ItemDialog';
import { MenuItem, SubItem } from '../data/menuInterfaces';
import {beef} from '../data/beef';
import {chicken} from '../data/chicken';
import {dessert} from '../data/dessert';
import {drinks} from '../data/drinks';
import {sides} from '../data/sides';
import { condiments } from '../data/condiments';



interface OrderPageMainProps {
  selectedCategory: string | null;
}

// Define a styled container for OrderPageMain
const OrderPageMainContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  //backgroundColor: 'lightgrey',
  width: 'calc(100vw - 180px)',
  top: '64px', // NavBar height
  bottom: '64px', // BottomBar height
  position: 'fixed', // Fix the sidebar to the left
  left: 180, // Align to the left edge of the viewport
  overflow: 'auto', // Allow scrolling if needed
  display: 'flex',
  flexDirection: 'row',
}));

const OrderPageMain: React.FC<OrderPageMainProps> = ({ selectedCategory }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getItems = () => {
    switch (selectedCategory) {
      case 'Beef':
        return beef;
      case 'Chicken':
        return chicken;
      case 'Dessert':
        return dessert;
      case 'Drinks':
        return drinks;
      case 'Sides':
        return sides;
      case 'Condiments':
        return condiments;
      default:
        return [];
    }
  };

  const items = getItems();

  const handleCardClick = (item: MenuItem) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };


  return (
    <OrderPageMainContainer>
      {/* Main content */}
      {selectedCategory && (
        <Box sx={{ flexGrow: 1, padding: '16px' }}>
          
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <CreateCard item={item} onClick={handleCardClick} />
              </Grid>
            ))}
          </Grid>
          
          <ItemDialog
            open={dialogOpen}
            selectedItem={selectedItem}
            onClose={handleCloseDialog}
          />
        </Box>
      )}
    </OrderPageMainContainer>
  );
};

export default OrderPageMain;
