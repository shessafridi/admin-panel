import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';

const EditHeader: React.FC = (props: any) => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h3 style={{ marginLeft: '18px' }}>Edit Header</h3>
      </div>
      <Edit {...props}>
        <SimpleForm redirect='list'>
          <TextInput disabled source='id' />
          <TextInput required={true} source='title' />
          <ImageField source='imageUrl' label='Image' />
          <FileInput multiple={true} accept='image/*' source='imageUpload'>
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput rows={6} required={true} multiline={true} source='text' />
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditHeader;