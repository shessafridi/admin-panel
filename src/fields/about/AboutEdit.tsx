import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
  useRefresh,
} from 'react-admin';
import SaveToolbar from '../../common/SaveToolbar';
import MainContainer from '../../common/MainContainer';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';

const EditAbout: React.FC = (props: any) => {
  const refresh = useRefresh();

  return (
    <MainContainer>
      <h3 className='listview-title'>About</h3>
      <p>Customized the about section of the website.</p>

      <Edit
        id={1}
        component='div'
        onSuccess={() => refresh()}
        undoable={false}
        {...props}
      >
        <SimpleForm
          toolbar={<SaveToolbar />}
          margin='normal'
          submitOnEnter={false}
          redirect={false}
        >
          <GridShowLayout className='gridShowLayout'>
            <RaGrid container direction='row'>
              <RaGrid style={{ padding: '0 10px' }} item sm={6}>
                <TextInput fullWidth source='title' />
                <TextInput fullWidth source='text' rows={8} multiline />
              </RaGrid>
              <RaGrid style={{ padding: '0 10px' }} item sm={6}>
                <ImageField source='imageUrl' label='Image' />
                <FileInput
                  accept='image/*'
                  label='Image Upload'
                  source='imageUploaders.imageUrl'
                >
                  <ImageField source='src' title='title' />
                </FileInput>
              </RaGrid>
            </RaGrid>
          </GridShowLayout>
        </SimpleForm>
      </Edit>
    </MainContainer>
  );
};

export default EditAbout;
