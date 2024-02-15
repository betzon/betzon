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
    success: {
      main: '#BCF9B2'
    },
    primary: {
      main: '#FF7700',
    },
    secondary: {
      main: '#000000',
    },
    neutral: {
      main: '#FFFFFF',
    },
    background: {
      default: '#000000', // Set background to black
      paper: '#141414', // Adjust this if you also want paper components to have a different background
    },
    dark: {
      dark: '#141414',
      // main: '#141414',
      main: '#000000',
      light: '#B7B7B7',
      otherlight: '#808080'
    }
  },
  buttonStyles: {
    iconButton: {
      borderRadius: '100px',
      padding: '4px 22px'
    }
  },
  components: {
    boardingBox: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      pt: '24px',
      pb: '24px',
      gap: '36px',
      boxSizing: 'border-box'
    },
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
    /*
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
            transform: 'translate(14px, -9px) scale(0.75)',  // Keep the label in its "shrunk" position when the input has content
          },
        },
      },
    },*/
  },
  // ... add other theme customizations here
});

export default theme;


/*

<Box sx={{
                    alignSelf: 'center',
                    //theme.palette.primary.main
                    width: '100%',
                    borderRadius: '16px',
                    position: 'relative',
                }}>


                    <Box sx={{
                        //theme.palette.primary.main
                        background: 'white',
                        width: '100%',
                        paddingTop: '100%',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative'
                    }}>
                        <Box sx={{
                            right: '-16px',
                            bottom: '-16px',
                            background: 'white',
                            width: '400px',
                            height: '500px',
                            position: 'absolute',
                            borderRadius: '72px 0 0 0',
                            border: '16px solid gray'
                        }}>
                            
                        </Box>
                    </Box>




                </Box>
                   
*/