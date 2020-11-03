import { Button } from '@material-ui/core';
import * as React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';
import BackButton from '../../common/BackButton';

export interface EditHeaderProps {}

const EditHeader: React.FC<EditHeaderProps> = props => {
  console.log(props);
  return (
    <>
      <div>
        <BackButton>
          <Button>Back</Button>
        </BackButton>
      </div>
      {/* <SimpleForm redirect='list'>
        <TextInput disabled source='id' />
        <TextInput required={true} source='title' />
        <TextInput required={true} multiline={true} source='text' />
      </SimpleForm> */}
      <Edit {...props}>
        <SimpleForm redirect='list'>
          <TextInput disabled source='id' />
          <TextInput required={true} source='title' />
          <TextInput required={true} multiline={true} source='text' />
        </SimpleForm>
      </Edit>
    </>
  );
};

export default EditHeader;
