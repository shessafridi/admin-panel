import * as React from 'react';
import { Layout } from 'react-admin';
import Snackbar from '../common/Snackbar';
import AdminAppBar from './AdminAppBar';

const AdminLayout = (props: any) => (
  <Layout {...props} notification={Snackbar} appBar={AdminAppBar} />
);

export default AdminLayout;
