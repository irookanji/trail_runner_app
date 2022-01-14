import { createTheme } from '@mui/material/styles';

export const colors = {
  darkGrey: '#333333',
  mediumGrey: '#5F5F5F',
  grey: '#757575',
  burntSienna: '#C84D3F',
  lightGrey: '#999999',
  lightBlue: '#ecf1f8',
  silver: '#CCCCCC',
  mercury: '#E5E5E5',
  wildSand: '#F0F0F0',
  alabaster: '#FAFAFA',
  white: '#FFFFFF',
  whiteOpaque: '#ffffff90',
  blackOpaque: '#0000000f',
  // axa colors
  axaBlue: '#00008F',
  axaRed: '#FF1721',
  axaBurntSienna: '#F07662',
  malachite: '#138636',
  shyTomato: '#C91432',
  oceanBlue: '#4976BA',
  oceanBlueDark: '#3a5e95',
  teal: '#027180',
  pacific: '#00ADC6',
  pacificOpaque: '#E5F7FA',
  viridianGreen: '#668980',
  greyjoy: '#9FBEAF',
  igloo: '#B5D0EE',
  cottonCandy: '#FAD6DE',
  aquaGreen: '#9FD9B4',
  acid: '#F0FF93',
  dune: '#FCD385',
  azalea: '#E196AA',
  logan: '#9190AC',
  apache: '#BC9D45',
  tosca: '#914146',
  azureBlue: '#3A43D0',
};

const theme = createTheme({
  palette: {
    background: {
      default: colors.wildSand,
    },
    primary: {
      main: colors.darkGrey,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    allVariants: {
      fontStyle: 'normal',
    },
    body2: {
      fontFamily: 'Roboto',
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontSize: 20,
    },
  },
  shape: {
    borderRadius: 3,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 540,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
