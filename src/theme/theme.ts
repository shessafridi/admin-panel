import { createMuiTheme } from '@material-ui/core';
import { amber, deepPurple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[600],
    },
  },
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        color: 'white',
        backgroundColor: deepPurple[500],
      },
    },
  },
});
export default theme;
