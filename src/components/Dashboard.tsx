import * as React from 'react';
import PaddedContainer from '../common/PaddedContainer';

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <PaddedContainer padding='10px'>
      <h1>Welcome to the dashboard</h1>
    </PaddedContainer>
  );
};

export default Dashboard;
