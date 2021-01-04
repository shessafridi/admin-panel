import { createMuiTheme } from '@material-ui/core';
import { amber, orange } from '@material-ui/core/colors';

export const drawerActive = {
  iconColor: orange[900],
  textColor: orange[900],
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Open Sans', 'Helvetica', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: orange[900],
    },
    secondary: {
      main: amber[600],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
      },
    },
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
        transform: 'scale(0.9)',
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
        fontSize: '12px',
        fontWeight: 'bold',
        paddingTop: '17px',
        paddingBottom: '17px',
      },
    },
    MuiAppBar: {
      colorSecondary: {
        boxShadow: '0px 3px 5px rgba(0,0,0,0.15)',
        backgroundColor: '#f7f7f7',
      },
    },
  },
});

export default theme;
