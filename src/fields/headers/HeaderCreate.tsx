import { Button } from '@material-ui/core';
import * as React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <>
      <div>
        <Button style={{ marginLeft: '16px' }}>Back</Button>
      </div>
      <Create title='Add a new header' {...props}>
        <SimpleForm>
          <TextInput required={true} source='title' />
          <TextInput required={true} multiline={true} source='text' />
        </SimpleForm>
      </Create>
    </>
  );
};

export default CreateHeader;
