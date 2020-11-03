import { Button } from '@material-ui/core';
import * as React from 'react';
import BackButton from '../../common/BackButton';

export interface EditHeaderProps {}

const EditHeader: React.FC<EditHeaderProps> = () => {
  return (
    <>
      <BackButton>
        <Button>Back</Button>
      </BackButton>
      <h1>Edit Page</h1>
    </>
  );
};

export default EditHeader;
