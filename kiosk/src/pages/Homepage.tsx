import { useNavigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import backgroundImage from '../images/background.jpg'; 

const Homepage = () => {
    const navigate = useNavigate();

    const goToPage2 = () => {
        navigate('/SelectPage');
    };

    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '100vh', 
                width: '100vw',
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
            }}
        >
            <Box sx={{ height: '25%' }} />

            <Box sx={{ height: '25%', display: 'flex', alignItems: 'center' }}>
                <Typography variant='h2' align='center' color='white'>
                    ORDER
                    <br />
                    HERE
                </Typography>
            </Box>

            <Box sx={{ height: '40%' }} />

            <Box sx={{ height: '20%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={goToPage2}
                    sx={{ width: '100%', height: '100%' }} 
                >
                    Click to Start
                </Button>
            </Box>
        </Box>
    );
};

export default Homepage;
