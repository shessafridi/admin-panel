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
    MuiTable: {
      root: {
        backgroundColor: 'white',
      },
    },
    MuiTypography: {
      body2: {
        fontSize: '15px',
      },
    },
    MuiListItemIcon: {
      root: {
        color: deepPurple[300],
        marginRight: '8px',
      },
    },
    MuiDrawer: {
      root: {
        backgroundColor: 'white',
      },
      paper: {
        marginTop: '10px',
      },
    },
    MuiMenuItem: {
      root: {
        textTransform: 'uppercase',
        fontSize: '13px',
        fontWeight: 'bold',
        paddingTop: '17px',
        paddingBottom: '17px',
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
