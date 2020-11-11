import * as React from 'react';
import {
  Create,
  DateInput,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
// import CustomUrlField from '../../common/CustomUrlField';
import PaddedContainer from '../../common/PaddedContainer';

export interface CreateBirthdayProps {}

const CreateBirthday: React.FC<CreateBirthdayProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px' }}>Add a new Birthday</h2>
      </div>
      <Create title='Add a new birthday' {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput label='Name' source='name' />
          <TextInput label='Regestration' source='reg' />
          <DateInput label='Date' source='date' />

          <FileInput
            accept='image/*'
            label='Image Upload'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
          {/* <CustomUrlField path='images.imageUrl' /> */}
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateBirthday;
