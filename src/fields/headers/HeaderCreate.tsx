import { Button } from '@material-ui/core';
import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';
import BackButton from '../../common/BackButton';

export interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <>
      <div>
        <BackButton>
          <Button>Back</Button>
        </BackButton>
      </div>
      <Create title='Add a new header' {...props}>
        <SimpleForm redirect='list'>
          <TextInput required={true} source='title' />
          <TextInput required={true} multiline={true} source='text' />
        </SimpleForm>
      </Create>
    </>
  );
};

export default CreateHeader;
