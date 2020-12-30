import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/Dialog/DialogToolbar';
import FaAutoComplete from '../../components/FaAutoComplete';

const EditHeader: React.FC = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm toolbar={<DialogToolBar />} margin='normal' redirect='list'>
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth source='title' />
              <FaAutoComplete source='nav.icon' />
              <TextInput label='Button Label' fullWidth source='nav.text' />
              <TextInput rows={4} multiline={true} fullWidth source='text' />
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
  );
};

export default EditHeader;
