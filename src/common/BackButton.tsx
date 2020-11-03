import React from 'react';
import { withRouter } from 'react-router';

const BackButton = (props: any) => {
  return <div onClick={props.history.goBack}>{props.children}</div>;
};

export default withRouter(BackButton as any);
