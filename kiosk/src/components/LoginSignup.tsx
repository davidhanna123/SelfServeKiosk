import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; 
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

interface DialogPropsInterface {
    
    isOpen: boolean;
    closeFunction: () => void;
    
  }
  interface ErrorResponse {
    error: string; 
}

const API_BASE_URL = 'http://localhost:3001/auth'; // Replace with your API URL
function LoginSignup({isOpen, closeFunction,}: DialogPropsInterface) {

    const [username, setUsername] = useState<string>('');
   
    const [password, setPassword] = useState<string>('');
    const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();
    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };
    const handleSubmit = async (e: React.FormEvent) =>{
       
        //first check to make sure none are empty 
        e.preventDefault();
        console.log("Form submitted"); // Add this line
        let hasError = false;
        if (!username) {
            setUsernameErrorMessage('Username cannot be empty');
            setShowUsernameError(true);
            hasError =true;
          }
        if (!password) {
            setPasswordErrorMessage('Password cannot be empty');
            setShowPasswordError(true);
            hasError =true;
        }
        //if not empty then proceed 

        if (username && (username.length < 3 || username.length > 20)) {
            setUsernameErrorMessage('Username must be between 3 and 20 characters');
            setShowUsernameError(true);
            hasError = true;
        }
      
        if (password && (password.length < 3 || password.length > 20)) {
            setPasswordErrorMessage('Password must be between 3 and 20 characters');
            setShowPasswordError(true);
            hasError = true;
        }
      
        if (!hasError) {
            try {
                if (isLoginMode) {
                    // Handle Login
                    const response = await axios.post(`${API_BASE_URL}/login`, { username, password }, { withCredentials: true });
    
                    if (response.status === 200) {
                        console.log('Login successful');
                        login(username);
                        navigate('/OrderPage');
                        // Handle successful login (e.g., update state, navigate)
                    }
                } else {
                    // Handle Signup
                    const response = await axios.post(`${API_BASE_URL}/signup`, { username, password }, { withCredentials: true });
    
                    if (response.status === 201) {
                        console.log('Signup successful');
                        login(username);
                        navigate('/OrderPage');
                        // Handle successful signup (e.g., update state, navigate)
                    }
                }
            } catch (error) {
                const axiosError = error as AxiosError<ErrorResponse>; // Type assertion here
            if (axiosError.response) {
                // Handle specific error messages from the backend
                if (axiosError.response.status === 400) {
                    const errorMessage = axiosError.response.data.error || 'An error occurred';
                    if (isLoginMode) {
                        setPasswordErrorMessage(errorMessage);
                        setShowPasswordError(true);
                    } else {
                        setUsernameErrorMessage(errorMessage);
                        setShowUsernameError(true);
                    }
                } else {
                    console.error('Authentication failed:', axiosError.response.data.error);
                }
            } else {
                console.error('Authentication failed:', axiosError.message);
            }
            }
        }
        

    };
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        clearUsernameErrors();
      };
    
      const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value); 
        clearPasswordErrors();
      };

    const clearUsernameErrors = () => {
        setShowUsernameError(false);
        setUsernameErrorMessage('');
      };
    
      const clearPasswordErrors = () => {
        setShowPasswordError(false);
        setPasswordErrorMessage('');
      };
return(
    <Dialog
            open={isOpen}
            onClose={closeFunction}
        >
            <DialogTitle>{isLoginMode ? 'Login' : 'Signup'}<IconButton
                    edge="end"
                    color="inherit"
                    onClick={closeFunction}
                    aria-label="close"
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
                </DialogTitle>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <DialogContent>
                <DialogContentText>
                    {isLoginMode
                        ? 'Enter username and password to log in.'
                        : 'Set username and password to sign up.'}
                </DialogContentText>
                
                <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={username}
                        error={showUsernameError}
                        helperText={usernameErrorMessage}
                        onChange={handleUsernameChange}
                    />
                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="outlined"
                    value={password}
                    error={showPasswordError}
                    helperText={passwordErrorMessage}
                    onChange={handlePasswordChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleMode}>
                    {isLoginMode ? 'Signup' : 'Login'}
                </Button>
                <Button type="submit">Submit</Button>
               
            </DialogActions>
            </form>
        </Dialog>
)
}
export default LoginSignup;