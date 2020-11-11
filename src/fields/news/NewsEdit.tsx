import * as React from 'react';
import {
  DateInput,
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';
// import IterableImageField from '../../common/IterableImageField';

const EditNews: React.FC = (props: any) => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>Edit News</h2>
      </div>
      <Edit {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput disabled source='id' />
          <TextInput required={true} source='title' />
          <DateInput source='date' />
          <ImageField source='imageUrl' label='Image' />

          <FileInput
            accept='image/*'
            label='Image Upload'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput rows={6} required={true} multiline={true} source='text' />

          {/* <ArrayInput label='Gallery' source='images.imageUrl'>
            <SimpleFormIterator className='myCustomForm' disableAdd={true}>
              <IterableImageField />
            </SimpleFormIterator>
          </ArrayInput> */}
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditNews;
