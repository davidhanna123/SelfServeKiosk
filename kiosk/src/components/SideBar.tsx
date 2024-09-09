import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 180;

// Styled container for the sidebar
const SidebarContainer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  top: '64px', // Start 64px from the top (after the NavBar)
  bottom: '64px', // End 64px from the bottom (before the BottomBar)
  position: 'fixed', // Fix the sidebar to the left
  left: 0, // Align to the left edge of the viewport
  backgroundColor: '#A9A9A9', // Set background color to grey
  overflowY: 'auto', // Allow scrolling if needed
  display: 'flex',
  flexDirection: 'column',
}));

interface SidebarProps {
  onCategorySelect: (categoryName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onCategorySelect }) => {
  const categories = [
    { name: 'Home' },
    { name: 'Beef' },
    { name: 'Chicken' },
    { name: 'Sides' },
    { name: 'Drinks' },
    { name: 'Dessert' },
    { name: 'Condiments' },
  ];

  return (
    <SidebarContainer>
      <List>
        {categories.map((category, index) => (
          <ListItem
            button
            key={index}
            sx={{
              width: '100%',
              height: '70px', // Fixed height for the boxes
              display: 'flex',
              alignItems: 'center', // Center content vertically
              justifyContent: 'center',
              marginBottom: '10px', // Space between boxes
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Smooth transition
              borderRadius: 1,
              border: '1px solid darkgrey', // Dark grey border
              '&:hover': {
                backgroundColor: 'linear-gradient(45deg, #FFEB3B, #FF9800)', // Gradient background on hover
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow effect
                transform: 'scale(1.02)', // Slightly enlarge the item
              },
            }}
            onClick={() => onCategorySelect(category.name)}
          >
            <Typography variant="body1" sx={{ flexGrow: 1, textAlign: 'center' }}>
              {category.name}
            </Typography>
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
