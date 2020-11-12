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

export interface CreateNewsProps {}

const CreateNews: React.FC<CreateNewsProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px' }}>Add a new News</h2>
      </div>
      <Create title='Add another News' {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput label='Title' source='title' />
          <DateInput
            label='Date'
            defaultValue={new Date().toLocaleDateString()}
            source='date'
          />
          <FileInput
            accept='image/*'
            label='Image Upload'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput
            rows={6}
            defaultValue={''}
            multiline={true}
            label='Text'
            source='text'
          />

          {/* <CustomUrlField path='images.imageUrl' /> */}
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateNews;
