import { alpha, createTheme, darken, lighten, Theme, ThemeOptions } from '@mui/material/styles';

// Primary Brand Colors (Blue)
const BRAND_PRIMARY = {
  100: '#ECF4FC',
  200: '#D9E9F9',
  300: '#9ECBF1',
  400: '#0354A6',
  500: '#064280',
  600: '#042F5E',
  700: '#021B3C',
  800: '#010E1E',
  900: '#00070F'
};

// Secondary Brand Colors (Burgundy)
const BRAND_SECONDARY = {
  100: '#fecec6',
  200: '#f04b6f',
  300: '#f1b99c',
  400: '#a60435',
  500: '#800640',
  600: '#5e042f',
  700: '#3c021b',
  800: '#1e010e',
  900: '#0f0007'
};

// Semantic Colors
const SEMANTIC = {
  success: {
    300: '#79D7AC',
    500: '#D39855',
    700: '#B45130'
  },
  info: {
    300: '#84CAFF',
    500: '#1465B4',
    700: '#0C3D6C'
  },
  warning: {
    300: '#FFD481',
    500: '#DC5803',
    700: '#7E3004'
  },
  error: {
    300: '#FCASA5',
    500: '#BH251A',
    700: '#831A12'
  }
};

// Gray Scale
const GRAY = {
  100: '#F2F4F7',
  200: '#E4E7EC',
  300: '#D0D5DD',
  400: '#98A2B3',
  500: '#667085',
  600: '#344054',
  700: '#101828',
  800: '#0A0F17',
  900: '#040608'
};

// Available fonts for email builder
export const EMAIL_FONTS = {
  MODERN_SANS: 'Modern sans',
  BOOK_SANS: 'Book sans',
  ORGANIC_SANS: 'Organic sans',
  GEOMETRIC_SANS: 'Geometric sans',
  HEAVY_SANS: 'Heavy sans',
  ROUNDED_SANS: 'Rounded sans',
  MODERN_SERIF: 'Modern serif',
  BOOK_SERIF: 'Book serif',
  MONOSPACE: 'Monospace',
  ROBOTO: 'Roboto',
  POPPINS: 'Poppins'
};

const fontStack = [
  'Roboto',
  'Poppins',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Arial',
  'sans-serif',
].join(',');

const BASE_THEME: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: BRAND_PRIMARY[400],
      light: BRAND_PRIMARY[300],
      dark: BRAND_PRIMARY[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: BRAND_SECONDARY[400],
      light: BRAND_SECONDARY[300],
      dark: BRAND_SECONDARY[500],
      contrastText: '#FFFFFF',
    },
    success: {
      main: SEMANTIC.success[500],
      light: SEMANTIC.success[300],
      dark: SEMANTIC.success[700],
      contrastText: '#FFFFFF',
    },
    info: {
      main: SEMANTIC.info[500],
      light: SEMANTIC.info[300],
      dark: SEMANTIC.info[700],
      contrastText: '#FFFFFF',
    },
    warning: {
      main: SEMANTIC.warning[500],
      light: SEMANTIC.warning[300],
      dark: SEMANTIC.warning[700],
      contrastText: '#FFFFFF',
    },
    error: {
      main: SEMANTIC.error[500],
      light: SEMANTIC.error[300],
      dark: SEMANTIC.error[700],
      contrastText: '#FFFFFF',
    },
    grey: GRAY,
    text: {
      primary: GRAY[700],
      secondary: GRAY[500],
      disabled: GRAY[400],
    },
    background: {
      default: GRAY[100],
      paper: '#FFFFFF',
    },
    divider: GRAY[200],
  },
  typography: {
    fontFamily: fontStack,
  },
};

const THEME = createTheme(BASE_THEME, {
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Poppins:wght@400;500;700&display=swap');
        
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Poppins'), local('Poppins-Regular'), url(https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          backgroundColor: BRAND_PRIMARY[400],
          '&:hover': {
            backgroundColor: BRAND_PRIMARY[500],
          },
        },
        containedSecondary: {
          backgroundColor: BRAND_SECONDARY[400],
          '&:hover': {
            backgroundColor: BRAND_SECONDARY[500],
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default THEME;
