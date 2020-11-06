import * as React from 'react';
import {
  Create,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import BackButton from '../../common/BackButton';
import PaddedContainer from '../../common/PaddedContainer';

export interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <PaddedContainer padding='10px'>
      <div>
        <BackButton />
        <h3 style={{ marginLeft: '18px' }}>Add a new Header</h3>
      </div>
      <Create title='Add a new header' {...props}>
        <SimpleForm redirect='list'>
          <TextInput required={true} source='title' />
          <FileInput multiple={true} accept='image/*' source='imageUrl'>
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput rows={6} required={true} multiline={true} source='text' />
          {/* <TextInput disabled source='imageUrl' /> */}
        </SimpleForm>
      </Create>
    </PaddedContainer>
  );
};

export default CreateHeader;
