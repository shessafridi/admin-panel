import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';
import PaddedContainer from '../../common/PaddedContainer';
import { Redirect } from 'react-router';

const AboutEditToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton disabled={props.saving && props.invalid} />
  </Toolbar>
);

const EditAbout: React.FC = (props: any) => {
  if (props.id !== '1') return <Redirect to={`/${props.resource}/1`} />;

  return (
    <PaddedContainer padding='10px'>
      <div>
        <h2 style={{ marginLeft: '18px', marginBottom: '30px' }}>About</h2>
      </div>
      <Edit {...props}>
        <SimpleForm
          toolbar={<AboutEditToolbar />}
          margin='normal'
          redirect={false}
        >
          <TextInput fullWidth={true} required={true} source='title' />
          <ImageField source='imageUrl' label='Image' />
          <FileInput accept='image/*' source='imageUploaders.imageUrl'>
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput
            fullWidth={true}
            rows={8}
            required={true}
            multiline={true}
            source='text'
          />
          {/* <CustomUrlField path='images.imageUrl' /> */}
        </SimpleForm>
      </Edit>
    </PaddedContainer>
  );
};

export default EditAbout;
