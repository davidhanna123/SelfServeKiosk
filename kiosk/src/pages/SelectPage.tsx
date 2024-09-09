import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
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
    const [seen, setSeen] = useState(false)

    
    return (
        <div>
        <LoginSignup
          isOpen={DialogOpen}
          closeFunction={handleDialogClose}
        />
        <Button onClick={handleDialogOpen}>
          Login/Signup
        </Button>
        <Button onClick={GuestOption}>
          Continue as Guest
        </Button>
      </div>
    )
}
export default SelectPage;