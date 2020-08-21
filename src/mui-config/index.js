import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#4fb3bf',
      main: '#00838f',
      dark: '#005662',
      contrastText: '#fff',
    },
  },
});

