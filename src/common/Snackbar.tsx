import React from 'react';
import { Notification } from 'react-admin';

const Snackbar = (props: any) => (
  <Notification {...props} autoHideDuration={2000} />
);

export default Snackbar;
