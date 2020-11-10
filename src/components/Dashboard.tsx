import { makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';
import PaddedContainer from '../common/PaddedContainer';

const useStyles = makeStyles({
  root: {
    marginTop: '15px',
    height: '100%',
  },
});

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <PaddedContainer padding='10px'>
        <h1>Welcome to the dashboard</h1>
      </PaddedContainer>
    </Paper>
  );
};

export default Dashboard;
