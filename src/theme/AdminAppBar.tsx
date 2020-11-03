import { AppBar, Toolbar } from '@material-ui/core';
import * as React from 'react';

export interface AdminAppBarProps {}

const AdminAppBar: React.FC<AdminAppBarProps> = props => {
  return (
    <AppBar {...props}>
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default AdminAppBar;
