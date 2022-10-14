import {createTheme, ThemeProvider} from '@mui/material/styles'
import{cyan, yellow} from 'material-ui-colors';

function Theme () {
 //set theme colors to cyan primary and secondary is yellow 400 each
 const theme = createTheme({
    palette: {
      primary: {
        main: cyan[400],
      },
      secondary: {
        main: yellow[400],
      },
    },
  }); 
    return (
        <ThemeProvider theme={theme}>
            
        </ThemeProvider>

    );
}
export default Theme;