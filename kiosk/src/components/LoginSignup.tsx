import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'; 
import { useState } from 'react';
import { handleLogin } from '../handlers/loginHandler';
import { handleSignup } from '../handlers/signupHandler';

interface DialogPropsInterface {
    
    isOpen: boolean;
    closeFunction: () => void;
    
  }
function LoginSignup({isOpen, closeFunction,}: DialogPropsInterface) {

    const [username, setUsername] = useState<string>('');
   
    const [password, setPassword] = useState<string>('');
    const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };
    const handleSubmit = async (e: React.FormEvent) =>{
       
        //first check to make sure none are empty 
        e.preventDefault();
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
        if (!hasError){
            //check if:
            // user and pass are between 3-20 chars

            if (isLoginMode){
                // check username and password match for a given username
                handleLogin(username, password);
            }
            //if its a signup
            else{
               //make sure username does not already exist
                handleSignup(username, password);
            }
            //add later if success then update app state for the user and move to next page
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