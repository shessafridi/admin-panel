import { IconButton } from '@material-ui/core';
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withRouter } from 'react-router-dom';

const BackButton = (props: any) => {
  return (
    <IconButton color='primary' onClick={props.history.goBack}>
      <ArrowBackIcon />
    </IconButton>
  );
};

export default withRouter(BackButton as any);
