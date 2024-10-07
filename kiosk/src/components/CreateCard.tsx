

import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import { MenuItem } from '../data/menuInterfaces'; 
import noImage from '../images/No_Image_Available.jpg';
interface CreateCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void; 
}




const CreateCard: React.FC<CreateCardProps> = ({ item, onClick }) => {
  return (
    <Card
    sx={{ borderRadius: 5 }} 
    >
      
      <CardActionArea onClick={() => onClick(item)}>
        
        <CardMedia
          component="img"
          height="180" 
          image={item.image || noImage} 
          alt={item.name} 
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {item.name}
          </Typography>

          {/* <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography> */}
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
