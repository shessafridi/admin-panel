import { Button } from '@material-ui/core';
import * as React from 'react';
import MainContainer from '../common/MainContainer';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <MainContainer>
      <h3>Welcome to the Dashboard</h3>
      <p>Here you can customize the different parts of the website.</p>
      <a
        target='blank'
        style={{ textDecoration: 'none', margin: '30px 0', display: 'block' }}
        href='https://alhamdian.pk'
      >
        <Button color='primary' variant='outlined'>
          Go to site.
        </Button>
      </a>
    </MainContainer>
  );
};

export default Dashboard;
