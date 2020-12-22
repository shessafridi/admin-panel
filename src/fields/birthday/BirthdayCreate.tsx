import * as React from 'react';
import {
  Create,
  DateInput,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/DialogToolbar';

interface CreateBirthdayProps {}

const CreateBirthday: React.FC<CreateBirthdayProps> = props => {
  return (
    <Create title='Add a new birthday' {...props}>
      <SimpleForm toolbar={<DialogToolBar />} margin='normal' redirect='list'>
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth label='Name' source='name' />
              <TextInput fullWidth label='Regestration' source='reg' />
              <DateInput
                fullWidth
                defaultValue={new Date().toLocaleDateString()}
                label='Date'
                source='date'
              />
            </RaGrid>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <FileInput
                accept='image/*'
                label='Image Upload'
                source='imageUploaders.imageUrl'
              >
                <ImageField source='src' title='title' />
              </FileInput>
            </RaGrid>
          </RaGrid>
        </GridShowLayout>
      </SimpleForm>
    </Create>
  );
};

export default CreateBirthday;
