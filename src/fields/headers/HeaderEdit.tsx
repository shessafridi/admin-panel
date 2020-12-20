import * as React from 'react';
import {
  Edit,
  FileInput,
  ImageField,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';
import { GridShowLayout, RaGrid } from 'ra-compact-ui';
import { icons } from '../../common/icons';

const EditHeader: React.FC = (props: any) => {
  return (
    <Edit {...props}>
      <SimpleForm
        toolbar={<Toolbar classes={{ spacer: 'noSpacer' }} width={'lg'} />}
        margin='normal'
        redirect='list'
      >
        <GridShowLayout className='gridShowLayout'>
          <RaGrid container direction='row'>
            <RaGrid style={{ padding: '0 10px' }} item sm={6}>
              <TextInput fullWidth={true} required={true} source='title' />
              <SelectInput
                label='Navigation Icon'
                translateChoice={false}
                fullWidth={true}
                source='nav.icon'
                choices={icons}
              />
              <TextInput
                label='Navigation Label'
                fullWidth={true}
                source='nav.text'
              />
              <TextInput
                rows={4}
                required={true}
                multiline={true}
                fullWidth={true}
                source='text'
              />
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
