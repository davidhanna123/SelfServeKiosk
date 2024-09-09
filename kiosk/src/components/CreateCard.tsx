

import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { MenuItem } from '../data/menuInterfaces'; 

interface CreateCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void; // Add an onClick handler
}
//need to style later
const CreateCard: React.FC<CreateCardProps> = ({ item, onClick }) => {
  return (
    <Card>
      <CardActionArea onClick={() => onClick(item)}>
        
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            ${item.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.calories} calories
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CreateCard;
