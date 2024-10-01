import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline"; 

const theme = createTheme({
  palette: {
    primary: {
      main: red[600], 
    },
    secondary: {
      main: yellow[400], 
    },
    background: {
      default: '#211f1f', 
      paper: '#ffffff', 
    },
  },
});

export default theme;
