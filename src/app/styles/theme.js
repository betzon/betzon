// styles/theme.js
import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9121',
    },
    secondary: {
      main: '#19857b',
    },
    neutral: {
      main: '#FFFFFF',
    },
    dark: {
      main: '#141414',
      light: '#B7B7B7',
      otherlight: '#808080'
    }
  },
  buttonStyles: {
    iconButton: {
      borderRadius: '100px',
      padding: '1px 22px'
    }
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // Set the background color to black
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: '#454545', // Inactive color
          "&.Mui-selected": {
            color: '#FFFFFF', // Active color
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '8px 12px'
          // Remove the uppercase transformation
        },
        containedPrimary: {
          color: 'white',       // Set text color to white
          fontWeight: 'bold',   // Increase font weight
        },
        outlinedPrimary: {
          color: 'white',       // Set text color to white
          fontWeight: 'bold' // Increase font weight
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '100%',
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#808080",  // Set the border color when focused
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#808080",  // Set the border color on hover
          },
        },
        input: {
          width: '100%',
          backgroundColor: '#141414',
          paddingTop: "12px",    // Adjust this value as needed
          paddingBottom: "12px"
        },

      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          transform: 'translate(14px, 12px) scale(1)',  // Position the label properly when not focused
          "&.Mui-focused": {
            color: "#808080",  // Set the label color to white when input is focused
            transform: 'translate(14px, -6px) scale(0.75)',  // Transform for focused state
          },
          "&.MuiInputLabel-shrink": {
            transform: 'translate(14px, -6px) scale(0.75)',  // Keep the label in its "shrunk" position when the input has content
          },
        },
      },
    },
  },
  // ... add other theme customizations here
});

export default theme;
