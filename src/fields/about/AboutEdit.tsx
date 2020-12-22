import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import SaveToolbar from '../../common/SaveToolbar';
import MainContainer from '../../common/MainContainer';

const EditAbout: React.FC = (props: any) => {
  return (
    <MainContainer>
      <h3>About</h3>
      <p>Customized the about section of the website.</p>

      <Edit
        id={1}
        component='div'
        onSuccess={() => null}
        undoable={false}
        {...props}
      >
        <SimpleForm toolbar={<SaveToolbar />} margin='normal' redirect={false}>
          <TextInput fullWidth required={true} source='title' />
          <ImageField source='imageUrl' label='Image' />
          <FileInput
            accept='image/*'
            label='Image Upload'
            source='imageUploaders.imageUrl'
          >
            <ImageField source='src' title='title' />
          </FileInput>
          <TextInput
            fullWidth
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
