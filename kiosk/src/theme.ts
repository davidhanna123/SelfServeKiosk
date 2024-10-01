import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline"; // Import CssBaseline

const theme = createTheme({
  palette: {
    primary: {
      main: red[600], // Custom primary color
    },
    secondary: {
      main: yellow[400], // Custom secondary color
    },
    background: {
      default: '#211f1f', // Set your desired background color here
      paper: '#ffffff', // Optional: set the color for paper components
    },
  },
});

export default theme;
