import * as React from 'react';
import {
  Create,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import CustomUrlField from '../../common/CustomUrlField';
import PaddedContainer from '../../common/PaddedContainer';

export interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h2 style={{ marginLeft: '18px' }}>Add a new Header</h2>
      </div>
      <Create title='Add a new header' {...props}>
        <SimpleForm margin='normal' redirect='list'>
          <TextInput required={true} source='title' />
          <FileInput accept='image/*' source='imageUpload'>
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput rows={6} required={true} multiline={true} source='text' />
          {/* <CustomUrlField path='images.imageUrl' /> */}
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateHeader;
