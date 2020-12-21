import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { Redirect } from 'react-router';
import SaveToolbar from '../../common/SaveToolbar';
import MainContainer from '../../common/MainContainer';

const EditAbout: React.FC = (props: any) => {
  if (props.id !== '1') return <Redirect to={`/${props.resource}/1`} />;

  return (
    <MainContainer>
      <h3>About</h3>
      <p>Customized the about section of the website.</p>

      <Edit component='div' onSuccess={() => null} undoable={false} {...props}>
        <SimpleForm toolbar={<SaveToolbar />} margin='normal' redirect={false}>
          <TextInput fullWidth={true} required={true} source='title' />
          <ImageField source='imageUrl' label='Image' />
          <FileInput
            accept='image/*'
            label='Image Upload'
            source='imageUploaders.imageUrl'
          >
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
    </MainContainer>
  );
};

export default EditAbout;
