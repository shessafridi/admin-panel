import { createMuiTheme } from '@material-ui/core';
import { amber, deepPurple } from '@material-ui/core/colors';

export const drawerActive = {
  iconColor: deepPurple.A700,
  textColor: deepPurple.A700,
};

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
    MuiToolbar: {
      dense: {
        minHeight: '55px',
      },
    },
    MuiListItemIcon: {
      root: {
        color: deepPurple[300],
      },
    },
    MuiMenuItem: {
      root: {
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 'bold',
        marginTop: '8px',
        paddingTop: '14px',
        paddingBottom: '14px',
      },
    },
    MuiAppBar: {
      colorSecondary: {
        color: 'white',
        backgroundColor: deepPurple[500],
      },
    },
  },
});

export default theme;
