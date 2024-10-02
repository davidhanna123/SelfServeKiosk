import React, { useState } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import IcecreamIcon from '@mui/icons-material/Icecream';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

const drawerWidth = 180;

const SidebarContainer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  top: '64px',
  bottom: '64px',
  padding: '15px',
  position: 'fixed',
  left: 0,
  backgroundColor: '#000000',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
}));

interface Category {
  name: string;
  icon: React.ReactNode; 
}

interface SidebarProps {
  onCategorySelect: (categoryName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories: Category[] = [
    { name: 'Home', icon: <HomeIcon /> },
    { name: 'Beef', icon: <LunchDiningIcon /> },
    { name: 'Chicken', icon: <LocalDiningIcon /> },
    { name: 'Sides', icon: <FastfoodIcon /> },
    { name: 'Drinks', icon: <LocalBarIcon /> },
    { name: 'Dessert', icon: <IcecreamIcon /> },
    { name: 'Condiments', icon: <KitchenIcon /> },
  ];

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    onCategorySelect(categoryName);
  };

  return (
    <SidebarContainer>
      <List>
        {categories.map((category, index) => (
          <ListItem
            button
            key={index}
            aria-selected={selectedCategory === category.name}
            sx={{
              width: '100%',
              height: '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start', 
              marginBottom: '10px',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
              backgroundColor: selectedCategory === category.name ? '#FFD700' : '#000000',
              '&:hover': {
                background: selectedCategory === category.name ? '#FFD700' : '#333',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
                transform: 'scale(1.02)',
              },
            }}
            onClick={() => handleCategoryClick(category.name)}
          >
            
            <Box sx={{ marginRight: '10px', color: selectedCategory === category.name ? '#000' : '#fff' }}>
              {category.icon}
            </Box>
            <Typography
              variant="body1"
              sx={{
                flexGrow: 1,
                textAlign: 'left', 
                color: selectedCategory === category.name ? '#000' : '#fff',
              }}
            >
              {category.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
