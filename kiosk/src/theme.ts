import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline"; 

const theme = createTheme({
  palette: {
    primary: {
      light: '#FF8A80',       // Light red
      main: '#F44336',        // Bright red
      dark: '#388E3C',        // Dark green
      contrastText: '#FFF',   // White text for contrast
    },
    secondary: {
      light: '#FFF59D',      // Light yellow
      main: '#FFEB3B',       // Bright yellow
      dark: '#FBC02D',       // Dark yellow
      contrastText: '#000',   // Black text for contrast
    },
    
    background: {
      default: '#211f1f',  //main bg
      paper: '#ffffff', // secondary bg
      //'#ffffff' full white
      //tertiary: '#e0e0e0',
      
    },
  },
  typography: {
    button: {
      textTransform: 'none', // Prevents uppercase transformation
      fontSize: '1rem', // Example size
      fontWeight: 500, // Example weight
      // Add more typography styles as needed
    },
  },

});

export default theme;
