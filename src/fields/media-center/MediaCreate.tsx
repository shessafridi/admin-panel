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

export interface CreateMediaProps {}

const CreateMedia: React.FC<CreateMediaProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>
          Create a new event
        </h2>
      </div>
      <Create {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput label='Title' fullWidth={true} source='title' />
          <DateInput
            label='Date'
            defaultValue={new Date().toLocaleDateString()}
            source='date'
          />
          <FileInput
            accept='image/*'
            label='Upload Cover Image'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
          <FileInput
            accept='image/*'
            multiple={true}
            label='Upload Event Images'
            source='imageUploaders.gallery'
          >
            <ImageField source='src' title='title' />
          </FileInput>
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateMedia;
