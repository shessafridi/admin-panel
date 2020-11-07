import * as React from 'react';
import { Redirect } from 'react-router';

const SingleResource: React.FC<any> = ({ resource }) => {
  return <Redirect to={`${resource}/1`} />;
};

export default SingleResource;
