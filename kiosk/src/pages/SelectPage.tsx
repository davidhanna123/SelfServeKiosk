import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'; 
import LoginSignup from '../components/LoginSignup';

const SelectPage = () => {
  const navigate = useNavigate();
  const [DialogOpen, setDialogOpen] = useState(false);
  
  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const GuestOption = () => {
    navigate('/OrderPage');
  };

  return (
    <div>
      <LoginSignup
        isOpen={DialogOpen}
        closeFunction={handleDialogClose}
      />
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
          height: '100vh', 
        }}
      >
        <Box 
          sx={{
            display: 'flex', 
            justifyContent: 'center',
            gap: 2, 
          }}
        >
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleDialogOpen}
            sx={{ width: '50%', padding: '90px' }}
          >
            Login/Signup
          </Button>
          <Button 
            variant="contained" 
            color="secondary"
            onClick={GuestOption}
            sx={{ width: '50%', padding: '90px' }}
          >
            Continue as Guest
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default SelectPage;
