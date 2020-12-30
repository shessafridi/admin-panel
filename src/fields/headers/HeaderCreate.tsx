import * as React from 'react';
import {
  Create,
  FileInput,
  ImageField,
  SimpleForm,
  TextInput,
} from 'react-admin';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import DialogToolBar from '../../common/DialogToolbar';
import FaAutoComplete from '../../components/FaAutoComplete';
import { validateTitle } from '../../common/validators';
interface CreateHeaderProps {}

const CreateHeader: React.FC<CreateHeaderProps> = props => {
  return (
    <Create title='Add a new header' {...props}>
      <SimpleForm
        validate={validateTitle}
        toolbar={<DialogToolBar />}
        margin='normal'
        redirect='list'
      >
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth source='title' />
              <FaAutoComplete source='nav.icon' />
              <TextInput label='Button Label' fullWidth source='nav.text' />

              <TextInput rows={6} multiline={true} fullWidth source='text' />
            </RaGrid>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
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
    </Create>
  );
};

export default CreateHeader;
