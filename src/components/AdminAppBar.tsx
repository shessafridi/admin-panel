import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { title } from '../config';

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
});

const AdminAppBar = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar {...props}>
      <Typography variant='h6' color='inherit' className={classes.title}>
        {title}
      </Typography>
      {!isSmall && <span className={classes.spacer} />}
    </AppBar>
  );
};

export default AdminAppBar;
