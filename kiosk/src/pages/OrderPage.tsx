import React, { useState } from 'react';
import Sidebar from '../components/SideBar'; 
import NavBar from '../components/NavBar';
import BottomBar from '../components/BottomBar';
import OrderPageMain from '../components/OrderPageMain'; 

import { Box } from '@mui/material';



const OrderPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBar />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Sidebar onCategorySelect={handleCategorySelect} />
        <OrderPageMain selectedCategory={selectedCategory} />
      </Box>
      <BottomBar />
    </Box>
  );
};

export default OrderPage;


