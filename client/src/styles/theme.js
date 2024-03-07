import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import red from '@mui/material/colors/red';
import yellow from '@mui/material/colors/yellow';
import green from '@mui/material/colors/green';
import lightBlue from '@mui/material/colors/lightBlue';
import grey from '@mui/material/colors/grey';

const theme = (mode) =>
  createTheme({
    palette: {
      mode: 'light',
      // primary: {
      //   main: '#90caf9',
      // },
      // secondary: {
      //   main: '#ce93d8',
      // },
      // background: {
      //   default: '#121212',
      //   paper: '#121212',
      // },
      // error: {
      //   light: red[400],
      //   main: red[500],
      //   dark: red[300],
      //   contrastText: grey[800],
      // },
      // success: {
      //   main: green[500],
      // },
      // warning: {
      //   main: yellow[500],
      //   contrastText: grey[800],
      // },
      // info: {
      //   main: lightBlue[500],
      // },
      // text: {
      //   primary: '#fff',
      //   secondary: 'rgba(255, 255, 255, 0.7)',
      //   disabled: 'rgba(255, 255, 255, 0.5)',
      // },
      // common: {
      //   black: grey[900],
      //   white: grey[200],
      // },
      // tonalOffset: 0.2,
    },
  });

export default theme;
